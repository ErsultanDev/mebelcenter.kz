'use strict';

var _match = function (pattern, text, offset, options) {
  var insertions = 0;
  var matchIndexes = [];
  var iPattern = 0;
  for (var iText = offset; iText < text.length; iText++) {
    if (text[iText] === pattern[iPattern]) {
      matchIndexes.push(iText);
      if (++iPattern === pattern.length) {
        return {
          insertions: insertions,
          matchIndexes: matchIndexes,
        };
      }
    } else if (matchIndexes.length) {
      insertions++;
      if (options.maxInsertions > -1 && insertions > options.maxInsertions) {
        return null;
      }
    }
  }
  return null;
};
var _find = function (pattern, text, options) {
  var match = false;
  var insertions = null;
  var matchIndexes = null;
  var iPattern = 0;
  if (options.caseSensitive === false) {
    pattern = pattern.toLowerCase();
    text = text.toLowerCase();
  }
  for (var iText = 0; iText < text.length; iText++) {
    if (text[iText] === pattern[iPattern]) {
      var res = _match(pattern, text, iText, options);
      if (res && (match === false || res.insertions <= insertions)) {
        if (match === false || res.insertions < insertions) {
          match = true;
          insertions = res.insertions;
          matchIndexes = res.matchIndexes;
        } else {
          matchIndexes = matchIndexes.concat(res.matchIndexes);
        }
      }
    }
  }
  if (match) {
    return {
      value: pattern,
      insertions: insertions,
      matchIndexes: matchIndexes,
    };
  }
  return null;
};

var _score = function (entryResults) {
  var patternsMinInsertions = {};
  var patternsMinMatchIndex = {};
  entryResults.forEach(function (fieldResults) {
    fieldResults.patterns.forEach(function (pattern) {
      if (
        patternsMinInsertions[pattern.value] === undefined ||
        pattern.insertions < patternsMinInsertions[pattern.value]
      ) {
        patternsMinInsertions[pattern.value] = pattern.insertions;
        patternsMinMatchIndex[pattern.value] = pattern.matchIndexes;
      }
    });
  });
  var minInsertions = 0;
  var minMatchIndex = [];
  for (var pattern in patternsMinInsertions) {
    if (patternsMinInsertions.hasOwnProperty(pattern)) {
      minInsertions += patternsMinInsertions[pattern];
      minMatchIndex = minMatchIndex.concat(patternsMinMatchIndex[pattern]);
    }
  }
  return minInsertions + minMatchIndex.sort()[0] / 1000;
};

var _getFieldString = function (entry, field) {
  var path = field;
  var current = entry;
  for (var i = 0; i < path.length; i++) {
    if (current[path[i]] === undefined) {
      return null;
    } else {
      current = current[path[i]];
    }
  }
  if (typeof current !== 'string') {
    return null;
  }
  return current;
};

var _forEachObject = function (object, fn) {
  var _locals = [];

  (function _private(object) {
    for (var key in object) {
      _locals.push(key);
      if (typeof object[key] === 'object') {
        _private(object[key]);
      } else {
        fn([].concat(_locals));
      }
      _locals.pop();
    }
  })(object);
};

var _search = function (entries, patterns, fields, options) {
  var results = [];
  entries.forEach(function (entry) {
    var match = false;
    var entryMatch = [];
    var entryResults = [];
    _forEachObject(fields, function (field) {
      var fieldString = _getFieldString(entry, field);
      if (fieldString === null) {
        return;
      }
      var fieldMatch = [];
      var fieldResults = {
        field: field.join('.'),
        patterns: []
      };
      patterns.forEach(function (pattern) {
        var res = _find(pattern, fieldString, options);
        if (res) {
          fieldResults.patterns.push(res);
          fieldMatch.push(pattern);
          if (entryMatch.indexOf(pattern) === -1) {
            entryMatch.push(pattern);
          }
        }
      });
      if (fieldMatch.length === patterns.length) {
        entryResults.push(fieldResults);
        match = true;
      } else if (options.fieldMatching === false && fieldResults.patterns.length > 0) {
        entryResults.push(fieldResults);
      }
    });
    if (
      (options.fieldMatching === true && match === true) ||
      (options.fieldMatching === false && entryMatch.length === patterns.length)
    ) {
      results.push({
        entry: entry,
        info: entryResults,
        score: _score(entryResults),
      });
    }
  });
  return results;
};

var _buildOptions = function (options) {
  var defaultOptions = {
    caseSensitive: false,
    fieldMatching: false,
    maxInsertions: -1,
  };
  if (options === undefined) {
    return defaultOptions;
  }
  for (var option in defaultOptions) {
    if (options[option] !== undefined) {
      defaultOptions[option] = options[option];
    }
  }
  return defaultOptions;
};

