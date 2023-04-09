const resetButtons = document.querySelectorAll('.parameters__resetButton');
const popup = document.querySelector('.popup');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupImage = popup.querySelector('.popup__image');
const popupTitle = popup.querySelector('.popup__title');
const popupLink = popup.querySelector('.popup__link');
const popupRepres = popup.querySelector('#represen');
const popupSale = popup.querySelector('#sale');
const popupPrePay = popup.querySelector('#prepay');
const popupTime = popup.querySelector('#time');
const searchButton = document.querySelector('.search-button');
const resultsList = document.querySelector('.results__list');
const resultsCards = document.querySelectorAll('.results__card');
const products = [
    {
      id: 'giorgiocasa',
      name: 'Giorgiocasa',
      values: ['cont', 'high', 'mirgroup'],
      image: 'https://www.luxuryfurnituremr.com/images/tb/4/5/3/45397/13423496015157_w904h3000.jpg',
      link: 'https://www.giorgiocasa.it/',
      represen: 'MIRGROUP',
      sale: '50%',
      prepay: '50%',
      time: '45 рабочих дней'
    },
    {
      id: 'piermaria',
      name: 'Piermaria',
      values: ['classic', 'midHigh', 'mirgroup'],
      image: 'https://webstatic.hoyoverse.com/upload/contentweb/2022/06/28/6d512d56ac7ee8181b6fecb8b53c8941_692004913353329817.png',
      link: 'ya.ru',
      represen: 'MIRGROUP',
      sale: '50+3%',
      prepay: '50%, заказ до 2000 евро - 100%',
      time: '45 рабочих дней'
    },
    {
      id: 'epocart',
      name: 'Epocart',
      values: ['cont', 'mid', 'mirgroup'],
      image: 'https://webstatic.hoyoverse.com/upload/contentweb/2022/06/28/6d512d56ac7ee8181b6fecb8b53c8941_692004913353329817.png',
      link: 'ya.ru',
      represen: 'MIRGROUP',
      sale: '45%, при предоплате 100% - 45+3%',
      prepay: '<4000 евро НЕТТО - 100%, >4000 евро - 50%, кухни и проекты – 70%',
      time: '45 рабочих дней'
    }
  ];
let matchingProducts = [];


// reset чекбоксов
resetButtons.forEach(function(resetButton) {
  resetButton.addEventListener('click', function() {
    const fieldset = resetButton.closest('.parameters__field');
    const checkboxes = fieldset.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
  });
});


popupCloseButton.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
  popup.classList.add('popup_closed');
});


function showPopup(product) {
  popupImage.src = product.image;
  popupTitle.textContent = product.name;
  popupLink.href = product.link;
  popupRepres.textContent = product.represen;
  popupSale.textContent = product.sale;
  popupPrePay.textContent = product.prepay;
  popupTime.textContent = product.time;
  popup.classList.remove('popup_closed');
  popup.classList.add('popup_opened');
}

searchButton.addEventListener('click', function() {
  let selectedCheckboxes = document.querySelectorAll('input[type=checkbox]:checked');
  let selectedValues = Array.from(selectedCheckboxes).map(checkbox => checkbox.value);

  console.log(selectedValues);

  const targetElement = document.querySelector('#results');
  targetElement.scrollIntoView({ behavior: 'smooth' });

  showProducts(selectedValues);
});


function addCardListeners() {
  const resultsCards = document.querySelectorAll('.results__card');

  resultsCards.forEach((card) => {
    card.addEventListener('click', () => {
      const productId = card.id;
      const product = products.find((p) => p.id === productId);

      showPopup(product);
    });
  });
}


function showProducts(selectedValues) {
  
  resultsList.innerHTML = '';

  if (selectedValues.length === 0) {
    resultsList.innerHTML = '<p class="results__text">НЕТ РЕЗУЛЬТАТОВ</p>';
    return;
  }

  
  let matchingProducts = products.filter(product => {
    return selectedValues.every(value => product.values.includes(value));
  });

  
  resultsList.innerHTML = matchingProducts.length ? matchingProducts.map(product => `
    <li>
      <button class="results__card" type="button" id="${product.id}">
        <span class="results__card-text">${product.name}</span>
      </button>
    </li>
  `).join('') : '<p class="results__text">НЕТ РЕЗУЛЬТАТОВ</p>';

  
  addCardListeners();
}



popupCloseButton.addEventListener('click', () => {
  popup.classList.remove('popup_opened');
});