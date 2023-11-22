/*

Esercizio 2: Cicli e Condizioni (15 punti)

Scrivi una funzione JavaScript che:
1. Accetta un array di stringhe come argomento.

2. Calcola la concatenazione di tutte le stringhe che iniziano con la lettera "A" o "a".
(10 punti)

3. Se la lunghezza della stringa concatenata supera i 10 caratteri, troncala a 10
caratteri e restituiscila. (5 punti)

4. Se il ciclo si completa senza che la stringa superi i 10 caratteri, restituisci la
stringa concatenata.

*/

let conctatStrings = (strings) => {
  let concatString = "";

  for (let i = 0; i < strings.length; i++) {
    let string = strings[i];

    if (string.startsWith("A") || string.startsWith("a")) {
      concatString += string;

      if (concatString.length > 10) {
        concatString = concatString.substring(0, 10);
      }
    }
  }
  return concatString;
};

/* ------------------ TEST -----------------------------
const array = ["Ale", "ugo", "Piero", "arthur", "Anna"];
conctatStrings(array);
*/
