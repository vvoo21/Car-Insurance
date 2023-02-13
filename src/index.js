/* eslint-disable */
import './css/style.css';
import './css/custom.css';
import ui from './modules/UI.js';
import quoteInsurance from './modules/quoteInsurance.js';

const form = document.querySelector('#quote-insurance');

document.addEventListener('DOMContentLoaded', () => {
  // fill the years
  ui.fillOptions();
});

form.addEventListener('submit', quoteInsurance);

export default form;