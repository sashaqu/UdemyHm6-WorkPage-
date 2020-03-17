let menu = document.getElementsByClassName('menu')[0]; // Получили массив с одним элементов, который назыв HTMLCollection. И содержит один элемент - это наше меню с 3 айтэмами.
let menuItems = document.getElementsByClassName('menu-item'); // Получили массив NodeList со всеми пунктами меню.
let createLi = document.createElement('li'); // В переменной createLi находится тэг li.
let title = document.getElementById('title');
let adv = document.getElementsByClassName('adv')[0];
let promptQuestion = document.querySelector('#prompt');
console.log(promptQuestion);

// Восстановить порядок в меню, добавить пятый пункт
menu.insertBefore(menuItems[2], menuItems[1]);

createLi.classList.add('menu-item');// Добавили класс, нашему тэгу li
createLi.textContent = 'Пятый пункт'; // Добавили текст в 5-й пункт
menu.appendChild(createLi);

// Заменить картинку заднего фона на другую из папки img
document.body.style.backgroundImage = "url('img/apple_true.jpg')";

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
title.textContent = "Мы продаем только подлинную технику Apple";

// Удалить рекламу со страницы
adv.remove();

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let question = prompt("Какое Ваше отношение к технике Apple?", "Хорошее =)");
promptQuestion.textContent = question;