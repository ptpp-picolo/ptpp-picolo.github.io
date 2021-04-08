var ruleMax;					// Maximum amount of rules before game over
var ruleCount = 0;				// Current amount of rules that have been played this game
var ruleDeck = [];				// The rule deck of the current game
var deckSize;					// ruleDeck.length

var virusTimerMin = 5;			// Virus timer minimum amount of rules
var virusTimerMax = 10;			// Virus timer maximum amount of rules
var virusCount = 0;				// Current amount of active viruses

var activeViruses = [];			// Array of viruses currently in effect
var activeCooldowns = [];		// Array of rules currently on cooldown
// test 

var ruleDeckCVSs = [];
/**
 * Retrieve the active rule deck from session storage
 */

function loadDecks(){
	const fileUrl1 = 'https://raw.githubusercontent.com/ptpp-picolo/ptpp-picolo.github.io/ezra-dev/decks/deck1.csv' ;
	ruleDeckCVSs.push(loadDeckText(fileUrl1));
	const fileUrl2 = 'https://raw.githubusercontent.com/ptpp-picolo/ptpp-picolo.github.io/ezra-dev/decks/deck2.csv' ;
	ruleDeckCVSs.push(loadDeckText(fileUrl2));
	const fileUrl3 = 'https://raw.githubusercontent.com/ptpp-picolo/ptpp-picolo.github.io/ezra-dev/decks/deck3.csv' ;
	ruleDeckCVSs.push(loadDeckText(fileUrl3));
	const fileUrl4 = 'https://raw.githubusercontent.com/ptpp-picolo/ptpp-picolo.github.io/ezra-dev/decks/deck4.csv' ;
	ruleDeckCVSs.push(loadDeckText(fileUrl4));
}

function loadDeckText(path){
	var objReq = new XMLHttpRequest();
	objReq.open('GET', path, false); //synchronous is depricated but it simplifies code
	objReq.send();
	return objReq.responseText;
}


function fetchDecks() {
	ruleDeck = [];
	ruleChecks = sessionStorage.getItem("ruleChecks").split(",");
	for(var i = 0; i < ruleChecks.length; i++){
		deckText = ruleDeckCVSs[ruleChecks[i]-1];
		ruleDeck = ruleDeck.concat(csvJSON(deckText));
	}

}

function fetchRuleSession() {
	ruleChecks = sessionStorage.getItem("ruleChecks").split(",");
}

function csvJSON(csv){
  var lines=csv.split("\n");

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }

      result.push(obj);

  }

  return result; //JavaScript object
  //return JSON.stringify(result); //JSON
}

/**
 * Set the game deck based on the checked rule decks in index.html
 * @param {Array} rules An array of JSON Objects, which is the concatenated deck of rules chosen by the user
 */
function setRuleSession(rules) {
	sessionStorage.setItem("ruleDeck",JSON.stringify(rules));
}

/**
 * Retrieve the rule checks from session storage
 */
function fetchRuleChecksSession() {
	c = sessionStorage.getItem("ruleChecks");
	if(c != null){
		ruleChecks = c.split(",");
	}
}

/**
 * Not exactly sure what this is, it's not doing anything rn
 * @param {Array} rules
 */
function setRuleChecksSession(rules) {
	sessionStorage.setItem("ruleChecks", rules);
}

/**
 * Retrieve the game length from session storage
 */
function fetchGameLengthSession() {
	ruleMax = parseInt(sessionStorage.getItem("ruleMax"));
}

/**
 * Set the game length in session storage based on the choice from the user in index.html
 * @param {Number} length the length of the game in number of rules
 */
function setGameLengthSession(length) {
	sessionStorage.setItem("ruleMax", length);
}

/**
 * Adds a new virus to the active viruses array
 * @param {Number} id The ID of the virus rule
 */
function addActiveVirus(id) {
	var newVirus = {
		"ruleID": id,
		"timer": randomVirusTimerInt()
	}

	activeViruses.push(newVirus);
	virusCount++;
}

/**
 * Adds a new cooldown to the active cooldowns array
 * @param {Number} id The ID of the rule going into cooldown
 */
function addActiveCooldown(id) {
	var JSONObj = {
		"ruleID": id,
		"timer": 4
	}

	activeCooldowns.push(JSONObj);
}

/**
 * Retrieve the ID of the expired timer from the active virus array, and remove it
 * @returns {Number} The ID of the expired timer, if there is one. If there isn't, return 0
 */
function getExpiredVirusID() {
	for(var i = 0; i < activeViruses.length; i++) {
		if(activeViruses[i].timer == 0) {
			return activeViruses[i].ruleID;
		}
	}
	return 0;
}

/**
 * Retrieve the ID of the expired timer from the active cooldown array, and remove it
 * @returns {Number} The ID of the expired cooldown, if there is one. If there isn't, return 0
 */
function getExpiredCooldownID() {
	for(var i = 0; i < activeCooldowns.length; i++) {
		if(activeCooldowns[i].timer == 0) {
			var id = activeCooldowns[i].ruleID;
			activeCooldowns.splice(i, 1);
			return id;
		}
	}
	return 0;
}

/**
 * Take the specified virus out of the array of active timers
 * @param {Number} id The virus to remove
 */
function removeExpiredVirus(id) {
	for(var i = 0; i < activeViruses.length; i++) {
		if(activeViruses[i].ruleID == id) {
			activeViruses.splice(i, 1);
			virusCount--;
		}
	}
}

