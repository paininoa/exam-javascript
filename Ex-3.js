/*

Esercizio 3: Array e Oggetti (20 punti)

Dato il seguente oggetto che rappresenta un libro, esegui i compiti sottostanti:
const book = {
  title: "Il Grande Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
  rating: 8.5,
};

1. Aggiungi una nuova proprietà rating all'oggetto libro, 
che rappresenta il rating del libro, e inizializzalo a 6.

2. Aggiungi un metodo increaseRating che accetta come argomento un valore
numerico e che incrementa il rating del libro del valore passato alla funzione. (10
punti)
Il nuovo rating risultante, non può superare 10. (2.5 punti)

3. Rimuovi la proprietà year dall'oggetto libro. (2.5 punti)

4. Stampa in console ogni proprietà dell'oggetto libro in questo formato: "[chiave]:
[valore]". (5 punti)

*/

const book = {
  title: "Il Grande Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925,
};

// 1.
book.rating = 6;

// 2.
let increaseRating = (value) => {
  book.rating += value;
  if (book.rating > 10) {
    book.rating = 10;
  }
};
book.increaseRating = increaseRating(5); // TEST NUMBER ------------------

// 3.
delete book.year;

// 4.
const obj = Object.entries(book);
for (let i = 0; i < obj.length; i++) {
  const keyValue = obj[i];
  const key = keyValue[0];
  const value = keyValue[1];
  console.log(`${key}: ${value}`);
}