var sanitizeArray = function (array, caseSensitive) {
  if (array === undefined || array.length === undefined || array.length === 0) {
    return [];
  }
  var values = {};
  var newArray = [];
  array.forEach(function (elem) {
    if (typeof elem !== 'string') {
      return;
    }
    var element = !caseSensitive ? elem.toLowerCase() : elem;
    if (element && element in values === false) {
      values[element] = true;
      newArray.push(element);
    }
  });
  return newArray;
};

function smartSearch(entries, patterns, fields, options) {
  options = _buildOptions(options);
  patterns = sanitizeArray([].concat(patterns), options.caseSensitive);
  fields =
    typeof fields === 'string' ? {
      [fields]: true,
    } :
    fields;
  if (entries.length === 0 || patterns.length === 0) {
    return;
  }
  var results = _search(entries, patterns, fields, options);
  results.sort(function (a, b) {
    return a.score - b.score;
  });
  return results;
}

function didYouMean(str, list, key) {
  if (!str) return null;

  // If we're running a case-insensitive search, smallify str.
  if (!didYouMean.caseSensitive) {
    str = str.toLowerCase();
  }

  // Calculate the initial value (the threshold) if present.
  var thresholdRelative = didYouMean.threshold === null ? null : didYouMean.threshold * str.length,
    thresholdAbsolute = didYouMean.thresholdAbsolute,
    winningVal;
  if (thresholdRelative !== null && thresholdAbsolute !== null)
    winningVal = Math.min(thresholdRelative, thresholdAbsolute);
  else if (thresholdRelative !== null) winningVal = thresholdRelative;
  else if (thresholdAbsolute !== null) winningVal = thresholdAbsolute;
  else winningVal = null;

  // Get the edit distance to each option. If the closest one is less than 40% (by default) of str's length,
  // then return it.
  var winner,
    candidate,
    testCandidate,
    val,
    i,
    len = list.length;
  for (i = 0; i < len; i++) {
    // Get item.
    candidate = list[i];
    // If there's a key, get the candidate value out of the object.
    if (key) {
      candidate = candidate[key];
    }
    // Gatekeep.
    if (!candidate) {
      continue;
    }
    // If we're running a case-insensitive search, smallify the candidate.
    if (!didYouMean.caseSensitive) {
      testCandidate = candidate.toLowerCase();
    } else {
      testCandidate = candidate;
    }
    // Get and compare edit distance.
    val = getEditDistance(str, testCandidate, winningVal);
    // If this value is smaller than our current winning value, OR if we have no winning val yet (i.e. the
    // threshold option is set to null, meaning the caller wants a match back no matter how bad it is), then
    // this is our new winner.
    if (winningVal === null || val < winningVal) {
      winningVal = val;
      // Set the winner to either the value or its object, depending on the returnWinningObject option.
      if (key && didYouMean.returnWinningObject) winner = list[i];
      else winner = candidate;
      // If we're returning the first match, return it now.
      if (didYouMean.returnFirstMatch) return winner;
    }
  }

  // If we have a winner, return it.
  return winner || didYouMean.nullResultValue;
}

// Set default options.
didYouMean.threshold = 0.4;
didYouMean.thresholdAbsolute = 20;
didYouMean.caseSensitive = false;
didYouMean.nullResultValue = null;
didYouMean.returnWinningObject = null;
didYouMean.returnFirstMatch = false;

// Expose.
// In node...
if (typeof module !== 'undefined' && module.exports) {
  module.exports = didYouMean;
}
// Otherwise...
else {
  window.didYouMean = didYouMean;
}

var MAX_INT = Math.pow(2, 32) - 1; // We could probably go higher than this, but for practical reasons let's not.
function getEditDistance(a, b, max) {
  // Handle null or undefined max.
  max = max || max === 0 ? max : MAX_INT;

  var lena = a.length;
  var lenb = b.length;

  // Fast path - no A or B.
  if (lena === 0) return Math.min(max + 1, lenb);
  if (lenb === 0) return Math.min(max + 1, lena);

  // Fast path - length diff larger than max.
  if (Math.abs(lena - lenb) > max) return max + 1;

  // Slow path.
  var matrix = [],
    i,
    j,
    colMin,
    minJ,
    maxJ;

  // Set up the first row ([0, 1, 2, 3, etc]).
  for (i = 0; i <= lenb; i++) {
    matrix[i] = [i];
  }

  // Set up the first column (same).
  for (j = 0; j <= lena; j++) {
    matrix[0][j] = j;
  }

  // Loop over the rest of the columns.
  for (i = 1; i <= lenb; i++) {
    colMin = MAX_INT;
    minJ = 1;
    if (i > max) minJ = i - max;
    maxJ = lenb + 1;
    if (maxJ > max + i) maxJ = max + i;
    // Loop over the rest of the rows.
    for (j = 1; j <= lena; j++) {
      // If j is out of bounds, just put a large value in the slot.
      if (j < minJ || j > maxJ) {
        matrix[i][j] = max + 1;
      }

      // Otherwise do the normal Levenshtein thing.
      else {
        // If the characters are the same, there's no change in edit distance.
        if (b.charAt(i - 1) === a.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        }
        // Otherwise, see if we're substituting, inserting or deleting.
        else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // Substitute
            Math.min(
              matrix[i][j - 1] + 1, // Insert
              matrix[i - 1][j] + 1,
            ),
          ); // Delete
        }
      }

      // Either way, update colMin.
      if (matrix[i][j] < colMin) colMin = matrix[i][j];
    }

    // If this column's minimum is greater than the allowed maximum, there's no point
    // in going on with life.
    if (colMin > max) return max + 1;
  }
  // If we made it this far without running into the max, then return the final matrix value.
  return matrix[lenb][lena];
}

