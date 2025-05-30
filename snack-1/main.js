const number1 = Number(prompt('Inserisci il primo numero: '));
const number2 = Number(prompt('Inserisci il secondo numero: '));

if (number1 > number2) {
    alert('Il PRIMO numero è maggiore');
} else if (number2 > number1) {
    alert('Il SECONDO numero è maggiore');
} else {
    alert('I numeri sono UGUALI');
}