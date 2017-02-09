var lowEnd = 19;
var highEnd = 120;
var possibleGameScore = [];
while(lowEnd <= highEnd){
   possibleGameScore.push(lowEnd++);
}
var userScore = 0;
var winsCount = 0;
var losesCount = 0;
var rubyValue;
var emeraldValue;
var sapphireValue;
var swarovskiValue;
var crystals = ["ruby", "emerald", "sapphire", "swarovski"]

var possibleGemValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var currentAns;

function genGemValue() {
	return possibleGemValue[Math.floor(Math.random() * possibleGemValue.length)];
}

function newGame() {
	// declare new answer user needs to get to
	currentAns = possibleGameScore[Math.floor(Math.random() * possibleGameScore.length)];
	console.log("Current answer: " + currentAns);

	// change ending score on screen
	$("#currentScore").html(currentAns);

	// generate values for crystals
	rubyValue = genGemValue();
	emeraldValue = genGemValue();
	sapphireValue = genGemValue();
	swarovskiValue = genGemValue();
	console.log("Ruby value: " + rubyValue);
	console.log("Emerald value: " + emeraldValue);
	console.log("Sapphire value: " + sapphireValue);
	console.log("Swarovski value: " + swarovskiValue);

	// set data-value attr of crystals to current value
	$("#ruby").data("value", rubyValue);
	$("#emerald").data("value", emeraldValue);
	$("#sapphire").data("value", sapphireValue);
	$("#swarovski").data("value", swarovskiValue);

	// reset user's current score
	$("#currentUserScore").html(0);
	userScore = 0;
}

function loseGame() {
	// display user lost
	$("#annouceDisplay").html("You lost!");

	// start new game
	newGame();
}

// on click functions
$("#ruby").on("click", function() {
	// add crystal value to user score
	userScore += rubyValue;
	// update user score on screen
	$("#currentUserScore").html(userScore);
	console.log("User score is: " + userScore);
	if (userScore === currentAns) {
		$("#annouceDisplay").html("You won!");
		winsCount++
		$("#winsCountDisplay").html(winsCount);
		newGame()
	} else if (userScore > currentAns) {
		$("#annouceDisplay").html("You lost!");
		losesCount++
		$("#losesCountDisplay").html(losesCount);
		newGame()
	};
});

$("#emerald").on("click", function() {
	// add crystal value to user score
	userScore += emeraldValue;
	// update user score on screen
	$("#currentUserScore").html(userScore);
	console.log("User score is: " + userScore);
	if (userScore === currentAns) {
		$("#annouceDisplay").html("You won!");
		winsCount++
		$("#winsCountDisplay").html(winsCount);
		newGame()
	} else if (userScore > currentAns) {
		$("#annouceDisplay").html("You lost!");
		losesCount++
		$("#losesCountDisplay").html(losesCount);
		newGame()
	};
});

$("#sapphire").on("click", function() {
	// add crystal value to user score
	userScore += sapphireValue;
	// update user score on screen
	$("#currentUserScore").html(userScore);
	console.log("User score is: " + userScore);
	if (userScore === currentAns) {
		$("#annouceDisplay").html("You won!");
		winsCount++
		$("#winsCountDisplay").html(winsCount);
		newGame()
	} else if (userScore > currentAns) {
		$("#annouceDisplay").html("You lost!");
		losesCount++
		$("#losesCountDisplay").html(losesCount);
		newGame()
	};
});

$("#swarovski").on("click", function() {
	// add crystal value to user score
	userScore += swarovskiValue;
	// update user score on screen
	$("#currentUserScore").html(userScore);
	console.log("User score is: " + userScore);
	if (userScore === currentAns) {
		$("#annouceDisplay").html("You won!");
		winsCount++
		$("#winsCountDisplay").html(winsCount);
		newGame()
	} else if (userScore > currentAns) {
		$("#annouceDisplay").html("You lost!");
		losesCount++
		$("#losesCountDisplay").html(losesCount);
		newGame()
	};
});


newGame();