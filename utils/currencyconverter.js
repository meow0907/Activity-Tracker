const CC = require("currency-converter-lt");

const convert1 = (A, B, C) => {
  let currencyConverter = new CC({ from: A, to: B, amount: C });
  currencyConverter.convert().then((response) => {
    console.log(response);
  });
};

convert1("USD", "INR", 100);

