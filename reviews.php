<!DOCTYPE html>
<html lang="en">
<?php
$time = time();
if (session_id() == '') session_start();

$db = mysqli_connect("localhost", "v_20478_Gulbanu", "dala3940", "v_20478_metal") or die();
$res = mysqli_query($db, "set names utf8");

$mess_url = mysqli_real_escape_string($db, basename($_SERVER['SCRIPT_FILENAME']));

//получаем id текущей темы
//получаем id текущей темы
$res = mysqli_query($db, "SELECT id FROM таблица WHERE file_name='" . $mess_url . "'");
$res = mysqli_fetch_array($res);
$theme_id = $res["id"];
$secret = '6LcBg3sjAAAAAIcSkUBAb0Qnk36WLHX9vxooTtp1';
//get verify response data
$verify = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret . '&response=' . $_POST['g-recaptcha-response']);
$respponse = json_decode($verify);


//your site secret key


if ($respponse->success) {    //отправлен комментарий
  $mess_login = htmlspecialchars($_POST["mess_login"]); // name
  $user_text = htmlspecialchars($_POST["user_text"]); // otziv
  $rating = htmlspecialchars($_POST["rating"]); // rating
  $city_text = htmlspecialchars($_POST["mess_gorod"]); // gorod

  if ($mess_login != '' and $user_text != '') {
    if (is_numeric($_POST["parent_id"]) and is_numeric($_POST["f_parent"]))
      $res = mysqli_query($db, "insert into comment
  (parent_id, first_parent, date, theme_id, login, gorod, message, rating)
  values ('" . $_POST["parent_id"] . "','" . $_POST["f_parent"] . "',
  '" . $time . "','" . $theme_id . "','" . $mess_login . "','" . $city_text . "','" . $user_text . "','" . $rating . "')");
    else $res = mysqli_query($db, "insert into comment (date, theme_id, login,gorod, message, rating)
 values ('" . $time . "','" . $theme_id . "','" . $mess_login . "','" . $mess_gorod . "','" . $user_text . "','" . $rating . "')");
    $_SESSION["send"] = "Комментарий принят!";
    header("Location: $mess_url#last");
    exit;
  } else {
    $_SESSION["send"] = "Не все поля заполнены!";
    header("Location: $mess_url#last");
    exit;
  }
}

if (isset($_POST["contr_cod"])) {    //отправлен комментарий
  $mess_login = htmlspecialchars($_POST["mess_login"]);
  $user_text = htmlspecialchars($_POST["user_text"]);
  if (md5($_POST["contr_cod"]) == $_POST["prov_summa"]) {    //код правильный
    if ($mess_login != '' and $user_text != '') {
      if (is_numeric($_POST["parent_id"]) and is_numeric($_POST["f_parent"]))
        $res = mysqli_query($db, "insert into comment
    (parent_id, first_parent, date, theme_id, login, message)
    values ('" . $_POST["parent_id"] . "','" . $_POST["f_parent"] . "',
    '" . $time . "','" . $theme_id . "','" . $mess_login . "','" . $user_text . "')");
      else $res = mysqli_query($db, "insert into comment (date, theme_id, login, message)
   values ('" . $time . "','" . $theme_id . "','" . $mess_login . "','" . $user_text . "')");
      $_SESSION["send"] = "Комментарий принят!";
      header("Location: $mess_url#last");
      exit;
    } else {
      $_SESSION["send"] = "Не все поля заполнены!";
      header("Location: $mess_url#last");
      exit;
    }
  } else {
    $_SESSION["send"] = "Неверный проверочный код!";
    header("Location: $mess_url#last");
    exit;
  }
}

if (isset($_SESSION["send"]) and $_SESSION["send"] != "") {    //вывод сообщения
  echo '<script type="text/javascript">alert("' . $_SESSION["send"] . '");</script>';
  $_SESSION["send"] = "";
}
?>
<style type="text/css">
  .add_comment {
    display: table;
    width: 800px;
    color: #44494c;

  }

  /* .knopka:hover {
	  background:15px;
	} */
  .comm_head {
    margin-bottom: 5px;
  }

  .comm_body {
    border-bottom: 1px dashed #ccc;
    font-size: 14px;
    font-style: italic;
    margin-bottom: 5px;
    padding-bottom: 15px;
  }

  .close_hint,
  .open_hint {
    float: right;
    border: 1px solid #77A;
    background: #6e6;
    width: 100px;
    text-align: center;
    cursor: pointer;
  }

  .close_hint {
    margin: 5px;
    color: #F00;
  }

  .comm_minus {
    background: url('image/minus.png') no-repeat;
  }

  .comm_plus {
    background: url('image/plus.png') no-repeat;
  }

  .comm_minus,
  .comm_plus {
    float: right;
    width: 19px;
    height: 18px;
    cursor: pointer;
  }

  .comm_text {
    display: none;
  }

  .sp_link {
    color: #F33;
    cursor: pointer;
  }

  .strelka {
    background: url(image/strelka.png) no-repeat;
    border-left: 2px solid #000;
  }

  .strelka_2 {
    background: url(image/strelka_2.png) no-repeat;
  }

  #hint {
    position: absolute;
    display: none;
    z-index: 100;
  }
</style>

<head>
  <title>Купить мебель в Алматы на заказ </title>
  <meta name="keywords" content="мебель, мебель в Алматы, мебель по индивидуальному заказу">
  <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
  <meta name="description" content="У нас Вы сможете купить мебель по индивидуальному заказу или готовую мебель.">
  <meta charset="utf-8">
  <link rel="shortcut icon" href="images/log.ico" type="image/x-icon">
  <link rel="stylesheet" href="css/reset.css" type="text/css" media="screen">
  <link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
  <link rel="stylesheet" href="css/grid.css" type="text/css" media="screen">

  <script src="js/jquery-1.6.2.min.js"></script>
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/jquery.maskedinput-1.2.2.js"></script>
  <script src="js/jquery.easing.1.3.js"></script>
  <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
  <script src="js/jcarousellite_1.0.1.js"></script>
  <script src="js/jquery.galleriffic.js"></script>
  <script src="js/jquery.opacityrollover.js"></script>
  <script>
    $(document).ready(function() {
      $(".jCarouselLite").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        speed: 400,
        vertical: false,
        circular: true,
        easing: 'easeOutQuart',
        visible: 4,
        start: 0,
        scroll: 1
      });
    });
  </script>
  <!--[if lt IE 9]>
<script src="js/html5.js"></script>
<link rel="stylesheet" href="css/ie.css" type="text/css" media="screen">
<![endif]-->
</head>

<body id="page3">
  <script type="text/javascript">
    jQuery(function($) {
      $.mask.definitions['~'] = '[+-]';
      $('#phone').mask('8(799) 999-9999');
    });
  </script>
  <!--==============================header=================================-->
  <header>
    <div class="row-1">
      <div class="main">
        <div class="container_12">
          <div class="grid_13">
            <nav>
              <ul class="menu">
                <li><a href="index.html">Главная</a></li>
                <li><a href="catalog.html">Каталог Товаров</a></li>
                <li><a href="dostavka.html">Доставка</a></li>
                <li><a href="portfolio.html">Наши работы</a></li>
                <li><a class="active" href="reviews.php">Отзывы</a></li>
                <li><a href="about-us.html">О нас</a></li>
                <li><a href="contact.html">Контакты</a></li>
              </ul>
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
        <div class="line">

        </div>
        <form action="search.php" method="post" id="search">
          <input type="text" name="search" value="поиск" onblur="if(this.value=='') this.value='поиск';" onfocus="if(this.value=='поиск') this.value='';" class="input" />
          <input type="submit" name="" value="" class="submit" />
        </form>
      </div>
    </div>
  </header>
  <!-- слайдик-->
<div class="otzov_main">
  
<section id="content">
    <div class="main">
      <div class="box">
        <div class="padding">
          <div class="container_12">
            <div class="wrapper">
              <div class="grid_12">
                <div class="indent-left p2">

                  <h3 class="prev-indent-bot">Отзывы</h3>
                </div>
                <?php
                function parents($up = 0, $left = 0)
                {    //Строим иерархическое дерево комментариев
                  global $tag, $mess_url;

                  for ($i = 0; $i <= count($tag[$up]) - 1; $i++) {
                    //Можно выделять цветом указанные логины
                    if ($tag[$up][$i][2] == 'Admin') $tag[$up][$i][2] = '<font color="#C00">Admin</font>';
                    if ($tag[$up][$i][6] == 0) $tag[$up][$i][6] = $tag[$up][$i][0];
                    //Высчитываем рейтинг комментария
                    $sum = $tag[$up][$i][4] - $tag[$up][$i][5];

                    if ($up == 0) echo '<div style="padding:5px 0 0 0;">';
                    else {
                      if (count($tag[$up]) - 1 != $i)
                        echo '<div class="strelka" style="padding:5px 0 0 ' . ($left - 2) . 'px;">';
                      else echo '<div class="strelka_2" style="padding:5px 0 0 ' . $left . 'px;">';
                    }
                    echo '<div class="comm_head" id="m' . $tag[$up][$i][0] . '">';
                    echo '<div style="float:left; margin-right:5px; font-size:14px;color:#44494c;"><b>' . $tag[$up][$i][2] . '</b></div>';





                    echo ' |   Добавлено: ' . date("d.m.Y в H:i ", $tag[$up][$i][3]) . '</div>';
                    if ($tag[$up][$i][2] == 5) echo '<img src="/images/five.png">';
                            elseif ($tag[$up][$i][2] == 4) {
                                echo '<img src="/images/four.png">';
                            } elseif ($tag[$up][$i][2] == 3) {
                                echo '<img src="/images/three.png">';
                            } elseif ($tag[$up][$i][2] == 2) {
                                echo '<img src="/images/two.png">';
                            } else echo '<img src="/images/five.png">';
                    echo '<div style="clear:both; "></div></div>';
                    echo '<div class="comm_body">';
               
                    if ($sum < 0) echo  '<u class="sp_link">Показать/скрыть</u><div class="comm_text"> ' ;
                    else echo '<div style="word-wrap:break-word;">';
               
                    echo str_replace("<br />",  "<br>", nl2br($tag[$up][$i][1])) . '</div>';

                    if (isset($tag[$tag[$up][$i][0]])) parents($tag[$up][$i][0], 20);
                    echo '</div>';
                  }
                }

                $res = mysqli_query($db, "SELECT * FROM comment
    WHERE theme_id='" . $theme_id . "' ORDER BY id");
                $number = mysqli_num_rows($res);

                if ($number > 0) {
                  echo '<div style="padding:15px; margin-left:10px; color:#6e767b;">';
                  while ($com = mysqli_fetch_assoc($res))
                    $tag[(int)$com["parent_id"]][] = array(
                      (int)$com["id"], $com["message"],
                      $com["login"], $com["date"], $com["plus"], $com["minus"], $com["first_parent"]
                    );
                  echo parents() . '</div><br>';
                }
                ?>
                <?php
                $cod = rand(100, 900);
                $cod2 = rand(10, 99);
                // echo '<div id="last">';
                // echo '<form method="POST" action="'.$mess_url.'#last" class="add_comment"';
                // echo 'name="add_comment" id="hint"><div class="close_hint">Закрыть</div>';
                // echo '<textarea cols="68" rows="5" name="user_text"></textarea>';
                // echo '<div style="margin:5px; float:left;">';
                // echo 'Имя* <input type="text" name="mess_login" maxlength="20" value=""></div>';

                // echo '<div style="margin:5px; float:right;">'.$cod.' + '.$cod2.' = ';
                // echo '<input type="hidden" name="prov_summa" value="'.md5($cod+$cod2).'">';
                // echo '<input type="hidden" name="parent_id" value="0">';
                // echo '<input type="hidden" name="f_parent" value="0">';
                // echo '<input type="text" name="contr_cod" maxlength="4" size="4">&nbsp;';
                // echo '<input type="submit" value="Отправить"></div>';
                // echo '</form>';

                echo '<div class="commentWrapper"><div style="float:none;font-size:18px; margin-bottom:15px; font-weight:bold;" class="commentTitle">Оставить отзыв</div>   <div><div class="commentForm"> <form method="POST" action="' . $mess_url . '#last" class="add_comment">';
                echo '<div style="text-align:right; margin-top:10px; float:none; font-weight:bold;">';
                echo '<div class="commentBlock"><div class="commentDescTitle">Имя:</div><div> <input style="height:23px; width:60%; font-weight:normal;  " type="text" name="mess_login" maxlength="20" value=""></div></div></div>';
                echo '<div style="text-align:right; margin-top:10px; float:none; font-weight:bold;"> <div class="commentBlock"><div class="commentDescTitle">Город:</div>';
                echo ' <div><input style="height:23px; width:60%; font-weight:normal; " type="text" name="mess_gorod" maxlength="20"  value=""></div></div></div>';
                echo '<div class="oott" style="float:none;text-align:right;  margin-top:10px">';
                echo '<div  style="font-weight:bold;"><div><div class="commentBlock"> <div class="commentDescTitle">Отзыв:</div> <div><textarea style="font-weight:normal; width:60.5%;" cols="50" rows="5" name="user_text"></textarea></div></div> </div>';
                echo '</div>';
                echo '<div class="rating1" style="margin-left:0px; margin-top:10px;">Ваша оценка:';
                echo '	<span class="starRating">';
                echo '	<input id="rating5" type="radio" name="rating" value="5"  checked="">';
                echo '<label for="rating5">5</label>';
                echo '<input id="rating4" type="radio" name="rating" value="4">';
                echo '<label for="rating4">4</label>';
                echo '<input id="rating3" type="radio" name="rating" value="3">';
                echo '<label for="rating3">3</label>';
                echo '<input id="rating2" type="radio" name="rating" value="2">';
                echo '<label for="rating2">2</label>';
                echo '<input id="rating1" type="radio" name="rating" value="1" >';
                echo '<label for="rating1">1</label>';
                echo '</span>';
                echo '</div> ';
                //echo '<div class="ott" style="margin-top:10px; text-align:right;  float:none">'.$cod.' + '.$cod2.' = ';
                //echo '<input  type="hidden" name="prov_summa" value="'.md5($cod+$cod2).'">';
                echo '
<div class="captcha">
<div class="g-recaptcha" data-sitekey="6LcBg3sjAAAAALv-2rypTX_bUkNV9P3mNA8NDEn-"></div>
</div>
';
                //echo '<input style="height:22px;" type="text" name="contr_cod" maxlength="4" size="4"></div>';
                echo '</div>';
                echo '<div class="commentBtn" style="margin-top:15px; text-align:right;  float:none;"><input style="height:28px; font-size: 14px !important;
background: #11a311;
border: 0px solid #007f87;
box-shadow: 0 2px 2px 0 #606060;
-webkit-border-radius: 5px;
text-shadow: none;
width: 150px;
line-height: normal;
color: #fff;
cursor: pointer;
outline: none;" type="submit" value="Отправить" ></div>';
                echo '</form> </div></div> </div>';
                ?>


              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

    <br><br><br>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="bg-bot bg-bot_1">
      <div class="main">
        <div class="container_12">
          <div class="wrapper">
            <article class="grid_4">
              <div class="indent-right2">
                <div class="bg-bot_text"> 
                  <h3 class="prev-indent-bot">Где купить</h3>
                  <p class="prev-indent-bot" style="font-size:26px;">корпусную мебель?</p>
                </div>
                <p style="font-size:16px">Мы предлагаем изготовление мебели по вашему индивидуальному заказу </p>
                <a class="button" href="contact.html">посмотреть</a>
              </div>
            </article>

            <article class="grid_4"> 
              <h3 class="prev-indent-bot2">Мебель по параметрам</h3>
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
</div>
  <!--==============================footer=================================-->
  <footer>
    <div class="main">
      <div class="container_12">
        <div class="wrapper">
          <div class="grid_4">
            <div class="foot">&copy; 2010-2021 MebelCenter.kz</div>
            <div class="foot">Все права защищены</div>
            <!-- {%FOOTER_LINK} -->
          </div>
          <div class="grid_4"> <span class="phone-numb"><span>8(727)</span> 344-99-00</span> </div>
          <div class="grid_5">
            <div id="socialMedia" class="span3 pull-right"><a href="https://www.youtube.com/channel/UCNDMIviMuZOhhCP7xoxGYAA/videos"><img width="50" height="50" src="images/youtube.png" title="youtube" alt="youtube" /></a><a href="https://www.instagram.com/idiamarket/"><img width="50" height="50" src="images/insta.png" title="instagram" alt="instagram"></a></div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <script src="https://www.google.com/recaptcha/api.js"></script>
  <script type="text/javascript">
    //Добавление в форму отправки комментария значений id родительских комментариев
    function comm_on(p_id, first_p) {
      document.add_comment.parent_id.value = p_id;
      document.add_comment.f_parent.value = first_p;
    }

    $(document).ready(function() {
      //Показать скрытое под спойлером сообщение
      $(".sp_link").click(function() {
        $(this).parent().children(".comm_text").toggle("normal");
      });

      //Показать форму ответа на имеющийся комментарий
      $(".open_hint").click(function() {
        $("#hint").animate({
          top: $(this).offset().top + 25,
          left: $(document).width() / 2 -
            $("#hint").width() / 2
        }, 400).fadeIn(800);
      });

      //Скрыть форму ответа на имеющийся комментарий
      $(".close_hint").click(function() {
        $("#hint").fadeOut(1200);
      });

      //Получение id оцененного комментария
      $(".comm_plus,.comm_minus").click(function() {
        id_comm = $(this).parents(".comm_head").attr("id").substr(1);
      });

      //Отправление оценки комментария в файл rating_comm.php
      $(".comm_plus").click(function() {
        jQuery.post("rating_comm.php", {
          comm_id: id_comm,
          ocenka: 1
        }, rating_comm);
      });
      $(".comm_minus").click(function() {
        jQuery.post("rating_comm.php", {
          comm_id: id_comm,
          ocenka: 0
        }, rating_comm);
      });

      //Возврат рейтинга комментария и его обновление
      function rating_comm(data) {
        $("#rating_comm" + id_comm).fadeOut(800, function() {
          $(this).html(data).fadeIn(800);
        });
      }
    });
  </script>
  <script src="js/main.js"></script>
</body>

</html>