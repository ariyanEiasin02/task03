let playGame = confirm("shall we play rock,paper,scissors")

if(playGame){
    // play
    const playChoise = prompt("please enter your rock,paper,scissors")
    if(playChoise){
        let playerOne = playChoise.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
        let computerChoise = Math.floor(Math.random()*3+1);
        let computer = computerChoise === 1 ? "rock" : computerChoise === 2 ? "paper" : "scissors"

        let result = 
        playerOne === computer
        ? "Tie Game!" 
        : playerOne === "rock" && computer === "paper"
        ? `playerOne ${playerOne}\ncomputer : ${computer}\ncomputer wins!`
        : playerOne === "paper" && computer === "scissors"
        ? `playerOne ${playerOne}\ncomputer : ${computer}\ncomputer wins!`
        : playerOne === "scissors" && computer === "rock"
        ? `playerOne ${playerOne}\ncomputer : ${computer}\ncomputer wins!`
        :`playerOne ${playerOne}\ncomputer : ${computer}\playerOne wins!`
        alert(result)

        let playAgian = confirm("play Agian")
        playAgian ? location.reload() : alert("ok, thanks for playing")
        }else{
            alert("you didn't enter rock, paper, scissors")
        }
    }else{
        alert("I guess changed your mind, don't worry next time")
    }
}else{
    alert("ok, maybe next time")
}