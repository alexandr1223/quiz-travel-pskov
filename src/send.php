<?php
$name = stripslashes(htmlspecialchars($_POST['name']));
$phone = stripslashes(htmlspecialchars($_POST['phone']));
if (isset($_POST['textarea'])) {$comment = $_POST['textarea'];}
$message="
ФИО: ".$name."
Контактный телефон: {$phone}
";
foreach ($_POST as $key => $value) {
    if ($key!='name' && $key!='textarea' && $key!='phone') {
        $message.=strval($value)."\n";
    }

}
$message .= "
Сайт заявки: {$_SERVER['HTTP_HOST']}
Время отправки: ".date("m.d.Y H:i:s")."
IP покупателя: {$_SERVER['REMOTE_ADDR']}";
$verify = mail("pogrebnyak19999@gmail.com", "Заявка с сайта опросника", $message,
     "From: pogrebnyak19999@gmail.com \r\n"
    ."X-Mailer: PHP/" . phpversion());
?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700&display=swap&subset=cyrillic"
        rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap&subset=cyrillic"
        rel="stylesheet">
    <link rel="stylesheet" href="css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="css/style.min.css">
    <title>Антивибрационная защита</title>
</head>

<body>

    <section class="main">
        <header class="main-header">
            <div class="main-header__text main-header__hide">
                Наши изделия нужны всем
            </div>
            <div class="main-header__text">
                Антивибрационная защита
            </div>
            <div class="main-header__contact">
                <a href="tel:+78126840817">+7 (812) 684-08-17</a>
                <span> c 10:00 до 20:00</span>
            </div>
        </header>
        <div class="content">
            <div class="content-start">
                <div class="content-start__title">
                Благодарим за ваше внимание, в ближайшее время с вами свяжется наш специалист
                </div>
                <a href="https://antvibro.ru/">
                <div class="content-start__btn">Перейти на сайт
                </div>
                </a>
            </div>
            </div>
    </section>
</body>
</html>