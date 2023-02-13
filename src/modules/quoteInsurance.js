import ui from './UI.js';
import Insurance from './constructor.js';

const quoteInsurance = (e) => {
  e.preventDefault();
  const brand = document.querySelector('#brand').value;
  const year = document.querySelector('#year').value;
  const type = document.querySelector('input[name="type"]:checked').value;
  
  if(brand === '' || year === '' || type === ''){
    ui.showMessage('All fields are required', 'error');
    return
  }

  ui.showMessage('Quoting...', 'correct');

  // hide previous quotes
  const results = document.querySelector('#result div');
  if(results != null) {
    results.remove();
  }

  // instantiate the insurance
  const insurance = new Insurance(brand, year, type);
  const total = insurance.quoting();

  // show the result
  ui.showResult(total, insurance);

};

export default quoteInsurance;