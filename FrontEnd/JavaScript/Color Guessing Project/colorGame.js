// alert("JS is connected")
// get color blocks
var cb = document.querySelectorAll(".square");

// generate colors
colors = iniColor(6);

// set goal color
var goalColor = setGoal(colors,6);

// display goal color in title
var diplayColor = document.getElementById("#displayColor");

// select message bar
var messageDisplay = document.querySelector("#message");

// get h1 tag
var h1 = document.querySelectorAll("h1");

// set id=displayColor to the target color
displayColor.textContent = goalColor;

// select reset button
var resetButton = document.querySelector("#reset");

// selet hard
var hardButton = document.querySelector("#hard");

// select easy
var easyButton = document.querySelector("#easy");

for(var i=0;i<cb.length;i++){
	// set initial colors to squares
	agnColor(cb,colors,6)
	// add click listenrs to squares
	cb[i].addEventListener("click",function(){
		// grab color of clicked square
		var clickedColor = this.style.backgroundColor
		// print comparison process
		console.log(clickedColor,goalColor)
		//compare color to target color
		if (clickedColor === goalColor){
			// h1.style.backgroundColor = clickedColor;
			changeColors(h1,clickedColor);
			changeColors(cb,clickedColor);
			// set message bar to corret
			messageDisplay.textContent = "Correct!";

			// set resetButton to play again to ask player
			resetButton.textContent = "Play Again"

		}else{
			// set the clicked button to be backgroundColor when wrong
			this.style.backgroundColor = "#232323";
			// set message bar to try again
			messageDisplay.textContent = "Wrong, Try Again!";
	
		}
	});
}


resetButton.addEventListener("click",function(){
	// change messageDisplay to null
	messageDisplay.textContent = null;
	// set resetButton to NEW COLOR after reset
	resetButton.textContent = "NEW COLOR"
	// set last three blocks to be null
	for(i=0;i<cb.length/2;i++){
		cb[i+cb.length/2]=null;
	}
	// generate all new colors
	colors = iniColor(6);
	// pick a new random color from array
	goalColor = setGoal(colors,6);
	// change message
	displayColor.textContent = goalColor;

	// assign color to squares
	agnColor(cb,colors,6);

	// rest h1
	reseth1(h1)

})

hardButton.addEventListener("click",function(){
	// set reset button to New Color after click hardButton
	resetButton.textContent = "NEW COLOR"
	// change messageDisplay to null
	messageDisplay.textContent = null;
	// restore display for nulls
	for(i=0;i<3;i++){
		cb[i+3].style.display = "block"
	}
	// make easy button selected when clicked
	easyButton.classList.remove("selected")
	// remove selected from hardButton
	hardButton.classList.add("selected")
	// generate all new colors
	colors = iniColor(6);
	// pick a new random color from array
	goalColor = setGoal(colors,6);
	// change message
	displayColor.textContent = goalColor;

	// assign color to squares
	agnColor(cb,colors,6);

	// rest h1
	reseth1(h1)
})

easyButton.addEventListener("click",function(){
	// set reset button to New Color after click easyButton
	resetButton.textContent = "NEW COLOR"
	// change messageDisplay to null
	messageDisplay.textContent = null;
	// display to null for the lower 3
	for(i=0;i<3;i++){
		cb[i+3].style.display = "none"
	}
	// make easy button selected when clicked
	easyButton.classList.add("selected")
	// remove selected from hardButton
	hardButton.classList.remove("selected")
	// generate all new colors
	colors = iniColor(3);
	// pick a new random color from array
	goalColor = setGoal(colors,3);
	// change message
	displayColor.textContent = goalColor;

	// assign color to squares
	agnColor(cb,colors,3);

	// rest h1
	reseth1(h1)
})

//--------------------FUNCTIONS-------------------------------------//
// write a seperate function that changes all squares to target color
function changeColors(target,color){
	//set all squares to target color
	for(var i=0;i<target.length;i++){
		target[i].style.backgroundColor = color;
	}
}

// reset color for h1
function reseth1(target){
	//set all squares to target color
	for(var i=0;i<target.length;i++){
		target[i].style.backgroundColor = "steelblue";
	}
}



// put random rgb numbers together 
function initialColor(pc1,pc2,pc3){
	return pickedColor = "rgb("+pc1+", "+pc2+", "+pc3+")";
}

function iniColor(numofColors){
	var colors = [];
	// assign initial colors for squares
	for(i=0;i<numofColors;i++){
		// randomly pick rgb numbers
		var pickColorRgb1=randomColor(0,255);
		var pickColorRgb2=randomColor(0,255);
		var pickColorRgb3=randomColor(0,255);
		// get randomed color
		var assignedColor = initialColor(pickColorRgb1,pickColorRgb2,pickColorRgb3);
		// put randomed color into array
		colors[i] = assignedColor;

	}
	return colors
}

// randomly pick a interger between lower boundary to higher boundary
function randomColor(l,h){
	// lower boundary
	lb = Math.ceil(l);
	// higher boundary
	hb = Math.floor(h);
	return Math.floor(Math.random() * (hb - lb + 1)) + lb;
}

// set goal Color
function setGoal(colorList,noC){
	// set target color
	goal = colorList[randomColor(1,noC)];
	return goal
}

function agnColor(cb,colorList,numofColors){
	for(var i=0;i<numofColors;i++){
		// set initial colors to squares
		cb[i].style.backgroundColor = colors[i];}

	}

function easyColor(numofNull,colors){
	for(i=0;i<cb.length;i++){
		cb[i+numofNull].style.display = "none";
	}
	return cb
}
