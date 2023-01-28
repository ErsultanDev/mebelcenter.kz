<!DOCTYPE html>
<html lang="en">
<head>
<title>Купить мебель для сотрудников в Алматы</title>
<meta charset="utf-8"><link rel="shortcut icon" href="images/log.ico" type="image/x-icon">
<meta name="keywords" content="офисная мебель в Алматы, купить, на заказ, заказать, цена, мебель для офиса">
<meta name="description" content="Мебель купить для офиса, для сотрудников: Доставка и сборка - Бесплатно">
<link rel="stylesheet" href="css/reset.css" type="text/css" media="screen">
<link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
<link rel="stylesheet" href="css/grid.css" type="text/css" media="screen">
<script src="js/jquery-1.6.2.min.js"></script><script type="text/javascript" src="js/jquery.js"></script><script type="text/javascript" src="js/jquery.maskedinput-1.2.2.js"></script>
<script src="js/jquery.easing.1.3.js"></script>
<script src="js/jcarousellite_1.0.1.js"></script>
<script src="js/jquery.galleriffic.js"></script>
<script src="js/jquery.opacityrollover.js"></script>
<script>
$(document).ready(function () {
    $(".jCarouselLite").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        speed: 400,
        vertical: false,
        circular: true,
        easing: 'easeOutQuart',
        visible: 4,
        start: 0,
        scroll: 4
    });
});
</script>
<script>$(document).ready(function () {$(".jCarouselLite1").jCarouselLite({btnNext: ".next1",btnPrev: ".prev1",auto:3000,speed: 1000,vertical: false,circular: true,easing: 'easeOutQuart',visible: 4,start: 0,scroll: 1});});</script><!--[if lt IE 9]>
<script src="js/html5.js"></script>
<link rel="stylesheet" href="css/ie.css" type="text/css" media="screen">
<![endif]-->
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1KVM9QVLPT"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1KVM9QVLPT');
</script> </head>
<body id="page3"><script type="text/javascript">jQuery(function($){ $.mask.definitions['~']='[+-]';$('#phone').mask('8(799) 999-9999');});</script>	
<!--==============================header=================================-->
<header>
  <div class="row-1">
    <div class="main">
      <div class="container_12">
        <div class="grid_13">
          <nav>
           <ul class="menu"><li><a href="index.html">Главная</a></li><li><a href="catalog.html">Каталог Товаров</a></li><li><a href="dostavka.html">Доставка</a></li><li><a href="portfolio.html">Наши работы</a></li><li><a href="reviews.php">Отзывы</a></li><li><a  href="about-us.html">О нас</a></li><li><a  href="contact.html">Контакты</a></li>
          </nav>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </div>
  <div class="row-2">
    <div class="main">
      <div class="container_12">
        <div class="grid_9">
          <h1> <a class="logo" href="index.html">Me<strong>b</strong>el</a> <span>Center</span> </h1>
        </div>
        <div class="grid_3">
         <span class="title img-indent3">8(727) 344 99 00</span>
        </div>
        <div class="clear"></div>
      </div>

      </div>
  </div>
</header>

<!-- слайдик-->
<section id="content">

          <div class="maincatalog" style="height:500px">

		  
            <div class="gallery1 p3" style="height:500px; padding-left:0px">
			<article class="grid_4 alpha"><div class="indent"><h3 class="prev-indent-bot2">Каталог</h3><ul class="list-2"><li><a href="kuhni.html">Кухни </a></li><li><a href="pharmacy.html">Оборудование для аптек</a></li><li><a href="prixozhie.html">Прихожие</a></li><li><a href="spalni.html">Спальни</a></li><li><a   href="detskie.html">Детские</a></li><li><a href="gostinye.html">Гостиные</a></li><li><a href="ofisnaya-mebel.html">Офисная мебель</a></li><li><a href="mebel-butik.html">Мебель для бутика</a></li><li class="last-item"><a href="resepshn.html">Ресепш, барные стойки</a></li></ul></div></article><div class="ramka" style="padding-bottom:300px;"><div class="lll">
   <h3 class="prev-indent-bot">Поиск по сайту</h3>
   <form action="search.php" method="post" id="search" style="margin-left:auto; margin-right:auto; margin-top:10px;">
  <input type="text" name="search" value="поиск" onblur="if(this.value=='') this.value='поиск';" onfocus="if(this.value=='поиск') this.value='';" class="input" />
  <input type="submit" name="" value="" class="submit" />
</form>
<div style="margin-top:20px;">
   <?php

mysql_connect("localhost","v_20478_Gulbanu","dala3940") or die("couldn't connect");
mysql_query('SET NAMES utf8');
mysql_query('SET CHARACTER SET utf8' );
mysql_query('SET COLLATION_CONNECTION="utf8_general_ci"' ); 

