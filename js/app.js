window.addEventListener('DOMContentLoaded', function () {
  const body = document.querySelector('body');

  //mobile header
  const mobileHeader = document.querySelector('.mobile-header');
  const buttonBurgerMenu = document.querySelector('.header-mobile__menu--js');
  const mobileHeaderClose = document.querySelector('.mobile-header--close-js');


  buttonBurgerMenu.addEventListener('click', function() {
    mobileHeader.classList.toggle('mobile-header--open');
    body.classList.toggle('open');
  });

  mobileHeaderClose.addEventListener('click', function() {
    mobileHeader.classList.toggle('mobile-header--open')
    body.classList.toggle('open');
  });

  //sliders
  const advantagesSlider = new Swiper('.advantages__slider', {
    grabCursor: true,
    slidesPerView: 4,
    spaceBetween: 20,
    breakpoints: {
      375: {
        slidesPerView: 1.2,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 4,
      },
    },

    navigation: {
      nextEl: '.advantages__button-next',
      prevEl: '.advantages__button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  });

  const featuredPropertySlider = new Swiper('.featured-property__slider', {
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2.2,
      },
      1024: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: '.featured-property__button-next',
      prevEl: '.featured-property__button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
    },
  });

  const propertySliderThumbs = new Swiper('.property-card__thumbs', {
    grabCursor: true,
    direction: 'vertical',
    spaceBetween: 10,
    slidesPerView: 4.4,
    watchSlidesProgress: true,

    scrollbar: {
      el: '.property-card__thumbs-scrollbar',
      draggable: true,
      dragSize: 142,
    }
  });

  const propertySlider = new Swiper('.property-card__slider', {
    grabCursor: true,
    direction: 'horizontal',
    spaceBetween: 10,
    slidesPerView: 1,
    breakpoints: {
      767: {
        dragSize: 80,
      },
      1200: {
        dragSize: 170,
      },
    },

    thumbs: {
      swiper: propertySliderThumbs,
    },

    navigation: {
      nextEl: '.property-card__button-next',
      prevEl: '.property-card__button-prev',
    },

    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    }
  });



  //faq
  const buttonBuyers = document.querySelector('.faq__button-buyers--js');
  const buttonSellers = document.querySelector('.faq__button-sellers--js');
  const faqBuyers = document.querySelector('.faq__for-buyers--js');
  const faqSellers = document.querySelector('.faq__for-sellers--js');

  buttonSellers.addEventListener('click', function() {
    faqSellers.style.display = 'flex';
    faqBuyers.style.display = 'none';
  })


  buttonBuyers.addEventListener('click', function() {
    faqSellers.style.display = 'none';
    faqBuyers.style.display = 'flex';
  })


  const dropdownButton = document.querySelectorAll('.faq__button--js');
  const dropdownText = document.querySelectorAll('.faq__dropdown-text');
  const dropdownClose = document.querySelectorAll('.faq__close--js');
  const dropdownOpen = document.querySelectorAll('.faq__open--js');

  for (let i = 0; i < dropdownButton.length; i++) {
    dropdownButton[i].addEventListener('click', function() {
      dropdownText[i].classList.toggle('faq__dropdown-text--open');
      dropdownClose[i].classList.toggle('faq__close--close');
      dropdownOpen[i].classList.toggle('faq__open--open');
    });
  }

  //form
  const contactUsForm = document.forms.contactUsForm;
  contactUsForm.addEventListener('submit', (e) => {
    e.preventDefault();
  })

  //services-popup
  const servicesPopupButton = document.querySelectorAll('.services__button--js');
  const servicesPopup = document.querySelectorAll('.services__popup--js');
  const servicesPopupButtonClose = document.querySelectorAll('.services__popup--close-js');

  for (let i = 0; i < servicesPopupButton.length; i++) {
    servicesPopupButton[i].addEventListener('click', function() {
      servicesPopup[i].classList.toggle('services__popup-open');
    });
  };

  for (let i = 0; i < servicesPopupButtonClose.length; i++) {
    servicesPopupButtonClose[i].addEventListener('click', function() {
      servicesPopup[i].classList.toggle('services__popup-open');
    });
    window.addEventListener('keydown', function (event) {
      if(event.key === 'Escape') {
        servicesPopup[i].classList.remove('services__popup-open');
      }
    });
  };


});
