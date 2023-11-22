/*

Esercizio 5: Error Handling e Parsing (20 punti)

Scrivi una funzione power per elevare un numero ad una potenza data:
1. Prende due numeri come parametri ( base e exponent ).

2. Controlla che effettivamente siano stati passati due numeri. In caso contrario,
lancia un errore che mostra nel messaggio quale dei parametri non è un 
numero. Se entrambi non sono dei numeri, il messaggio d’errore li mostra
entrambi. (15 punti)

3. Nel caso in cui sia avvenuto un errore, la funzione ritorna null , altrimenti ritorna
base elevato alla exponent. (2.5 punti)

4. Indipendentemente dal successo o dal fallimento, stampa in console un
messaggio che indica che l'operazione è completa. (2.5 punti)

*/

const power = (base, exponent) => {
  try {
    if (isNaN(base) && isNaN(exponent)) {
      throw new Error(
        `The values 'base' and 'exponent' are not numbers: '${base}', '${exponent}'.`
      );
    } else if (isNaN(base)) {
      throw new Error(`The value 'base' is not a number: '${base}'.`);
    } else if (isNaN(exponent)) {
      throw new Error(`The value 'exponent' is not a number: '${exponent}'.`);
    } else {
      //console.log(base ** exponent);     // TEST CODE---------------------------------
      return base ** exponent;
    }
  } catch (error) {
    console.error(error.message);
    return null;
  } finally {
    console.log("Operazione completata");
  }
};

// power(2, 3);             // TEST values ----------------------------------------------
