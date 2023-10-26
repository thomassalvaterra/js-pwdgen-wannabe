const nomeUtente = prompt( "Inserisci il tuo nome" );
console.log(nomeUtente);

const cognomeUtente = prompt( "Inserisci il tuo cognome" );
console.log(cognomeUtente);

const coloreUtente = prompt ( "Inserisci il tuo colore preferito" );
console.log(coloreUtente);

document.getElementById("password").innerHTML = "La tua password è " + nomeUtente + cognomeUtente + coloreUtente + "#23"

