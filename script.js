const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const form = document.querySelector("form");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.querySelector("h1#result");

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
    // console.log(amount, price, symbol);
    try {
        footer.classList.add("show-result");

        description.textContent = `${symbol} 1 =  ${formatCurrencyBRL(price)}`;
        let total = price * amount;
        
        if(isNaN(total)){
            return alert("Por favor, digite o valor corretamente para converter.")
        }

        total = formatCurrencyBRL(price * amount).replace("R$", "");
        result.textContent = `${total} Reais`;
    } catch (error) {
        console.log("Não foi possível converter. Tente novamente mais tarde. Erro = ", error);
        footer.classList.remove("show-result")
    }
}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
}