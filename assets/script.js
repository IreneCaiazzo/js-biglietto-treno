// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


//età

const età = parseInt(prompt("Quanti anni hai?"));

console.log(età);

// chilometri

const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));

console.log(km);

//prezzo

const prezzokm = 0.21;

let prezzo = km * prezzokm;

console.log(prezzo);

//sconto


 if (età < '18') {

    let scontoMinori = prezzo - (prezzo / 100 * 20);

    console.log(scontoMinori);

    document.getElementById("prezzoFinale").innerHTML = scontoMinori;

 } 
 else if (età > 65) {

    let scontoAnziani = prezzo - (prezzo / 100 * 40);

    console.log(scontoAnziani);

    document.getElementById("prezzoFinale").innerHTML = scontoAnziani;

 } 
 
 else {
 }



//  scontoMinori = scontoMinori.toFixed(2);