const btnLance = document.querySelector(".lance");
const btnSword = document.querySelector(".sword");
const btnAxe = document.querySelector(".axe");
const btns = document.querySelectorAll("button");


// Arreglo de opciones
const ELEMENTOS = ["piedra", "papel", "tijeras"];


// Elección de compu

function counterPlay() {
    let tiroDeCompu = ELEMENTOS[Math.floor((Math.random() * ELEMENTOS.length))];
    return tiroDeCompu;

}





// Juega una ronda

function playRound(computerSelection, playerSelection) {

    console.log(computerSelection);
    
    let ganadorRonda;

    // let playerSelection = prompt("Escoge tu arma: piedra, papel o tijeras");

    if (playerSelection === null) {
        if (confirm("¿Quieres salir del juego?")) {
            console.log("Tu te lo pierdes, al fin que ni quería")
            ganadorRonda = "termino";
            return ganadorRonda;
        } else {
            console.log("bueno")
            return playRound(computerSelection);
        }
    }

    // playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "") {
        confirm("Cancelado por no querer jugar");
        return;

    // } else if (playerSelection != "papel" && playerSelection != "piedra" && playerSelection != "tijeras") {
    //     console.log("¿Qué te pasa broder, escoge una de las opciones: piedra, papel o tijeras");
    //     return playRound(computerSelection
    //         );
    } else {
        if (playerSelection == computerSelection
            ) {
            console.log("empate, que chafa");
            empate = "empate";
            return empate;
        } else if (playerSelection == "tijeras" && computerSelection
         == "piedra" || playerSelection == "piedra" && computerSelection
         == "papel" || playerSelection == "papel" && computerSelection
         == "tijeras") {
            console.log(`naaambre, que perdedor, ${computerSelection
            } le gana a ${playerSelection}`);
            ganadorRonda = "perdedor";
            return ganadorRonda;
        } else {
            console.log("buena campeón");
            ganadorRonda = "ganador";
            return ganadorRonda;

        }
    }
}

btnAxe.addEventListener("click", chooseWeapon);
btnLance.addEventListener("click", chooseWeapon);
btnSword.addEventListener("click", chooseWeapon);

function  chooseWeapon(e){
    console.log(e.currentTarget.getAttribute("data-weapon"));
    playRound(counterPlay(),e.currentTarget.getAttribute("data-weapon"));
}






function game() {
    let round = 0;
    let playerScore = 0;
    let pcScore = 0;
    // for (let i = 0; i <= 5; i++) {
    //     console.log(`Ronda: ${round}`);
    //     console.log(`Puntaje de jugador: ${playerScore}`);
    //     console.log(`i vale ${i}`)
    //     console.log(`Puntaje de la compu: ${pcScore}`);
        
    //     let estadoDeRonda;
    //     let computerSelection = counterPlay();
    //     estadoDeRonda = playRound(computerSelection);
    //     if(estadoDeRonda ==="termino"){
    //         break;
    //     }
            
    //     if (estadoDeRonda === "empate") {
    //         i--;
    //         round ++;
            
    //     } else 
    //     if (estadoDeRonda === "perdedor") {
    //         pcScore++;
    //         round ++;

    //     } else {
    //         playerScore ++;
    //         round ++;
    //     }

    // }
}


// Create button variable
// Battle bgm (maybe from Valentia or smthing)
// Welcome the player with fire emblem story
// Ask user for weapon of choice
// Get player selection
//  button.addEventListener("click", getButtonClass(){
//  
//})
// Display winner
//  


// game();


