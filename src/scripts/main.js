'use strict';

const body = document.querySelector('.page__body');
const form = document.querySelector('.contact__form');

function scrollChange() {
  const hash = window.location.hash;

  if (
    hash === '#menu'
    || hash === '#card'
    || hash === '#menu-card'
    || hash === '#shipping'
    || hash === '#payment'
    || hash === '#confirmation'
  ) {
    body.style.overflow = 'hidden';
  } else {
    body.style.overflow = '';
  }
}

// const email = 'olyabushovska767@gmail.com';

document.addEventListener('DOMContentLoaded', function() {
  const formShipping = document.querySelector('.shipping__form');

  formShipping.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    // eslint-disable-next-line no-undef
    const formData = new FormData(formShipping);

    formShipping.classList.add('_sending');

    // eslint-disable-next-line no-undef
    const response = await fetch('sendmail.php', {
      method: 'Post',
      body: formData,
    });

    if (response.ok) {
      const result = await response.json();

      // eslint-disable-next-line no-undef
      alert(result.message);
      formShipping.reset();
      formShipping.classList.remove('_sending');
    } else {
      // eslint-disable-next-line no-undef
      alert('Помилка');
      formShipping.classList.remove('_sending');
    }

    // let error = formValidate(form);
  }

  /* function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);
      formAddError(input);
    }
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('error');
  } */
});

// eslint-disable-next-line camelcase
const shipping__link = document.querySelector('.shipping__link');
// eslint-disable-next-line camelcase
const payment__delivery = document.querySelectorAll('.payment__delivery');
// eslint-disable-next-line camelcase
const payment__button = document.querySelector('.payment__button');
const card = document.querySelector('.cardd');
const del = document.querySelector('.del');

payment__delivery.forEach((element) => {
  element.addEventListener('click', (event) => {
    switch (event.target.id) {
      case '11':
        payment__button.setAttribute('href', '#shipping');
        del.style.border = 'none';
        card.style.border = '2px solid black';

        if (card.style.border === '2px solid black') {
          shipping__link.style.display = 'block';
        }
        break;

      case '12':
        payment__button.setAttribute('href', '#shipping');
        del.style.border = '2px solid black';
        card.style.border = 'none';

        if (del.style.border === '2px solid black') {
          shipping__link.style.display = 'none';
        }
        break;
      default:
        break;
    }
  });
});

// eslint-disable-next-line camelcase
const shop__image = document.querySelectorAll('.shop__image');
// eslint-disable-next-line camelcase
const card__image = document.querySelector('.card__image');

