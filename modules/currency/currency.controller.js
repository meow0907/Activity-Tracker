const { convertCurrency } = require("../../utils/currencyconverter");

const validateAmount = (amount) => {
  if (typeof amount !== "number" || amount <= 0) {
    throw new Error("Invalid amount: Amount must be a positive number.");
  }
};


const validateCurrencyCode = (currency, type) => {
  if (typeof currency !== "string" || !currency.trim()) {
    throw new Error(`Invalid ${type} currency code: Currency code cannot be empty.`);
  }
};

const cc = async ({ amount, fromCurrency, toCurrency }) => {
  // Validate the payload
  validateAmount(amount);
  validateCurrencyCode(fromCurrency, "source");
  validateCurrencyCode(toCurrency, "target");

  // Convert the currency
  try {
    const result = await convertCurrency(amount, fromCurrency, toCurrency);
    return result;
  } catch (error) {
    throw new Error(`Currency conversion failed: ${error.message}`);
  }
};

module.exports = {cc};