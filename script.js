const game = document.querySelector(".game");
const btnRow = document.querySelector(".botones"); 
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
const barras = document.querySelectorAll(`[data-type="health-bar"]`);


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
        para.textContent = "Empate, que chafa";
        results.appendChild(para);
        estadoDeRonda = ESTADODERONDA_EMPATE;
        return estadoDeRonda;
    } else if (playerSelection === "lance" && computerSelection
        === "axe" || playerSelection === "axe" && computerSelection
        === "sword" || playerSelection === "sword" && computerSelection
        === "lance") {
        para.textContent = `Naaambre, que perdedor, ${computerSelection} le gana a ${playerSelection}`;
        results.appendChild(para);
        estadoDeRonda = ESTADODERONDA_GANACPU;
        
        return estadoDeRonda;
    } else {
        para.textContent = `Buena campeón, ${playerSelection} le gana a ${computerSelection}`;
        results.appendChild(para);
        estadoDeRonda = ESTADODERONDA_GANAJUGADOR;
        
        return estadoDeRonda;
    }
}

function reducirVida() {

switch(playerScore){
    case 1:{
        barras[1].classList += " health-80";
        break;
    }
    case 2:{
        barras[1].classList += " health-60";
        barras[1].classList.remove("health-80");
        break;
    }
    case 3:{
        barras[1].classList += " health-40";
        barras[1].classList.remove("health-60");
        break;
    }
    case 4:{
        barras[1].classList += " health-20";
        barras[1].classList.remove("health-40");
        break;
    }
    case 5:{
        barras[1].classList += " health-0";
        barras[1].classList.remove("health-20");
        break;
    }
    default:{
        break;
    }

}
switch(pcScore){
    case 1:{
        barras[0].classList += " health-80";
        break;
    }
    case 2:{
        barras[0].classList += " health-60";
        barras[0].classList.remove("health-80");
        break;
    }
    case 3:{
        barras[0].classList += " health-40";
        barras[0].classList.remove("health-60");
        break;
    }
    case 4:{
        barras[0].classList += " health-20";
        barras[0].classList.remove("health-40");
        break;
    }
    case 5:{
        barras[0].classList += " health-0";
        barras[0].classList.remove("health-20");
        break;
    }
    default:{
        break;
    }

}

}



function cancelarJuego() {
    // Cancela el juego no?
}

btns.forEach(btn => btn.addEventListener("click", chooseWeapon));

let round = 1;
ronda.textContent = round;
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
        reducirVida();

    } else {
        playerScore++;
        reducirVida();
    }

    round++;

    ronda.textContent = round;
    pJugador.textContent = playerScore;
    pCpu.textContent = pcScore;

    if (pcScore === 5 || playerScore === 5) {
        let ganador;
        if (pcScore > playerScore) {
            ganador = "la CPU";
        } else {
            ganador = "el jugador"
        }
        para.textContent = `Se acabó, el ganador es ${ganador}`;
        btns.forEach(btn => btn.removeEventListener("click", chooseWeapon));
        volverAJugar();
    }

}




function volverAJugar() {

    btn.textContent = "Volver a jugar";
    btn.classList.value = "replay-btn";
    btn.setAttribute("data-type", "reset-btn")
    btnRow.appendChild(btn);
    btn.addEventListener("click", () => btns.forEach(btn => btn.addEventListener("click", chooseWeapon)));
    btn.addEventListener("click", resetearJuego);
}

function resetearJuego() {
    round = 1;
    playerScore = 0;
    pcScore = 0;
    ronda.textContent = round;
    pJugador.textContent = playerScore;
    pCpu.textContent = pcScore;
    para.textContent = "";
    const btnRowChildren = btnRow.children;
    barras.forEach(barra => barra.classList="health-bar");
    for (let i = 0; i < btnRowChildren.length; i++) {
        if (btnRowChildren[i].getAttribute("data-type") === "reset-btn") {
            btnRowChildren[i].remove();
        }
    }
}