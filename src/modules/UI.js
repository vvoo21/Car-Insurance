/* eslint-disable */
import form from '../index.js';

function UI() {}

// display the latest 20 years in the select
UI.prototype.fillOptions = () => {
  const max = new Date().getFullYear();
  const min = max - 20;

  const selectYear = document.querySelector('#year');

  for (let i = max; i > min; i -= 1) {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};

// show alert
UI.prototype.showMessage = (message, type) => {
  const div = document.createElement('div');

  if (type === 'error') {
    div.classList.add('error');
  } else {
    div.classList.add('correct');
  }

  div.classList.add('message', 'mt-10');
  div.textContent = message;

  form.insertBefore(div, document.querySelector('#result'));

  setTimeout(() => {
    div.remove();
  }, 2000);
};

// show the result of the quotation
UI.prototype.showResult = (total, insurance) => {
  const { brand, year, type } = insurance;

  let brandName;

  switch (brand) {
    case '1':
      brandName = 'American';
      break;
    case '2':
      brandName = 'Asian';
      break;
    case '3':
      brandName = 'European';
      break;
    default:
      break;
  }

  const div = document.createElement('div');
  div.classList.add('mt-10');

  div.innerHTML = `
    <p class="header">Summary</p>
    <p class="font-bold">Brand: <span class="font-normal"> ${brandName} </span></p>
    <p class="font-bold">Year: <span class="font-normal"> ${year} </span></p>
    <p class="font-bold">Type: <span class="font-normal capitalize"> ${type} </span></p>
    <p class="font-bold">Total: <span class="font-normal"> $ ${total} </span></p>
  `;

  const resultDiv = document.querySelector('#result');

  // show spinner
  const spinner = document.querySelector('#charging');
  spinner.style.display = 'block';

  setTimeout(() => {
    spinner.style.display = 'none';
    resultDiv.appendChild(div);
  }, 2000);
};

// instantiate the UI
const ui = new UI();

export default ui;
