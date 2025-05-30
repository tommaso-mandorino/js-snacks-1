const word1 = prompt('Inserisci la prima parola:');
const word2 = prompt('Inserisci la seconda parola:');

if (word1.length < word2.length) {
    console.log(word1);
    console.log(word2);
} else if (word2.length < word1.length) {
    console.log(word2);
    console.log(word1);
} else {
    console.log('Le due parole sono lunghe UGUALI.');
}