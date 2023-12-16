const btn = document.querySelector('.header__burger');
const navigation = document.querySelector('.navigation');

navigation.classList.remove('navigation--no-js');
navigation.classList.add('navigation--close');
btn.classList.remove('header__burger--no-js');

btn.addEventListener('click', function() {
  if (btn.classList.contains('header__burger--open')) {
    btn.classList.remove('header__burger--open');
    navigation.classList.remove('navigation--open');
    navigation.classList.add('navigation--close');
  } else {
    btn.classList.add('header__burger--open');
    navigation.classList.remove('navigation--close');
    navigation.classList.add('navigation--open');
  }
})

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

