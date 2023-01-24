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
const titleCopy2 = document.querySelector('.lll .prev-indent-bot');

let lineDrevo = document.createElement('div');
lineDrevo.classList.add('line');
let lineDrevoA = document.createElement('a');
bg_bot_1 = document.querySelector('.bg-bot_1');
lineDrevo.appendChild(lineDrevoA);
if (bg_bot_1 != null) {
  bg_bot_1.innerHTML = `
  <section class="content_prime">
  <div class="content_index">
    <div class="content_cards">
      <div class="content_card _anim-items _anim-no-hide _active">
        <a href="mebel.html">
          <div class="content_card_img">
            <img class="content_card_img_one" src="images/menu11.png" alt="">
            <img class="content_card_img_two" src="images/menu1.png" alt="">
          </div>
          <div class="content_card_text">
            <h4>Мебель для дома</h4>
          </div>
        </a>
      </div>

      <div class="content_card _anim-items _anim-no-hide _active">
        <a href="pharmacy.html">
          <div class="content_card_img">
            <img class="content_card_img_one" src="images/menu2.png" alt="">
            <img class="content_card_img_two" src="images/menu22.png" alt="">
          </div>
          <div class="content_card_text">
            <h4>Оборудование для аптек</h4>
          </div>
        </a>
      </div>
      <div class="content_card _anim-items _anim-no-hide _active">
        <a href="steklo.html">
          <div class="content_card_img">
            <img class="content_card_img_one" src="images/menu3.png" alt="">
            <img class="content_card_img_two" src="images/menu33.png" alt="">

          </div>
          <div class="content_card_text">
            <h4>Стеклянные витрины</h4>
          </div>
        </a>
      </div>
      <div class="content_card _anim-items _anim-no-hide _active">
        <a href="ofisnaya-mebel.html">
          <div class="content_card_img">
            <img class="content_card_img_one" src="images/menu44.png" alt="">
            <img class="content_card_img_two" src="images/menu4.png" alt="">
          </div>
          <div class="content_card_text">
            <h4>Офисная мебель</h4>
          </div>
        </a>
      </div>
      <div class="content_card _anim-items _anim-no-hide _active">
        <a href="mebel-butik.html">
          <div class="content_card_img">
            <img class="content_card_img_one" src="images/menu55.png" alt="">
            <img class="content_card_img_two" src="images/menu5.png" alt="">
          </div>
          <div class="content_card_text">
            <h4>Мебель для бутика</h4>
          </div>
        </a>
      </div>
      <div class="content_card _anim-items _anim-no-hide _active">
        <a href="resepshn.html">
          <div class="content_card_img">
            <img class="content_card_img_one" src="images/menu6.png" alt="">
            <img class="content_card_img_two" src="images/menu66.png" alt="">
          </div>
          <div class="content_card_text">
            <h4>Ресепшн, барные стойки</h4>
          </div>
        </a>
      </div>
    </div>
  </div>
</section>
  `;
}
// lineDrevoA.innerHTML = `<a href="catalog.html">Каталог</a> / ${titleCopy2.textContent}`;

