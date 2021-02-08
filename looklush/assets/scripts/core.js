var nav,
menu,
menuButton;

nav        = document.querySelector('nav');
menu       = document.querySelector('.menu');
menuButton = document.querySelector('.menu-button');


///////////////////////////////
// function to set nav to dark

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

//////////////////////////////////
// function to set nav to visible

menuButton.onclick = function() {
  if (!menu.classList.contains('visible')) {
    menu.classList.add('visible');
  }
}

/////////////////////////////////
// function to toggle mobile nav

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

///////////////////////////////////////
// function to handle links in web app
