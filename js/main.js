'use strict';

const menuButtonElement = document.querySelector('.nav-trigger');

const menuImageElement = document.createElement('img');

menuImageElement.setAttribute ('src', '../images/ico-menu.svg');
menuButtonElement.appendChild(menuImageElement);

const navElement = document.querySelector('.nav');
navElement.classList.add('hidden');
const closeButtonElement = document.querySelector('.nav-close');

function handlerShowMenu () {
navElement.classList.contains('hidden') ? navElement.classList.remove('hidden') :navElement.classList.add('hidden');
};

menuButtonElement.addEventListener('click', handlerShowMenu);