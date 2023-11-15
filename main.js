
const menuList = document.querySelector('.header__list');
const menuHamburguer = document.getElementById('menu');

menuHamburguer.addEventListener('click', ()=>{
    menuList.classList.toggle('menu_open');
})