let resetButtons = document.querySelectorAll('.parameters__resetButton');
const closeButton = document.querySelector('.popup__close-button');


resetButtons.forEach(function(resetButton) {
  resetButton.addEventListener('click', function() {
    let checkboxes = this.parentNode.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.checked = false;
    });
  });
});

const searchButton = document.querySelector('.search-button');

searchButton.addEventListener('click', function() {
  let selectedCheckboxes = $('input[type=checkbox]:checked');
  let selectedValues = [];

  selectedCheckboxes.each(function() {
    selectedValues.push($(this).val());
  });

  console.log(selectedValues);

  const targetElement = document.querySelector('#results');

  targetElement.scrollIntoView({ behavior: 'smooth' });

  showProducts(selectedValues);
});

function showProducts(selectedValues) {
  const resultsList = document.querySelector('.results__list');
  const products = [
    {
      id: 'giorgiocasa',
      name: 'Giorgiocasa',
      values: ['cont', 'high', 'mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'piermaria',
      name: 'Piermaria',
      values: ['classic', 'midHigh', 'mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Piermaria</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50+3%
            <br>Предоплата: 50%, заказ до 2000 евро - 100%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'epocart',
      name: 'Epocart',
      values: ['cont', 'mid', 'mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Epocart</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 45%, при предоплате 100% - 45+3%
            <br>Предоплата: <4000 евро НЕТТО - 100%, >4000 евро - 50%, кухни и проекты – 70%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'formerin',
      name: 'Formerin',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'antares',
      name: 'Antares',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'siloma',
      name: 'Siloma',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'febalCasa',
      name: 'Febal Casa',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'altacom',
      name: 'Altacom',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'mowa',
      name: 'Mo.Wa',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'marchettiIlluminazione',
      name: 'Marchetti Illuminazione',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'zamagna',
      name: 'Zamagna',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'salvetti',
      name: 'Salvetti',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'oliverB',
      name: 'Oliver B',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'callesella',
      name: 'Callesella',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'compar',
      name: 'Compar',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'saber',
      name: 'Saber',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'morfeus',
      name: 'Morfeus',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'tomassiGalanti',
      name: 'Tomassi Galanti',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'tempora',
      name: 'Tempora',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'gruppoFox',
      name: 'GruppoFox',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    {
      id: 'tirolo',
      name: 'Tirolo',
      values: ['mirgroup'],
      popupHtml: `<div class="popup__container">
         <button class="popup__close-button" type="button"></button> 
         <img src="./images/giorgiocasa2.png" class="popup__image" alt="giorgiocasa"> 
         <div class="popup__text"> 
          <p class="popup__title">Giorgiocasa</p> 
          <a class="popup__link" href="#">Официальный сайт</a> 
          <p class="popup__description">Представительство: <span>MIRGROUP</span></p> 
          <p class="popup__subtitle">Условия работы</p> 
          <p class="popup__description">Скидка: 50%
            <br>Предоплата: 50%
            <br>Сроки производства: 45 рабочих дней
          </p> 
        </div> 
      </div>`
    },
    // добавить информацию о других продуктах
  ];
  let matchingProducts = [];

// Проверяем наличие выбранных значений в массиве selectedValues
  if (selectedValues.length === 0) {
    const noResultsHtml = '<p class="results__text">НЕТ РЕЗУЛЬТАТОВ</p>';
    resultsList.innerHTML = noResultsHtml;
    return;
  }

  // Находим товары, которые подходят под выбранные значения в массиве selectedValues
  products.forEach(function(product) {
  let matchCount = 0;
  selectedValues.forEach(function(value) {
  if (product.values.includes(value)) {
  matchCount++;
  }
  });
  if (matchCount === selectedValues.length) {
  matchingProducts.push(product);
  }
  });
  
  // Очистка списка результатов
  resultsList.innerHTML = '';
  
  // Если нет результатов поиска, то добавляем элемент с классом results__text
  if (matchingProducts.length === 0) {
  const noResultsHtml = '<p class="results__text">НЕТ РЕЗУЛЬТАТОВ</p>';
  resultsList.insertAdjacentHTML('beforeend', noResultsHtml);
  } else {
  // Добавляем карточки продукта в блок results__list
  let html = '';
  matchingProducts.forEach(function(product) {
  html += `<li>
              <button class="results__card" type="button" id="${product.id}"><span class="results__card-text">${product.name}</span></button>
            </li>`;
  });
  resultsList.insertAdjacentHTML('beforeend', html);
  }
  }

function addPopupContent(elementId, popupHtml) {
    const cardButton = document.getElementById(elementId);
    const cardPopup = document.querySelector('.popup');
    
    cardButton.addEventListener('click', () => {
      console.log(elementId);
      cardPopup.innerHTML = popupHtml;
    });
  }

  matchingProducts.forEach((item) => {
    addPopupContent(item.id, item.popupHtml);
  });

let cardButton = document.querySelector('.results__card')
cardButton.addEventListener('click', console.log(Работает));

/*
// Получаем все кнопки с классом results__card
const buttons = document.querySelectorAll('.results__card');

// Для каждой кнопки добавляем обработчик события клика
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Получаем содержимое popupHtml для текущего объекта
    const popupContent = button.dataset.popupHtml;
    
    // Создаем элемент для попапа
    const popup = document.createElement('div');
    popup.classList.add('popup-container');
    popup.innerHTML = popupContent;

    // Добавляем попап на страницу
    const container = document.querySelector('.popup');
    container.appendChild(popup);
  });
});

const resultsCards = document.querySelectorAll('.results__card');

resultsCards.forEach(function(card) {
  card.addEventListener('click', function() {
    const productId = this.dataset.productId;
    const product = products.find(function(p) {
      return p.id === productId;
    });

    const popup = document.querySelector('.popup');
    popup.innerHTML = product.popupHtml;
    popup.classList.remove('popup_closed');
    popup.classList.add('popup_opened');
  });
}); */


/*function generateCheckbox(id, name, value, text) {
  return `
    <div class="parameters__choice">
      <input class="parameters__input" type="checkbox" id="${id}" name="${name}" value="${value}">
      <label class="parameters__label" for="${id}"><span>${text}</span></label>
    </div>
  `;
}

const styles = [
  { id: "styleClassic", name: "style", value: "cont", text: "Классика" },
  { id: "styleNeoClassic", name: "style", value: "neoClassic", text: "Неоклассика" },
  { id: "styleArDeco", name: "style", value: "arDeco", text: "Ар-деко" },
  { id: "styleProv", name: "style", value: "prov", text: "Прованс" },
  { id: "styleMin", name: "style", value: "min", text: "Минимализм" },
  { id: "styleCont", name: "style", value: "cont", text: "Современный" },
  { id: "styleEco", name: "style", value: "eco", text: "Эко" },
  { id: "styleEclec", name: "style", value: "eclec", text: "Эклектика" },
  { id: "styleArNuvo", name: "style", value: "arNuvo", text: "Ар-нуво" },
  { id: "styleGlam", name: "style", value: "glam", text: "Гламур" },
];

const stylesHtml = styles.map((style) => generateCheckbox(style.id, style.name, style.value, style.text)).join("");

const stylesField = document.getElementById("styles");
stylesField.innerHTML += stylesHtml;


const products = [
  { id: "styleClassic", name: "product", value: "cont", text: "Классика" },
  { id: "styleNeoClassic", name: "product", value: "neoClassic", text: "Неоклассика" },
  { id: "styleArDeco", name: "product", value: "arDeco", text: "Ар-деко" },
  { id: "styleProv", name: "product", value: "prov", text: "Прованс" },
  { id: "styleMin", name: "product", value: "min", text: "Минимализм" },
  { id: "styleCont", name: "product", value: "cont", text: "Современный" },
  { id: "styleEco", name: "product", value: "eco", text: "Эко" },
  { id: "styleEclec", name: "product", value: "eclec", text: "Эклектика" },
  { id: "styleArNuvo", name: "product", value: "arNuvo", text: "Ар-нуво" },
  { id: "styleGlam", name: "product", value: "glam", text: "Гламур" },
];

const stylesHtml = styles.map((style) => generateCheckbox(style.id, style.name, style.value, style.text)).join("");

const stylesField = document.getElementById("styles");
stylesField.innerHTML += stylesHtml; */



