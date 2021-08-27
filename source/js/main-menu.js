const navMain = document.querySelector('.main-nav');
const navButton = document.querySelector('.main-nav__button-menu');
const navList = document.querySelector('.main-nav__nav-list'); //(Скрытие меню при загрузке JS)

  navList.classList.add('main-nav--disable'); //(Скрытие меню при загрузке JS)
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
