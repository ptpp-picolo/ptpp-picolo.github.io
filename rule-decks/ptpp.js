
var ruleChecks = [];			// The array of rule checks

/**
 * Initialize all of the inputted data and transfer to the main game HTML page
 */
function startGame() {
	var gameLength = document.getElementById('game-length-selector').value;
    if (playerNames.length == 0) {
		// no players submitted
        alert("You need to enter at least one name to play!")
    } else if(!( $('#deck1Check').is(':checked')
			  || $('#deck2Check').is(':checked')
			  || $('#deck3Check').is(':checked')
			  || $('#deck4Check').is(':checked'))) {
		// no decks were checked
		alert("You need to choose at least one deck to play!")
	} else if(gameLength == 'null') {
		// no game length was chosen
		alert("You need to choose a game length to play!")
	} else{
		// all data inputted correctly
		ruleChecks = [];
		if( $('#deck1Check').is(':checked')){
			ruleDeck = ruleDeck.concat(deck1);
			ruleChecks = ruleChecks.concat(1);
		}
		if( $('#deck2Check').is(':checked')){
			ruleDeck = ruleDeck.concat(deck2);
			ruleChecks = ruleChecks.concat(2);
		}
		if( $('#deck3Check').is(':checked')){
			ruleDeck = ruleDeck.concat(deck3);
			ruleChecks = ruleChecks.concat(3);
		}
		if( $('#deck4Check').is(':checked')){
			ruleDeck = ruleDeck.concat(deck4);
			ruleChecks = ruleChecks.concat(4);
		}

		var ruleMaxString;
		switch(gameLength) {
			case "short":
				ruleMaxString = "15";
				break;
			case "medium":
				ruleMaxString = "30";
				break;
			case "long":
				ruleMaxString = "50";
				break;
			case "bender":
				ruleMaxString = "150";
		}
		
		setPlayerSession(playerNames);
		setRuleSession(ruleDeck);
		setRuleChecksSession(ruleChecks);
		setGameLengthSession(ruleMaxString);
		// store all inputted data in the session storage

		window.location.href = "./game.html";
		// change HTML pages to the main game page
    }
}

/**
 * Update the player list by clearing it out and re-adding all active players
 */
function updatePlayerList(){
	const list = document.getElementById('players-list');
	list.innerHTML = "";
	
	for (var i = 0; i < playerNames.length; i++){
		list.innerHTML = list.innerHTML + makePlayerString(playerNames[i])
	}
}

/**
 * Update which rule decks were selected by the user,
 * so active ones can later be concatenated together
 */
function updateRuleChecks(){
	if(ruleChecks.includes("1")){
		$('#deck1Check').prop("checked", true);
	}
	if(ruleChecks.includes("2")){
		$('#deck2Check').prop("checked", true);
	}
	if(ruleChecks.includes("3")){
		$('#deck3Check').prop("checked", true);
	}
	if(ruleChecks.includes("4")){
		$('#deck4Check').prop("checked", true);
	}
}

/**
 * Return to the starting HTML page
 */
function goHome(){
	window.location.href = "./index.html";
}

/**
 * Gets a random color that looks nice and also makes it easy to read gray text
 * but also please feel free to change these colors bc idk if they actually look good with gray text lmao
 */
function getGoodLookingColor() {
    var colorArray = [
		"#FF474A", "#FFE6A7", "#F487B6", "#FDE12D", "#6A8E7F",
		"#CD8B76", "#76B041", "#F0B67F", "#E1F2FE"]
    var colour = colorArray[Math.floor(Math.random() * colorArray.length)];
    console.log(colour);
    return colour;
}