# ptpp-picolo.github.io

This is a homemade version of the drinking game app, [Picolo](https://play.google.com/store/apps/details?id=com.picolo.android&hl=en_US&gl=US).

Here are the slight differences we made to the UI/UX of Picolo to make the game more enjoyable for the creators and users of the game:
* Developed our own rules from scratch
* Have different decks of rules for different vibes that are all free for the user
* The user has the ability to combine as many decks as they want to play a game
* The program will remember what names were input at the start of the game, as well as the selected decks so that when the game is over, the user can simply return to the main page if they want to play again, and all of that information will already be displayed without the user have to re-input anything
* During gameplay, you have to specifically click on a button to get a new rule instead of click on the entire screen.

Here is what we have working:
* The basics of Picolo:
  * Players can enter their names at the beginning of the game, and then their names are randomly selected to be used in some rules
  * Once the players start the game, a random rule is selected everytime the users click on 'Get a New Rule'
  * The logic for virus rules
  * The logic for rules that target a random player
* Logic to temporarily save a session
* Basic structure of rule decks with at least a few rules in each deck
* User can choose different game lengths

Current to-do:
* 1. Have cooldown logic that ensures rules aren't repeated too quickly (use queue to implement efficiently) - ezra (push to ezra-dev)
* 2. Script to input new unique rules - eusman (new branch)
* 3. UI stuff: - haley (new branch off of ezra-dev)
  * Figure out how to add a player just by clicking 'enter'
  * Shorten padding for rules during gameplay
  * Put 'get new rule' button at the top of the page
* 4. Refactor code for efficiency - everyone

Final steps:
* Make more rules to add to all the decks (potentially meet over zoom and have anyone join who wants to)
* Nicer UI in general
* UI that will work for mobile use
* Publish as an actual website using github
