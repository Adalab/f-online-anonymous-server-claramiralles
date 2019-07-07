'use strict';

//REMOVED THIS CODE & PUT THE IMAGE THROUGH CSS AS BACKGROUND TO PAGE, SINCE IT WAS GIVING POSITION PROBLEMS

// const bodyElement = document.querySelector('body');

// // const pageElement = document.querySelector('.page');
// const backgroundImage = document.createElement('img');
// backgroundImage.setAttribute('src', "../images/anonymous-server-background.jpg");
// backgroundImage.classList.add('image__background');
// bodyElement.appendChild(backgroundImage);

const headerElement = document.querySelector('.page__header');
headerElement.classList.add('closed');


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
    putBlackGradient()
};

function showMenu() {
    navElement.classList.contains('hidden') ? navElement.classList.remove('hidden') :navElement.classList.add('hidden')
};

function hideMenuButton(){
    navElement.classList.contains('hidden') ? menuButtonElement.classList.remove('hidden') :menuButtonElement.classList.add ('hidden')
};

function hideCloseButton(){
    navElement.classList.contains('hidden')? closeButtonElement.classList.add('hidden') : closeButtonElement.classList.remove('hidden')
};

function putBlackGradient(){
    navElement.classList.contains('hidden')?headerElement.classList.add('closed') :headerElement.classList.remove('closed')
};

function handlerCloseButton(){
    showMenu()
    hideCloseButton()
    hideMenuButton()
    putBlackGradient()
};

menuButtonElement.addEventListener('click', handlerMenu);
closeButtonElement.addEventListener('click', handlerCloseButton);