//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
const logEmail = ["marco@live", "mattia@live", "daniale@live.com", "patrick@gmail.it"]
const playerEmail = prompt("Qual'è la tua email?");

if (logEmail.includes(playerEmail)){
    //accesso concesso
    alert("accesso consentito")
}else{
    //accesso negato
    alert("accesso negato")
    window.location.reload();
}

//Gioco dei dadi

const buttonEl = document.querySelector(".btn_start");

buttonEl.addEventListener('click', function(){

    
    
    //Generare un numero random da 1 a 6
    //sia per il giocatore 
    const playerNumber = Math.floor((Math.random() * 5) + 1).toFixed(0);
    console.log(playerNumber);
    
    //sia per il computer. 
    const computerNumber = Math.floor((Math.random() * 5) + 1).toFixed(0);
    console.log(computerNumber);
    
    //Stabilire il vincitore, in base a chi fa il punteggio più alto.
    const playerEl = document.querySelector("ul li.player");
    playerEl.innerHTML = playerNumber;

    const computerEl = document.querySelector("ul li.computer");
    computerEl.innerHTML = computerNumber;
    
    const winnerEl = document.querySelector("ul li.winner");



    if (playerNumber > computerNumber){
        //il giocatore ha vinto
        winnerEl.innerHTML = `complimenti hai vinto!`
    } else if (playerNumber === computerNumber){
        //nessuno ha vinto parità
        winnerEl.innerHTML = `Parità`
    } else{
        //il computer ha vinto
        winnerEl.innerHTML = `Mi dispiace ha vinto il computer`
    }
    
})