var score1Display = document.getElementById("p1Display");
var score2Display = document.getElementById("p2Display");
var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var numInput = document.querySelector("Input");
var winningScoreDisplay = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;


//update scores for p1 or p2 depends on which button to click
p1Button.addEventListener("click",function(){
	if (!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			p1Display.classList.add("winner")
			gameOver = true;
		}
		p1Display.textContent = p1Score;
	}
});


p2Button.addEventListener("click",function(){
	if (!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			p2Display.classList.add("winner")
			gameover = true;
		}
		p2Display = text.Content = p2Score;
	}
});

//reset the page when click reset
resetButton.addEventListener("click",function(){
	reset();
})

//reset function
function reset(){
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

//input number to change game turns and targets
numInput.addEventListener("change",function(){
	//value of input is a string type
	winningScoreDisplay.textContent = this.value;
	winningScore = 	Number(this.value)
	reset();
})
