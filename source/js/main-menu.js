const navMain = document.querySelector('.main-nav');
const navButton = document.querySelector('.main-nav__button-menu');

  navMain.classList.remove('main-nav--no-js')

  navButton.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--close')) {
      navMain.classList.remove('main-nav--close')
      navMain.classList.add('main-nav--open')
    } else {
      navMain.classList.add('main-nav--close')
      navMain.classList.remove('main-nav--open')
    }
  });
