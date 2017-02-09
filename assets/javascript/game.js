var game = {
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

	// generate new gem value
	genGemValue: function() {
		return this.possibleGemValue[Math.floor(Math.random() * this.possibleGemValue.length)];
	},

	// generate random integer between 10 and 120
	getRandomInt: function() {
    		return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
	},

	newGame: function() {
		// declare new answer user needs to get to
		this.currentAns = this.getRandomInt();
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