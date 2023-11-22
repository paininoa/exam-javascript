/*

Esercizio 1: Variabili e Stringhe (10 punti)

Crea un programma JavaScript che:
1. Chieda all'utente il suo nome e lo memorizzi in una variabile. (2.5 punti)

2. Chieda all'utente il suo anno di nascita e lo memorizzi in un'altra variabile. (2.5
punti)

3. Visualizzi un messaggio che saluta l'utente con il suo nome e gli dice se è nato
in un anno bisestile. (5 punti)

⚠️ Un anno è bisestile se:
è divisibile per 4 e allo stesso tempo non è divisibile per 100;
oppure se l'anno è divisibile per 400;

*/

const askUserName = prompt(`What's your name?`);
const userName = askUserName;
const askUserYear = prompt(`What's your year of birth?`);
const userYear = askUserYear;

if ((userYear % 4 === 0 && userYear % 100 !== 0) || userYear % 400 === 0) {
  alert(`Hi ${userName}, your year of birth was a leap year`);
} else {
  alert(`Hi ${userName}, your year of birth was NOT a leap year`);
}

console.log(userName, userYear);
