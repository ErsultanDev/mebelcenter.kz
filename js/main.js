function displayList(e) {
  (listViewDiv.innerHTML = ''),
    e.map((e) => {
      let i = document.createElement('div');
      (i.innerHTML = `        <div class="product_card">        <a href=${e.link}>          <div class="product_img">            <img src=${e.img}>          </div>          <div class="product_content">            <p>${e.title}</p>          </div>        </a>      </div>        `),
        listViewDiv.appendChild(i);
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

// Connect

const linkAwesome = document.createElement('link');
(linkAwesome.rel = 'stylesheet'),
  (linkAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'),
  head.appendChild(linkAwesome),
  null !== header &&
    (header.innerHTML = `      <div class="header_wrapper">
    <div class="menu_burger">
      <div class="menu_burger_logo">
        <a href="index.html">
          <div>
            <img src="images/mebelcenter2.png" alt="" />
          </div>
        </a>
      </div>
      <div class="menu_burger_number">
        <a href="87273449900">+7 727 344 99 00</a>
      </div>
      <div class="menu_burger_sub">
        <a class="opener"><span class="opener_burger">Opener</span></a>
      </div>
      <ul class="nav">
        <div class="nav_menu_item">
          <li>
            <div>
              <img src="images/menu1.svg" alt="">
            </div>
            <div> <a href="mebel.html">Мебель для дома</a></div>
          </li>
        </div>
        <div class="nav_menu_item">
          <li>
            <div>
              <img src="images/menu2.svg" alt="">
            </div>
            <div> <a href="pharmacy.html">Оборудование для аптек</a></div>
          </li>
        </div>
        <div class="nav_menu_item">
          <li>
            <div>
              <img src="images/menu3.svg" alt="">
            </div>
            <div> <a href="steklo.html">Стеклянные витрины</a></div>
          </li>
        </div>
        <div class="nav_menu_item">
          <li>
            <div>
              <img src="images/menu4.svg" alt="">
            </div>
            <div> <a href="ofisnaya-mebel.html">Офисная мебель</a></div>
          </li>
        </div>
        <div class="nav_menu_item">
          <li>
            <div>
              <img src="images/menu5.svg" alt="">
            </div>
            <div> <a href="mebel-butik.html">Мебель для бутика</a></div>
          </li>
        </div>
        <div class="nav_menu_item">
          <li>
            <div>
              <img src="images/menu6.svg" alt="">
            </div>
            <div><a href="resepshn.html">Ресепш, барные стойки</a></div>
          </li>
        </div>

        <div class="menu_burger_nav_phone">
          <div>
            <i class="fa fa-phone"></i>
          </div>
          <div>
            <a href="87273449900">+7 727 344 99 00</a>
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
      </ul>
    </div>
    <div class="header_menu_main">
      <div class="main">
        <div class="header_menu_main_wrapper">

          <div class="header_menu_main_start">
            <a href="index.html"><img src="images/mebelcenter2.svg" alt=""></a>
          </div>
          <div class="header_menu_main_end">
            <a href="index.html">
              <div class="header_menu_main_item">
                Главная
              </div>
            </a>
            <a href="catalog.html">
              <div class="header_menu_main_item">
                Каталог Товаров
              </div>
            </a>
            <a href="dostavka.html">
              <div class="header_menu_main_item">
                Доставка
              </div>
            </a>
            <a href="portfolio.html">
              <div class="header_menu_main_item">
                Наши работы
              </div>
            </a>
            <a href="otzovik.php">
              <div class="header_menu_main_item">
                Отзывы
              </div>
            </a>
            <a href="about-us.html">
              <div class="header_menu_main_item">
                О нас
              </div>
            </a>
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
        <a href="catalog.html">
          <div class="header_wrapper_bottom_item_img">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M10 13H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7H4v-5h5ZM21 2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 7h-5V4h5Zm1 4h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7h-5v-5h5ZM10 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM9 9H4V4h5Z" />
            </svg>
          </div>
          <div class="header_wrapper_bottom_item_text">
            <p>Каталог</p>
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
            <section class="top-nav">
              <input id="menu-toggle" type="checkbox" />
              <label class='menu-button-container' for="menu-toggle">
                <div class='menu-button'></div>

              </label>
              <p class="top-nav_text"> Каталог</p>
              <ul class="menu">
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
              </ul>
            </section>
          </div>
        </div>
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
              </div>
            </div>
          </div>
        </div>
        <div class="header_main_bottom_end">
          <a href="tel:87273449900">
            <a>
              <div class="coccoc-alo-phone coccoc-alo-green coccoc-alo-show">
                <div class="coccoc-alo-ph-circle"></div>
                <div class="coccoc-alo-ph-circle-fill"></div>
                <div class="coccoc-alo-ph-img-circle"></div>
              </div>
            </a>
            <div class="header_main_bottom_end_phone">
              <div>
                <p>Алматы:</p>
              </div>
              <div>
                <a href="tel:87273449900">+7 (727) 344 99 00</a>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>


  </div>
  `);

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
    <div class="footer_copyright">
  <div class="foot">
    <p>&copy; 2010-2022 MebelCenter.kz</p>
  </div>
  <div class="foot">
    <p>Все права защищены</p>
  </div>
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
    },
    {
      link: 'massiv-mag.html',
      img: 'images/thumbs/butik/odejda/mas.jpg',
      title: 'Мебель для магазина Массив',
    },
    {
      link: 'kontur.html',
      img: 'images/thumbs/butik/odejda/mag.jpg',
      title: 'Мебель для магазина Контур',
    },
    {
      link: 'modern-mag.html',
      img: 'images/thumbs/butik/odejda/mod.jpg',
      title: 'Мебель для магазина Модерн',
    },
    {
      link: 'venge-mag.html',
      img: 'images/thumbs/butik/odejda/ven.jpg',
      title: 'Мебель для магазина Венге',
    },
    {
      link: 'deko-mag.html',
      img: 'images/thumbs/butik/odejda/dek.jpg',
      title: 'Мебель для магазина Деко',
    },
  ],
  productData13 = [
    {
      link: 'akva-acc.html',
      img: 'images/thumbs/butik/accessories/akv.jpg',
      title: 'Для магазина парфюмерии Аква',
    },
    {
      link: 'deko-acc.html',
      img: 'images/thumbs/butik/accessories/dek.JPG',
      title: 'Для магазина аксессуаров Деко',
    },
    {
      link: 'kamelia-acc.html',
      img: 'images/thumbs/butik/accessories/kam.jpg',
      title: 'Для магазина косметики Камелия',
    },
    {
      link: 'massiv-acc.html',
      img: 'images/thumbs/butik/accessories/mas.JPG',
      title: 'Для магазина подарков Массив',
    },
    {
      link: 'modern-acc.html',
      img: 'images/thumbs/butik/accessories/mod.jpg',
      title: 'Для магазина косметики Модерн',
    },
    {
      link: 'siluet-acc.html',
      img: 'images/thumbs/butik/accessories/sil.jpg',
      title: 'Для магазина косметики Силуэт',
    },
  ],
  productData14 = [
    {
      link: 'akva-jeweler.html',
      img: 'images/thumbs/butik/jeweler/akv.jpg',
      title: 'Аква',
    },
    {
      link: 'briz-jeweler.html',
      img: 'images/thumbs/butik/jeweler/bri.jpg',
      title: 'Бриз',
    },
    {
      link: 'classic-jeweler.html',
      img: 'images/thumbs/butik/jeweler/cla.jpg',
      title: 'Классик',
    },
    {
      link: 'deko-jeweler.html',
      img: 'images/thumbs/butik/jeweler/dek.jpg',
      title: 'Деко',
    },
    {
      link: 'modern-jeweler.html',
      img: 'images/thumbs/butik/jeweler/mod.jpg',
      title: 'Модерн',
    },
    {
      link: 'premium-jeweler.html',
      img: 'images/thumbs/butik/jeweler/pre.jpg',
      title: 'Премиум',
    },
  ],
  productData15 = [
    {
      link: 'lux-mag.html',
      img: 'images/thumbs/butik/odejda/lux.jpg',
      title: 'Мебель для магазина Люкс',
    },
    {
      link: 'premium-mag.html',
      img: 'images/thumbs/butik/odejda/pre.jpg',
      title: 'Мебель для магазина Премиум',
    },
    {
      link: 'roskosh-mag.html',
      img: 'images/thumbs/butik/odejda/ros.jpg',
      title: 'Мебель для магазина Роскошь',
    },
  ],
  productData16 = [
    {
      link: 'brictol-barnye.html',
      img: 'images/thumbs/barnye/bri.jpg',
      title: 'Барная стойка Бристоль',
    },
    {
      link: 'econom-barnye.html',
      img: 'images/thumbs/barnye/eco.jpg',
      title: 'Барная стойка Эконом',
    },
    {
      link: 'etnika-barnye.html',
      img: 'images/thumbs/barnye/etn.jpg',
      title: 'Барная стойка Этника',
    },
    {
      link: 'imperial-barnye.html',
      img: 'images/thumbs/barnye/imp.jpg',
      title: 'Барная стойка Империал',
    },
    {
      link: 'megapolis-barnye.html',
      img: 'images/thumbs/barnye/meg.jpg',
      title: 'Барная стойка Мегаполис',
    },
    {
      link: 'milan-barnye.html',
      img: 'images/thumbs/barnye/mil.jpg',
      title: 'Барная стойка Милан',
    },
    {
      link: 'riga-barnye.html',
      img: 'images/thumbs/barnye/rig.jpg',
      title: 'Барная стойка Рига',
    },
    {
      link: 'rivera-barnye.html',
      img: 'images/thumbs/barnye/riv.jpg',
      title: 'Барная стойка Ривьера',
    },
    {
      link: 'versal-barnye.html',
      img: 'images/thumbs/barnye/ver.jpg',
      title: 'Барная стойка Версаль',
    },
  ],
  productData17 = [
    {
      link: 'agami-reception.html',
      img: 'images/thumbs/reception/aga.jpg',
      title: 'Ресепшн Агами',
    },
    {
      link: 'econom-reception.html',
      title: 'Ресепшн Эконом',
      img: 'images/thumbs/reception/eco.jpg',
    },
    {
      link: 'brictol-reception.html',
      title: 'Ресепшн Бристоль',
      img: 'images/thumbs/reception/bri.jpg',
    },
    {
      link: 'premium-reception.html',
      title: 'Ресепшн Премиум',
      img: 'images/thumbs/reception/pre.jpg',
    },
    {
      link: 'rivera-reception.html',
      title: 'Ресепшн Ривьера',
      img: 'images/thumbs/reception/riv.jpg',
    },
    {
      link: 'ultra-reception.html',
      title: 'Ресепшн Ультра',
      img: 'images/thumbs/reception/ult.jpg',
    },
  ];

let listViewDiv = document.querySelector('.product_wrapper .product_inner'),
  pageName = window.location.href.split('/').pop().split('#')[0].split('?')[0];

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
