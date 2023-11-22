/*

Esercizio 6: Clonazione di Oggetti (15 punti)

Dato il seguente oggetto annidato che rappresenta un team di sviluppatori, esegui i
compiti sottostanti:

const devTeam = {
    lead: {
    name: "Alice",
    skills: ["JavaScript", "React", "Node.js"]
    },
    testers: [
    { name: "Bob", skills: ["HTML", "CSS", "JavaScript"] },
    { name: "Charlie", skills: ["Python", "Django", "PostgreSQL"] }
    ],
    projectName: "WebApp"
    };

1. In un commento, scrivi quanti oggetti l’espressione soprastante ha inserito in
memoria ed elencali. (2.5 punti)

2. Crea una variabile chiamata teamLead che faccia riferimento alla proprietà lead
dell'oggetto devTeam . Aggiungi "GraphQL" alle skills di teamLead.

3. Crea una copia dell'oggetto devTeam e memorizzala in una nuova variabile
chiamata devTeamCopy . Non puoi usare la funzione integrata structuredClone . Poi,
cambia la proprietà projectName di devTeam2 in "MobileApp". (2.5 punti)

4. Costruisci una funzione che crea e restituisce un oggetto tester a partire dal
parametro name (stringa). Durante la creazione dell’oggetto, la funzione
dovrebbe anche assegnare un array skills con tre stringhe casuali tra
"JavaScript", "React", "Node.js", "HTML", "CSS", "Python", "Django",
"PostgreSQL". (5 punti)

Usa questa funzione per aggiungere un nuovo tester a devTeamCopy. (2.5 punti)

5. In un commento, scrivi quanti oggetti sono stati creati in memoria oltre a quelli
iniziali, e giustifica la tua risposta. (2.5 punti)

*/