// listViewDiv.before(lineDrevo);

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
    i.classList.add('col-md-4');
    if (window.matchMedia('(min-width: 999px)').matches) {
      i.classList.add('col-md-3');
    }
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
<a href=${e.link}>
    <div class="product-image">
      <span class="hover-link"></span>
      <a href=${e.link} class="product-link">Посмотреть</a>
      <a href=${e.link}>
        <div>
          <img class="img-responsive" src=${e.img} alt="">
        </div>
      </a>
    </div>
    <a href=${e.link}>
      <div class="product-description">
        <div class="product-label">
          <div class="product-name">
            <h2>${e.title}  </h2>
            <p class="price">от ${formatter(e.price)} ₸</p>
            <p>${e.title}</p>
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
        </a>
        <div class="product_btn_wrapper">
        <button id="fly" class="product_cart_button fly viewList_product_card add_item btn btn-large btn-primary" data-id="1" data-title="<a href=${
          e.link
        }>${e.title}</a>" data-price= "${e.price}"  
        data-quantity="1" 
        data-img="${e.img}">
         <img class="basket" src="">&nbsp; В корзину
          </button>
        </div>
      </div>
      
      `),
      productRow.appendChild(i);
    listViewDiv.appendChild(bg_bot_1);
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
  Pictures_box = document.querySelector('.Pictures-box'),
  our_page_Slider = document.querySelector('.our_page_Slider'),
  adBlock_b3_slider = document.querySelector('.adBlock_b3_slider'),
  abBlock_b2_slider = document.querySelector('.abBlock_b2_slider'),
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
if (Pictures_box != null) {
  $('.Pictures-box').slick({
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
if (adBlock_b3_slider != null) {
  $('.adBlock_b3_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
}
if (abBlock_b2_slider != null) {
  $('.abBlock_b2_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    infinite: true,

    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 675,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
let preLoader = `<div class="loader-wrapper">
<div class="loader1"></div>
<div class="loder-section left-section"></div>
<div class="loder-section right-section"></div>
</div>`;
let preloaderWrap = document.createElement('div');
preloaderWrap.innerHTML = `<div class="loader-wrapper">
<div class="loader1"></div>
<div class="loder-section left-section"></div>
<div class="loder-section right-section"></div>
</div>`;
function preloader() {
  body.append(preloaderWrap);
}
preloader();
const timerId = setTimeout(() => {
  preloaderWrap.innerHTML = '';
}, 1000);
// document.body.onload = function () {
//   setTimeout(() => {
//     preloaderWrap.innerHTML = '';
//   }, 800);
// };
// setTimeout(() => {
//   preloaderWrap.innerHTML= ``;
// }, 2000)
// window.addEventListener('DOMContentLoaded', preloader);

null !== header &&
  (header.innerHTML = `
  <div class="header_wrapper">
  <div class="menu_burger">
    <a class="go_back" onclick="history.back()">
      <img class="go_back_img" src="/images/left-arrow.png" alt="">
    </a>
    <div class="menu_burger_logo">
      <a href="index.html"><img src="images/mebelcenter3.png" alt=""></a>
    </div>
    <div class="menu_burger_number">
      <a href="tel:87273449900">8(727) 344-99-00</a>
    </div>
    <div class="menu_burger_sub">
      <a class="opener"><span class="opener_burger">Opener</span></a>
    </div>
    <ul class="nav">
      <div class="nav_menu_item">
        <!-- <li>
       <div>
         <img src="images/menu1.svg" alt="">
       </div>
       <div> <a href="mebel.html">Мебель для дома</a></div>
     </li> -->
        <div class="accordions">
          <div class="accordion">
            <div class="accordion__slot_sub">
              <div><img src="images/msub3.svg" alt=""></div>
              <button class="accordion__button">Стеклянные витрины</button>
            </div>
            <div class="accordion__slot">
              <div class="accordion__panel">
                <p class="accordion-panel__content">
                  <a href="ostrov.html">
                    Островные витрины
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="steklo1.html">
                    Оборудование для аптеки Грин
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="ostrov1.html">
                    Островные торговые модули
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="steklo2.html">
                    Стеклянные витрины
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="ostrov2.html">
                    Торговый островок
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="ostrov3.html">
                    Островные витрины
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="accordion">
            <div class="accordion__slot_sub">
              <div><img src="images/msub5.svg" alt=""></div>
              <button class="accordion__button">Мебель для бутика</button>
            </div>
            <div class="accordion__slot">
              <div class="accordion__panel">
                <p class="accordion-panel__content">
                  <a href="odejda.html">
                    Одежда и аксессуары
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="accessories.html">
                    Аксессуары, Парфюмерия, Косметика
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="jeweler.html">
                    Ювелирные изделия и бижутерия
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="obuv.html">
                    Обувь и аксессуары
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="accordion">
            <div class="accordion__slot_sub">
              <div><img src="images/msub2.svg" alt=""></div>
              <button class="accordion__button">Оборудование для аптек</button>
            </div>
            <div class="accordion__slot">
              <div class="accordion__panel">
                <p class="accordion-panel__content">
                  <a href="megapolis-apteka.html">
                    Оборудование для аптеки Мегаполис
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="green-apteka.html">
                    Оборудование для аптеки Грин
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="massiv-apteka.html">
                    Оборудование для аптеки Массив
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="glianec-apteka.html">
                    Оборудование для аптеки Глянец
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="modern-apteka.html">
                    Оборудование для аптеки Модерн
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="premium-apteka.html">
                    Оборудование для аптеки Премиум
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="accordion">
            <div class="accordion__slot_sub">
              <div><img src="images/msub4.svg" alt=""></div>
              <button class="accordion__button">Офисная мебель</button>
            </div>
            <div class="accordion__slot">
              <div class="accordion__panel">
                <p class="accordion-panel__content">
                  <a href="agat.html">
                    Офисная мебель Агат
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="akkord.html">
                    Офисная мебель Аккорд
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="aksioma.html">
                    Офисная мебель Аксиома
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="blic.html">
                    Офисная мебель Блиц
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="format.html">
                    Офисная мебель Формат
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="gamma.html">
                    Офисная мебель Гамма
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="norton.html">
                    Офисная мебель Нортон
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="prego.html">
                    Офисная мебель Прего
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="smart.html">
                    Офисная мебель Смарт
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="spektr.html">
                    Офисная мебель Спектр
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="status.html">
                    Офисная мебель Статус
                  </a>
                </p>
                <p class="accordion-panel__content">
                  <a href="tandem.html">
                    Офисная мебель Тандем
                  </a>
                </p>
              </div>
            </div>
          </div>

        </div>
        <div class="accordion">
          <div class="accordion__slot_sub">
            <div><img src="images/msub6.svg" alt=""></div>
            <button class="accordion__button">Ресепшн, барные стойки</button>
          </div>
          <div class="accordion__slot">
            <div class="accordion__panel">
              <p class="accordion-panel__content">
                <a href="bar.html">
                  Барные стойки
                </a>
              </p>
              <p class="accordion-panel__content">
                <a href="reception.html">
                  Ресепшн
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="accordion">
          <div class="accordion__slot_sub">
            <div><img src="images/msub1.svg" alt=""></div>
            <button class="accordion__button">Мебель для дома</button>
          </div>
          <div class="accordion__slot">
            <div class="accordion__panel">
              <p class="accordion-panel__content">
                <a href="kuhni.html">
                  Кухни
                </a>
              </p>
              <p class="accordion-panel__content">
                <a href="prixozhie.html">
                  Прихожие
                </a>
              </p>
              <p class="accordion-panel__content">
                <a href="spalni.html">
                  Спальни
                </a>
              </p>
              <p class="accordion-panel__content">
                <a href="detskie.html">
                  Детские
                </a>
              </p>
              <p class="accordion-panel__content">
                <a href="gostinye.html">
                  Гостиные
                </a>
              </p>
              <p class="accordion-panel__content">
                <a href="shkafy.html">
                  Шкафы и Гардеробные
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="menu_burger_nav_phone">
        <div>
          <i class="fa fa-phone"></i>
        </div>
        <div>
          <a href="tel:87273449900">8(727) 344-99-00</a>
        </div>
      </div>
      <div class="menu_burger_nav_social">
        <div class="menu_burger_nav_social_item">
          <a href="https://www.instagram.com/idiamarket/">
            <object type="image/svg+xml" data="images/inst.svg"></object>
          </a>
        </div>
        <div class="menu_burger_nav_social_item">
          <a href="https://t.me/Raihan_106">
            <img src="images/telegran-icon.svg" alt="">
          </a>
        </div>
        <div class="menu_burger_nav_social_item">
          <a href="https://api.whatsapp.com/send/?phone=77015993322&text&app_absent=0">
            <img src="images/whatsapp-icon.svg" alt="">
          </a>
        </div>
        <div class="menu_burger_nav_social_item">
          <a href="">
            <img src="images/youtube-icon.svg" alt="">
          </a>
        </div>
      </div>
  </div>
</div>
<div class="header_menu_main">
  <div class="main">
    <div class="header_menu_main_wrapper">

      <div class="header_menu_main_end">
        <div>
          <a href="index.html">
            <div class="header_menu_main_item">
              Главная
            </div>
          </a>
        </div>
        <div>
          <a href="catalog.html">
            <div class="header_menu_main_item">
              Каталог Товаров
            </div>
          </a>
        </div>
        <div>
          <a href="dostavka.html">
            <div class="header_menu_main_item">
              Доставка
            </div>
          </a>
        </div>
        <div>
          <a href="portfolio.html">
            <div class="header_menu_main_item">
              Наши работы
            </div>
          </a>
        </div>
        <div>
          <a href="otzovik.php">
            <div class="header_menu_main_item">
              Отзывы
            </div>
          </a>
        </div>
        <div>
          <a href="about-us.html">
            <div class="header_menu_main_item">
              О нас
            </div>
          </a>
        </div>
        <div>
          <a href="contact.html">
            <div class="header_menu_main_item">
              Контакты
            </div>
          </a>
        </div>
      </div>

    </div>
  </div>
