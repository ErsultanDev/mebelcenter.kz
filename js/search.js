const searchedItems = document.getElementById('searched-items');

function displayList(array) {
  array.map((a) => {
    var formatter = function (priceSum) {
      let mn = 0;
      let price = priceSum.toString();
      for (let ij = price.length; ij > 0; ij--) {
        if (mn % 3 == 0) {
          price = [price.slice(0, ij), ' ', price.slice(ij)].join('');
        }
        mn++;
      }
      return price;
    };
    let locationOrder = window.location.href;
    let item = document.createElement('div');
    item.classList.add('search_item');

    //         item.innerHTML = `
    //         <div class="thumbnail">
    //             <a href="${a.link}">
    //                 <img src="${a.img}" >
    //                 <div class="caption">
    //                     <h5>${a.title}</h2>
    //                 </div>
    //                 <div class="search-price-container"><span class="search-price">от ${formatter(a.price)} тг</span></div>
    //             </a>
    //         </div>
    // `;
    item.innerHTML = `
  <a href=${a.link}>
  <div class="search_img">
  <img src=${a.img} alt="">
</div>
<div class=" search_content">
  <div class="search_title">
      <h4>${a.title}</h4>
  </div>
  <div class="search_desc">
      <p>${a.desc}</p>
  </div>
  <div class="search_price_wrapper">
      <div class="search_price">
          <span>${formatter(a.price)} ₸</span>
      </div>
  </div>
  </a>
  <div class="search_bottom">
  <div id="zayavka">
 
  </div>
   </div>
</div>

        `;
    searchedItems.appendChild(item);
  });
}
// <div class="search-content">
//     <h2 class="search-heading">${a.title}</h2>
// </div>
// <div class="search-price-container"><span class="search-price">от ${formatter(a.price)} тг</span></div>
let searchArray = JSON.parse(localStorage.getItem('searched-cards') || '[]');
let searchedWord = JSON.parse(localStorage.getItem('searched-word'));

const sWord = document.getElementById('searched-word');
sWord.innerHTML = `${searchedWord}`;

searchArray.sort(function (a, b) {
  let x = parseInt(a.price, 10);
  let y = parseInt(b.price, 10);

  // console.log(typeof y)
  return x - y;
});

displayList(searchArray);
