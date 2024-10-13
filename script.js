const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");

amount.addEventListener("input", () => {

    const hasCharactersRegex = /\D+/g;
    amount.value = amount.value.replace(hasCharactersRegex, "");
})

form.onsubmit = function (event) {
    event.preventDefault();

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$");
            break;

        case "EUR":
            convertCurrency(amount.value, EUR, "€");
            break;

        case "GBP":
            convertCurrency(amount.value, GBP, "£");
            break;
    }

}

function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol);
}