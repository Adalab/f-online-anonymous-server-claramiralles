'use strict';

const menuButtonElement = document.querySelector('.nav-trigger');
const menuImageElement = document.createElement('img');
menuImageElement.setAttribute ('src', '../images/ico-menu.svg');
menuButtonElement.appendChild(menuImageElement);

const navElement = document.querySelector('.nav');
navElement.classList.add('hidden');

const closeButtonElement = document.querySelector('.nav-close');
const closeImageElement = document.createElement('img');
closeImageElement.setAttribute('src', '../images/ico-close.svg');
closeButtonElement.appendChild(closeImageElement);

function handlerMenu() {
    showMenu()
    hideMenuButton()
    hideCloseButton()
};

function showMenu() {
    navElement.classList.contains('hidden') ? navElement.classList.remove('hidden') :navElement.classList.add('hidden');
};

function hideMenuButton(){
    navElement.classList.contains('hidden') ? menuButtonElement.classList.remove('hidden') :menuButtonElement.classList.add ('hidden');
};

function handlerCloseButton(){
    showMenu()
    hideCloseButton()
    hideMenuButton()
}
function hideCloseButton(){
    navElement.classList.contains('hidden')? closeButtonElement.classList.add('hidden') : closeButtonElement.classList.remove('hidden');
}

menuButtonElement.addEventListener('click', handlerMenu);
closeButtonElement.addEventListener('click', handlerCloseButton);