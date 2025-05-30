const oddArray = [];
for (let i = 0; i < 6; i++) {
    const insertedNumber = Number(prompt('Inserisci il numero ' + (i + 1) + ':' ));
    if ( insertedNumber % 2 !== 0) {
        oddArray.push(insertedNumber);
    }
}
if(oddArray.length === 0) {
    alert('Nessun numero dispari inserito.');
} else {
    alert('Numeri dispari inseriti: ' + oddArray.toString());
}