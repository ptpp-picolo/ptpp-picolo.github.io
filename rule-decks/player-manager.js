
var playerNames = [];           // The array of player names

/**
 * Retrieve the array of player names from session storage
 */
function fetchPlayerSession(){
	playerNames = sessionStorage.getItem("playerNames").split(",");
}

/**
 * Set the player names in the session storage
 * @param {Array} players The String array of player names
 */
function setPlayerSession(players){
	sessionStorage.setItem("playerNames",players);
}

/**
 * Make the proper string for the new player name in the HTML
 * @param {String} name The name of the new player
 */
function makePlayerString(name){
	return "<li id = 'clicks'>" + name + "          " + "<button type='button' class = 'btn btn-danger todo-delete' value = clicks onclick = 'removePlayer(this.parentElement)'>X</button></li>"
}

/**
 * Get a random player from the list of players.
 * @returns {String} Name of the randomly chosen player
 */
function getRandomPlayer() {
    var name = playerNames[Math.floor(Math.random() * playerNames.length)];
    return name;
}

/**
 * Deletes a player from the game on the click of the 'X' next to the player's name
 * @param {*} player The player being deleted
 */
function removePlayer(player) {
    const list = document.getElementById('players-list')

    nameString = player.innerText.substring(0, player.innerText.length - 2)
    //This line is needed to get rid of the 'X' in the string after the actual player name

    const index = playerNames.indexOf(nameString);
    if (index > -1) {
        playerNames.splice(index, 1);
    }

    list.removeChild(player);
}

/**
 * Add a player to the list of player names
 */
function addPlayerName() {

    if (document.getElementById("playerName").value.length == 0) {
        alert("This player needs to have an actual name dude.")
    } else {
        playerNames.push(document.getElementById("playerName").value)

        const list = document.getElementById('players-list')
        list.innerHTML = list.innerHTML + "<li id = 'clicks'>" + document.getElementById("playerName").value + "          " + "<button type='button' class = 'btn btn-danger todo-delete' value = clicks onclick = 'removePlayer(this.parentElement)'>X</button></li>"
    }
    document.getElementById('playerName').value = ''
    console.log(playerNames)
}