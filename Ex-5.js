/*
    ### Esercizio 1: Tipi di Dati e Variabili

    Crea un programma JavaScript che:

    1. Chieda all'utente il proprio nome e lo memorizzi in una variabile.
    2. Chieda all'utente il suo numero preferito e lo memorizzi in un'altra variabile.
    3. Avvisi l'utente con un messaggio che include il suo nome e 
        se il suo numero preferito è pari o dispari.
*/

/*
let userName = prompt(`What's your name?`);

let userNumber = prompt(`What's your favourite number?`);
userNumber = Number(userNumber);

if (userNumber % 2 === 0) {
  evenOdd = "even";
} else {
  evenOdd = "odd";
}

let message = `Hi ${userName}, your number is ${evenOdd}`;
alert(message);
*/

// ---------------------------------------------------------------------------------------------------

/*
    ### Esercizio 2: Strutture di Controllo e Cicli

    Scrivi una funzione JavaScript che:

    1. Prenda un array di numeri come argomento.
    2. Iteri attraverso l'array e calcoli la somma dei numeri.
    3. Se il numero corrente è divisibile per 10, saltalo.
    4. Se la somma supera 100 in qualsiasi punto, interrompi il ciclo e restituisci la somma corrente.
    5. Se il ciclo si completa senza interruzioni, restituisci la somma totale.
*/

/*
function arraySum(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 10 === 0) {
      continue;
    }

    sum += numbers[i];
    if (sum > 100) {
      break;
    }
  }
  return sum;
}

const array = [51, -2, 44, 2, 43, 121, 36, 4, 0, -5];
arraySum(array);
*/

// ---------------------------------------------------------------------------------------------------

/*
### Esercizio 3: Oggetti e Array

Dato il seguente oggetto che rappresenta uno studente, esegui i compiti sottostanti:

```jsx
const student = {
    name: "Tizio",
    age: 20,
    scores: [88, 76, 92, 85, 69]
};

```

1. Aggiungi una nuova proprietà `id` all'oggetto studente con un numero casuale da 11 a 99 come valore.
2. Aggiungi un metodo che calcoli il punteggio medio dall'array `scores`.
3. Rimuovi la proprietà `age` dall'oggetto studente.
4. Per ogni coppia chiave/valore dell’oggetto student, stampa in console "[chiave]: [valore]".
*/

/*
const student = {
  name: "Tizio",
  age: 20,
  scores: [88, 76, 92, 85, 69],
};

student.id = Math.floor(Math.random() * (99 - 11 + 1) + 11);

student.averageScore = function () {
  let sum = 0;
  for (let i = 0; i < this.scores.length; i++) {
    sum += this.scores[i];
    return sum;
  }
  return sum / this.scores.length;
};

delete student.age;

const obj = Object.entries(student);
for (let j = 0; j < obj.length; j++) {
  const keyValue = obj[j];
  const key = keyValue[0];
  const value = keyValue[1];
  console.log(`${key}: ${value}`);
}
*/

// ---------------------------------------------------------------------------------------------------

/*
### Esercizio 4: Manipolazione del DOM ed Eventi

Crea una pagina HTML con un `<input>` di testo, un elemento `<button>` 
e un elemento `<p>` con un id di "output". Scrivi codice JavaScript che:

1. Aggiunga un listener di eventi al `<button>` che, quando cliccato, 
registri nella console il colore inserito dall'utente nell'`<input>`
2. Inoltre, al clic del `<button>`, il testo dell'elemento `<p>` dovrebbe 
cambiare in "Il tuo colore preferito è [colore]" dove [colore] è il colore 
inserito dall'utente nell'`<input>`.
3. Se l'utente inserisce una stringa vuota, l'elemento `<p>` dovrebbe dire
 "Non hai inserito un colore."
*/

/*
const colors = ["blu", "giallo", "rosso", "verde"];

window.addEventListener("load", () => {
  const input = document.getElementById("userInput");
  const button = document.getElementById("btn");
  const p = document.getElementById("output");
  input.setAttribute("placeholder", "Scrivi un colore");

  const stampaColore = () => {
    console.log(input.value);

    p.innerHTML = !colors.includes(input.value.toLowerCase())
      ? `Non hai inserito un colore.`
      : `Il tuo colore preferito è ${input.value}`;

    input.value = "";
  };

  button.addEventListener("click", stampaColore);

  //L'input funziona sul tasto Enter (invio)
  input.addEventListener("keypress", (evento) => {
    if (evento.key === "Enter") {
      stampaColore();
    }
  });
});
*/

// ---------------------------------------------------------------------------------------------------

/*
### Esercizio 5: Gestione degli Errori e Funzioni
Scrivi una funzione JavaScript che:

1. Prenda due parametri: una stringa e un numero.
2. Provi a convertire la stringa in un numero e lo sommi al secondo parametro.
3. Se la stringa non può essere convertita in un numero, intercetti l'errore e
 avvisi l'utente con un messaggio appropriato.
4. Indipendentemente dal successo o dal fallimento, registri un messaggio nella 
console che indica che l'operazione è completa.
*/

/*
const somma = (stringa, numero) => {
  try {
    const convertiStringa = Number(stringa);

    if (isNaN(convertiStringa)) {
      throw new Error(`${stringa} non è un numero`);
    }
    const somma = convertiStringa + numero;
    return somma;
  } catch (error) {
    console.error(error.message);
  } finally {
    console.log("Operazione completa!");
  }
};
console.log(somma("egweg", 10));
*/