mysql_select_db("v_20478_metal") or die("couldn't connect to database");
$output = '';
if(isset($_POST['search'])){
	$searchq = $_POST['search'];
	$searchq = preg_replace("#[^0-9а-яёА-ЯЁa-zA-Z]#u","",$searchq);
	$query = mysql_query("SELECT * FROM mebelcenter WHERE keywords LIKE '%$searchq%'") or die("could not search!");
	$count = mysql_num_rows($query);
	if($count == 0){
		$output = '0 результатов!';
	}
else{
	while($row = mysql_fetch_array($query)){
		$keywords = $row['keywords'];
		$link = $row['link'];
		$name = $row['name'];
		Echo "<a href=$link style='font-size:20px'>$name</a>";
		}
	}
}
?>
   </div>
			   
						
     
			</section>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-bot">
    <div class="main">
      <div class="container_12">
        <div class="wrapper">
            <article class="grid_4">
            <div class="indent-right2">
             <div class="bg-bot_text">
                    <h3 class="prev-indent-bot">Где купить</h3>
                    <p class="prev-indent-bot" style="font-size:26px;">корпусную мебель?</p>
                  </div>
              <p style="font-size:16px" >Мы предлагаем изготовление мебели по вашему индивидуальному заказу </p>
              <a class="button" href="contact.html">посмотреть</a> </div>
          </article>
          <article style="margin-left:125px;" class="grid_4"><h3 class="p2">Новости</h3>
            <div class="wrapper">
              <figure class="img-indent frame2"><img src="images/fulls/office/blic.jpg" alt=""></figure>
              <p class="prev-indent-bot color-41">Офисная мебель Блиц</p>
              <p class="prev-indent-bot">Коллекция Блиц идеально подойдёт для любого помещения</p>
              <a class="button" href="blic.html">посмотреть</a> </div>
          </article>
         <article class="grid_4" style="margin-left:195px;"><h3 class="prev-indent-bot2">Мебель по параметрам</h3>
            <div class="wrapper">
              <div class="grid_4 alpha">
                <div class="indent-right2">
                   <ul class="price-list" style="margin-top:10px">
                     <li><a href="prixozhie.html">Для прихожей</a><strong>&nbsp;</strong></li>
                    <li><a href="spalni.html">Для спальни</a><strong>&nbsp;</strong></li>
                    <li><a href="kuhni.html">Для кухни</a><strong>&nbsp;</strong></li>
                    <li><a href="gostinye.html">Для гостиной</a><strong>&nbsp;</strong></li>
                    <li><a href="detskie.html">Для детской комнаты</a><strong>&nbsp;</strong></li>
                    <li><a href="ofisnaya-mebel.html">Для кабинета</a><strong>&nbsp;</strong></li>
					<li><a href="mebel-butik.html">Для бутика</a><strong>&nbsp;</strong></li>
                    <li class="last"><a href="bar.html">Для кафе, баров</a><strong>&nbsp;</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</section>
<!--==============================footer=================================-->
<footer>
 <div class="main">
    <div class="container_12">
       <div class="wrapper">
        <div class="grid_4">
           <div class ="foot">&copy; 2010-2021 MebelCenter.kz</div>
          <div class ="foot">Все права защищены</div>
          <!-- {%FOOTER_LINK} -->
        </div>
        <div class="grid_5" style="margin-left:125px;"> <span class="phone-numb"><span>8(727)</span> 344-99-00</span> </div>
       <div class="grid_5"><div id="socialMedia" class="span3 pull-right"><a href="https://www.youtube.com/channel/UCNDMIviMuZOhhCP7xoxGYAA/videos"><img width="50" height="50" src="images/youtube.png" title="youtube" alt="youtube"/></a><a href="https://www.instagram.com/idiamarket/"><img width="50" height="50" src="images/insta.png" title="instagram" alt="instagram"></a></div>
        </div>
      </div>
    </div>
  </div>
</footer>
<script>
$(window).load(function () {
    // We only want these styles applied when javascript is enabled
    $('div.navigation').css({
        'width': '160px',
        'float': 'right'
    });
    $('div.content').css('display', 'block');

    // Initially set opacity on thumbs and add
    // additional styling for hover effect on thumbs
    var onMouseOutOpacity = 0.3;
    $('#thumbs ul.thumbs li span').opacityrollover({
        mouseOutOpacity: onMouseOutOpacity,
        mouseOverOpacity: 0.0,
        fadeSpeed: 'fast',
        exemptionSelector: '.selected'
    });

    // Initialize Advanced Galleriffic Gallery
    var gallery = $('#thumbs').galleriffic({
        delay: 4000,
        numThumbs: 12,
        preloadAhead: 6,
        enableTopPager: false,
        enableBottomPager: false,
        imageContainerSel: '#slideshow',
        controlsContainerSel: '',
        captionContainerSel: '',
        loadingContainerSel: '',
        renderSSControls: true,
        renderNavControls: true,
        playLinkText: 'Play Slideshow',
        pauseLinkText: 'Pause Slideshow',
        prevLinkText: 'Prev',
        nextLinkText: 'Next',
        nextPageLinkText: 'Next',
        prevPageLinkText: 'Prev',
        enableHistory: true,
        autoStart: 1000,
        syncTransitions: true,
        defaultTransitionDuration: 900,
        onSlideChange: function (prevIndex, nextIndex) {
            // 'this' refers to the gallery, which is an extension of $('#thumbs')
            this.find('ul.thumbs li span').css({
                opacity: 0.5
            })
        },
        onPageTransitionOut: function (callback) {
            this.find('ul.thumbs li span').css({
                display: 'block'
            });
        },
        onPageTransitionIn: function () {
            this.find('ul.thumbs li span').css({
                display: 'none'
            });
        }
    });
});
</script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js"
    integrity="sha512-STof4xm1wgkfm7heWqFJVn58Hm3EtS31XFaagaa8VMReCXAkQnJZ+jEy8PCC/iT18dFy95WcExNHFTqLyp72eQ=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="js/main.js"></script>
  <script src="js/jqcart.min.js"></script>
  <script src="js/basket_notification.js"></script>
  <script src="js/jquery.maskedinput.min.js"></script>
  <script src="js/just-validate.min.js"> </script>
  <script src="js/jquery.maskedinput.min.js"></script>
</body></html>