/**
 * Sweep the array of cooldowns and remove all expired timers
 */
function removeExpiredCooldowns() {
	for(var i = activeCooldowns.length - 1; i >= 0; i--) {
	// start at the end of the array so that as cooldowns are removed it doesn't affect indexing
		if(activeCooldowns[i].timer == 0) {
			activeCooldowns.splice(i, 1);
		}
	}
}

/**
 * Decrease all timers in the active arrays
 */
function decrementTimersAndCooldowns() {
	for(var i = 0; i < activeViruses.length; i++) {
		activeViruses[i].timer--;
	}
	for(i = 0; i < activeCooldowns.length; i++) {
		activeCooldowns[i].timer--;
	}
}

/**
 * Generate a rule for the current picolo game session.
 * Functions as a 3-state machine: end of game, end of virus, generate new rule
 */
function getRule() {
	fetchGameLengthSession();
	deckSize = ruleDeck.length;
	var expiredVirusID = getExpiredVirusID();

	if(ruleCount > ruleMax) {
		// end of game
		document.getElementById("get_rule").style.visibility = "hidden"
        document.getElementById('virus').innerHTML = "<span style='color: #696969; font-size: 50px'>" + "Game Over!" + "</span>";
        document.getElementById('playername').innerHTML = ''
		document.getElementById("rule").innerHTML = '<button type="button" class="btn btn-secondary" onclick="goHome()" style="margin-top: 100px;">Return</button>'
	} else if(expiredVirusID > 0) {
		// end of a virus. this does not count as a new rule so it doesn't add to ruleCount or decrement timers

		var virusText = getEOVtextByID(expiredVirusID);
		removeExpiredVirus(expiredVirusID);
		// get the text of the expired virus then remove it from the array

		document.getElementById('virus').innerHTML = "<span style='color: #696969; font-size: 50px'>End of Virus!</span>"
		document.getElementById("rule").innerHTML = "<span style='color: #696969; font-size: 50px'>" + virusText + "</span>"
		// set the HTML for the respective EOV text
	} else {
		// new rule, can be a virus

		var rule = getRuleAvoidingActives();

		decrementTimersAndCooldowns();
		// decrement timers before processing new rule, so that viruses don't get decremented right after they get set

		if(rule.virusRule) {
			document.getElementById('virus').innerHTML = "<span style='color: #696969; font-size: 50px'>Virus!</span>";
			addActiveVirus(rule.ruleID);
			// enable virus and set timer
		} else {
			document.getElementById('virus').innerHTML = '';
			addActiveCooldown(rule.ruleID);
			// give the rule a cooldown timer for being played
		}

		if (rule.nameRule) {
            document.getElementById("playername").innerHTML = "<span style='color: #696969; font-size: 50px'>" + getRandomPlayer() + "</span>";
        } else {
            document.getElementById('playername').innerHTML = ''
		}

		document.getElementById("rule").innerHTML = "<span style='color: #696969; font-size: 50px'>" + rule.RuleString + "</span>";
		document.body.style.backgroundColor = getGoodLookingColor()

		ruleCount++;
		// ending a virus doesn't count as a rule for virus timers
		// or cooldowns, so only count new rules for the rule count
	}

	removeExpiredCooldowns();
}

/**
 * Retrieve a rule from the current list while avoiding viruses that are currently active
 * or in cooldown from being active before
 * @returns {Number} A rule from the ruleDeck that's not currently in use
 */
function getRuleAvoidingActives() {
	var rule;
	var id;

	while(true) {
		rule = ruleDeck[Math.floor(Math.random() * deckSize)];
		id = rule.ruleID;
		if(isRuleInEffectOrCooldown(id) || (rule.virusRule && virusCount >= 3)) {
				continue;
		}
		return rule;
	}
}

/**
 * Retrieve the EOV text from the specified rule
 * @param {Number} id The id of the virus
 * @returns {String} The EOV text
 */
function getEOVtextByID(id) {
	for(var i = 0; i < deckSize; i++) {
		if(ruleDeck[i].ruleID == id) {
			return ruleDeck[i].EOVRuleString;
		}
	}
}

/**
 * Return whether the selected rule is a virus or not
 * @param {Number} id The rule's id
 * @returns {Boolean} True if the rule is a virus, false otherwise
 */
function isVirus(id) {
	for(var i = 0; i < deckSize; i++) {
		if(ruleDeck[i].ruleID == id) {
			return ruleDeck[i].virusRule;
		}
	}
}

/**
 * Return a boolean for if the specified rule is currently active or in cooldown
 * @param {Number} id The id of the virus in question
 * @returns {Boolean} True if the id is in effect or cooldown, false otherwise
 */
function isRuleInEffectOrCooldown(id) {
	for(var i = 0; i < activeViruses.length; i++) {
		if(activeViruses[i].ruleID == id) {
			return true;
		}
	}
	for(i = 0; i < activeCooldowns.length; i++) {
		if(activeCooldowns[i].ruleID == id) {
			return true;
		}
	}

	return false;
}

/**
 * Get a random number between the minimum and maximum virus timer length
 * @returns {Number} The random number that was generated
 */
function randomVirusTimerInt() {
	return Math.floor(Math.random() * (virusTimerMax - virusTimerMin + 1) + virusTimerMin);
}
