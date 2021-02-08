var nav,
    menu,
    menuButton;

nav        = document.querySelector('nav');
menu       = document.querySelector('.menu');
menuButton = document.querySelector('.menu-button');

window.onscroll = function () {
  nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    if (!nav.classList.contains('dark')) {
      nav.className += ' dark';
    }
  } else {
    nav.className = nav.className.replace(' dark', '');
  }
}

menuButton.onclick = function() {
  if (!menu.classList.contains('visible')) {
    menu.classList.add('visible');
  }
}

document.addEventListener('click', function (element) {
  element = element.target;
  console.log(element);
  if (menu.classList.contains('visible')) {
    if (!element.parentElement.classList.contains('menu')
    &&  !element.parentElement.parentElement.classList.contains('menu')
    &&  !element.classList.contains('menu-button')) {
      menu.classList.remove('visible')
    }
  }
});
