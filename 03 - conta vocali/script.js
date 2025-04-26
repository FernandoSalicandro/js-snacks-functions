/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

function contaVocali(stringa) {
    const parole = stringa;
    const vocali = "aeiou";
    let vocaliResult = ``;
    for (let i = 0; i < parole.length; i++) {

        const charParole = parole.charAt(i);

        for (let j = 0; j < vocali.length; j++) {

            if (vocali[j] === charParole) {

                vocaliResult += `${charParole}`;

            }



        }


    }

    console.log(`${vocaliResult.length}: (${vocaliResult})`);
}

// Invoca la funzione qui e stampa il risultato in console
contaVocali(word);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)