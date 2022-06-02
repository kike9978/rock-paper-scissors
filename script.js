const btnLance = document.querySelector(".lance");
const btnSword = document.querySelector(".sword");
const btnAxe = document.querySelector(".axe");
const btns = document.querySelectorAll("button");
const para = document.querySelector(".results p");


para.textContent = "El resultado es";

// Arreglo de opciones
const ELEMENTOS = ["sword", "axe", "lance"];


// Elección de compu

function counterPlay() {
    let tiroDeCompu = ELEMENTOS[Math.floor((Math.random() * ELEMENTOS.length))];
    return tiroDeCompu;

}





// Juega una ronda

function playRound(computerSelection, playerSelection) {

    para.textContent += computerSelection;
    
    let ganadorRonda;

    // let playerSelection = prompt("Escoge tu arma: piedra, papel o tijeras");

    if (playerSelection === null) {
        if (confirm("¿Quieres salir del juego?")) {
            para.textContent += "Tu te lo pierdes, al fin que ni quería";
            ganadorRonda = "termino";
            return ganadorRonda;
        } else {
            para.textContent += "bueno";
            return playRound(computerSelection);
        }
    }

    // playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "") {
        confirm("Cancelado por no querer jugar");
        return;

    // } else if (playerSelection != "papel" && playerSelection != "piedra" && playerSelection != "tijeras") {
    //     para.textContent += "¿Qué te pasa broder, escoge una de las opciones: piedra, papel o tijeras");
    //     return playRound(computerSelection
    //         );
    } else {
        if (playerSelection == computerSelection
            ) {
            para.textContent += "empate, que chafa";
            empate = "empate";
            return empate;
        } else if (playerSelection == "lance" && computerSelection
         == "axe" || playerSelection == "axe" && computerSelection
         == "sword" || playerSelection == "sword" && computerSelection
         == "axe") {
            para.textContent += `naaambre, que perdedor, ${computerSelection
            } le gana a ${playerSelection}`;
            ganadorRonda = "perdedor";
            return ganadorRonda;
        } else {
            para.textContent += "buena campeón";
            ganadorRonda = "ganador";
            return ganadorRonda;

        }
    }
}

// btnAxe.addEventListener("click", chooseWeapon);
// btnLance.addEventListener("click", chooseWeapon);
// btnSword.addEventListener("click", chooseWeapon);

btns.forEach(btn => btn.addEventListener("click", chooseWeapon));

function  chooseWeapon(e){
    para.textContent += e.currentTarget.classList.value;
    playRound(counterPlay(),e.currentTarget.classList.value);
}






function game() {
    let round = 0;
    let playerScore = 0;
    let pcScore = 0;
    // for (let i = 0; i <= 5; i++) {
    //     para.textContent += `Ronda: ${round}`);
    //     para.textContent += `Puntaje de jugador: ${playerScore}`);
    //     para.textContent += `i vale ${i}`)
    //     para.textContent += `Puntaje de la compu: ${pcScore}`);
        
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


