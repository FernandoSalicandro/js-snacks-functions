/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';




// Dichiara la funzione qui.


function salutaNome(stringa) {

    let nome = stringa;
    let message = `Ciao ${nome} !`;
    console.log(message);
    
}

// Invoca la funzione qui e stampa il risultato in console
salutaNome(name);


//Risultato atteso se si passa 'Mario': // ciao Mario

