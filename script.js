const game = document.querySelector(".game");
const btnRow = document.querySelector(".botones");
const h1 = document.querySelector("h1");
const btnLance = document.querySelector(".lance");
const btnSword = document.querySelector(".sword");
const btnAxe = document.querySelector(".axe");
const btns = document.querySelectorAll("button");
const results = document.querySelector(".results");
const textDiv = document.querySelector(".text-div");
const para = document.createElement("p");
const pJugador = document.querySelector(`[data-arma="Sully"]`);
const pCpu = document.querySelector(`[data-arma="Frederick"]`);
const ronda = document.querySelector(`[data-puntaje="ronda"]`);
const btn = document.createElement("button");
const barras = document.querySelectorAll(`[data-type="health-bar"]`);
const audioOpcion = document.querySelector(`[data-sound="opcion"]`);
const audioEmpate = document.querySelector(`[data-sound="empate"]`);
const audiosArma = document.querySelectorAll(`[data-sound="guamazo"]`);
const audioVictoria = document.querySelector(`[data-sound="victoria"]`);
const audioDerrota = document.querySelector(`[data-sound="derrota"]`);

ronda.textContent = 0;

// Arreglo de opciones
const ELEMENTOS = ["sword", "axe", "lance"];

// Elección de compu
function counterPlay() {
    let tiroDeCompu = ELEMENTOS[Math.floor((Math.random() * ELEMENTOS.length))];
    return tiroDeCompu;
}

function playBattleSound() {
    let audioArma = audiosArma[Math.floor((Math.random() * audiosArma.length))];
    audioArma.play();
}

// Juega una ronda
function playRound(computerSelection, playerSelection) {

    let estadoDeRonda;

    const ESTADODERONDA_EMPATE = "empate";
    const ESTADODERONDA_GANAJUGADOR = "ganador";
    const ESTADODERONDA_GANACPU = "perdedor";

    if (playerSelection === computerSelection) {
        para.textContent = "Draw, what a shame";
        textDiv.appendChild(para);
        audioEmpate.play();
        estadoDeRonda = ESTADODERONDA_EMPATE;
        return estadoDeRonda;
    } else if (playerSelection === "lance" && computerSelection
        === "axe" || playerSelection === "axe" && computerSelection
        === "sword" || playerSelection === "sword" && computerSelection
        === "lance") {
        para.textContent = `You received damage! ${computerSelection} beats ${playerSelection}`;
        textDiv.appendChild(para);
        playBattleSound();
        estadoDeRonda = ESTADODERONDA_GANACPU;

        return estadoDeRonda;
    } else {
        para.textContent = `Good one, ${playerSelection} beats ${computerSelection}`;
        textDiv.appendChild(para);
        playBattleSound();
        estadoDeRonda = ESTADODERONDA_GANAJUGADOR;

        return estadoDeRonda;
    }
}

function reducirVida() {

    switch (playerScore) {
        case 1: {
            barras[1].classList += " health-80";
            break;
        }
        case 2: {
            barras[1].classList += " health-60";
            barras[1].classList.remove("health-80");
            break;
        }
        case 3: {
            barras[1].classList += " health-40";
            barras[1].classList.remove("health-60");
            break;
        }
        case 4: {
            barras[1].classList += " health-20";
            barras[1].classList.remove("health-40");
            break;
        }
        case 5: {
            barras[1].classList += " health-0";
            barras[1].classList.remove("health-20");
            break;
        }
        default: {
            break;
        }

    }
    switch (pcScore) {
        case 1: {
            barras[0].classList += " health-80";
            break;
        }
        case 2: {
            barras[0].classList += " health-60";
            barras[0].classList.remove("health-80");
            break;
        }
        case 3: {
            barras[0].classList += " health-40";
            barras[0].classList.remove("health-60");
            break;
        }
        case 4: {
            barras[0].classList += " health-20";
            barras[0].classList.remove("health-40");
            break;
        }
        case 5: {
            barras[0].classList += " health-0";
            barras[0].classList.remove("health-20");
            break;
        }
        default: {
            break;
        }

    }

}

btns.forEach(btn => btn.addEventListener("click", chooseWeapon));
btns.forEach(btn => btn.addEventListener("mouseover", playOpcion))

function playOpcion(){
    audioOpcion.play();
}

let round = 1;
ronda.textContent = round;
let playerScore = 0;
let pcScore = 0;

// With each botton click compares the 2 picks and display the result
// Also keeps the score
function capitalizeFirstLetter(word){
    const first = word.charAt(0)
    const restOfWord = word.slice(1)
    return `${first.toUpperCase()}${restOfWord}`
}

function chooseWeapon(e) {
    para.textContent += e.currentTarget.classList.value;
    let turno;
    eleccionCPU = counterPlay();
    eleccionJugador = e.currentTarget.classList.value;
    pJugador.textContent = capitalizeFirstLetter(eleccionJugador);
    pCpu.textContent = capitalizeFirstLetter(eleccionCPU);
    turno = playRound(eleccionCPU, eleccionJugador);

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

    if (pcScore === 5 || playerScore === 5) {
        let ganador;
        if (pcScore > playerScore) {
            ganador = "Frederick";
            para.textContent = `So sad, you loose 😢`;
            audioDerrota.play();
        } else {
            ganador = "Sully"
            para.textContent = `Congratulations, you win!`;
            audioVictoria.play();
        }
        btns.forEach(btn => btn.removeEventListener("click", chooseWeapon));
        volverAJugar();

    }

}

function volverAJugar() {

    btn.textContent = "Play again";
    btn.classList.value = "replay-btn";
    btn.setAttribute("data-type", "reset-btn")
    btn.addEventListener("mouseover", playOpcion);
    btnRow.appendChild(btn);
    btn.addEventListener("click", () => btns.forEach(btn => btn.addEventListener("click", chooseWeapon)));
    btn.addEventListener("click", resetearJuego);
}

function resetearJuego() {
    round = 1;
    playerScore = 0;
    pcScore = 0;
    ronda.textContent = round;
    pJugador.textContent = "Choose your weapon";
    pCpu.textContent = "Weapon";
    para.textContent = "";
    const btnRowChildren = btnRow.children;
    barras.forEach(barra => barra.classList = "health-bar");
    for (let i = 0; i < btnRowChildren.length; i++) {
        if (btnRowChildren[i].getAttribute("data-type") === "reset-btn") {
            btnRowChildren[i].remove();
        }
    }
}