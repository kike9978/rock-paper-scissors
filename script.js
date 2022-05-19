



const ELEMENTOS = ["piedra", "papel", "tijeras"];

function counterPlay() {
    let tiroDeCompu = ELEMENTOS[Math.floor((Math.random() * ELEMENTOS.length))];
    return tiroDeCompu;

}
const computerSelection
 = counterPlay();


function playRound(computerSelection
    ) {
    

    console.log(computerSelection
        );
    let playerSelection = prompt("Escoge tu arma: piedra, papel o tijeras");

    if (playerSelection === null) {
        alert("Cancelado por no querer jugar");
        return;
    }

    playerSelection = playerSelection.toLowerCase();

    let ganadorRonda;

    if (playerSelection === "") {
        alert("Cancelado por no querer jugar");
        return;

    } else if (playerSelection != "papel" && playerSelection != "piedra" && playerSelection != "tijeras") {
        alert("¿Qué te pasa broder, escoge una de las opciones: piedra, papel o tijeras");
        return playRound(computerSelection
            );
    } else {
        if (playerSelection == computerSelection
            ) {
            alert("empate, que chafa");
            empate = "empate";
            return empate;
        } else if (playerSelection == "tijeras" && computerSelection
         == "piedra" || playerSelection == "piedra" && computerSelection
         == "papel" || playerSelection == "papel" && computerSelection
         == "tijeras") {
            alert(`naaambre, que perdedor, ${computerSelection
            } le gana a ${playerSelection}`);
            ganadorRonda = "perdedor";
            return ganadorRonda;
        } else {
            alert("buena campeón");
            ganadorRonda = "ganador";
            return ganadorRonda;

        }
    }
}


function game() {
    let round = 0;
    let playerScore = 0;
    let pcScore = 0;
    for (let i = 0; i <= 5; i++) {
        console.log(`Ronda: ${round}`);
        console.log(`Puntaje de jugador: ${playerScore}`);
        console.log(`i vale ${i}`)
        console.log(`Puntaje de la compu: ${pcScore}`);
        
        let estadoDeRonda;
        estadoDeRonda = playRound(computerSelection);
            
        if (estadoDeRonda === "empate") {
            i--;
            round ++;
            
        } else 
        if (estadoDeRonda === "perdedor") {
            pcScore++;
            round ++;

        } else {
            playerScore ++;
            round ++;
        }

    }
}


game();


