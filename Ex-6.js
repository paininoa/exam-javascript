/*

Esercizio 6: Clonazione di Oggetti (15 punti)

Dato il seguente oggetto annidato che rappresenta un team di sviluppatori, esegui i
compiti sottostanti:

const devTeam = {
  lead: {
    name: "Alice",
    skills: ["JavaScript", "React", "Node.js"],
  },
  testers: [
    { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] },
  ],
  projectName: "WebApp",
};

1. In un commento, scrivi quanti oggetti l’espressione soprastante ha inserito in
memoria ed elencali. (2.5 punti)

2. Crea una variabile chiamata teamLead che faccia riferimento alla proprietà lead
dell'oggetto devTeam . Aggiungi "GraphQL" alle skills di teamLead.

3. Crea una copia dell'oggetto devTeam e memorizzala in una nuova variabile
chiamata devTeamCopy . Non puoi usare la funzione integrata structuredClone . Poi,
cambia la proprietà projectName di devTeamCopy in "MobileApp". (2.5 punti)

4. Costruisci una funzione che crea e restituisce un oggetto tester a partire dal
parametro name (stringa). Durante la creazione dell’oggetto, la funzione
dovrebbe anche assegnare un array skills con tre stringhe casuali tra
"JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django",
"PostgreSQL". (5 punti)

Usa questa funzione per aggiungere un nuovo tester a devTeamCopy. (2.5 punti)

5. In un commento, scrivi quanti oggetti sono stati creati in memoria oltre a quelli
iniziali, e giustifica la tua risposta. (2.5 punti)

*/

const devTeam = {
  lead: {
    name: "Alice",
    skills: ["JavaScript", "React", "Node.js"],
  },
  testers: [
    { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] },
  ],
  projectName: "WebApp",
};

// 1. --------------
// Ci sono 4 oggetti in memoria: devTeam, lead, testers[0], testers[1]

// 2. --------------
const teamLead = devTeam.lead;
teamLead.skills.push("GraphQL");

// 3. --------------
const devTeamCopy = JSON.parse(JSON.stringify(devTeam));
devTeamCopy.projectName = "MobileApp";

// 4. --------------

const createTester = (name) => {
  const tester = { name };

  const languages = [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "Python",
    "Django",
    "PostgreSQL",
  ];
  const listSkills = [];

  const randomSkills = (skills, num = 1) => {
    for (let i = 0; i < num; i++) {
      const random = Math.floor(Math.random() * skills.length);
      if (listSkills.indexOf(skills[random]) !== -1) {
        continue;
      }
      listSkills.push(skills[random]);
    }
    return listSkills;
  };
  randomSkills(languages, 3);
  tester.skills = listSkills;

  return tester;
};

const newTester = createTester("Alessio");
devTeamCopy.testers.push(newTester);

// 5. --------------
// Ora dovremmo avere 6 oggetti: i 4 iniziali (devTeam, lead, testers[0], testers[1])
// e i 2 creati: devTeamCopy e tester 'Alessio'