// ---------------------------------------------------------------------------------------------------

/*
### Esercizio 6: Dato il seguente oggetto annidato che rappresenta una classe, 
esegui i compiti sottostanti:

1. Crea una variabile chiamata `mrSmith` che faccia riferimento alla proprietà 
`teacher` dell'oggetto `classroom`. Modifica la proprietà `age` di `mrSmith` a 45.
2. Crea una deepCopy dell'oggetto `classroom` e memorizzala in una nuova 
variabile chiamata `classroom2`. Non puoi usare la funzione integrata `structuredClone`. 
Poi, cambia la proprietà `name` dell'insegnante in `classroom2` in "Mrs. Jones" e la 
`subject` in "English".
3. Costruisci una funzione che crea e restituisce un oggetto studente casuale dato 
i parametri `name` e `age`. Durante la creazione dello studente, la funzione dovrebbe 
anche assegnare voti casuali per `math` e `english`, ognuno essendo un numero da 0 a 100. 
Usa questa funzione per aggiungere un nuovo studente all'array `students` in `classroom2`.
4. Fai alcuni brevi commenti in cui spieghi la differenza tra `mrSmith` e `classroom2`.
*/

/*
const classroom = {
  teacher: {
    name: "Mr. Smith",
    age: 40,
    subject: "Mathematics",
  },
  students: [
    { name: "Alice", age: 15, grades: { math: 80, english: 85 } },
    { name: "Bob", age: 16, grades: { math: 89, english: 92 } },
    { name: "Charlie", age: 15, grades: { math: 95, english: 78 } },
  ],
  room: "1A",
};

const mrSmith = classroom.teacher;
mrSmith.age = 45;

const classroom2 = JSON.parse(JSON.stringify(classroom)); //CREA UNA DEEP COPY DELL'OGGETTO INIZIALE
classroom2.teacher.name = "Mrs. Jones";
classroom2.teacher.subject = "English";

const createStudent = (name, age) => {
  const studente = { name, age };
  studente.grades = {};

  studente.grades.english = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
  studente.grades.math = Math.floor(Math.random() * (100 - 0 + 1)) + 0;

  return studente;
};

const newStudent = createStudent("Gianni", 33);
classroom2.students.push(newStudent);

console.log(classroom, classroom2);
*/

// ---------------------------------------------------------------------------------------------------

/*
EXTRA 1. Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) 
prendendo alternativamente gli elementi da uno e dall’altro
es. [a,b,c], [1,2,3] → [a,1,b,2,c,3]
*/

/*
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];
let result = [];

function mergeArrays(a, b) {                  //NON VA ----------------
  let switcher = true;
  for (let i = 0; i < a.length + b.length; i++) {
    if (switcher) {
      result.push(a[i / 2]);
    } else {
      result.push(b[i - 1] / 2);
    }
    switcher = !switcher;
  }
  return result;
}

console.log(mergeArrays(letters, numbers));
*/

// ---------------------------------------------------------------------------------------------------

/*
EXTRA 2. Scrivi una funzione che accetti una stringa come argomento e la ritorni girata 
(es. Ciao -> oaiC). Quindi, chiedere all’utente quale parola vuole girare.
BONUS: se la parola scelta dall’utente è un palindromo, avvisalo
*/

/*
const word = prompt("Write a word");

function reorderChar(string) {
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let result = reverseArray.join("");

  if (string === result) {
    alert(`The word '${string}' is palydrom`);
  } else {
    alert(result);
  }
}

reorderChar(word);
*/

// ---------------------------------------------------------------------------------------------------

/*

let totalWeight = 0;
let small = [];
let totalWeightSmall = 0;
let large = [];
let totalWeightLarge = 0;

for (let i = 0; i < apples.length; i++) {
  const weight = apples[i].weight;
  totalWeight += weight;

  if (apples[i].diameter >= 10) {
    large += apples[i];
    totalWeightLarge += weight;
  } else {
    small += apples[i];
    totalWeightSmall += weight;
  }
}

console.log("weight small:" + totalWeightSmall);
console.log("weight large" + totalWeightLarge);
console.log("total weight" + totalWeight);

EXTRA 3. Crea un array di 10 oggetti che rappresentano una mela, 
indicando per ognuna varietà, peso e diametro.
Calcola quanto pesano tutte le mele.
BONUS 
Dividi in due array separati le mele con diametro maggiore di 10cm. 
Infine stampa separatamente quanto pesano i due gruppi di mele.
*/

/*
const apples = [
  {
    name: "APPLE1",
    weight: 0.2,
    diameter: 10,
  },
  {
    name: "APPLE2",
    weight: 0.4,
    diameter: 8,
  },
  {
    name: "APPLE3",
    weight: 0.25,
    diameter: 6,
  },
  {
    name: "APPLE4",
    weight: 0.22,
    diameter: 11,
  },
  {
    name: "APPLE5",
    weight: 0.3,
    diameter: 12,
  },
];

let totalWeight = 0;
let smallWeight = 0;
let largeWeight = 0;

const applesWeight = (array) => {
  apples.forEach((elem) => {
    let elemWeight = elem.weight;
    totalWeight += elemWeight;

    let elemDiameter = elem.diameter;
    if (elemDiameter <= 10) {
      smallWeight += elemDiameter;
    } else {
      largeWeight += elemDiameter;
    }
  });
  console.log(smallWeight);
  console.log(largeWeight);
};

applesWeight(apples);
*/
