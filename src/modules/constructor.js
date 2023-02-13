function Insurance(brand, year, type) {
  this.brand = brand;
  this.year = year;
  this.type = type;
}

Insurance.prototype.quoting = function quoting() {
  /* 1 = American 1.15
     2 = Asian 1.05
     3 = European 1.35
  */

  const base = 2000;
  let quantity;

  switch (this.brand) {
    case '1':
      quantity = base * 1.15;
      break;
    case '2':
      quantity = base * 1.05;
      break;
    case '3':
      quantity = base * 1.35;
      break;
    default:
      break;
  }

  // read the year
  const difference = new Date().getFullYear() - this.year;

  // each year the cost of the insurance is going to be 3% cheaper
  quantity -= ((difference * 3) * quantity) / 100;

  if (this.type === 'basic') {
    quantity *= 1.30;
  } else {
    quantity *= 1.50;
  }

  return quantity;
};

export default Insurance;