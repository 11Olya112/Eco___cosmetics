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
  }
});

const shippingLink = document.querySelector('.shipping__link');

const paymentDelivery = document.querySelectorAll('.payment__delivery');

const paymentButton = document.querySelector('.payment__button');
const card = document.querySelector('.cardd');
const del = document.querySelector('.del');

paymentDelivery.forEach((element) => {
  element.addEventListener('click', (event) => {
    switch (event.target.id) {
      case '11':
        paymentButton.setAttribute('href', '#shipping');
        del.style.border = 'none';
        card.style.border = '2px solid black';

        if (card.style.border === '2px solid black') {
          shippingLink.style.display = 'block';
        }
        break;

      case '12':
        paymentButton.setAttribute('href', '#shipping');
        del.style.border = '2px solid black';
        card.style.border = 'none';

        if (del.style.border === '2px solid black') {
          shippingLink.style.display = 'none';
        }
        break;
      default:
        break;
    }
  });
});

const shopImage = document.querySelectorAll('.shop__image');
const cardImage = document.querySelector('.card__image');

shopImage.forEach((element) => {
  element.addEventListener('click', (event) => {
    switch (event.target.id) {
      case '1':
        cardName.textContent = 'Hydrophilic oil';
        cardPrice.textContent = '160 UAH';

        ingredients.textContent = `Ingredients: cocosulfate,
        aloe hydrolate, sweet almond oil,wheat proteins,chamomile grass,
        lavender essential oil.`;

        application.textContent = `Application: foam the shampoo
        in your hands and apply foam on the hair or draw a block over
        wet hair, foam, massage, rinse, apply balm or conditioner.`;

        cardImage.src = `https://live.staticflickr.com/
        65535/52854265256_8808f391fa_m.jpg`;
        break;

      case '2':
        cardName.textContent = 'Face cream';
        cardPrice.textContent = '210 UAH';

        ingredients.textContent = `Ingredients: water, Glycerin,
        Ethylhexyl Cocoate,Hydrogenated Cocoglycerides, Stearyl Alcohol.`;

        application.textContent = `Application: Apply to face and neck skin.
        Use in the morning and evening.`;

        cardImage.src = `https://live.staticflickr.com/
        65535/52853679392_344e871241_m.jpg`;

        break;
      case '3':
        cardName.textContent = 'UBTAN';
        cardPrice.textContent = '160 UAH';

        ingredients.textContent = `Ingredients: organic green gram, sandalwood,
        tunga musta, kachuralu, bavanchalu, dried fenugreek.`;

        application.textContent = `Application:
        Apply the paste all over your body, gently massage with your fingertips
        in circular motion.Rinse well with plain water and pat dry.
        Use it 2-3 times a week for a brighter and even skin tone.`;

        cardImage.src = `https://live.staticflickr.com/
        65535/52854442704_67007124cb_m.jpg`;

        break;
      case '4':
        cardName.textContent = 'mild body scrub';
        cardPrice.textContent = '400 UAH';

        ingredients.textContent = `Ingredients: enriched with
        ultrafine bamboo particles and kaolin clay.`;

        application.textContent = `Application: Apply the scrub to clean,
        damp skin and rub in circular, massaging movements.
        Rinse off the remaining scrub with water and dry the skin
        with a towel.`;

        cardImage.src = `https://live.staticflickr.com/
        65535/52853692347_a45d31b27d_m.jpg`;
        break;
      case '5':
        cardName.textContent = 'Almond Shampoo with Lavender Oil';
        cardPrice.textContent = '70 UAH';

        ingredients.textContent = `Ingredients: cocosulfate, aloe hydrolate,
        sweet almond oil, wheat proteins, chamomile grass,
        lavender essential oil.`;

        application.textContent = `Application:  foam the shampoo in your
        hands and apply foam on the hair or draw a block over wet hair,
        foam, massage,rinse, apply balm or conditioner.`;

        cardImage.src = `https://live.staticflickr.com/
        65535/52854269476_5b66cd2fb2_m.jpg`;
        break;
      case '6':
        cardName.textContent = 'shampoo-conditioner HERBS';
        cardPrice.textContent = '160 UAH';

        ingredients.textContent = `Ingredients: Aqua, Herbal Extract:
        Chamomilla Recutita Flower, Helianthus Annus Officinalis Flos
        Cetearyl Alcohol, Glycerin, Behentrimonium Methosulfate, Panthenol.`;

        application.textContent = `Application: Apply conditioner
        generously to wet hair from root to tip and rinse.`;

        cardImage.src = `https://live.staticflickr.com/
        65535/52853691692_6818ca9b1e_m.jpg`;
        break;
      case '7':
        cardName.textContent = 'whiskey room candle';
        cardPrice.textContent = '350 UAH';

        ingredients.textContent = `Ingredients: Naturally
        deodorized coconut oil is a fantastic addition to our candle blends.`;

        application.textContent = `Application: First time
        lighting, please ensure you burn for at least 4 hours,
        keep sheltered from drafts.`;

        cardImage.src = `https://live.staticflickr.com/
        65535/52854689720_fefece0be9_m.jpg`;
        break;
      case '8':
        cardName.textContent = 'hand poured scented soy candle';
        cardPrice.textContent = '300 UAH';

        ingredients.textContent = `Ingredients: Blackberry & Bay is a subtle
        fragrance, bringing a lowkey fruity and herby freshness to your home.`;

        application.textContent = `Application: Always burn within sight.
        Keep away from draftsand vibrations.
        Keep out of reach of children and pets.`;

        cardImage.src = `https://live.staticflickr.com/
        65535/52853690717_8ee709518c_m.jpg`;
        break;
      default:
        break;
    }
  });
});

const cardName = document.querySelector('.card__product-name');

const cardPrice = document.querySelector('.card__price');
const ingredients = document.querySelector('.ingredients');
const application = document.querySelector('.application');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();
});

window.onhashchange = scrollChange;

scrollChange();
