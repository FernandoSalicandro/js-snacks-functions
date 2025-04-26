/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function salutaNome(nome) {

    //ottengo la data e ricavo le ore;

    const oggi = new Date();
    const ore = oggi.getHours();
    //creo i messaggi personalizzati in base all'ora sul parametro nome della funzione;
    const messageBg = `Buon giorno ${nome}`;
    const messageBp = `Buon pomeriggio ${nome}`;
    const messageBs = `Buona sera ${nome}`;
    //imposto condizione di stampa in base all'ora
    if (ore > 5 && ore < 13 ) {

        console.log(messageBg);
    } else if (ore > 13 && ore < 17) {

        console.log(messageBp);
    } else {
        console.log(messageBs);
    }


}

// Invoca la funzione qui e stampa il risultato in console
salutaNome(name);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.