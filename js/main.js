let listViewDiv = document.querySelector('#content'),
  productNew = document.createElement('div'),
  productRow = document.createElement('div');
containerNew = document.createElement('div');
titleRow = document.createElement('div');
titleColumn = document.createElement('div');
titleH1 = document.createElement('h1');
titleHr = document.createElement('hr');
productNew.classList.add('product_new');
containerNew.classList.add('container');
productRow.classList.add('row');
titleRow.classList.add('row');
titleColumn.classList.add('col-md-12');
titleH1.classList.add('page-title');
const titleCopy = document.querySelector('.indent-left .prev-indent-bot');

let pageName = window.location.href.split('/').pop().split('#')[0].split('?')[0];
function displayList(e) {
  (listViewDiv.innerHTML = ''), listViewDiv.appendChild(productNew);
  productNew.appendChild(containerNew);
  containerNew.appendChild(titleRow);
  titleRow.appendChild(titleColumn);
  titleColumn.appendChild(titleH1);
  titleColumn.appendChild(titleHr);
  titleH1.innerHTML = `${titleCopy.textContent}`;
  containerNew.appendChild(productRow);

  e.map((e) => {
    let i = document.createElement('div');
    i.classList.add('col-md-3');
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
    (i.innerHTML = `        
<div class="product-container">
    <div class="product-image">
      <span class="hover-link"></span>
      <a href=${e.link} class="product-link">посмотреть</a>
      <a href=${e.link}>
        <div>
          <img class="img-responsive" src=${e.img} alt="">
        </div>
      </a>
    </div>
    <a href="kuhni.html">
      <div class="product-description">
        <div class="product-label">
          <div class="product-name">
            <h2>${e.title.slice(0, 13)}...</h2>
            <p class="price">от 62 430 ₸</p>
            <p>Кухонные гарнитуры</p>
          </div>
        </div>
        <div class="product-option">
          <div class="product-size">
            <h3>Виды</h3>
            <p>Модерн</p>
            <p>Классика</p>
            <p>...</p>
          </div>
          <div class="product-color">
            <h3>Цвет</h3>
            <ul>
              <li class="red"></li>
              <li class="blue"></li>
              <li class="green"></li>
              <li class="gray"></li>
              <li class="black"></li>
              <li class="dark-blue"></li>
            </ul>
          </div>
        </div>
      </div>
    </a>
</div>
      `),
      productRow.appendChild(i);
  });
}
const body = document.querySelector('body'),
  header = document.querySelector('header'),
  footer = document.querySelector('footer'),
  head = document.querySelector('head'),
  contact_slider = document.querySelector('.contact_slider'),
  slider_for = document.querySelector('.slider-for'),
  slider_nav = document.querySelector('.slider-nav'),
  carouselSlider = document.querySelector('#carouselSlider'),
  main_slider_adaptive = document.querySelector('.main_slider_adaptive'),
  otzyv = document.querySelector('otzyv'),
  about_block_slider = document.querySelector('.about_block_slider'),
  zayavka = document.querySelectorAll('#zayavka'),
  phone2 = document.querySelector('#phone2'),
  popup = document.querySelector('.popup'),
  prev_indent_bot = document.querySelector('.prev-indent-bot'),
  form = document.querySelector('.form'),
  animatedBlockEnd = document.querySelector('.animatedBlockEnd'),
  animatedBlockStart = document.querySelector('.animatedBlockStart'),
  animatedBlockBg = document.querySelector('.animatedBlockBg'),
  content_card = document.querySelectorAll('.content_card'),
  b4_item = document.querySelectorAll('.b4_item'),
  pictures_box_slider = document.querySelector('.Pictures-box_slider'),
  our_page_Slider = document.querySelector('.our_page_Slider'),
  action_slider = document.querySelector('.action_slider');

contact_slider &&
  $('.contact_slider').slick({
    dots: !0,
    speed: 500,
    slidesToShow: 1,
    fade: !0,
    cssEase: 'linear',
  }),
  about_block_slider &&
    $('.about_block_slider').slick({
      slidesToShow: 2,
      slidesToScroll: 2,
      arrows: !0,
    }),
  main_slider_adaptive &&
    $('.main_slider_adaptive').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: !0,
      centerMode: !0,
      variableWidth: !0,
      dots: !0,
      // fade: true
    });
if (slider_for !== null) {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  });

  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    verticalSwiping: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1416,
        settings: {
          vertical: false,
          verticalSwiping: false,
          variableWidth: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          vertical: false,
          verticalSwiping: false,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          verticalSwiping: false,
          vertical: false,
          variableWidth: true,
        },
      },
      {
        breakpoint: 580,
        settings: {
          verticalSwiping: false,
          vertical: false,
          slidesToShow: 3,
          variableWidth: false,
        },
      },
      {
        breakpoint: 380,
        settings: {
          verticalSwiping: false,
          vertical: false,
          slidesToShow: 3,
          variableWidth: false,
        },
      },
    ],
  });
}

if (carouselSlider !== null) {
  $('#carouselSlider').slick({
    slidesToShow: 4,
    slidesToScroll: 2,
    arrows: true,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
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
if (otzyv !== null) {
  $('.otzyv').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    variableWidth: true,
  });
}
if (action_slider != null) {
  $('.action_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    dots: true,
    variableWidth: true,
  });
}
if (pictures_box_slider != null) {
  $('.Pictures-box_slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
  });
}
if (our_page_Slider != null) {
  $('.our_page_Slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    variableWidth: true,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1122,
        settings: {
          variableWidth: true,
        },
      },
    ],
  });
}

// Connect

