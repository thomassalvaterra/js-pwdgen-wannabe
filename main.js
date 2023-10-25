const nomeUtente = prompt( "Inserisci il tuo nome" );
const cognomeUtente = prompt( "Inserisci il tuo cognome" );
const coloreUtente = prompt ( "Inserisci il tuo colore preferito" );

document.getElementById("password").innerHTML = "La tua password è " + nomeUtente + cognomeUtente + coloreUtente + "#23"