const navMain = document.querySelector('.main-nav');
const navButton = document.querySelector('.main-nav__button-menu');
const mainHeader = document.querySelector('.main-header');

  mainHeader.classList.add('main-header--js');
  navMain.classList.add('main-nav--close');

  navButton.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--close')) {
      navMain.classList.remove('main-nav--close')
      navMain.classList.add('main-nav--open')
    } else {
      navMain.classList.add('main-nav--close')
      navMain.classList.remove('main-nav--open')
    }
  });
