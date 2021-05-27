// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole: il prezzo del biglietto è definito in base ai km (0.21 € al km) va applicato uno sconto del 20% per i minorenni va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).


// distanza
var distanza =parseInt(prompt('Quanti km percorrerà?'));
console.log(distanza);

// età del passeggero
var anni =parseInt(prompt('Quanti anni ha?'));
console.log(anni);

// il prezzo del biglietto, 0.21 € al km
var prezzoAlKm = (distanza * 0.21).toFixed(2);
console.log('costo fascia standard €:', prezzoAlKm);

// variabilie eta <18 (https://qastack.it/programming/3163070/javascript-displaying-a-float-to-2-decimal-places)
if(anni < 18){
    var minorenne = (prezzoAlKm - (prezzoAlKm / 100 * 20)).toFixed(2);
    console.log('costo fascia minorenne €:', (prezzoAlKm - (prezzoAlKm / 100 * 20)).toFixed(2));
} else if(anni > 65) {
    var anziano = (prezzoAlKm - (prezzoAlKm / 100 * 40)).toFixed(2);
    console.log('costo fascia anziano €:', (prezzoAlKm - (prezzoAlKm / 100 * 40)).toFixed(2));
}


// a video
document.getElementById('costo-standard').innerHTML = prezzoAlKm;

document.getElementById('costo-minorenne').innerHTML = minorenne;

document.getElementById('costo-anziano').innerHTML = anziano;