</div>
<div class="header_wrapper_bottom">
  <div class="header_wrapper_bottom_inner">
    <div class="header_wrapper_bottom_item">
      <a href="index.html">
        <div class="header_wrapper_bottom_item_img">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24">
            <path fill="currentColor"
              d="m20 8l-6-5.26a3 3 0 0 0-4 0L4 8a3 3 0 0 0-1 2.26V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.75A3 3 0 0 0 20 8Zm-6 12h-4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm5-1a1 1 0 0 1-1 1h-2v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5H6a1 1 0 0 1-1-1v-8.75a1 1 0 0 1 .34-.75l6-5.25a1 1 0 0 1 1.32 0l6 5.25a1 1 0 0 1 .34.75Z" />
          </svg>
        </div>
        <div class="header_wrapper_bottom_item_text">
          <p>Главная</p>
        </div>
      </a>
    </div>
    <div class="header_wrapper_bottom_item">
      <a href="dostavka.html">
        <div class="header_wrapper_bottom_item_img">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M1 12.5v5a1 1 0 0 0 1 1h1a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h1a1 1 0 0 0 1-1v-12a3 3 0 0 0-3-3h-9a3 3 0 0 0-3 3v2H6a3 3 0 0 0-2.4 1.2l-2.4 3.2a.61.61 0 0 0-.07.14l-.06.11a1 1 0 0 0-.07.35Zm16 6a1 1 0 1 1 1 1a1 1 0 0 1-1-1Zm-7-13a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v11h-.78a3 3 0 0 0-4.44 0H10Zm-2 6H4l1.2-1.6a1 1 0 0 1 .8-.4h2Zm-3 7a1 1 0 1 1 1 1a1 1 0 0 1-1-1Zm-2-5h5v2.78a3 3 0 0 0-4.22.22H3Z" />
          </svg>
        </div>
        <div class="header_wrapper_bottom_item_text">
          <p>Доставка</p>
        </div>
      </a>
    </div>
    <div class="header_wrapper_bottom_item">
      <a href="about-us.html">
        <div class="header_wrapper_bottom_item_img">
          <img src="images/abouticon.svg" alt="">
        </div>
        <div class="header_wrapper_bottom_item_text">
          <p>О нас</p>
        </div>
      </a>
    </div>
    <div class="header_wrapper_bottom_item">
      <a href="otzovik.php">
        <div class="header_wrapper_bottom_item_img">
          <img src="images/reviewsicon.svg" alt="">
        </div>
        <div class="header_wrapper_bottom_item_text">
          <p>Отзывы</p>
        </div>
      </a>
    </div>

    <div class="header_wrapper_bottom_item">
      <a href="contact.html">
        <div class="header_wrapper_bottom_item_img">

          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24">
            <path fill="currentColor"
              d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </div>
        <div class="header_wrapper_bottom_item_text">
          <p>Контакты</p>
        </div>
      </a>
    </div>
  </div>
