const game = document.querySelector(".game");
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
const btn = document.createElement("button");


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

    if (playerSelection === computerSelection) {
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

btns.forEach(btn => btn.addEventListener("click", chooseWeapon));

let round = 0;
let playerScore = 0;
let pcScore = 0;


// With each botton click compares the 2 picks and display the result
// Also keeps the score


function chooseWeapon(e) {
    para.textContent += e.currentTarget.classList.value;
    let turno;
    turno = playRound(counterPlay(), e.currentTarget.classList.value);

    if (turno === "empate") {

    } else if (turno === "perdedor") {
        pcScore++;

    } else {
        playerScore++;
    }

    round++;

    ronda.textContent = round;
    pJugador.textContent = playerScore;
    pCpu.textContent = pcScore;

    if (pcScore === 5 || playerScore === 5) {
        para.textContent = "Se acabó";
        btns.forEach(btn => btn.removeEventListener("click", chooseWeapon));
        volverAJugar();
    }

}

function volverAJugar() {

    btn.textContent = "Volver a jugar";
    btn.classList.value = ".replay-btn";
    btn.setAttribute("data-type", "reset-btn")
    game.appendChild(btn);
    btn.addEventListener("click", () => btns.forEach(btn => btn.addEventListener("click", chooseWeapon)));
    btn.addEventListener("click", resetearJuego);
}

function resetearJuego() {
    round = 0;
    playerScore = 0;
    pcScore = 0;
    ronda.textContent = round;
    pJugador.textContent = playerScore;
    pCpu.textContent = pcScore;
    para.textContent = "";
    // game.childNodes.forEach(function(item) {
    //     if (item.classList == ".replay-btn"){
    //         item.remove();
    //     }
    // });
    // Used game.Children instead of game.childNodes because i want to get the data type attribute
    const gameChildren = game.children;
    for (let i = 0; i < gameChildren.length; i++) {
        if (gameChildren[i].getAttribute("data-type") === "reset-btn") {
            gameChildren[i].remove();
        }
    }
    // document.querySelector(".replay-btn").remove();
}