const linkAwesome = document.createElement('link');
const linkBootstrap = document.createElement('link');
(linkAwesome.rel = 'stylesheet'),
  (linkAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'),
  (linkBootstrap.rel = 'stylesheet'),
  (linkBootstrap.href = 'css/bootstrap.min.css'),
  head.appendChild(linkAwesome),
  head.appendChild(linkBootstrap);
// ,
// null !== header &&
//   (header.innerHTML = `
// `);

null !== footer &&
  ((footer.className = 'footer'),
  (footer.innerHTML = `   <div class="footer_wrapper">
  <div class="footer_wrapper_start">
    <div class="footer_wrapper_start_header">
      <div class="footer_logo">
        <a href=""> <img src="images/mebelcenter2.png" alt=""></a>
      </div>
      <div>
        <div class="footer_wrapper_end_content_social_text">
          <section class="ss-icon">
            <a href="https://www.instagram.com/idiamarket/">
              <article><span> <i class="fa fa-instagram"></i></span></article>
            </a>
            <a href="https://api.whatsapp.com/send/?phone=77015993322&text&app_absent=0">
              <article><span> <i class="fa fa-whatsapp"></i></span></span></article>
            </a>
            <a href="https://t.me/Raihan_106">
              <article><span><i class="fa fa-telegram"></i></span></span></span></article>
            </a>
            <a href="https://www.youtube.com/channel/UCNDMIviMuZOhhCP7xoxGYAA/videos">
              <article><span><i class="fa fa-youtube"></i></span></span></span></article>
            </a>
          </section>
        </div>
      </div>
    </div>
    <div class="footer_wrapper_start_body">
      <ul>
        <li>
          <input type="checkbox" checked>
          <i></i>
          <h2>Каталог</h2>
          <p>
            <a href="mebel.html">Мебель для дома</a>
          </p>
          <p>
            <a href="pharmacy.html">Оборудование для аптек</a>
          </p>
          <p>
            <a href="steklo.html">Стеклянные витрины</a>
          </p>
          <p>
            <a href="ofisnaya-mebel.html">Офисная мебель</a>
          </p>
          <p>
            <a href="mebel-butik.html">Мебель для бутика</a>
          </p>
          <p>
            <a href="resepshn.html">Ресепш, барные стойки</a>
          </p>
        </li>
        <li>
          <input type="checkbox" checked>
          <i></i>
          <h2>Компания</h2>
          <p><a href="index.html">Главная</a></p>
          <p><a href="catalog.html">Каталог Товаров</a></p>
          <p><a href="dostavka.html">Доставка</a></p>
          <p><a href="portfolio.html">Наши работы</a></p>
          <p><a href="otzovik.php">Отзывы</a></p>
          <p><a href="about-us.html">О нас</a></p>
          <p><a href="contact.html">Контакты</a></p>
        </li>
      </ul>
    </div>

    <div class="footer_wrapper_end_content_start">
      <h3 class="footer_wrapper_end_content_start_titleBig">Позвоните</h3>
      <div class="footer_wrapper_end_content_start_phone">
        <a href="tel:87273449900">8(727) 344-99-00</a>
      </div>
      <div class="footer_wrapper_end_content_start_text"><a href="contact.html">ПН-ПТ: с 09:00 до 18:00</a></div>
      <div class="footer_wrapper_end_content_start_text"><a href="contact.html">СБ: с 09:00 до 16:00</a></div>
      <h3 class="footer_wrapper_end_content_start_title">Адрес</h3>
      <div class="footer_wrapper_end_content_start_text"><a href="contact.html">ул. Мынбаева 43
          (уг.ул. Манаса)</a></div>
    </div>

  </div>
  <div class="footer_wrapper_end">
    <div class="footer_wrapper_end_content">
      <div class="footer_wrapper_end_content_end">
        <h3>Каталог</h3>
        <div class="footer_wrapper_end_content_start_text">
          <a href="mebel.html">Мебель для дома</a>
        </div>
        <div class="footer_wrapper_end_content_start_text">
          <a href="pharmacy.html">Оборудование для аптек</a>
        </div>
        <div class="footer_wrapper_end_content_start_text">
          <a href="steklo.html">Стеклянные витрины</a>
        </div>
        <div class="footer_wrapper_end_content_start_text">
          <a href="ofisnaya-mebel.html">Офисная мебель</a>
        </div>
        <div class="footer_wrapper_end_content_start_text">
          <a href="mebel-butik.html">Мебель для бутика</a>
        </div>
        <div class="footer_wrapper_end_content_start_text">
          <a href="resepshn.html">Ресепш, барные стойки</a>
        </div>
        <div class="footer_wrapper_end_content_social ">
          <h3>МЫ В СОЦСЕТЯХ</h3>
          <div class="footer_wrapper_end_content_social_text">
            <section class="ss-icon">
              <a href="https://www.instagram.com/idiamarket/">
                <article><span> <i class="fa fa-instagram"></i></span></article>
              </a>
              <a href="https://api.whatsapp.com/send/?phone=77015993322&text&app_absent=0">
                <article><span> <i class="fa fa-whatsapp"></i></span></span></article>
              </a>
              <a href="https://t.me/Raihan_106">
                <article><span><i class="fa fa-telegram"></i></span></span></span></article>
              </a>
              <a href="https://www.youtube.com/channel/UCNDMIviMuZOhhCP7xoxGYAA/videos">
                <article><span><i class="fa fa-youtube"></i></span></span></span></article>
              </a>
            </section>
          </div>
        </div>
      </div>

      <div class="footer_wrapper_end_content_start">
        <h3>КОМПАНИЯ</h3>
        <div class="footer_wrapper_end_content_start_text">
          <a href="index.html">Главная</a>
        </div>
        <div class="footer_wrapper_end_content_start_text">
          <a href="catalog.html">Каталог Товаров</a>
        </div>
        <div class="footer_wrapper_end_content_start_text">
          <a href="dostavka.html">Доставка</a>
        </div>
        <div class="footer_wrapper_end_content_start_text">
          <a href="portfolio.html">Наши работы</a>
        </div>
        <div class="footer_wrapper_end_content_start_text">
          <a href="otzovik.php">Отзывы</a>
        </div>
        <div class="footer_wrapper_end_content_start_text">
          <a href="about-us.html">О нас</a>
        </div>
        <div class="footer_wrapper_end_content_start_text">
          <a href="contact.html">Контакты</a>
        </div>
      </div>
      <div class="footer_wrapper_end_content_start">
        <h3 class="footer_wrapper_end_content_start_titleBig">ПОЗВОНИТЕ</h3>
        <div class="footer_wrapper_end_content_start_phone">
          <a href="tel:87273449900">8(727) 344-99-00</a>
        </div>
        <div class="footer_wrapper_end_content_start_text"><a href="contact.html">ПН-ПТ: с 09:00 до 18:00</a></div>
        <div class="footer_wrapper_end_content_start_text"><a href="contact.html">СБ: с 09:00 до 16:00</a></div>
        <h3 class="footer_wrapper_end_content_start_title">АДРЕС:</h3>
        <div class="footer_wrapper_end_content_start_text"><a href="contact.html">ул. Мынбаева 43
            (уг.ул. Манаса)</a></div>
      </div>
      
    </div>
  
  </div>
  <div class="footer_copyright">
  <div class="foot">
    <p>&copy; 2010-2022 MebelCenter.kz</p>
  </div>
  <div class="foot">
    <p>Все права защищены</p>
  </div>
</div>
</div>
`)),
  $(document).ready(function () {
    $('.opener').click(function () {
      $('.opener').toggleClass('active'),
        $('.nav').slideToggle('slow'),
        $('.opener').hasClass('active')
          ? ($('.menu_burger').addClass('activeBg'), $('body').css('overflow', 'hidden'))
          : ($('.menu_burger').removeClass('activeBg'), $('body').css('overflow', 'auto'));
    });
  });
const productData6 = [
    {
      link: 'modern-gos.html',
      img: 'images/modern-gos.jpg',
      title: 'Модерн',
    },
    {
      link: 'classic-gos.html',
      img: 'images/classic-gos.jpg',
      title: 'Классика',
    },
  ],
  productData7 = [
    {
      link: 'djaz-gos.html',
      img: 'images/thumbs/gostinye/dja.jpeg',
      title: 'Гостиная Джаз',
    },
    {
      link: 'elizabet.html',
      img: 'images/thumbs/gostinye/eliz.jpg',
      title: 'Гостиная Элизабет',
    },
    {
      link: 'palermo.html',
      img: 'images/thumbs/gostinye/pal.jpeg',
      title: 'Гостиная Палермо',
    },
    {
      link: 'sonata.html',
      img: 'images/thumbs/gostinye/son.jpg',
      title: 'Гостиная Соната',
    },
    {
      link: 'granada.html',
      img: 'images/thumbs/gostinye/gra.jpg',
      title: 'Гостиная Гранада',
    },
    {
      link: 'lozanna.html',
      img: 'images/thumbs/gostinye/loz.jpg',
      title: 'Гостиная Лозанна',
    },
    {
      link: 'karlino.html',
      img: 'images/thumbs/gostinye/kar.jpg',
      title: 'Гостиная Карлино',
    },
    {
      link: 'fortuna.html',
      img: 'images/thumbs/gostinye/for.jpeg',
      title: 'Гостиная Фортуна',
    },
    {
      link: 'bodego.html',
      img: 'images/thumbs/gostinye/bod.jpg',
      title: 'Гостиная Бодега',
    },
  ],
  productData8 = [
    {
      link: 'savanna.html',
      img: 'images/thumbs/gostinye/sav.jpeg',
      title: 'Гостиная Саванна',
    },
    {
      link: 'elika.html',
      img: 'images/thumbs/gostinye/elik.jpg',
      title: 'Гостиная Элика',
    },
    {
      link: 'valencia.html',
      img: 'images/thumbs/gostinye/val.jpg',
      title: 'Гостиная Валенсия',
    },
    {
      link: 'veskona.html',
      img: 'images/thumbs/gostinye/ves.jpg',
      title: 'Гостиная Вескона',
    },
    {
      link: 'elza.html',
      img: 'images/thumbs/gostinye/elza.jpg',
      title: 'Гостиная Эльза',
    },
    {
      link: 'grace.html',
      img: 'images/thumbs/gostinye/grace.jpg',
      title: 'Гостиная Грейс',
    },
  ],
  productData9 = [
    {
      link: 'shkaf.html',
      img: 'images/shkaf.jpg',
      title: 'Шкафы',
    },
    {
      link: 'garderob.html',
      img: 'images/garderob.jpg',
      title: 'Гардеробные',
    },
  ],
  productData10 = [
    {
      link: 'arena-shkaf.html',
      img: 'images/thumbs/shkafy/are.jpg',
      title: 'Шкаф Арена',
    },
    {
      link: 'elika-shkaf.html',
      img: 'images/thumbs/shkafy/eli.jpg',
      title: 'Шкаф – купе Элика',
    },
    {
      link: 'gvarneri-shkaf.html',
      img: 'images/thumbs/shkafy/gva.jpg',
      title: 'Шкаф – купе Гварнери',
    },
    {
      link: 'norton-shkaf.html',
      img: 'images/thumbs/shkafy/nor.jpg',
      title: 'Шкаф Нортон',
    },
    {
      link: 'ringo-shkaf.html',
      img: 'images/thumbs/shkafy/rin.jpg',
      title: 'Шкаф – купе Ринго',
    },
    {
      link: 'smart-shkaf.html',
      img: 'images/thumbs/shkafy/sma.png',
      title: 'Шкаф Смарт',
    },
    {
      link: 'snejana-shkaf.html',
      img: 'images/thumbs/shkafy/sne.jpg',
      title: 'Шкаф Снежана',
    },
    {
      link: 'toronto-shkaf.html',
      img: 'images/thumbs/shkafy/tor.jpg',
      title: 'Шкаф Торонто',
    },
    {
      link: 'varis-shkaf.html',
      img: 'images/thumbs/shkafy/var.jpg',
      title: 'Шкаф Варис',
    },
  ],
  productData11 = [
    {
      link: 'ampir.html',
      img: 'images/thumbs/garderob/amp.jpg',
      title: 'Гардеробная Ампир',
    },
    {
      link: 'torino.html',
      img: 'images/thumbs/garderob/tor.JPG',
      title: 'Гардеробная Торино',
    },
    {
      link: 'premium-gar.html',
      img: 'images/thumbs/garderob/pre.jpg',
      title: 'Гардеробная Премиум',
    },
    {
      link: 'roskosh.html',
      img: 'images/thumbs/garderob/ros.jpg',
      title: 'Гардеробная Роскошь',
    },
    {
      link: 'armadio.html',
      img: 'images/thumbs/garderob/arm.jpg',
      title: 'Гардеробная Армадио',
    },
    {
      link: 'vitra.html',
      img: 'images/thumbs/garderob/vit.jpg',
      title: 'Гардеробная Витра',
    },
  ],
  productData12 = [
    {
      link: 'karapuz.html',
      img: 'images/thumbs/butik/odejda/chi.jpg',
      title: 'Мебель для детcкого магазина',
      price: 53260,
    },
    {
      link: 'massiv-mag.html',
      img: 'images/thumbs/butik/odejda/mas.jpg',
      title: 'Мебель для магазина Массив',
      price: 52630,
    },
    {
      link: 'kontur.html',
      img: 'images/thumbs/butik/odejda/mag.jpg',
      title: 'Мебель для магазина Контур',
      price: 54820,
    },
    {
      link: 'modern-mag.html',
      img: 'images/thumbs/butik/odejda/mod.jpg',
      title: 'Мебель для магазина Модерн',
      price: 51940,
    },
    {
      link: 'venge-mag.html',
      img: 'images/thumbs/butik/odejda/ven.jpg',
      title: 'Мебель для магазина Венге',
      price: 51890,
    },
    {
      link: 'deko-mag.html',
      img: 'images/thumbs/butik/odejda/dek.jpg',
      title: 'Мебель для магазина Деко',
      price: 54750,
    },
  ],
  productData13 = [
    {
      link: 'akva-acc.html',
      img: 'images/thumbs/butik/accessories/akv.jpg',
      title: 'Для магазина парфюмерии Аква',
      price: 63960,
    },
    {
      link: 'deko-acc.html',
      img: 'images/thumbs/butik/accessories/dek.JPG',
      title: 'Для магазина аксессуаров Деко',
      price: 65930,
    },
    {
      link: 'kamelia-acc.html',
      img: 'images/thumbs/butik/accessories/kam.jpg',
      title: 'Для магазина косметики Камелия',
      price: 64820,
    },
    {
      link: 'massiv-acc.html',
      img: 'images/thumbs/butik/accessories/mas.JPG',
      title: 'Для магазина подарков Массив',
      price: 69780,
    },
    {
      link: 'modern-acc.html',
      img: 'images/thumbs/butik/accessories/mod.jpg',
      title: 'Для магазина косметики Модерн',
      price: 62950,
    },
    {
      link: 'siluet-acc.html',
      img: 'images/thumbs/butik/accessories/sil.jpg',
      title: 'Для магазина косметики Силуэт',
      price: 68560,
    },
  ],
  productData14 = [
    {
      link: 'akva-jeweler.html',
      img: 'images/thumbs/butik/jeweler/akv.jpg',
      title: 'Аква',
      price: 92320,
    },
    {
      link: 'briz-jeweler.html',
      img: 'images/thumbs/butik/jeweler/bri.jpg',
      title: 'Бриз',
      price: 95230,
    },
    {
      link: 'classic-jeweler.html',
      img: 'images/thumbs/butik/jeweler/cla.jpg',
      title: 'Классик',
      price: 98620,
    },
    {
      link: 'deko-jeweler.html',
      img: 'images/thumbs/butik/jeweler/dek.jpg',
      title: 'Деко',
      price: 99850,
    },
    {
      link: 'modern-jeweler.html',
      img: 'images/thumbs/butik/jeweler/mod.jpg',
      title: 'Модерн',
      price: 94850,
    },
    {
      link: 'premium-jeweler.html',
      img: 'images/thumbs/butik/jeweler/pre.jpg',
      title: 'Премиум',
      price: 99560,
    },
  ],
  productData15 = [
    {
      link: 'lux-mag.html',
      img: 'images/thumbs/butik/odejda/lux.jpg',
      title: 'Мебель для магазина Люкс',
      price: 54230,
    },
    {
      link: 'premium-mag.html',
      img: 'images/thumbs/butik/odejda/pre.jpg',
      title: 'Мебель для магазина Премиум',
      price: 53120,
    },
    {
      link: 'roskosh-mag.html',
      img: 'images/thumbs/butik/odejda/ros.jpg',
      title: 'Мебель для магазина Роскошь',
      price: 52360,
    },
  ],
  productData16 = [
    {
      link: 'brictol-barnye.html',
      img: 'images/thumbs/barnye/bri.jpg',
      title: 'Барная стойка Бристоль',
      price: 88520,
    },
    {
      link: 'econom-barnye.html',
      img: 'images/thumbs/barnye/eco.jpg',
      title: 'Барная стойка Эконом',
      price: 97650,
    },
    {
      link: 'etnika-barnye.html',
      img: 'images/thumbs/barnye/etn.jpg',
      title: 'Барная стойка Этника',
      price: 89620,
    },
    {
      link: 'imperial-barnye.html',
      img: 'images/thumbs/barnye/imp.jpg',
      title: 'Барная стойка Империал',
      price: 98630,
    },
    {
      link: 'megapolis-barnye.html',
      img: 'images/thumbs/barnye/meg.jpg',
      title: 'Барная стойка Мегаполис',
      price: 85740,
    },
    {
      link: 'milan-barnye.html',
      img: 'images/thumbs/barnye/mil.jpg',
      title: 'Барная стойка Милан',
      price: 81890,
    },
    {
      link: 'riga-barnye.html',
      img: 'images/thumbs/barnye/rig.jpg',
      title: 'Барная стойка Рига',
      price: 94320,
    },
    {
      link: 'rivera-barnye.html',
      img: 'images/thumbs/barnye/riv.jpg',
      title: 'Барная стойка Ривьера',
      price: 92120,
    },
    {
      link: 'versal-barnye.html',
      img: 'images/thumbs/barnye/ver.jpg',
      title: 'Барная стойка Версаль',
      price: 78530,
    },
  ],
  productData17 = [
    {
      link: 'agami-reception.html',
      img: 'images/thumbs/reception/aga.jpg',
      title: 'Ресепшн Агами',
      price: 63590,
    },
    {
      link: 'econom-reception.html',
      title: 'Ресепшн Эконом',
      img: 'images/thumbs/reception/eco.jpg',
      price: 62960,
    },
    {
      link: 'brictol-reception.html',
      title: 'Ресепшн Бристоль',
      img: 'images/thumbs/reception/bri.jpg',
      price: 63850,
    },
    {
      link: 'premium-reception.html',
      title: 'Ресепшн Премиум',
      img: 'images/thumbs/reception/pre.jpg',
      price: 69870,
    },
    {
      link: 'rivera-reception.html',
      title: 'Ресепшн Ривьера',
      img: 'images/thumbs/reception/riv.jpg',
      price: 68560,
    },
    {
      link: 'ultra-reception.html',
      title: 'Ресепшн Ультра',
      img: 'images/thumbs/reception/ult.jpg',
      price: 65480,
    },
  ];

productData18 = [
  {
    link: 'ostrov.html',
    img: 'images/thumbs/steklo/1.jpg',
    title: 'Островные витрины',
    price: 75349,
  },
  {
    link: 'steklo1.html',
    title: 'Оборудование для аптеки Грин',
    img: 'images/thumbs/steklo/2.jpg',
    price: 48769,
  },
  {
    link: 'ostrov1.html',
    title: 'Островные торговые модули',
    price: 68619,
    img: 'images/thumbs/steklo/3.jpg',
  },
  {
    link: 'steklo2.html',
    title: 'Стеклянные витрины',
    price: 27849,
    img: 'images/thumbs/steklo/4.jpg',
  },
  {
    link: 'ostrov2.html',
    title: 'Торговый островок',
    price: 73629,
    img: 'images/thumbs/steklo/5.jpg',
  },
  {
    link: 'ostrov3.html',
    title: 'Островные витрины',
    price: 64359,
    img: 'images/thumbs/steklo/6.jpg',
  },
];

productData19 = [
  {
    link: 'odejda.html',
    img: 'images/odejda.jpg',
    price: 0,
    title: 'Одежда и аксессуары',
  },
  {
    link: 'accessories.html',
    title: 'Аксессуары, Парфюмерия, Косметика',
    price: 0,
    img: 'images/kosmetika.jpg',
  },
  {
    link: 'jeweler.html',
    title: 'Островные торговые модули',
    price: 0,
    img: 'images/thumbs/steklo/3.jpg',
  },
  {
    link: 'obuv.html',
    title: 'Обувь и аксессуары',
    price: 0,
    img: 'images/obuv.jpg',
  },
];
productData20 = [
  {
    link: 'megapolis-apteka.html',
    title: 'Мебель для аптеки Мегаполис',
    img: 'images/thumbs/butik/pharmacy/meg.jpg',
    price: 110230,
  },
  {
    link: 'green-apteka.html',
    title: 'Оборудование для аптеки Грин',
    img: 'images/thumbs/butik/pharmacy/gre.jpg',
    price: 106960,
  },
  {
    link: 'massiv-apteka.html',
    title: 'Оборудование для аптеки Массив',
    img: 'images/thumbs/butik/pharmacy/mas.jpg',
    price: 109690,
  },
  {
    link: 'glianec-apteka.html',
    title: 'Оборудование для аптеки Глянец',
    img: 'images/thumbs/butik/pharmacy/gli.jpg',
    price: 118560,
  },
  {
    link: 'modern-apteka.html',
    title: 'Оборудование для аптеки Модерн',
    img: 'images/thumbs/butik/pharmacy/mod.png',
    price: 119360,
  },
  {
    link: 'premium-apteka.html',
    title: 'Оборудование для аптеки Премиум',
    img: 'images/thumbs/butik/pharmacy/pre.jpg',
    price: 119560,
  },
];
productData21 = [
  {
    link: 'agat.html',
    title: 'Офисная мебель Агат',
    img: 'images/thumbs/office/aga.jpg',
    price: 66960,
  },
  {
    link: 'akkord.html',
    title: 'Офисная мебель Аккорд',
    img: 'images/thumbs/office/akk.jpg',
    price: 77850,
  },
  {
    link: 'aksioma.html',
    title: 'Офисная мебель Аксиома',
    img: 'images/thumbs/office/aks.jpg',
    price: 74360,
  },
  {
    link: 'blic.html',
    title: 'Офисная мебель Блиц',
    img: 'images/thumbs/office/bli.jpg',
    price: 87960,
  },

  {
    link: 'format.html',
    title: 'Офисная мебель Формат',
    img: 'images/thumbs/office/for.jpg',
    price: 86320,
  },
  {
    link: 'gamma.html',
    title: 'Офисная мебель Гамма',
    img: 'images/thumbs/office/gam.jpg',
    price: 81630,
  },
  {
    link: 'norton.html',
    title: 'Офисная мебель Нортон',
    img: 'images/thumbs/office/nor.jpg',
    price: 79630,
  },
  {
    link: 'prego.html',
    title: 'Офисная мебель Прего',
    img: 'images/thumbs/office/pre.jpg',
    price: 82630,
  },
  {
    link: 'smart.html',
    title: 'Офисная мебель Смарт',
    img: 'images/thumbs/office/sma.jpg',
    price: 88750,
  },
  {
    link: 'spektr.html',
    title: 'Офисная мебель Спектр',
    img: 'images/thumbs/office/spe.jpg',
    price: 70950,
  },
  {
    link: 'status.html',
    title: 'Офисная мебель Статус',
    img: 'images/thumbs/office/sta.jpg',
    price: 89860,
  },
  {
    link: 'tandem.html',
    title: 'Офисная мебель Тандем',
    img: 'images/thumbs/office/tan.jpg',
    price: 62350,
  },
];

productData22 = [
  {
    link: 'bar.html',
    title: 'Барные стойки',
    img: 'images/bar.jpg',
    price: 0,
  },
  {
    link: 'reception.html',
    title: 'Ресепшн',
    img: 'images/reception.jpg',
    price: 0,
  },
];
productData23 = [
  {
    link: 'modern.html',
    title: 'Модерн',
    img: 'images/modern.jpg',
  },
  {
    link: 'classic.html',
    title: 'Классика',
    img: 'images/classic.jpg',
  },
];
productData24 = [
  {
    link: 'aksona.html',
    title: 'Кухонный гарнитур Аксона',
    img: 'images/thumbs/modern/2.jpg',
    price: 62430,
  },
  {
    link: 'valenciya.html',
    title: 'Кухонный гарнитур Валенсия',
    img: 'images/thumbs/modern/3.jpg',
    price: 64580,
  },
  {
    link: 'djaz.html',
    title: 'Кухонный гарнитур Джаз',
    img: 'images/thumbs/modern/1.jpg',
    price: 69860,
  },

  {
    link: 'malta.html',
    title: 'Кухонный гарнитур Мальта',
    img: 'images/thumbs/modern/4.jpg',
    price: 62540,
  },
  {
    link: 'sandra.html',
    title: 'Кухонный гарнитур Сандра',
    img: 'images/thumbs/modern/5.jpg',
    price: 63580,
  },
  {
    link: 'solo.html',
    title: 'Кухонный гарнитур Соло',
    img: 'images/thumbs/modern/6.jpg',
    price: 73420,
  },

  {
    link: 'soprano.html',
    title: 'Кухонный гарнитур Сопрано',
    img: 'images/thumbs/modern/7.jpg',
    price: 76820,
  },
  {
    link: 'sofi.html',
    title: 'Кухонный гарнитур Софи',
    img: 'images/thumbs/modern/8.jpg',
    price: 78480,
  },

  {
    link: 'tetris.html',
    title: 'Кухонный гарнитур Тетрис',
    img: 'images/thumbs/modern/9.jpg',
    price: 67230,
  },
];
productData25 = [
  {
    link: 'arena.html',
    title: 'Кухонный гарнитур Арена',
    img: 'images/thumbs/classic/are.jpg',
    price: 94680,
  },
  {
    link: 'gvarneri.html',
    title: 'Кухонный гарнитур Гварнери',
    img: 'images/thumbs/classic/gva.jpg',
    price: 93830,
  },

  {
    link: 'bergonci.html',
    title: 'Кухонный гарнитур Бергонцо',
    img: 'images/thumbs/classic/ber.jpeg',
    price: 94250,
  },
  {
    link: 'karina.html',
    title: 'Кухонный гарнитур Карина',
    img: 'images/thumbs/classic/kar.jpg',
    price: 84840,
  },
  {
    link: 'olimp.html',
    title: 'Кухонный гарнитур Олимп',
    img: 'images/thumbs/classic/oli.png',
    price: 84560,
  },
  {
    link: 'arizona.html',
    title: 'Кухонный гарнитур Аризона',
    img: 'images/thumbs/classic/ari.jpg',
    price: 92720,
  },
  {
    link: 'montano.html',
    title: 'Кухонный гарнитур Монтано',
    img: 'images/thumbs/classic/mon.jpg',
    price: 82380,
  },

  {
    link: 'venge.html',
    title: 'Кухонный гарнитур Венге',
    img: 'images/thumbs/classic/ven.jpg',
    price: 89620,
  },
  {
    link: 'katrin.html',
    title: 'Кухонный гарнитур Катрин',
    img: 'images/thumbs/classic/kat.jpg',
    price: 81560,
  },
];
productData26 = [
  {
    link: 'ari.html',
    title: 'Прихожие Ари',
    img: 'images/thumbs/prixozhie/ari.jpg',
    price: 85320,
  },
  {
    link: 'bruno.html',
    title: 'Прихожие Бруно',
    img: 'images/thumbs/prixozhie/bru.png',
    price: 86560,
  },

  {
    link: 'elizaveta.html',
    title: 'Прихожие Елизавета',
    img: 'images/thumbs/prixozhie/eli.jpg',
    price: 88920,
  },
  {
    link: 'glianec.html',
    title: 'Прихожие Глянец',
    img: 'images/thumbs/prixozhie/gli.jpg',
    price: 82560,
  },
  {
    link: 'ivica.html',
    title: 'Прихожие Ивиса',
    img: 'images/thumbs/prixozhie/ivi.jpg',
    price: 89230,
  },
  {
    link: 'xelo.html',
    title: 'Прихожие Ксело',
    img: 'images/thumbs/prixozhie/xel.jpg',
    price: 83630,
  },
  {
    link: 'nova.html',
    title: 'Прихожие Нова',
    img: 'images/thumbs/prixozhie/nov.png',
    price: 84630,
  },
  {
    link: 'picasso.html',
    title: 'Прихожие Пикассо',
    img: 'images/thumbs/prixozhie/pic.jpeg',
    price: 80690,
  },

  {
    link: 'provance-pri.html',
    title: 'Прихожие Прованс',
    img: 'images/thumbs/prixozhie/pro.jpeg',
    price: 84120,
  },
  {
    link: 'cevilia.html',
    title: 'Прихожие Севилья',
    img: 'images/thumbs/prixozhie/sev.jpg',
    price: 81560,
  },
  {
    link: 'varis.html',
    title: 'Прихожие Варис',
    img: 'images/thumbs/prixozhie/var.jpg',
    price: 87450,
  },
  {
    link: 'izabella.html',
    title: 'Прихожие Изабелла',
    img: 'images/thumbs/prixozhie/iza.jpg',
    price: 88960,
  },
];
productData27 = [
  {
    link: 'estel.html',
    title: 'Спальный гарнитур Эстель',
    img: 'images/thumbs/spalni/est.jpeg',
    price: 59860,
  },
  {
    link: 'viola.html',
    title: 'Спальный гарнитур Виола',
    img: 'images/thumbs/spalni/flo.jpg',
    price: 55680,
  },
  {
    link: 'katrin-spalni.html',
    title: 'Спальный гарнитур Катрин',
    img: 'images/thumbs/spalni/kat.jpg',
    price: 0,
  },
  {
    link: 'milana.html',
    title: 'Спальный гарнитур Милана',
    img: 'images/thumbs/spalni/mil.jpeg',
    price: 0,
  },
  {
    link: 'naomi.html',
    title: 'Спальный гарнитур Наоми',
    img: 'images/thumbs/spalni/nao.jpeg',
    price: 0,
  },
  {
    link: 'san-remo.html',
    title: 'Спальный гарнитур Сан-Ремо',
    img: 'images/thumbs/spalni/san.jpg',
    price: 0,
  },

  {
    link: 'ravenna.html',
    title: 'Спальный гарнитур Равенна',
    img: 'images/thumbs/spalni/rav.jpg',
    price: 0,
  },
  {
    link: 'nicole.html',
    title: 'Спальный гарнитур Николь',
    img: 'images/thumbs/spalni/nic.jpg',
    price: 0,
  },
  {
    link: 'sonata-spalni.html',
    title: 'Спальный гарнитур Соната',
    img: 'images/thumbs/spalni/son.jpeg',
    price: 0,
  },

  {
    link: 'tokio.html',
    title: 'Спальный гарнитур Токио',
    img: 'images/thumbs/spalni/tok.jpeg',
    price: 0,
  },
  {
    link: 'valencia-spalni.html',
    title: 'Спальный гарнитур Валенсия',
    img: 'images/thumbs/spalni/val.jpg',
    price: 0,
  },
  {
    link: 'vegas.html',
    title: 'Спальный гарнитур Вегас',
    img: 'images/thumbs/spalni/vio.jpeg',
    price: 0,
  },
];
productData28 = [
  {
    link: 'delta.html',
    title: 'Детский гарнитур Дельта',
    img: 'images/thumbs/detskie/del.jpg',
  },
  {
    link: 'liberty.html',
    title: 'Детский гарнитур Либерти',
    img: 'images/thumbs/detskie/lib.png',
  },
  {
    link: 'massiv.html',
    title: 'Детский гарнитур Массив',
    img: 'images/thumbs/detskie/mas.png',
  },

  {
    link: 'nov-mal.html',
    title: 'Мебель для новорожденных',
    img: 'images/thumbs/detskie/nov_mal.jpg',
  },
  {
    link: 'orion.html',
    title: 'Детский гарнитур Орион',
    img: 'images/thumbs/detskie/ori.jpg',
  },
  {
    link: 'princess.html',
    title: 'Детский гарнитур Принцесса',
    img: 'images/thumbs/detskie/pri.jpg',
  },
  {
    link: 'provance.html',
    title: 'Детский гарнитур Прованс',
    img: 'images/thumbs/detskie/pro.png',
  },
  {
    link: 'ringo.html',
    title: 'Детский гарнитур Ринго',
    img: 'images/thumbs/detskie/rin.png',
  },
  {
    link: 'snejana.html',
    title: 'Детский гарнитур Снежана',
    img: 'images/thumbs/detskie/sne.jpg',
  },
  {
    link: 'sonia.html',
    title: 'Детский гарнитур Соня',
    img: 'images/thumbs/detskie/son.png',
  },

  {
    link: 'teenager.html',
    title: 'Детский гарнитур Тинейджер',
    img: 'images/thumbs/detskie/tee.jpg',
  },
  {
    link: 'urban.html',
    title: 'Детский гарнитур Урбан',
    img: 'images/thumbs/detskie/urb.jpg',
  },
];
productData29 = [
  {
    link: '',
    title: '',
    img: '',
  },
];

productData30 = [
  {
    link: '',
    title: '',
    img: '',
  },
];
productData31 = [
  {
    link: '',
    title: '',
    img: '',
  },
];
switch (pageName) {
  case 'gostinye.html':
    displayList(productData6);
    break;
  case 'modern-gos.html':
    displayList(productData7);
    break;
  case 'classic-gos.html':
    displayList(productData8);
    break;
  case 'shkafy.html':
    displayList(productData9);
    break;
  case 'shkaf.html':
    displayList(productData10);
    break;
  case 'garderob.html':
    displayList(productData11);
    break;
  case 'odejda.html':
    displayList(productData12);
    break;
  case 'accessories.html':
    displayList(productData13);
    break;
  case 'jeweler.html':
    displayList(productData14);
    break;
  case 'obuv.html':
    displayList(productData15);
    break;
  case 'bar.html':
    displayList(productData16);
    break;
  case 'reception.html':
    displayList(productData17);
    break;
  case 'steklo.html':
    displayList(productData18);
    break;
  case 'mebel-butik.html':
    displayList(productData19);
    break;
  case 'pharmacy.html':
    displayList(productData20);
    break;
  case 'ofisnaya-mebel.html':
    displayList(productData21);
    break;
  case 'resepshn.html':
    displayList(productData22);
    break;
  case 'kuhni.html':
    displayList(productData23);
    break;
  case 'modern.html':
    displayList(productData24);
    break;
  case 'classic.html':
    displayList(productData25);
    break;
  case 'prixozhie.html':
    displayList(productData26);
    break;
  case 'spalni.html':
    displayList(productData27);
    break;
  case 'detskie.html':
    displayList(productData28);
    break;
}

if (popup !== null) {
  popup.innerHTML = ``;
}

let locationOrder = window.location.href;
zayavka.forEach((item) => {
  if (item !== null) {
    item.innerHTML = `<div class="form_modal">
    <div class="sample">
      <button class="open-modal btn-sep icon-cart">Рассчитать стоимость</button>
    </div>
    <div class="modal">
      <span class="modal-backdrop close-modal"></span>
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-header_title">
            <h2>Контактная информация:</h2>
          </div>
          <div class="modal-header_button">
            <button class="close-modal">&times</button>
          </div>
        </div>
        <div class="modal-body">
          <form class="form">
            <input type="hidden" name="project_name" value="MebelCenter">
            <input type="hidden" name="admin_email" value="idiasoftgroup@gmail.com">
            <input type="hidden" name="form_subject" value="MebelCenter">
            <input type="hidden" name="Товар" value=${locationOrder}>
            <p>
              <label class="form_title">ФИО:</label>
              <input class="inputName" type="text" name='Имя'  data-validate-field="fio" required>
            </p>
            <p>
              <label class="form_title">Телефон:</label>
              <input id="phone2" type="tel" name="Телефон" placeholder="+7" data-validate-field="tel"
                required>
            </p>
            <div class="form_button">
              <button class="form_btn">Отправить заявку</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>`;
  }
});
if (animatedBlockEnd != null) {
  animatedBlockEnd.classList.add('_anim-items');
  animatedBlockEnd.classList.add('_anim-no-hide');
}
if (animatedBlockStart != null) {
  animatedBlockStart.classList.add('_anim-items');
  animatedBlockStart.classList.add('_anim-no-hide');
}
if (animatedBlockBg != null) {
  animatedBlockBg.classList.add('_anim-items');
  animatedBlockBg.classList.add('_anim-no-hide');
}
content_card.forEach((item) => {
  if (content_card != null) {
    item.classList.add('_anim-items');
    item.classList.add('_anim-no-hide');
  }
});
b4_item.forEach((item) => {
  if (b4_item != null) {
    item.classList.add('_anim-items');
    item.classList.add('_anim-no-hide');
  }
});
animationScroll();

function animationScroll() {
  const animItems = document.querySelectorAll('._anim-items');

  if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight + window.innerHeight / 2;
        }

        if (
          pageYOffset > animItemOffset - animItemPoint &&
          pageYOffset < animItemOffset + animItemHeight
        ) {
          animItem.classList.add('_active');
          // animItem.classList.add('activeGiper');
        } else {
          if (!animItem.classList.contains('_anim-no-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    }

    function offset(el) {
      const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft,
      };
    }

    setTimeout(() => {
      animOnScroll();
    }, 300);
  }
}

// document.cookie="privet";

// console.log(document.cookie);
// const input = document.querySelector('.inputName');
// const valFrom1to4 = Math.floor(Math.random() * (5 - 1)) + 1;
// input.setAttribute('name', prev_indent_bot) // как атрибут
// input.name = prev_indent_bot; // как значение
// console.log(input.name);

const openModalButtons = document.querySelectorAll('.open-modal'),
  search_item = document.querySelectorAll('.search_item'),
  modal = document.querySelector('.modal'),
  // modalSearch = searched_items.querySelectorAll('.modal'),
  // modal = document.querySelector('.modal'),
  closeModalButtons = document.querySelectorAll('.close-modal');

openModalButtons.forEach((openBtn) => {
  openBtn.addEventListener('click', openModal);
});

closeModalButtons.forEach((closeBtn) => {
  closeBtn.addEventListener('click', closeModal);
});
// search_item.forEach((item) => {
//   // item.classList.add('isActive');

//   if (item.classList.contains('isActive')) {
//     item.addEventListener('click', () => {
//       item.classList.add('isActive');
//       modal.forEach((el) => {
//         el.classList.add('visible');
//       });
//     });
//   } else {
//     modal.forEach((el) => {
//       el.classList.remove('visible');
//     });
//   }
// });

function openModal() {
  modal.classList.add('visible');
  search_item.forEach((item) => {
    item.classList.toggle('isActive');
  });
  // searched_items.forEach((item) => {
  //   item.classList.add('visible');
  // });
  // if(searched_items.classList.contains('visible')){
  //   console.log('t');
  // }
}
function closeModal() {
  modal.classList.remove('visible');
  search_item.forEach((item) => {
    item.classList.toggle('isActive');
  });
  // modal.forEach((item) => {
  //   item.classList.remove('visible');
  // });
}
// console.log(openModalButtons);

const message = {
  loading: 'images/spinner.svg',
  success: 'Заказ принят в обработку!<br> Мы свяжемся с вами в ближайшее время',
  failure: 'Что-то пошло не так...',
};

// inputMask
// let inputs = document.querySelectorAll('input[type="tel"]');
// let im = new Inputmask('+7 (999) 999-99-99');
// im.mask(inputs);
// $(':input').inputmask();

// $('#phone').inputmask({ mask: '(999) 999-9999' });
// validate
function loadingForm() {
  let statusMessage = document.createElement('img');
  statusMessage.src = message.loading;
  statusMessage.style.cssText = `
            display: block;
            margin: 0 auto;
        `;
  form.insertAdjacentElement('afterend', statusMessage);
}
function showThanksModal(message) {
  const prevModalDialog = document.querySelector('.form');

  prevModalDialog.classList.add('hidden');
  openModal();

  const thanksModal = document.createElement('div');
  thanksModal.classList.add('modal__dialog');
  thanksModal.innerHTML = `
          <div class="modal__content">
              <div class="modal__title">${message}</div>
          </div>
      `;
  prevModalDialog.before(thanksModal);
  setTimeout(() => {
    thanksModal.remove();
    prevModalDialog.classList.add('show');
    prevModalDialog.classList.remove('hidden');
    closeModal();
  }, 5000);
}

$(document).ready(function () {
  //E-mail Ajax Send
  $('form').submit(function () {
    //Change
    var th = $(this);

    $.ajax({
      type: 'POST',
      url: './request/mail.php', //Change
      data: th.serialize(),
    }).done(function () {
      showThanksModal(message.success);
      form.classList.add('hidden');
      setTimeout(function () {
        // Done Functions
        th.trigger('reset');
      }, 2000);
      // form.remove()
    });
    return false;
  });
});

// const postData = async (url, data) => {
//   let res = await fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: data,
//   });

//   return await res.json();
// };

async function getResource(url) {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
}

// function bindPostData(form) {
//   form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     let statusMessage = document.createElement('img');
//     statusMessage.src = message.loading;
//     statusMessage.style.cssText = `
//               display: block;
//               margin: 0 auto;
//           `;
//     form.insertAdjacentElement('afterend', statusMessage);

//     const formData = new FormData(form);

//     const json = JSON.stringify(Object.fromEntries(formData.entries()));

//     postData('http://localhost:3000/requests', json)
//       .then((data) => {
//         console.log(data);
//         showThanksModal(message.success);
//         statusMessage.remove();
//       })
//       .catch(() => {
//         showThanksModal(message.failure);
//       })
//       .finally(() => {
//         form.reset();
//       });
//   });
// }
// phone2.inputmask('+7 (999) 99-99-999');
window.addEventListener('DOMContentLoaded', () => {
  // const script1 = document.createElement('script');
  // script1.src = 'js/just-validate.min.js';
  // const script2 = document.createElement('script');
  // script2.src = 'js/jquery.maskedinput.min.js';
  const searchScript = document.createElement('script');
  searchScript.src = '/js/smart-search.js';
  document.querySelector('body').append(searchScript);

  // const mainScript = document.querySelector('script[src*="js/main.js"]');
  // mainScript.after(script1);
  // mainScript.after(script2);
});
// window.addEventListener('DOMContentLoaded', () => {
//   $('#phone2').inputmask('+7 (999) 99-99-999');
// });
// Маска ввода номера телефона (плагин maskedinput)

if (phone2 !== null) {
  $(function ($) {
    $('#phone2').mask('+7(999) 999-9999');
  });
}
// (function(){

//   var canvas = document.createElement('canvas'),
//   ctx = canvas.getContext('2d'),
//   w = canvas.width = innerWidth,
//   h = canvas.height = innerHeight,
//   particles = [],
//   properties = {
//       bgColor             : 'rgba(17, 17, 19, 1)',
//       particleColor       : 'rgba(255, 40, 40, 1)',
//       particleRadius      : 3,
//       particleCount       : 60,
//       particleMaxVelocity : 0.5,
//       lineLength          : 150,
//       particleLife        : 6,
//   };

//   document.querySelector('body').appendChild(canvas);

//   window.onresize = function(){
//       w = canvas.width = innerWidth,
//       h = canvas.height = innerHeight;
//   }

//   class Particle{
//       constructor(){
//           this.x = Math.random()*w;
//           this.y = Math.random()*h;
//           this.velocityX = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
//           this.velocityY = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
//           this.life = Math.random()*properties.particleLife*60;
//       }
//       position(){
//           this.x + this.velocityX > w && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0? this.velocityX*=-1 : this.velocityX;
//           this.y + this.velocityY > h && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0? this.velocityY*=-1 : this.velocityY;
//           this.x += this.velocityX;
//           this.y += this.velocityY;
//       }
//       reDraw(){
//           ctx.beginPath();
//           ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI*2);
//           ctx.closePath();
//           ctx.fillStyle = properties.particleColor;
//           ctx.fill();
//       }
//       reCalculateLife(){
//           if(this.life < 1){
//               this.x = Math.random()*w;
//               this.y = Math.random()*h;
//               this.velocityX = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
//               this.velocityY = Math.random()*(properties.particleMaxVelocity*2)-properties.particleMaxVelocity;
//               this.life = Math.random()*properties.particleLife*60;
//           }
//           this.life--;
//       }
//   }

//   function reDrawBackground(){
//       ctx.fillStyle = properties.bgColor;
//       ctx.fillRect(0, 0, w, h);
//   }

//   function drawLines(){
//       var x1, y1, x2, y2, length, opacity;
//       for(var i in particles){
//           for(var j in particles){
//               x1 = particles[i].x;
//               y1 = particles[i].y;
//               x2 = particles[j].x;
//               y2 = particles[j].y;
//               length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
//               if(length < properties.lineLength){
//                   opacity = 1-length/properties.lineLength;
//                   ctx.lineWidth = '0.5';
//                   ctx.strokeStyle = 'rgba(255, 40, 40, '+opacity+')';
//                   ctx.beginPath();
//                   ctx.moveTo(x1, y1);
//                   ctx.lineTo(x2, y2);
//                   ctx.closePath();
//                   ctx.stroke();
//               }
//           }
//       }
//   }

//   function reDrawParticles(){
//       for(var i in particles){
//           particles[i].reCalculateLife();
//           particles[i].position();
//           particles[i].reDraw();
//       }
//   }

//   function loop(){
//       reDrawBackground();
//       reDrawParticles();
//       drawLines();
//       requestAnimationFrame(loop);
//   }

//   function init(){
//       for(var i = 0 ; i < properties.particleCount ; i++){
//           particles.push(new Particle);
//       }
//       loop();
//   }
//   init();
// }())
function doAnimation(ele, duration, delay) {
  var el = jQuery('.' + ele);
  var className = el.attr('class');
  // el.classList.add(animName);
  var timer;
  function addClass() {
    // el.removeClass(animName);
    el.removeClass(className);
  }
  function removeClass() {
    // el.addClass(animName);
    el.addClass(className);
  }
  setInterval(function () {
    clearTimeout(timer);
    addClass();
    timer = setTimeout(removeClass, duration);
  }, duration + delay);
}

doAnimation('animate-pause', 1000, 3000);

const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
  const bttn = accordion.querySelector('.accordion__button');
  const panel = accordion.querySelector('.accordion__panel');
  const activeClassBtn = 'accordion__button-active';
  const activeClassPanel = 'accordion__panel-active';

  bttn.addEventListener('click', (event) => {
    event.preventDefault();

    const active__bttn = document.querySelectorAll('.accordion .accordion__button-active');
    active__bttn.forEach((el) => (el !== bttn ? el.classList.remove(activeClassBtn) : null));
    bttn.classList.toggle(activeClassBtn);

    const active__panel = document.querySelectorAll('.accordion .accordion__panel-active');
    active__panel.forEach((el) => (el !== panel ? el.classList.remove(activeClassPanel) : null));
    panel.classList.toggle(activeClassPanel);

    panel.style.setProperty('--height', `${panel.scrollHeight}px`);
  });
});