// if (typeof exports !== 'undefined') {
//     if (typeof module !== 'undefined' && module.exports) {
//         exports = module.exports = smartSearch;
//     }
//     exports.smartSearch = smartSearch;
// } else if (angular) {
//     angular
//         .module('ngSmartSearch', [])
//         .filter('smartSearch', function() {
//             return smartSearch;
//         });
// } else {
//     window.smartSearch = smartSearch;
// }

const data444 = [{
    link: 'djaz-gos.html',
    img: 'images/thumbs/gostinye/dja.jpeg',
    title: '???????????????? ????????',
    price: 44840,
  },
  {
    link: 'elizabet.html',
    img: 'images/thumbs/gostinye/eliz.jpg',
    title: '???????????????? ????????????????',
    price: 48960,
  },
  {
    link: 'palermo.html',
    img: 'images/thumbs/gostinye/pal.jpeg',
    title: '???????????????? ??????????????',
    price: 42950,
  },
  {
    link: 'sonata.html',
    img: 'images/thumbs/gostinye/son.jpg',
    title: '???????????????? ????????????',
    price: 44850,
  },
  {
    link: 'granada.html',
    img: 'images/thumbs/gostinye/gra.jpg',
    title: '???????????????? ??????????????',
    price: 38450,
  },
  {
    link: 'lozanna.html',
    img: 'images/thumbs/gostinye/loz.jpg',
    title: '???????????????? ??????????????',
    price: 38560,
  },
  {
    link: 'karlino.html',
    img: 'images/thumbs/gostinye/kar.jpg',
    title: '???????????????? ??????????????',
    price: 41960,
  },
  {
    link: 'fortuna.html',
    img: 'images/thumbs/gostinye/for.jpeg',
    title: '???????????????? ??????????????',
    price: 33560,
  },
  {
    link: 'bodego.html',
    img: 'images/thumbs/gostinye/bod.jpg',
    title: '???????????????? ????????????',
    price: 42640,
  },
  {
    link: 'savanna.html',
    img: 'images/thumbs/gostinye/sav.jpeg',
    title: '???????????????? ??????????????',
    code: 109,
    price: 124000,
  },
  {
    link: 'elika.html',
    img: 'images/thumbs/gostinye/elik.jpg',
    title: '???????????????? ??????????',
    code: 23,
    price: 124000,
  },
  {
    link: 'valencia.html',
    img: 'images/thumbs/gostinye/val.jpg',
    title: '???????????????? ????????????????',
    code: 23,
    price: 124000,
  },
  {
    link: 'veskona.html',
    img: 'images/thumbs/gostinye/ves.jpg',
    title: '???????????????? ??????????????',
    price: 124000,
  },
  {
    link: 'elza.html',
    img: 'images/thumbs/gostinye/elza.jpg',
    title: '???????????????? ??????????',
    price: 124000,
  },
  {
    link: 'grace.html',
    img: 'images/thumbs/gostinye/grace.jpg',
    title: '???????????????? ??????????',
    price: 124000,
  },
  {
    link: 'arena-shkaf.html',
    img: 'images/thumbs/shkafy/are.jpg',
    title: '???????? ??????????',
    price: 77120,
  },
  {
    link: 'elika-shkaf.html',
    img: 'images/thumbs/shkafy/eli.jpg',
    title: '???????? ??? ???????? ??????????',
    price: 79860,
  },
  {
    link: 'gvarneri-shkaf.html',
    img: 'images/thumbs/shkafy/gva.jpg',
    title: '???????? ??? ???????? ????????????????',
    price: 77860,
  },
  {
    link: 'norton-shkaf.html',
    img: 'images/thumbs/shkafy/nor.jpg',
    title: '???????? ????????????',
    price: 76850,
  },
  {
    link: 'ringo-shkaf.html',
    img: 'images/thumbs/shkafy/rin.jpg',
    title: '???????? ??? ???????? ??????????',
    price: 78560,
  },
  {
    link: 'smart-shkaf.html',
    img: 'images/thumbs/shkafy/sma.png',
    title: '???????? ??????????',
    price: 78120,
  },
  {
    link: 'snejana-shkaf.html',
    img: 'images/thumbs/shkafy/sne.jpg',
    title: '???????? ??????????????',
    price: 74230,
  },
  {
    link: 'toronto-shkaf.html',
    img: 'images/thumbs/shkafy/tor.jpg',
    title: '???????? ??????????????',
    price: 72680,
  },
  {
    link: 'varis-shkaf.html',
    img: 'images/thumbs/shkafy/var.jpg',
    title: '???????? ??????????',
    price: 78230,
  },
  {
    link: 'ampir.html',
    img: 'images/thumbs/garderob/amp.jpg',
    title: '?????????????????????? ??????????',
    price: 107630,
  },
  {
    link: 'torino.html',
    img: 'images/thumbs/garderob/tor.JPG',
    title: '?????????????????????? ????????????',
    price: 96850,
  },
  {
    link: 'premium-gar.html',
    img: 'images/thumbs/garderob/pre.jpg',
    title: '?????????????????????? ??????????????',
    price: 94560,
  },
  {
    link: 'roskosh.html',
    img: 'images/thumbs/garderob/ros.jpg',
    title: '?????????????????????? ??????????????',
    price: 108520,
  },
  {
    link: 'armadio.html',
    img: 'images/thumbs/garderob/arm.jpg',
    title: '?????????????????????? ??????????????',
    price: 109560,
  },
  {
    link: 'vitra.html',
    img: 'images/thumbs/garderob/vit.jpg',
    title: '?????????????????????? ??????????',
    price: 100120,
  },
  {
    link: 'karapuz.html',
    img: 'images/thumbs/butik/odejda/chi.jpg',
    title: '???????????? ?????? ??????c???????? ????????????????',
    price: 53260,
  },
  {
    link: 'massiv-mag.html',
    img: 'images/thumbs/butik/odejda/mas.jpg',
    title: '???????????? ?????? ???????????????? ????????????',
    price: 52630,
  },
  {
    link: 'kontur.html',
    img: 'images/thumbs/butik/odejda/mag.jpg',
    title: '???????????? ?????? ???????????????? ????????????',
    price: 54820,
  },
  {
    link: 'modern-mag.html',
    img: 'images/thumbs/butik/odejda/mod.jpg',
    title: '???????????? ?????? ???????????????? ????????????',
    price: 51940,
  },
  {
    link: 'venge-mag.html',
    img: 'images/thumbs/butik/odejda/ven.jpg',
    title: '???????????? ?????? ???????????????? ??????????',
    price: 51890,
  },
  {
    link: 'deko-mag.html',
    img: 'images/thumbs/butik/odejda/dek.jpg',
    title: '???????????? ?????? ???????????????? ????????',
    price: 54750,
  },
  {
    link: 'akva-acc.html',
    img: 'images/thumbs/butik/accessories/akv.jpg',
    title: '?????? ???????????????? ???????????????????? ????????',
    price: 63960,
  },
  {
    link: 'deko-acc.html',
    img: 'images/thumbs/butik/accessories/dek.JPG',
    title: '?????? ???????????????? ?????????????????????? ????????',
    price: 65930,
  },
  {
    link: 'kamelia-acc.html',
    img: 'images/thumbs/butik/accessories/kam.jpg',
    title: '?????? ???????????????? ?????????????????? ??????????????',
    price: 64820,
  },
  {
    link: 'massiv-acc.html',
    img: 'images/thumbs/butik/accessories/mas.JPG',
    title: '?????? ???????????????? ???????????????? ????????????',
    price: 69780,
  },
  {
    link: 'modern-acc.html',
    img: 'images/thumbs/butik/accessories/mod.jpg',
    title: '?????? ???????????????? ?????????????????? ????????????',
    price: 62950,
  },
  {
    link: 'siluet-acc.html',
    img: 'images/thumbs/butik/accessories/sil.jpg',
    title: '?????? ???????????????? ?????????????????? ????????????',
    price: 68560,
  },
  {
    link: 'akva-jeweler.html',
    img: 'images/thumbs/butik/jeweler/akv.jpg',
    title: '????????',
    price: 92320,
  },
  {
    link: 'briz-jeweler.html',
    img: 'images/thumbs/butik/jeweler/bri.jpg',
    title: '????????',
    price: 95230,
  },
  {
    link: 'classic-jeweler.html',
    img: 'images/thumbs/butik/jeweler/cla.jpg',
    title: '??????????????',
    price: 98620,
  },
  {
    link: 'deko-jeweler.html',
    img: 'images/thumbs/butik/jeweler/dek.jpg',
    title: '????????',
    price: 99850,
  },
  {
    link: 'modern-jeweler.html',
    img: 'images/thumbs/butik/jeweler/mod.jpg',
    title: '????????????',
    price: 94850,
  },
  {
    link: 'premium-jeweler.html',
    img: 'images/thumbs/butik/jeweler/pre.jpg',
    title: '??????????????',
    price: 99560,
  },
  {
    link: 'lux-mag.html',
    img: 'images/thumbs/butik/odejda/lux.jpg',
    title: '???????????? ?????? ???????????????? ????????',
    price: 54230,
  },
  {
    link: 'premium-mag.html',
    img: 'images/thumbs/butik/odejda/pre.jpg',
    title: '???????????? ?????? ???????????????? ??????????????',
    price: 53120,
  },
  {
    link: 'roskosh-mag.html',
    img: 'images/thumbs/butik/odejda/ros.jpg',
    title: '???????????? ?????? ???????????????? ??????????????',
    price: 52360,
  },
  {
    link: 'brictol-barnye.html',
    img: 'images/thumbs/barnye/bri.jpg',
    title: '???????????? ???????????? ????????????????',
    price: 88520,
  },
  {
    link: 'econom-barnye.html',
    img: 'images/thumbs/barnye/eco.jpg',
    title: '???????????? ???????????? ????????????',
    price: 97650,
  },
  {
    link: 'etnika-barnye.html',
    img: 'images/thumbs/barnye/etn.jpg',
    title: '???????????? ???????????? ????????????',
    price: 89620,
  },
  {
    link: 'imperial-barnye.html',
    img: 'images/thumbs/barnye/imp.jpg',
    title: '???????????? ???????????? ????????????????',
    price: 98630,
  },
  {
    link: 'megapolis-barnye.html',
    img: 'images/thumbs/barnye/meg.jpg',
    title: '???????????? ???????????? ??????????????????',
    price: 85740,
  },
  {
    link: 'milan-barnye.html',
    img: 'images/thumbs/barnye/mil.jpg',
    title: '???????????? ???????????? ??????????',
    price: 81890,
  },
  {
    link: 'riga-barnye.html',
    img: 'images/thumbs/barnye/rig.jpg',
    title: '???????????? ???????????? ????????',
    price: 94320,
  },
  {
    link: 'rivera-barnye.html',
    img: 'images/thumbs/barnye/riv.jpg',
    title: '???????????? ???????????? ??????????????',
    price: 92120,
  },
  {
    link: 'versal-barnye.html',
    img: 'images/thumbs/barnye/ver.jpg',
    title: '???????????? ???????????? ??????????????',
    price: 78530,
  },
  {
    link: 'agami-reception.html',
    img: 'images/thumbs/reception/aga.jpg',
    title: '?????????????? ??????????',
    price: 63590,
  },
  {
    link: 'econom-reception.html',
    title: '?????????????? ????????????',
    img: 'images/thumbs/reception/eco.jpg',
    price: 62960,
  },
  {
    link: 'brictol-reception.html',
    title: '?????????????? ????????????????',
    img: 'images/thumbs/reception/bri.jpg',
    price: 63850,
  },
  {
    link: 'premium-reception.html',
    title: '?????????????? ??????????????',
    img: 'images/thumbs/reception/pre.jpg',
    price: 69870,
  },
  {
    link: 'rivera-reception.html',
    title: '?????????????? ??????????????',
    img: 'images/thumbs/reception/riv.jpg',
    price: 68560,
  },
  {
    link: 'ultra-reception.html',
    title: '?????????????? ????????????',
    img: 'images/thumbs/reception/ult.jpg',
    price: 65480,
  },
];

