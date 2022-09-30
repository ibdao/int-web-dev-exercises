// Find DOM element and hold onto it, so we don't have to search for it
// every time we use it.
const calcForm = document.getElementById("calc-form");


/** Get form values and return as `{amount, years, rate}`.
 *
 * Example output: `{"amount": 10000, "years": 10, "rate": 4.5}`.
 *
 * */

function getFormValues() {
  const amount = +document.getElementById("loan-amount").value;
  const years = +document.getElementById("loan-years").value;
  const rate = +document.getElementById("loan-rate").value;
  return {amount, years, rate};
}


/** Calculate monthly payment and return exact amount. */

function calcMonthlyPayment(amount, years, rate) {
  let calc = (amount * ((rate / 100) / 12)) / (1 - ((1 + ((rate / 100) / 12)) ** (-years * 12)));
  return +calc.toFixed(2);
}


/** Get form values, calculate, convert to 2-decimal places, and update UI. */

function getFormValuesAndDisplayResults() {
  let values = getFormValues();
  let result = calcMonthlyPayment(values['amount'], values['years'], values['rate']);
  document.getElementById('calc-monthly-payment').innerHTML = result;
}


/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  // use the default values in the provided screenshot
  document.getElementById("loan-amount").value = 0;
  document.getElementById("loan-years").value = 0;
  document.getElementById("loan-rate").value = 0;
  document.getElementById('calc-monthly-payment').innerHTML = 0;
}


/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  setInitialValues();

  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}
