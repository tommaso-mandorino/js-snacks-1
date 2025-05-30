let sum = 0;
for (let i = 0; i < 10; i++) {
    sum += Number(prompt('Inserisci il numero ' + (i + 1) + ':' ));
}
alert('La somma dei numeri inseriti è: ' + sum);