let filename = window.location.href.split('/').pop().split('#')[0].split('?')[0];

data444.forEach((item) => {
  if (filename === item.link) {
    try {
      if (col_8Span != null) {
        col_8Span.innerHTML = `?????? ????????????: ${item.code}`;
      }
    } catch (e) {}
  }
});

let list = [];
data444.forEach(function (a) {
  let list2 = a.title.split(' ');
  list2.forEach(function (b) {
    list.push(b);
  });
});

document.querySelector('.search-btn').addEventListener('click', function (e) {
  let reversed = false;

  let info = document.querySelector('#txtSearch').value;

  var patterns = info.split(' ');
  console.log(patterns);

  var fields = {
    title: true,
    code: true
  };
  let searchedWord = document.querySelector('#txtSearch').value;
  if (localStorage.getItem('searched-word') === null) {
    localStorage.setItem('searched-word', JSON.stringify(searchedWord));
  } else {
    localStorage.removeItem('searched-word');
    localStorage.setItem('searched-word', JSON.stringify(searchedWord));
  }

  startSearch();

  function startSearch() {
    var results = smartSearch(data444, patterns, fields);
    // console.log(patterns);
    // console.log(results);
    // results.forEach(function(result) {
    //     console.log(result.entry);

    let sorted = [];
    results.filter(function (a) {
      if (a.score < 2) {
        sorted.push(a.entry);
        return a.entry;
      }
    });

    document.querySelector('#txtSearch').value = ``;
    if (localStorage.getItem('searched-cards') === null) {
      localStorage.setItem('searched-cards', JSON.stringify(sorted));
    } else {
      localStorage.removeItem('searched-cards');
      localStorage.setItem('searched-cards', JSON.stringify(sorted));
    }

    var filename = window.location.href.split('/').pop().split('#')[0].split('?')[0];
    if (sorted.length > 0) {
      window.location.href = 'search.html';
    } else {
      if (reversed == false) {
        patterns.reverse();
        reversed = true;
        if (didYouMean(patterns[patterns.length - 1], list) != null) {
          patterns = didYouMean(patterns[patterns.length - 1], list);
          // startSearch()

          startSearch();
        } else {
          let patternsLastEl = patterns.length - 1;
          let newLastElement = patterns[patternsLastEl].slice(
            0,
            patterns[patternsLastEl].length - 1,
          );
          patterns.pop();
          if (newLastElement.length != 0) {
            patterns.push(newLastElement);
          }

          // console.log(newLastElement);
          // patterns[patterns.length-1.slice(0, patterns[patterns.length].length - 1)]

          // errorMsg()
          // if (patterns[patternsLastEl].length != 0) {
          startSearch();
          // } else {
          // errorMsg()
          // }
        }
      } else {
        patterns.reverse();
        reversed = false;
        if (didYouMean(patterns[patterns.length - 1], list) != null) {
          patterns = didYouMean(patterns[patterns.length - 1], list);
          // startSearch()

          startSearch();
        } else {
          let patternsLastEl = patterns.length - 1;
          let newLastElement = patterns[patternsLastEl].slice(
            0,
            patterns[patternsLastEl].length - 1,
          );
          patterns.pop();
          if (newLastElement.length != 0) {
            patterns.push(newLastElement);
          }

          // console.log(newLastElement);
          // patterns[patterns.length-1.slice(0, patterns[patterns.length].length - 1)]

          // errorMsg()
          // if (patterns[patternsLastEl].length != 0) {
          startSearch();
          // } else {
          // errorMsg()
          // }
        }
      }
    }
  }
});
document.querySelector('#txtSearch').addEventListener('keypress', function (e) {
  let reversed = false;
  if (e.key === 'Enter') {
    let info = document.querySelector('#txtSearch').value;

    var patterns = info.split(' ');
    console.log(patterns);

    var fields = {
      title: true,
      code: true
    };
    let searchedWord = document.querySelector('#txtSearch').value;
    if (localStorage.getItem('searched-word') === null) {
      localStorage.setItem('searched-word', JSON.stringify(searchedWord));
    } else {
      localStorage.removeItem('searched-word');
      localStorage.setItem('searched-word', JSON.stringify(searchedWord));
    }

    startSearch();

    function startSearch() {
      var results = smartSearch(data444, patterns, fields);
      // console.log(patterns);
      // console.log(results);
      // results.forEach(function(result) {
      //     console.log(result.entry);

      let sorted = [];
      results.filter(function (a) {
        if (a.score < 2) {
          sorted.push(a.entry);
          return a.entry;
        }
      });

      // console.log(searchArray);

      document.querySelector('#txtSearch').value = ``;

      if (localStorage.getItem('searched-cards') === null) {
        localStorage.setItem('searched-cards', JSON.stringify(sorted));
      } else {
        localStorage.removeItem('searched-cards');
        localStorage.setItem('searched-cards', JSON.stringify(sorted));
      }

      var filename = window.location.href.split('/').pop().split('#')[0].split('?')[0];
      if (sorted.length > 0) {
        window.location.href = 'search.html';
      } else {
        if (reversed == false) {
          patterns.reverse();
          reversed = true;
          if (didYouMean(patterns[patterns.length - 1], list) != null) {
            patterns = didYouMean(patterns[patterns.length - 1], list);
            // startSearch()

            startSearch();
          } else {
            let patternsLastEl = patterns.length - 1;
            let newLastElement = patterns[patternsLastEl].slice(
              0,
              patterns[patternsLastEl].length - 1,
            );
            patterns.pop();
            if (newLastElement.length != 0) {
              patterns.push(newLastElement);
            }

            // console.log(newLastElement);
            // patterns[patterns.length-1.slice(0, patterns[patterns.length].length - 1)]

            // errorMsg()
            // if (patterns[patternsLastEl].length != 0) {
            startSearch();
            // } else {
            // errorMsg()
            // }
          }
        } else {
          patterns.reverse();
          reversed = false;
          if (didYouMean(patterns[patterns.length - 1], list) != null) {
            patterns = didYouMean(patterns[patterns.length - 1], list);
            // startSearch()

            startSearch();
          } else {
            let patternsLastEl = patterns.length - 1;
            let newLastElement = patterns[patternsLastEl].slice(
              0,
              patterns[patternsLastEl].length - 1,
            );
            patterns.pop();
            if (newLastElement.length != 0) {
              patterns.push(newLastElement);
            }

            // console.log(newLastElement);
            // patterns[patterns.length-1.slice(0, patterns[patterns.length].length - 1)]

            // errorMsg()
            // if (patterns[patternsLastEl].length != 0) {
            startSearch();
            // } else {
            // errorMsg()
            // }
          }
        }
      }
    }
  }
});
document.querySelector('.search-btn2').addEventListener('click', function (e) {
  let reversed = false;

  let info = document.querySelector('#txtSearch2').value;

  var patterns = info.split(' ');
  console.log(patterns);

  var fields = {
    title: true,
    code: true
  };
  let searchedWord = document.querySelector('#txtSearch2').value;
  if (localStorage.getItem('searched-word') === null) {
    localStorage.setItem('searched-word', JSON.stringify(searchedWord));
  } else {
    localStorage.removeItem('searched-word');
    localStorage.setItem('searched-word', JSON.stringify(searchedWord));
  }

  startSearch();

  function startSearch() {
    var results = smartSearch(data444, patterns, fields);
    // console.log(patterns);
    // console.log(results);
    // results.forEach(function(result) {
    //     console.log(result.entry);

    let sorted = [];
    results.filter(function (a) {
      if (a.score < 2) {
        sorted.push(a.entry);
        return a.entry;
      }
    });

    document.querySelector('#txtSearch2').value = ``;
    if (localStorage.getItem('searched-cards') === null) {
      localStorage.setItem('searched-cards', JSON.stringify(sorted));
    } else {
      localStorage.removeItem('searched-cards');
      localStorage.setItem('searched-cards', JSON.stringify(sorted));
    }

    var filename = window.location.href.split('/').pop().split('#')[0].split('?')[0];
    if (sorted.length > 0) {
      window.location.href = 'search.html';
    } else {
      if (reversed == false) {
        patterns.reverse();
        reversed = true;
        if (didYouMean(patterns[patterns.length - 1], list) != null) {
          patterns = didYouMean(patterns[patterns.length - 1], list);
          // startSearch()

          startSearch();
        } else {
          let patternsLastEl = patterns.length - 1;
          let newLastElement = patterns[patternsLastEl].slice(
            0,
            patterns[patternsLastEl].length - 1,
          );
          patterns.pop();
          if (newLastElement.length != 0) {
            patterns.push(newLastElement);
          }

          // console.log(newLastElement);
          // patterns[patterns.length-1.slice(0, patterns[patterns.length].length - 1)]

          // errorMsg()
          // if (patterns[patternsLastEl].length != 0) {
          startSearch();
          // } else {
          // errorMsg()
          // }
        }
      } else {
        patterns.reverse();
        reversed = false;
        if (didYouMean(patterns[patterns.length - 1], list) != null) {
          patterns = didYouMean(patterns[patterns.length - 1], list);
          // startSearch()

          startSearch();
        } else {
          let patternsLastEl = patterns.length - 1;
          let newLastElement = patterns[patternsLastEl].slice(
            0,
            patterns[patternsLastEl].length - 1,
          );
          patterns.pop();
          if (newLastElement.length != 0) {
            patterns.push(newLastElement);
          }

          // console.log(newLastElement);
          // patterns[patterns.length-1.slice(0, patterns[patterns.length].length - 1)]

          // errorMsg()
          // if (patterns[patternsLastEl].length != 0) {
          startSearch();
          // } else {
          // errorMsg()
          // }
        }
      }
    }
  }
});
document.querySelector('#txtSearch2').addEventListener('keypress', function (e) {
  let reversed = false;
  if (e.key === 'Enter') {
    let info = document.querySelector('#txtSearch2').value;
    var patterns = info.split(' ');
    console.log(patterns);
    var fields = {
      title: true,
      code: true
    };
    let searchedWord = document.querySelector('#txtSearch2').value;
    if (localStorage.getItem('searched-word') === null) {
      localStorage.setItem('searched-word', JSON.stringify(searchedWord));
    } else {
      localStorage.removeItem('searched-word');
      localStorage.setItem('searched-word', JSON.stringify(searchedWord));
    }

    startSearch();

    function startSearch() {
      var results = smartSearch(data444, patterns, fields);
      // console.log(patterns);
      // console.log(results);
      // results.forEach(function(result) {
      //     console.log(result.entry);

      let sorted = [];
      results.filter(function (a) {
        if (a.score < 2) {
          sorted.push(a.entry);
          return a.entry;
        }
      });

      // console.log(searchArray);

      document.querySelector('#txtSearch').value = ``;

      if (localStorage.getItem('searched-cards') === null) {
        localStorage.setItem('searched-cards', JSON.stringify(sorted));
      } else {
        localStorage.removeItem('searched-cards');
        localStorage.setItem('searched-cards', JSON.stringify(sorted));
      }

      var filename = window.location.href.split('/').pop().split('#')[0].split('?')[0];
      if (sorted.length > 0) {
        window.location.href = 'search.html';
      } else {
        if (reversed == false) {
          patterns.reverse();
          reversed = true;
          if (didYouMean(patterns[patterns.length - 1], list) != null) {
            patterns = didYouMean(patterns[patterns.length - 1], list);
            // startSearch()

            startSearch();
          } else {
            let patternsLastEl = patterns.length - 1;
            let newLastElement = patterns[patternsLastEl].slice(
              0,
              patterns[patternsLastEl].length - 1,
            );
            patterns.pop();
            if (newLastElement.length != 0) {
              patterns.push(newLastElement);
            }

            // console.log(newLastElement);
            // patterns[patterns.length-1.slice(0, patterns[patterns.length].length - 1)]

            // errorMsg()
            // if (patterns[patternsLastEl].length != 0) {
            startSearch();
            // } else {
            // errorMsg()
            // }
          }
        } else {
          patterns.reverse();
          reversed = false;
          if (didYouMean(patterns[patterns.length - 1], list) != null) {
            patterns = didYouMean(patterns[patterns.length - 1], list);
            // startSearch()

            startSearch();
          } else {
            let patternsLastEl = patterns.length - 1;
            let newLastElement = patterns[patternsLastEl].slice(
              0,
              patterns[patternsLastEl].length - 1,
            );
            patterns.pop();
            if (newLastElement.length != 0) {
              patterns.push(newLastElement);
            }
            // console.log(newLastElement);
            // patterns[patterns.length-1.slice(0, patterns[patterns.length].length - 1)]

            // errorMsg()
            // if (patterns[patternsLastEl].length != 0) {
            startSearch();
            // } else {
            // errorMsg()
            // }
          }
        }
      }
    }
  }
});

