//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.



//Gioco dei dadi
//Generare un numero random da 1 a 6
//sia per il giocatore 
const playerNumber = Math.floor((Math.random() * 5) + 1).toFixed(0);
console.log(playerNumber);

//sia per il computer. 
const computerNumber = Math.floor((Math.random() * 5) + 1).toFixed(0);
console.log(computerNumber);

//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (playerNumber > computerNumber){
    //il giocatore ha vinto
} else if (playerNumber = computerNumber){
    //nessuno ha vinto parità
} else{
    //il computer ha vinto
}
