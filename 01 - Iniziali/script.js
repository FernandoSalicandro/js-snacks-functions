/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];



// Dichiara la funzione qui.

function soloIniziali(names) {
    let initials = [];

    for (let i = 0; i < names.length; i++) {

        let name = names[i];
        let initial = name.charAt(0);
        initials.push(initial);
    }

    return initials;

}

 



// Invoca la funzione qui e stampa il risultato in console

soloIniziali(names);
console.log(soloIniziali(names));
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]