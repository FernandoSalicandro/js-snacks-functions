/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];




// Dichiara la funzione qui.
function parolaCheIniziaConLettera(arrParole, lettera) {
    const arr = arrParole;
    const char = lettera.toUpperCase();

    let paroleEstratte = [];


    for (let i = 0; i < arr.length; i++) {

        const maiuscoloArr = arr[i].charAt(0).toUpperCase();


        if (arr[i].charAt(0) === char) {



            paroleEstratte.push(arr[i]);



        }



    } console.log(paroleEstratte);







}


// Invoca la funzione qui e stampa il risultato in console

parolaCheIniziaConLettera(names, "l");

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]