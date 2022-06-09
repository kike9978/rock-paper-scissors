const h1 = document.querySelector("h1");
const btnLance = document.querySelector(".lance");
const btnSword = document.querySelector(".sword");
const btnAxe = document.querySelector(".axe");
const btns = document.querySelectorAll("button");
const results = document.querySelector(".results");
const para = document.createElement("p");
const pJugador = document.querySelector(`[data-puntaje="jugador"]`);
const pCpu = document.querySelector(`[data-puntaje="cpu"]`);
const ronda = document.querySelector(`[data-puntaje="ronda"]`);

pJugador.textContent = 0;
pCpu.textContent = 0;
ronda.textContent = 0;
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
    let estadoDeRonda;

    if (playerSelection === null) {
        if (confirm("¿Quieres salir del juego?")) {
            para.textContent += "Tu te lo pierdes, al fin que ni quería";
            estadoDeRonda = "termino";
            return estadoDeRonda;
        } else {
            para.textContent += "bueno";
            return playRound(computerSelection);
        }
    }

    const ESTADODERONDA_EMPATE = "empate";
    const ESTADODERONDA_GANAJUGADOR = "ganador";
    const ESTADODERONDA_GANACPU = "perdedor";

    if (playerSelection === computerSelection
    ) {
        para.textContent = "empate, que chafa";
        results.appendChild(para);
        estadoDeRonda = ESTADODERONDA_EMPATE;
        return estadoDeRonda;
    } else if (playerSelection === "lance" && computerSelection
        === "axe" || playerSelection === "axe" && computerSelection
        === "sword" || playerSelection === "sword" && computerSelection
        === "lance") {
        para.textContent = `naaambre, que perdedor, ${computerSelection} le gana a ${playerSelection}`;
        results.appendChild(para);
        estadoDeRonda = ESTADODERONDA_GANACPU;
        return estadoDeRonda;
    } else {
        para.textContent = "buena campeón";
        results.appendChild(para);
        estadoDeRonda = ESTADODERONDA_GANAJUGADOR;
        return estadoDeRonda;
    }
}

function cancelarJuego() {
    // Cancela el juego no?
}

let round = 0;
let playerScore = 0;
let pcScore = 0;




btns.forEach(btn => btn.addEventListener("click", chooseWeapon));

function chooseWeapon(e) {

    para.textContent += e.currentTarget.classList.value;
    playRound(counterPlay(), e.currentTarget.classList.value);
    ronda.textContent = ++round;
    console.log(round);
    if (round === 5) {
        para.textContent = "Se acabó";
        btns.forEach(btn => btn.removeEventListener("click", chooseWeapon));
    
    }
}





// function game() {


//     pCpu.textContent = playerScore;
//     pJugador.textContent = pcScore;

//     btns.forEach(btn => btn.addEventListener("click", chooseWeapon));

//     function chooseWeapon(e) {
//         let seleccionDePersonaje = e.currentTarget.classList.value;
//         para.textContent += seleccionDePersonaje;
//         playRound(counterPlay(), seleccionDePersonaje);
//     }

//     for (let i = 0; i <= 5; i++) {

//         let xia;
//         let computerSelection = counterPlay();
//         console.log(computerSelection);
//         console.log(round);
//         console.log(xia);

//         if (xia === "termino") {
//             break;
//         }
//         if (xia === "empate") {
//             i--;
//             round++;
//         } else if (xia === "perdedor") {
//             pcScore++;
//             round++;
//         } else {
//             playerScore++;
//             round++;
//         }
//     }
// }




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