function errorMsg() {
  iziToast.warning({
    title: '',
    message: '???? ???????????? ?????????????? ?????????????????? ???? ??????????????',
  });
}
// $("priceSort").on("click", function() {
//     $(this).parent(".selectBox").toggleClass("open");
// });
// $(document).mouseup(function(e) {
//     var container = $(".selectBox");

//     if (container.has(e.target).length === 0) {
//         container.removeClass("open");
//     }
// });
// $("select").on("change", function() {
//     var selection = $(this).find("option:selected").text(),
//         labelFor = $(this).attr("id"),
//         label = $("[for='" + labelFor + "']");

//     label.find(".label-desc").html(selection);
// });
if (carouselSlider !== null) {
  $('#carouselSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    dots:true,
    responsive: [{
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          variableWidth: false,
          // arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          variableWidth: false,
          // arrows: false,
        },
      },
    ],
  });
}
const maincatalog = document.querySelector('.maincatalog');
if (carouselSlider2 !== null) {
  $('#carouselSlider2').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    responsive: [{
        breakpoint: 820,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          variableWidth: false,
          // arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          variableWidth: false,
          // arrows: false,
        },
      },
    ],
  });
}
data444.forEach(function (e) {
  if (
    e.link == window.location.href.split("/").pop().split("#")[0].split("?")[0]
  ) {
    // localStorage.setItem('viewedURL', JSON.stringify(array_URL));

    // Get the existing data
    let existing = localStorage.getItem("viewedURL");

    // If no existing data, create an array
    // Otherwise, convert the localStorage string to an array
    existing = existing ? existing.split(",") : [];

    existing.push(e.link);

    // Save back to localStorage
    localStorage.setItem("viewedURL", existing.toString());

    display_Viewed_Items(existing);
  }
});

