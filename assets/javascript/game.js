var game = {
	possibleGameScore: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72],
	userScore: 0,
	winsCount: 0,
	losesCount: 0,
	rubyValue: null,
	emeraldValue: null,
	sapphireValue: null,
	swarovskiValue: null,
	crystals: ["ruby", "emerald", "sapphire", "swarovski"],
	possibleGemValue: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
	currentAns: null,

	genGemValue: function() {
		return this.possibleGemValue[Math.floor(Math.random() * this.possibleGemValue.length)];
	},

	newGame: function() {
		// declare new answer user needs to get to
		this.currentAns = this.possibleGameScore[Math.floor(Math.random() * this.possibleGameScore.length)];
		console.log("Current answer: " + this.currentAns);

		// change ending score on screen
		$("#currentScore").html(this.currentAns);

		// generate values for crystals
		this.rubyValue = this.genGemValue();
		this.emeraldValue = this.genGemValue();
		this.sapphireValue = this.genGemValue();
		this.swarovskiValue = this.genGemValue();
		console.log("Ruby value: " + this.rubyValue);
		console.log("Emerald value: " + this.emeraldValue);
		console.log("Sapphire value: " + this.sapphireValue);
		console.log("Swarovski value: " + this.swarovskiValue);

		// reset user's current score
		$("#currentUserScore").html(0);
		this.userScore = 0;
	},

	loseGame: function() {
		// display user lost
		$("#annouceDisplay").html("You lost!");

		// start new game
		this.newGame();
	}
}

// on click functions
$("#ruby").on("click", function() {
	// add crystal value to user score
	game.userScore += game.rubyValue;
	// update user score on screen
	$("#currentUserScore").html(game.userScore);
	console.log("User score is: " + game.userScore);
	if (game.userScore === game.currentAns) {
		$("#annouceDisplay").html("You won!");
		game.winsCount++
		$("#winsCountDisplay").html(game.winsCount);
		game.newGame()
	} else if (game.userScore > game.currentAns) {
		$("#annouceDisplay").html("You lost!");
		game.losesCount++
		$("#losesCountDisplay").html(game.losesCount);
		game.newGame()
	};
});

$("#emerald").on("click", function() {
	// add crystal value to user score
	game.userScore += game.emeraldValue;
	// update user score on screen
	$("#currentUserScore").html(game.userScore);
	console.log("User score is: " + game.userScore);
	if (game.userScore === game.currentAns) {
		$("#annouceDisplay").html("You won!");
		game.winsCount++
		$("#winsCountDisplay").html(game.winsCount);
		game.newGame()
	} else if (game.userScore > game.currentAns) {
		$("#annouceDisplay").html("You lost!");
		game.losesCount++
		$("#losesCountDisplay").html(game.losesCount);
		game.newGame()
	};
});

$("#sapphire").on("click", function() {
	// add crystal value to user score
	game.userScore += game.sapphireValue;
	// update user score on screen
	$("#currentUserScore").html(game.userScore);
	console.log("User score is: " + game.userScore);
	if (game.userScore === game.currentAns) {
		$("#annouceDisplay").html("You won!");
		game.winsCount++
		$("#winsCountDisplay").html(game.winsCount);
		game.newGame()
	} else if (game.userScore > game.currentAns) {
		$("#annouceDisplay").html("You lost!");
		game.losesCount++
		$("#losesCountDisplay").html(game.losesCount);
		game.newGame()
	};
});

$("#swarovski").on("click", function() {
	// add crystal value to user score
	game.userScore += game.swarovskiValue;
	// update user score on screen
	$("#currentUserScore").html(game.userScore);
	console.log("User score is: " + game.userScore);
	if (game.userScore === game.currentAns) {
		$("#annouceDisplay").html("You won!");
		game.winsCount++
		$("#winsCountDisplay").html(game.winsCount);
		game.newGame()
	} else if (game.userScore > game.currentAns) {
		$("#annouceDisplay").html("You lost!");
		game.losesCount++
		$("#losesCountDisplay").html(game.losesCount);
		game.newGame()
	};
});


game.newGame();