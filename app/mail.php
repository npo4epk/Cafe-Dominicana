<?php

$recepient = "nekit-1989@mail.ru";
$sitename = "Cafe-Dominicana";

$subcject = trim($_POST["delivery-name"]);
$tel = trim($_POST["delivery-tel"]);

// $message = "From email: $email \nSubcject: $subcject \nMessage: $mes";
$message = "

Добрый день!
Письмо с сайта 'Cafe-Dominicana'
Заказать доставку кофе.


Имя: $subcject;
Телефон: $tel;

";

$pagetitle = "Message from the site \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $email");