function display_Viewed_Items(array) {
  // let span9_VI = document.querySelectorAll(".span9")[1];
  let main_VI = document.createElement("div");
  let main_V2 = document.createElement("div");
  // main_V2.classList.add('slider_similar');
  main_VI.innerHTML = `
  <div class="slider_similar_title">
    <h3>?????????????????????????? ????????????</h3>
  </div>
  `;
  let flexiselDemo5_VI = document.createElement("div");

  flexiselDemo5_VI.setAttribute("id", "carouselSlider2");
  main_V2.classList.add('slider_similar_history');

  array.map((a) => {
    data444.forEach(function (e) {
      if (e.link == a) {
        flexiselDemo5_VI.innerHTML += `
        <div class="recomendation_item">
        <a href="${e.link}" >
      <div class="recomendation_item_img">
        <img src="${e.img}" alt="${e.title}"></div>
      <div class="recomendation_item_desc">
            <p>${e.title}</p>
        </div>
         </a>
     </div>
      `;
      }
    });
  });

  main_VI.appendChild(flexiselDemo5_VI);
  main_V2.appendChild(main_VI);
  bg_bot_1.appendChild(main_V2);
}

$('#carouselSlider2').slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  arrows: true,
  centerMode: false,
  variableWidth: false,
  dots:true,
  responsive: [{
      breakpoint: 820,
      settings: {
        slidesToShow: 3,
        centerMode: false,
        variableWidth: false,
        // arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        variableWidth: false,
        // arrows: false,
      },
    },
  ],
});