shop__image.forEach((element) => {
  element.addEventListener('click', (event) => {
    switch (event.target.id) {
      case '1':
        cardName.textContent = 'Hydrophilic oil';
        card__price.textContent = '160 UAH';

        ingredients.textContent
          // eslint-disable-next-line max-len
          = 'Ingredients: cocosulfate, aloe hydrolate, sweet almond oil, wheat proteins, chamomile grass, lavender essential oil.';

        application.textContent
          // eslint-disable-next-line max-len
          = 'Application: foam the shampoo in your hands and apply foam on the hair or draw a block over wet hair, foam, massage, rinse, apply balm or conditioner.';
        // eslint-disable-next-line max-len
        card__image.src = 'https://lh3.googleusercontent.com/dTbZzq8VOKZWQGvw2foVoOJzMjDFgtBPYuQ1qUh099aZQpWFaxdKGJVPaYL7fdBivRWqILp9KNQ7SglsUxuO5qPUUcFUgQNVaF0fGI9u';
        break;

      case '2':
        cardName.textContent = 'Face cream';
        card__price.textContent = '210 UAH';

        ingredients.textContent
          // eslint-disable-next-line max-len
          = 'Ingredients: water, Glycerin, Ethylhexyl Cocoate,Hydrogenated Cocoglycerides, Stearyl Alcohol.';

        application.textContent
          // eslint-disable-next-line max-len
          = 'Application: Apply to face and neck skin. Use in the morning and evening.';
        // eslint-disable-next-line max-len
        card__image.src = 'https://lh3.googleusercontent.com/46sUJ-zZ3nuPnNdF-u6BFJnpGkLjxlEdIUqB5A502pA4C9S74YFZzbRPBlzZDZmaAiea1pily6r44PLF7LmkPF4msNqBge8XiN-v_lTA';

        break;
      case '3':
        cardName.textContent = 'UBTAN';
        card__price.textContent = '160 UAH';

        ingredients.textContent
          // eslint-disable-next-line max-len
          = 'Ingredients: organic green gram, sandalwood, tunga musta, kachuralu, bavanchalu, dried fenugreek.';

        application.textContent
          // eslint-disable-next-line max-len
          = 'Application: Apply the paste all over your body, gently massage with your fingertips in circular motion.Rinse well with plain water and pat dry. Use it 2-3 times a week for a brighter and even skin tone.  ';
        // eslint-disable-next-line max-len
        card__image.src = 'https://lh3.googleusercontent.com/CCux00QqRizFWnHN8hZaMrXmQA3K-P92EhThy3P8c3n1F0CmHbWi5504J1_PkYx-2q71tQ-CUePcTZarwbUy5MXfKlTmiB4BbY6-DlIM';

        break;
      case '4':
        cardName.textContent = 'mild body scrub';
        card__price.textContent = '400 UAH';

        ingredients.textContent
          // eslint-disable-next-line max-len
          = 'Ingredients: enriched with ultrafine bamboo particles and kaolin clay.';

        application.textContent
          // eslint-disable-next-line max-len
          = 'Application: Apply the scrub to clean, damp skin and rub in circular, massaging movements. Rinse off the remaining scrub with water and dry the skin with a towel.';
        // eslint-disable-next-line max-len
        card__image.src = 'https://lh3.googleusercontent.com/dP073CJ6Pe7qDG6viNgDbDRidDr13suzqSnVLHZwQpVD3uWe9MZ-JEDva0I1PCba-BnMhiO-mF3qXIRF4LIEboBjC-GFu4POWKjBT7M';
        break;
      case '5':
        cardName.textContent = 'Almond Shampoo with Lavender Oil';
        card__price.textContent = '70 UAH';

        ingredients.textContent
          // eslint-disable-next-line max-len
          = 'Ingredients: cocosulfate, aloe hydrolate, sweet almond oil, wheat proteins, chamomile grass, lavender essential oil.';

        application.textContent
          // eslint-disable-next-line max-len
          = 'Application:  foam the shampoo in your hands and apply foam on the hair or draw a block over wet hair, foam, massage,rinse, apply balm or conditioner.';
        // eslint-disable-next-line max-len
        card__image.src = 'https://lh3.googleusercontent.com/Hv0o7ZfTrvLQLB8M6Q91o0eMWFG0XX08Xh7UHUUmxmI3onogULXiZS7Gx6tluqY3vP61Ob9GMCPj3Jc-oqIa-Z8K8IXyc4T-3exlix2G';
        break;
      case '6':
        cardName.textContent = 'shampoo-conditioner HERBS';
        card__price.textContent = '160 UAH';

        ingredients.textContent
          // eslint-disable-next-line max-len
          = 'Ingredients: Aqua, Herbal Extract: Chamomilla Recutita Flower, Helianthus Annus Officinalis Flos, Cetearyl Alcohol, Glycerin, Behentrimonium Methosulfate, Panthenol.';

        application.textContent
          // eslint-disable-next-line max-len
          = 'Application: Apply conditioner generously to wet hair from root to tip and rinse.';
        // eslint-disable-next-line max-len
        card__image.src = 'https://lh3.googleusercontent.com/gtILyBrmBBxvpn9yZHUD4EVEY8BeDB_JlDTpUrUDmaoqFtlyXAGuOSJUspCzUH9q81d0FpDsvnRpl2LfBR8ZP7NJ0QYXkAWLnwnw0xaeiQ';
        break;
      case '7':
        cardName.textContent = 'whiskey room candle';
        card__price.textContent = '350 UAH';

        ingredients.textContent
          // eslint-disable-next-line max-len
          = 'Ingredients: Naturally deodorized coconut oil is a fantastic addition to our candle blends.';

        application.textContent
          // eslint-disable-next-line max-len
          = 'Application: First time lighting, please ensure you burn for at least 4 hours, keep sheltered from drafts.';
        // eslint-disable-next-line max-len
        card__image.src = 'https://lh3.googleusercontent.com/CvyCS0osEM-zTdqZC-xOK91Kk_sd_Bu-uO4wVCaBgFebsxZX5z1kx6pWXdTu23pZ56mEd0zHunMyF1gPG0BqmUiJGdUinSXMCMQyhVIrog';
        break;
      case '8':
        cardName.textContent = 'hand poured scented soy candle';
        card__price.textContent = '300 UAH';

        ingredients.textContent
          // eslint-disable-next-line max-len
          = 'Ingredients: Blackberry & Bay is a subtle fragrance, bringing a lowkey fruity and herby freshness to your home.';

        application.textContent
          // eslint-disable-next-line max-len
          = 'Application: Always burn within sight. Keep away from drafts and vibrations. Keep out of reach of children and pets.';
        // eslint-disable-next-line max-len
        card__image.src = 'https://lh3.googleusercontent.com/8uFLAmlpjZOUd9mZJ3KzOW3L0D0CIMvx9ctplTGifPsMNH0jjK4U2vjpK1dPszmr1okwNTElLW0mX9m_r0MyhatNmJA8yp4AEFcMEQZ1';
        break;
      default:
        break;
    }
  });
});

// eslint-disable-next-line no-console
console.log(card__image.src);

const cardName = document.querySelector('.card__product-name');

// eslint-disable-next-line camelcase
const card__price = document.querySelector('.card__price');
const ingredients = document.querySelector('.ingredients');
const application = document.querySelector('.application');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

window.onhashchange = scrollChange;

scrollChange();
