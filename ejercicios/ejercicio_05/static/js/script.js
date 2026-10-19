const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const resultado = document.getElementById("resultado");

function sumar() {
    resultado.value = Number(numero1.value) + Number(numero2.value);
}
const restar = () => {
    resultado.value = Number(numero1.value) - Number(numero2.value);
}
const multiplicar = () => {
    resultado.value = Number(numero1.value) * Number(numero2.value);
}
const dividir = () => {
    resultado.value = Number(numero1.value) / Number(numero2.value);
}