</div>
<div class="header_main_bottom">
  <div class="main">
    <div class="header_main_bottom_inner">
      <div class="header_main_bottom_start">
        <div class="header_menu_main_burger">
          <section>
            <!-- <input id="menu-toggle" type="checkbox" />
         <label class='menu-button-container' for="menu-toggle">
           <div class='menu-button'></div>
  
         </label>
         <p class="top-nav_text"> Каталог</p> -->
            <div class="header_menu_main_start">
              <a href="index.html"><img src="images/mebelcenter.svg" alt=""></a>
            </div>
            <!-- <ul class="menu">
           <div class="header_menu_main_burger_wrapper">
             <div class="header_menu_main_burger_inner">
               <div class="header_menu_main_burger_item">
                 <h3>Мебель для дома</h3>
                 <div class="header_menu_main_burger_content">
                   <div class="header_menu_main_burger_link">
                     <a href="kuhni.html">Кухни</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="prixozhie.html">Прихожие</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="spalni.html">Спальни</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="detskie.html">Детские</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="gostinye.html">Гостиные</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="shkafy.html">Купе, Шкафы и Гардеробные</a>
                   </div>
                 </div>
               </div>
               <div class="header_menu_main_burger_item">
                 <h3>Оборудование для аптек</h3>
                 <div class="header_menu_main_burger_content">
                   <div class="header_menu_main_burger_link">
                     <a href="megapolis-apteka.html">Мебель для аптеки Мегаполис</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="green-apteka.html">Оборудование для аптеки Грин</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="massiv-apteka.html">Оборудование для аптеки Массив</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="glianec-apteka.html">Оборудование для аптеки Глянец</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="modern-apteka.html">Оборудование для аптеки Модерн</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="premium-apteka.html">Оборудование для аптеки Премиум</a>
                   </div>
                 </div>
               </div>
  
               <div class="header_menu_main_burger_item">
                 <h3>Офисная мебель</h3>
                 <div class="header_menu_main_burger_content">
                   <div class="header_menu_main_burger_link">
                     <a href="agat.html">Офисная мебель Агат</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="akkord.html">Офисная мебель Аккорд</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="aksioma.html">Офисная мебель Аксиома</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="blic.html">Офисная мебель Блиц</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="format.html">Офисная мебель Формат</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="gamma.html">Офисная мебель Гамма</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="norton.html">Офисная мебель Нортон</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="prego.html">Офисная мебель Прего</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="smart.html">Офисная мебель Смарт</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="spektr.html">Офисная мебель Спектр</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="status.html">Офисная мебель Статус</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="tandem.html">Офисная мебель Тандем</a>
                   </div>
                 </div>
               </div>
               <div class="header_menu_main_burger_item">
                 <h3>Мебель для бутика</h3>
                 <div class="header_menu_main_burger_content">
                   <div class="header_menu_main_burger_link">
                     <a href="odejda.html">Одежда и аксессуары</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="accessories.html">Аксессуары, Парфюмерия, Косметика</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="jeweler.html">Ювелирные изделия и бижутерия</a>
                   </div>
                   <div class="header_menu_main_burger_link">
                     <a href="obuv.html">Обувь и аксессуары</a>
                   </div>
                 </div>
               </div>
  
             </div>
  
           </div>
         </ul> -->
          </section>
        </div>
      </div>

      <div class="header_main_bottom_end">
        <div class="header_main_bottom_center">
          <div class="searchLogParent searchLogParentFeatured">
            <div class="search_log">
              <div class="sample eight search-box">
                <div class="search_log_inner">
                  <div class="search_log_icon search-btn search-btn2">
                    <i class="fa fa-search"></i>
                  </div>
                  <input type="text" name="" autocomplete="off" id="txtSearch" placeholder="Введите запрос..."
                    class="sampleSearch search-txt">
                  <input type="text" name="" autocomplete="off" id="txtSearch2" placeholder="Введите запрос..."
                    class="sampleSearch sampleSearch2 search-txt">
                </div>

                <div>
                  <button type="submit" class="btn btn-search search-btn search-btn2">
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
                <!-- <span class="cart-icon image-icon">
                  <strong>
                    <span class="badge badge-notify my-cart-badge card_count_display">
                      <div class="label-place">
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                          xmlns="http://www.w3.org/2000/svg" class="header-cart__icon">
                          <g clip-path="url(#clip0_2842_18440)">
                            <path
                              d="M5.32446 13.5L5.27252 13.0584L4.33152 5.05841L4.26584 4.5H4.8281H20.7588H20.7601L5.32446 13.5ZM5.32446 13.5H5.7691M5.32446 13.5H5.7691M5.7691 13.5L18.0063 13.5L5.7691 13.5ZM22.679 4.39708L22.6797 4.39792C22.9144 4.67837 23.0846 5.00701 23.1782 5.36056C23.2717 5.71411 23.2864 6.08391 23.2211 6.44376L23.221 6.44428L22.436 10.7983C22.2489 11.8366 21.7028 12.7762 20.8933 13.4528C20.0837 14.1294 19.0622 14.5001 18.0071 14.5H18.0071H6.0871H5.37999L5.61569 15.1667C5.85639 15.8475 6.30177 16.4372 6.89078 16.8549C7.47979 17.2726 8.18359 17.498 8.90569 17.5H8.9071H19.3501C19.4827 17.5 19.6099 17.5527 19.7037 17.6464C19.7974 17.7402 19.8501 17.8674 19.8501 18C19.8501 18.1326 19.7974 18.2598 19.7037 18.3536C19.6099 18.4473 19.4827 18.5 19.3501 18.5H8.9071C7.80446 18.5 6.74019 18.0952 5.9163 17.3624C5.09242 16.6296 4.56625 15.6198 4.43769 14.5247L4.43768 14.5246L3.06168 2.8246L3.06166 2.8245C3.01868 2.45962 2.84327 2.12321 2.56872 1.87907C2.29417 1.63493 1.93956 1.50005 1.57216 1.5H1.5721H1.3501C1.21749 1.5 1.09031 1.44732 0.996544 1.35355C0.902776 1.25979 0.850098 1.13261 0.850098 1C0.850098 0.867392 0.902776 0.740215 0.996544 0.646447C1.09031 0.552678 1.21749 0.5 1.3501 0.5H1.57199C1.57202 0.5 1.57206 0.5 1.5721 0.5C2.1842 0.500342 2.77492 0.725238 3.23227 1.13206C3.68969 1.53894 3.98191 2.09951 4.05353 2.7075L4.05364 2.70841L4.09564 3.05941L4.14836 3.5H4.5921L20.7601 3.5L20.7607 3.5C21.1267 3.49955 21.4883 3.5797 21.8198 3.73474C22.1514 3.88978 22.4447 4.11591 22.679 4.39708Z"
                              fill="white" stroke="white"></path>
                            <path
                              d="M8.8501 22C8.8501 22.8284 8.17852 23.5 7.3501 23.5C6.52167 23.5 5.8501 22.8284 5.8501 22C5.8501 21.1716 6.52167 20.5 7.3501 20.5C8.17852 20.5 8.8501 21.1716 8.8501 22Z"
                              fill="white" stroke="white"></path>
                            <path
                              d="M18.8501 22C18.8501 22.8284 18.1785 23.5 17.3501 23.5C16.5217 23.5 15.8501 22.8284 15.8501 22C15.8501 21.1716 16.5217 20.5 17.3501 20.5C18.1785 20.5 18.8501 21.1716 18.8501 22Z"
                              fill="white" stroke="white"></path>
                          </g>
                          <defs>
                            <clipPath id="clip0_2842_18440">
                              <rect width="24" height="24" fill="white" transform="translate(0.350098)"></rect>
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                    </span>-->
                </strong>
                <div id="open" class="cart-icon image-icon add_item">
                  <div id="tray" class="clickBusket">
                    <div class="badge badge-notify my-cart-badge">
                      <div class="label-place">
                        <i class="fa fa-shopping-basket fa-2x" aria-hidden="true"></i>
                      </div>
                    </div>
                  </div>
                </div>
                </span>
              </div>
            </div>
          </div>
        </div>
        <a href="tel:87273449900">
          <!-- <a>
            <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
              <div class="coccoc-alo-ph-circle"></div>
              <div class="coccoc-alo-ph-circle-fill"></div>
              <div class="coccoc-alo-ph-img-circle"></div>
            </div>
          </a> -->
          <div class="header_main_bottom_end_phone">

            <div>
              <a href="tel:87273449900">8(727) 344-99-00</a>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>`);

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
      price: 44840,
    },
    {
      link: 'classic-gos.html',
      img: 'images/classic-gos.jpg',
      title: 'Классика',
      price: 124000,
    },
  ],
  productData7 = [
    {
      link: 'djaz-gos.html',
      img: 'images/thumbs/gostinye/dja.jpeg',
      title: 'Гостиная Джаз',
      price: 44840,
    },
    {
      link: 'elizabet.html',
      img: 'images/thumbs/gostinye/eliz.jpg',
      title: 'Гостиная Элизабет',
      price: 48960,
    },
    {
      link: 'palermo.html',
      img: 'images/thumbs/gostinye/pal.jpeg',
      title: 'Гостиная Палермо',
      price: 42950,
    },
    {
      link: 'sonata.html',
      img: 'images/thumbs/gostinye/son.jpg',
      title: 'Гостиная Соната',
      price: 44850,
    },
    {
      link: 'granada.html',
      img: 'images/thumbs/gostinye/gra.jpg',
      title: 'Гостиная Гранада',
      price: 38450,
    },
    {
      link: 'lozanna.html',
      img: 'images/thumbs/gostinye/loz.jpg',
      title: 'Гостиная Лозанна',
      price: 38560,
    },
    {
      link: 'karlino.html',
      img: 'images/thumbs/gostinye/kar.jpg',
      title: 'Гостиная Карлино',
      price: 41960,
    },
    {
      link: 'fortuna.html',
      img: 'images/thumbs/gostinye/for.jpeg',
      title: 'Гостиная Фортуна',
      price: 33560,
    },
    {
      link: 'bodego.html',
      img: 'images/thumbs/gostinye/bod.jpg',
      title: 'Гостиная Бодега',
      price: 42640,
    },
  ],
  productData8 = [
    {
      link: 'savanna.html',
      img: 'images/thumbs/gostinye/sav.jpeg',
      title: 'Гостиная Саванна',
      price: 124000,
    },
    {
      link: 'elika.html',
      img: 'images/thumbs/gostinye/elik.jpg',
      title: 'Гостиная Элика',
      price: 124000,
    },
    {
      link: 'valencia.html',
      img: 'images/thumbs/gostinye/val.jpg',
      title: 'Гостиная Валенсия',
      price: 124000,
    },
    {
      link: 'veskona.html',
      img: 'images/thumbs/gostinye/ves.jpg',
      title: 'Гостиная Вескона',
      price: 124000,
    },
    {
      link: 'elza.html',
      img: 'images/thumbs/gostinye/elza.jpg',
      title: 'Гостиная Эльза',
      price: 124000,
    },
    {
      link: 'grace.html',
      img: 'images/thumbs/gostinye/grace.jpg',
      title: 'Гостиная Грейс',
      price: 124000,
    },
  ],
  productData9 = [
    {
      link: 'shkaf.html',
      img: 'images/shkaf.jpg',
      title: 'Шкафы',
      price: 77120,
    },
    {
      link: 'garderob.html',
      img: 'images/garderob.jpg',
      title: 'Гардеробные',
      price: 107630,
    },
  ],
  productData10 = [
    {
      link: 'arena-shkaf.html',
      img: 'images/thumbs/shkafy/are.jpg',
      title: 'Шкаф Арена',
      price: 77120,
    },
    {
      link: 'elika-shkaf.html',
      img: 'images/thumbs/shkafy/eli.jpg',
      title: 'Шкаф – купе Элика',
      price: 79860,
    },
    {
      link: 'gvarneri-shkaf.html',
      img: 'images/thumbs/shkafy/gva.jpg',
      title: 'Шкаф – купе Гварнери',
      price: 77860,
    },
    {
      link: 'norton-shkaf.html',
      img: 'images/thumbs/shkafy/nor.jpg',
      title: 'Шкаф Нортон',
      price: 76850,
    },
    {
      link: 'ringo-shkaf.html',
      img: 'images/thumbs/shkafy/rin.jpg',
      title: 'Шкаф – купе Ринго',
      price: 78560,
    },
    {
      link: 'smart-shkaf.html',
      img: 'images/thumbs/shkafy/sma.png',
      title: 'Шкаф Смарт',
      price: 78120,
    },
    {
      link: 'snejana-shkaf.html',
      img: 'images/thumbs/shkafy/sne.jpg',
      title: 'Шкаф Снежана',
      price: 74230,
    },
    {
      link: 'toronto-shkaf.html',
      img: 'images/thumbs/shkafy/tor.jpg',
      title: 'Шкаф Торонто',
      price: 72680,
    },
    {
      link: 'varis-shkaf.html',
      img: 'images/thumbs/shkafy/var.jpg',
      title: 'Шкаф Варис',
      price: 78230,
    },
  ],
  productData11 = [
    {
      link: 'ampir.html',
      img: 'images/thumbs/garderob/amp.jpg',
      title: 'Гардеробная Ампир',
      price: 107630,
    },
    {
      link: 'torino.html',
      img: 'images/thumbs/garderob/tor.JPG',
      title: 'Гардеробная Торино',
      price: 96850,
    },
    {
      link: 'premium-gar.html',
      img: 'images/thumbs/garderob/pre.jpg',
      title: 'Гардеробная Премиум',
      price: 94560,
    },
    {
      link: 'roskosh.html',
      img: 'images/thumbs/garderob/ros.jpg',
      title: 'Гардеробная Роскошь',
      price: 108520,
    },
    {
      link: 'armadio.html',
      img: 'images/thumbs/garderob/arm.jpg',
      title: 'Гардеробная Армадио',
      price: 109560,
    },
    {
      link: 'vitra.html',
      img: 'images/thumbs/garderob/vit.jpg',
      title: 'Гардеробная Витра',
      price: 100120,
    },
  ],
  productData12 = [
    {
      link: 'karapuz.html',
      img: 'images/thumbs/butik/odejda/chi.jpg',
      title: 'Мебель для детcкого магазина',
      subtitle: 'Оборудование для десткого магазина',
      price: 53260,
    },
    {
      link: 'massiv-mag.html',
      img: 'images/thumbs/butik/odejda/mas.jpg',
      title: 'Мебель для магазина Массив',
      price: 52630,
      subtitle: 'Мебель для магазина Массив',
    },
    {
      link: 'kontur.html',
      img: 'images/thumbs/butik/odejda/mag.jpg',
      title: 'Мебель для магазина Контур',
      price: 54820,
      subtitle: 'Оборудование для магазина одежды',
    },
    {
      link: 'modern-mag.html',
      img: 'images/thumbs/butik/odejda/mod.jpg',
      title: 'Мебель для магазина Модерн',
      price: 51940,
      subtitle: 'Оборудование для магазина',
    },
    {
      link: 'venge-mag.html',
      img: 'images/thumbs/butik/odejda/ven.jpg',
      title: 'Мебель для магазина Венге',
      price: 51890,
      subtitle: 'Серия Венге',
    },
    {
      link: 'deko-mag.html',
      img: 'images/thumbs/butik/odejda/dek.jpg',
      title: 'Мебель для магазина Деко',
      price: 54750,
      subtitle: 'Мебель для магазина Деко',
    },
  ],
  productData13 = [
    {
      link: 'akva-acc.html',
      img: 'images/thumbs/butik/accessories/akv.jpg',
      title: 'Для магазина парфюмерии Аква',
      subtitle: 'Оборудование для магазина косметики и парфюмерии Аква',
      price: 63960,
    },
    {
      link: 'deko-acc.html',
      img: 'images/thumbs/butik/accessories/dek.JPG',
      title: 'Для магазина аксессуаров Деко',
      subtitle: 'Для магазина аксессуаров Деко',
      price: 65930,
    },
    {
      link: 'kamelia-acc.html',
      img: 'images/thumbs/butik/accessories/kam.jpg',
      title: 'Для магазина косметики Камелия',
      subtitle: 'Для магазина косметики Камелия',
      price: 64820,
    },
    {
      link: 'massiv-acc.html',
      img: 'images/thumbs/butik/accessories/mas.JPG',
      title: 'Для магазина подарков Массив',
      subtitle: 'Для магазина подарков Массив',
      price: 69780,
    },
    {
      link: 'modern-acc.html',
      img: 'images/thumbs/butik/accessories/mod.jpg',
      title: 'Для магазина косметики Модерн',
      subtitle: 'Оборудование для магазина косметики Модерн',
      price: 62950,
    },
    {
      link: 'siluet-acc.html',
      img: 'images/thumbs/butik/accessories/sil.jpg',
      title: 'Для магазина косметики Силуэт',
      subtitle: 'Для магазина косметики Силуэт',
      price: 68560,
    },
  ],
  productData14 = [
    {
      link: 'akva-jeweler.html',
      img: 'images/thumbs/butik/jeweler/akv.jpg',
      title: 'Аква',
      subtitle: 'Для ювелирного магазина Аква',
      price: 92320,
    },
    {
      link: 'briz-jeweler.html',
      img: 'images/thumbs/butik/jeweler/bri.jpg',
      title: 'Бриз',
      subtitle: 'Для ювелирного магазина Бриз',
      price: 95230,
    },
    {
      link: 'classic-jeweler.html',
      img: 'images/thumbs/butik/jeweler/cla.jpg',
      title: 'Классик',
      subtitle: 'Для ювелирного магазина Классик',
      price: 98620,
    },
    {
      link: 'deko-jeweler.html',
      img: 'images/thumbs/butik/jeweler/dek.jpg',
      title: 'Деко',
      subtitle: 'Для ювелирного магазина Деко',
      price: 99850,
    },
    {
      link: 'modern-jeweler.html',
      img: 'images/thumbs/butik/jeweler/mod.jpg',
      title: 'Модерн',
      subtitle: 'Для ювелирного магазина Модерн',
      price: 94850,
    },
    {
      link: 'premium-jeweler.html',
      img: 'images/thumbs/butik/jeweler/pre.jpg',
      title: 'Премиум',
      subtitle: 'Для ювелирного магазина Премиум',
      price: 99560,
    },
  ],
  productData15 = [
    {
      link: 'lux-mag.html',
      img: 'images/thumbs/butik/odejda/lux.jpg',
      title: 'Мебель для магазина Люкс',
      subtitle: 'Оборудование для магазина обуви',
      price: 54230,
    },
    {
      link: 'premium-mag.html',
      img: 'images/thumbs/butik/odejda/pre.jpg',
      title: 'Мебель для магазина Премиум',
      subtitle: 'Мебель для магазина Премиум',
      price: 53120,
    },
    {
      link: 'roskosh-mag.html',
      img: 'images/thumbs/butik/odejda/ros.jpg',
      title: 'Мебель для магазина Роскошь',
      subtitle: 'Мебель для магазина обуви Роскошь',
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
    {
      link: 'kas-reception.html',
      title: 'Кассовые столы для магазина',
      img: 'images/resM1.jpg',
      price: 65480,
    },
    {
      link: 'kas-reception_magaz.html',
      title: 'Кассовые стойки',
      img: 'images/res00.jpg',
      price: 65480,
    },
  ];

productData18 = [
  {
    link: 'ostrov.html',
    img: 'images/thumbs/steklo/1.jpg',
    title: 'Островные витрины',
    subtitle: 'Островные витрины',
    price: 75349,
  },
  {
    link: 'steklo1.html',
    title: 'Стеклянные витрины',
    subtitle: 'Стеклянные витрины',
    img: 'images/thumbs/steklo/2.jpg',
    price: 48769,
  },
  {
    link: 'ostrov1.html',
    title: 'Островные торговые модули',
    subtitle: 'Островные торговые модули (торговые островки)',
    price: 68619,
    img: 'images/thumbs/steklo/3.jpg',
  },
  {
    link: 'steklo2.html',
    title: 'Стеклянные витрины',
    subtitle: 'Стеклянные витрины',
    price: 27849,
    img: 'images/thumbs/steklo/4.jpg',
  },
  {
    link: 'ostrov2.html',
    title: 'Торговый островок',
    subtitle: 'Торговый островок',
    price: 73629,
    img: 'images/thumbs/steklo/5.jpg',
  },
  {
    link: 'ostrov3.html',
    title: 'Островные витрины',
    subtitle: 'Островные витрины',
    price: 64359,
    img: 'images/thumbs/steklo/6.jpg',
  },
  {
    link: 'ostrov_coffe.html',
    title: 'Кофейный островок',
    subtitle: 'Кофейный островок',
    price: 73629,
    img: 'images/product-2-22.jpg',
  },
  {
    link: 'ostrov_torg_coffe.html',
    title: 'Торговый островок Кофе',
    subtitle: 'Торговый островок Кофе',
    price: 73629,
    img: 'images/pro1-11.jpg',
  },
];

productData19 = [
  {
    link: 'odejda.html',
    img: 'images/odejda.jpg',
    subtitle: 'Одежда и аксессуары',
    price: 53260,
    title: 'Одежда и аксессуары',
  },
  {
    link: 'accessories.html',
    title: 'Аксессуары, Парфюмерия, Косметика',
    subtitle: 'Аксессуары, Парфюмерия, Косметика',
    price: 63960,
    img: 'images/kosmetika.jpg',
  },
  {
    link: 'jeweler.html',
    title: 'Ювелирные изделия и бижутерия',
    subtitle: 'Ювелирные изделия и бижутерия',
    price: 92320,
    img: 'images/thumbs/steklo/3.jpg',
  },
  {
    link: 'obuv.html',
    title: 'Обувь и аксессуары',
    subtitle: 'Обувь и аксессуары',
    price: 54230,
    img: 'images/obuv.jpg',
  },
];
productData20 = [
  {
    link: 'megapolis-apteka.html',
    title: 'Мебель для аптеки Мегаполис',
    img: 'images/thumbs/butik/pharmacy/meg.jpg',
    subtitle: 'Оборудование для аптеки Мегаполис',
    price: 110230,
  },
  {
    link: 'green-apteka.html',
    title: 'Оборудование для аптеки Грин',
    img: 'images/thumbs/butik/pharmacy/gre.jpg',
    subtitle: 'Оборудование для аптеки Грин',
    price: 106960,
  },
  {
    link: 'massiv-apteka.html',
    title: 'Оборудование для аптеки Массив',
    img: 'images/thumbs/butik/pharmacy/mas.jpg',
    subtitle: 'Оборудование для аптеки Массив',
    price: 109690,
  },
  {
    link: 'glianec-apteka.html',
    title: 'Оборудование для аптеки Глянец',
    img: 'images/thumbs/butik/pharmacy/gli.jpg',
    subtitle: 'Оборудование для аптеки Глянец',
    price: 118560,
  },
  {
    link: 'modern-apteka.html',
    title: 'Оборудование для аптеки Модерн',
    img: 'images/thumbs/butik/pharmacy/mod.png',
    subtitle: 'Оборудование для аптеки Модерн',
    price: 119360,
  },
  {
    link: 'premium-apteka.html',
    title: 'Оборудование для аптеки Премиум',
    img: 'images/thumbs/butik/pharmacy/pre.jpg',
    subtitle: 'Оборудование для аптеки Премиум',
    price: 119560,
  },
];
productData21 = [
  {
    link: 'ofisnaya-mebel_personal.html',
    title: 'Мебель для персонала',
    img: 'images/thumbs/office/tan.jpg',
    subtitle: 'Мебель для персонала',
    price: 62350,
  },
  {
    link: 'ofisnaya-mebel_ruko.html',
    title: 'Мебель для руководителей',
    img: 'images/ofNo2.jpg',
    subtitle: 'Мебель для персонала',
    price: 62350,
  },

  {
    link: 'ofisnaya-mebel_open.html',
    title: 'Рабочие станции Open space',
    img: 'images/op01.jpg',
    subtitle: 'Мебель для персонала',
    price: 62350,
  },
  {
    link: 'ofisnaya-mebel_char.html',
    title: 'Мебель для переговорных',
    img: 'images/p06-1.jpg',
    subtitle: 'Мебель для персонала',
    price: 62350,
  },
  {
    link: 'ofisnaya-mebel_personal.html',
    title: 'Офисные шкафы',
    img: 'images/thumbs/office/tan.jpg',
    subtitle: 'Мебель для персонала',
    price: 62350,
  },
  {
    link: 'reception.html',
    title: 'Мебель для приемных',
    img: 'images/thumbs/office/tan.jpg',
    subtitle: 'Мебель для персонала',
    price: 62350,
  },
  // {
  //   link: 'agat.html',
  //   title: 'Офисная мебель Агат',
  //   img: 'images/thumbs/office/aga.jpg',
  //   subtitle: 'Коллекция Агат',
  //   price: 66960,
  // },
  // {
  //   link: 'akkord.html',
  //   title: 'Офисная мебель Аккорд',
  //   img: 'images/thumbs/office/akk.jpg',
  //   subtitle: 'Офисная мебель Аккорд',
  //   price: 77850,
  // },
  // {
  //   link: 'norton.html',
  //   title: 'Офисная мебель Нортон',
  //   img: 'images/thumbs/office/nor.jpg',
  //   subtitle: 'Оборудование для аптеки Премиум',
  //   price: 79630,
  // },
  // {
  //   link: 'prego.html',
  //   title: 'Офисная мебель Прего',
  //   img: 'images/thumbs/office/pre.jpg',
  //   subtitle: 'Оборудование для аптеки Премиум',
  //   price: 82630,
  // },
  // {
  //   link: 'smart.html',
  //   title: 'Офисная мебель Смарт',
  //   img: 'images/thumbs/office/sma.jpg',
  //   subtitle: 'Оборудование для аптеки Премиум',
  //   price: 88750,
  // },
  // {
  //   link: 'spektr.html',
  //   title: 'Офисная мебель Спектр',
  //   img: 'images/thumbs/office/spe.jpg',
  //   subtitle: 'Оборудование для аптеки Премиум',
  //   price: 70950,
  // },
  // {
  //   link: 'status.html',
  //   title: 'Офисная мебель Статус',
  //   img: 'images/thumbs/office/sta.jpg',
  //   subtitle: 'Оборудование для аптеки Премиум',
  //   price: 89860,
  // },
];
productData21_1 = [
  {
    link: 'tandem.html',
    title: 'Офисная мебель Тандем',
    img: 'images/thumbs/office/tan.jpg',
    subtitle: 'Оборудование для аптеки Премиум',
    price: 62350,
  },
  {
    link: 'aksioma.html',
    title: 'Офисная мебель Аксиома',
    img: 'images/thumbs/office/aks.jpg',
    subtitle: 'Офисная мебель Аксиома',
    price: 74360,
  },
  {
    link: 'blic.html',
    title: 'Офисная мебель Блиц',
    img: 'images/thumbs/office/bli.jpg',
    subtitle: 'Офисная мебель Аксиома',
    price: 87960,
  },
  {
    link: 'format.html',
    title: 'Офисная мебель Формат',
    img: 'images/thumbs/office/for.jpg',
    subtitle: 'Оборудование для аптеки Премиум',
    price: 86320,
  },
  {
    link: 'gamma.html',
    title: 'Офисная мебель Гамма',
    img: 'images/thumbs/office/gam.jpg',
    subtitle: 'Оборудование для аптеки Премиум',
    price: 81630,
  },
];
productData21_2 = [
  {
    link: 'status.html',
    title: 'Офисная мебель Статус',
    img: 'images/thumbs/office/sta.jpg',
    subtitle: 'Офисная мебель Статус',
    price: 89860,
  },
  {
    link: 'of_mebel_1.html',
    title: 'Кабинет руководителя Brix Дуб',
    img: 'images/ofNo.jpg',
    subtitle: 'Кабинет руководителя Brix Дуб',
    price: 89860,
  },
  {
    link: 'of_mebel_2.html',
    title: 'Кабинет руководителя Torino Дуб',
    img: 'images/ofNo2.jpg',
    subtitle: 'Кабинет руководителя Torino Дуб золотой/Венге Цаво',
    price: 89860,
  },

  {
    link: 'of_mebel_3.html',
    title: 'Кабинет руководителя Nelson Дезира',
    img: 'images/ofNo3.jpg',
    subtitle: 'Кабинет руководителя Nelson Дезира темная/Антрацит',
    price: 89860,
  },
];

productData21_3 = [
  {
    link: 'op_mebel_1.html',
    title: 'Офисная мебель Vita Дуб Сонома',
    img: 'images/op01.jpg',
    subtitle: 'Офисная мебель  Vita Дуб Сонома',
    price: 89860,
  },
  {
    link: 'op_mebel_2.html',
    title: 'Офисная мебель  Sigma Светлый дуб',
    img: 'images/op02.jpg',
    subtitle: 'Офисная мебель  Sigma Светлый дуб',
    price: 89860,
  },
  {
    link: 'op_mebel_3.html',
    title: 'Офисная мебель Sitara Древесина белая',
    img: 'images/op3-1.jpg',
    subtitle: 'Офисная мебель  Sitara Древесина белая',
    price: 89860,
  },
];
productData21_4 = [
  {
    link: 'p_mebel_1.html',
    title: 'Столы для переговоров Multimeeting',
    img: 'images/p04.jpg',
    subtitle: 'Столы для переговоров Multimeeting',
    price: 89860,
  },
  {
    link: 'p_mebel_2.html',
    title: 'Столы для переговоров Приоритет',
    img: 'images/p05-1.jpg',
    subtitle: 'Столы для переговоров Приоритет',
    price: 89860,
  },
  {
    link: 'p_mebel_3.html',
    title: 'Столы для переговоров Lava Табак',
    img: 'images/p06-1.jpg',
    subtitle: ' Столы для переговоров Lava Табак',
    price: 89860,
  },
];
productData22 = [
  {
    link: 'bar.html',
    title: 'Барные стойки',
    img: 'images/bar.jpg',
    price: 88520,
  },
  {
    link: 'reception.html',
    title: 'Ресепшн',
    img: 'images/reception.jpg',
    price: 63590,
  },
];
productData23 = [
  {
    link: 'modern.html',
    title: 'Модерн',
    img: 'images/modern.jpg',
    price: 62430,
  },
  {
    link: 'classic.html',
    title: 'Классика',
    img: 'images/classic.jpg',
    price: 94680,
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
    price: 54850,
  },
  {
    link: 'milana.html',
    title: 'Спальный гарнитур Милана',
    img: 'images/thumbs/spalni/mil.jpeg',
    price: 64780,
  },
  {
    link: 'naomi.html',
    title: 'Спальный гарнитур Наоми',
    img: 'images/thumbs/spalni/nao.jpeg',
    price: 62580,
  },
  {
    link: 'san-remo.html',
    title: 'Спальный гарнитур Сан-Ремо',
    img: 'images/thumbs/spalni/san.jpg',
    price: 67560,
  },

  {
    link: 'ravenna.html',
    title: 'Спальный гарнитур Равенна',
    img: 'images/thumbs/spalni/rav.jpg',
    price: 59630,
  },
  {
    link: 'nicole.html',
    title: 'Спальный гарнитур Николь',
    img: 'images/thumbs/spalni/nic.jpg',
    price: 60960,
  },
  {
    link: 'sonata-spalni.html',
    title: 'Спальный гарнитур Соната',
    img: 'images/thumbs/spalni/son.jpeg',
    price: 124000,
  },

  {
    link: 'tokio.html',
    title: 'Спальный гарнитур Токио',
    img: 'images/thumbs/spalni/tok.jpeg',
    price: 66930,
  },
  {
    link: 'valencia-spalni.html',
    title: 'Спальный гарнитур Валенсия',
    img: 'images/thumbs/spalni/val.jpg',
    price: 69820,
  },
  {
    link: 'vegas.html',
    title: 'Спальный гарнитур Вегас',
    img: 'images/thumbs/spalni/vio.jpeg',
    price: 69820,
  },
];
productData28 = [
  {
    link: 'delta.html',
    title: 'Детский гарнитур Дельта',
    img: 'images/thumbs/detskie/del.jpg',
    price: 45820,
  },
  {
    link: 'liberty.html',
    title: 'Детский гарнитур Либерти',
    img: 'images/thumbs/detskie/lib.png',
    price: 47630,
  },
  {
    link: 'massiv.html',
    title: 'Детский гарнитур Массив',
    img: 'images/thumbs/detskie/mas.png',
    price: 46960,
  },

  {
    link: 'nov-mal.html',
    title: 'Мебель для новорожденных',
    img: 'images/thumbs/detskie/nov_mal.jpg',
    price: 50760,
  },
  {
    link: 'orion.html',
    title: 'Детский гарнитур Орион',
    img: 'images/thumbs/detskie/ori.jpg',
    price: 51630,
  },
  {
    link: 'princess.html',
    title: 'Детский гарнитур Принцесса',
    img: 'images/thumbs/detskie/pri.jpg',
    price: 52960,
  },
  {
    link: 'provance.html',
    title: 'Детский гарнитур Прованс',
    img: 'images/thumbs/detskie/pro.png',
    price: 54360,
  },
  {
    link: 'ringo.html',
    title: 'Детский гарнитур Ринго',
    img: 'images/thumbs/detskie/rin.png',
    price: 51630,
  },
  {
    link: 'snejana.html',
    title: 'Детский гарнитур Снежана',
    img: 'images/thumbs/detskie/sne.jpg',
    price: 48630,
  },
  {
    link: 'sonia.html',
    title: 'Детский гарнитур Соня',
    img: 'images/thumbs/detskie/son.png',
    price: 49530,
  },

  {
    link: 'teenager.html',
    title: 'Детский гарнитур Тинейджер',
    img: 'images/thumbs/detskie/tee.jpg',
    price: 58620,
  },
  {
    link: 'urban.html',
    title: 'Детский гарнитур Урбан',
    img: 'images/thumbs/detskie/urb.jpg',
    price: 57980,
  },
];
productData29 = [
  {
    link: 'kuhni.html',
    title: 'Кухни',
    price: 62430,
    img: 'images/pr1.jpg',
  },
  {
    link: 'prixozhie.html',
    title: 'Прихожие',
    price: 85320,
    img: 'images/img5.jpg',
  },
  {
    link: 'spalni.html',
    title: 'Спальни',
    price: 59860,
    img: 'images/img3.jpg',
  },
  {
    link: 'detskie.html',
    title: 'Детские',
    price: 45820,
    img: 'images/img4.jpg',
  },

  {
    link: 'gostinye.html',
    title: 'Гостиные',
    price: 45820,
    img: 'images/img2.jpg',
  },

  {
    link: 'shkafy.html',
    title: 'Шкаф-купе, Гардеробная',
    price: 77120,
    img: 'images/img7.jpg',
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
  case 'ofisnaya-mebel_personal.html':
    displayList(productData21_1);
    break;
  case 'ofisnaya-mebel_ruko.html':
    displayList(productData21_2);
    break;
  case 'ofisnaya-mebel_open.html':
    displayList(productData21_3);
    break;
  case 'ofisnaya-mebel_char.html':
    displayList(productData21_4);
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
  case 'mebel.html':
    displayList(productData29);
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

// window.onload = function () {
//   Particles.init({
//     selector: ".background"
//   });
// };
// const particles = Particles.init({
//   selector: ".background",
//   color: ["#03dac6", "#ff0266", "#000000"],
//   connectParticles: true,
//   responsive: [
//     {
//       breakpoint: 768,
//       options: {
//         color: ["#faebd7", "#03dac6", "#ff0266"],
//         maxParticles: 43,
//         connectParticles: false
//       }
//     }
//   ]
// });

class NavigationPage {
  constructor() {
    this.currentId = null;
    this.currentTab = null;
    this.tabContainerHeight = 70;
    this.lastScroll = 0;
    let self = this;
    $('.nav-tab').click(function () {
      self.onTabClick(event, $(this));
    });
    $(window).scroll(() => {
      this.onScroll();
    });
    $(window).resize(() => {
      this.onResize();
    });
  }

  onTabClick(event, element) {
    event.preventDefault();
    let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
    $('html, body').animate({ scrollTop: scrollTop }, 600);
  }

  onScroll() {
    this.checkHeaderPosition();
    this.findCurrentTabSelector();
    this.lastScroll = $(window).scrollTop();
  }

  onResize() {
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkHeaderPosition() {
    const headerHeight = 75;
    if ($(window).scrollTop() > headerHeight) {
      $('.nav-container').addClass('nav-container--scrolled');
    } else {
      $('.nav-container').removeClass('nav-container--scrolled');
    }
    let offset =
      $('.nav').offset().top + $('.nav').height() - this.tabContainerHeight - headerHeight;
    if ($(window).scrollTop() > this.lastScroll && $(window).scrollTop() > offset) {
      $('.nav-container').addClass('nav-container--move-up');
      $('.nav-container').removeClass('nav-container--top-first');
      $('.nav-container').addClass('nav-container--top-second');
    } else if ($(window).scrollTop() < this.lastScroll && $(window).scrollTop() > offset) {
      $('.nav-container').removeClass('nav-container--move-up');
      $('.nav-container').removeClass('nav-container--top-second');
      $('.nav-container-container').addClass('nav-container--top-first');
    } else {
      $('.nav-container').removeClass('nav-container--move-up');
      $('.nav-container').removeClass('nav-container--top-first');
      $('.nav-container').removeClass('nav-container--top-second');
    }
  }

  findCurrentTabSelector(element) {
    let newCurrentId;
    let newCurrentTab;
    let self = this;
    $('.nav-tab').each(function () {
      let id = $(this).attr('href');
      let offsetTop = $(id).offset().top - self.tabContainerHeight;
      let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
      if ($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
        newCurrentId = id;
        newCurrentTab = $(this);
      }
    });
    if (this.currentId != newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss() {
    let width = 0;
    let left = 0;
    if (this.currentTab) {
      width = this.currentTab.css('width');
      left = this.currentTab.offset().left;
    }
    $('.nav-tab-slider').css('width', width);
    $('.nav-tab-slider').css('left', left);
  }
}

new NavigationPage();

// particlesJS(
//   'particles-js',

//   {
//     particles: {
//       number: {
//         value: 80,
//         density: {
//           enable: true,
//           value_area: 800,
//         },
//       },
//       color: {
//         value: ["#eea849", "#03dac6", "#ff0266"],
//       },
//       shape: {
//         type: 'circle',
//         stroke: {
//           width: 0,
//           color: '#000000',
//         },
//         polygon: {
//           nb_sides: 5,
//         },
//         image: {
//           src: 'img/github.svg',
//           width: 100,
//           height: 100,
//         },
//       },
//       opacity: {
//         value: 0.5,
//         random: false,
//         anim: {
//           enable: false,
//           speed: 1,
//           opacity_min: 0.1,
//           sync: false,
//         },
//       },
//       size: {
//         value: 5,
//         random: true,
//         anim: {
//           enable: false,
//           speed: 40,
//           size_min: 0.1,
//           sync: false,
//         },
//       },
//       line_linked: {
//         enable: true,
//         distance: 150,
//         color: '#ffffff',
//         opacity: 0.4,
//         width: 1,
//       },
//       move: {
//         enable: true,
//         speed: 5,
//         direction: 'none',
//         random: false,
//         straight: false,
//         out_mode: 'out',
//         attract: {
//           enable: false,
//           rotateX: 600,
//           rotateY: 1200,
//         },
//       },
//     },
//     interactivity: {
//       detect_on: 'canvas',
//       events: {
//         onhover: {
//           enable: true,
//           mode: 'grab',
//         },
//         onclick: {
//           enable: true,
//           mode: 'push',
//         },
//         resize: true,
//       },
//       modes: {
//         grab: {
//           distance: 120,
//           line_linked: {
//             opacity: 1,
//           },
//         },
//         bubble: {
//           distance: 400,
//           size: 40,
//           duration: 2,
//           opacity: 8,
//           speed: 3,
//         },
//         repulse: {
//           distance: 200,
//         },
//         push: {
//           particles_nb: 4,
//         },
//         remove: {
//           particles_nb: 2,
//         },
//       },
//     },
//     retina_detect: true,
//     config_demo: {
//       hide_card: false,
//       background_color: '#ccc',
//       background_image: '',
//       background_position: '50% 50%',
//       background_repeat: 'no-repeat',
//       background_size: 'cover',
//     },
//   },
// );
