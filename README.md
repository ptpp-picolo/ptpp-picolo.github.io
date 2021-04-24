# PTPP Picolo

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
  * Cooldown logic so that rules don't repeat themselves too often
* Logic to temporarily save a session
* Basic structure of rule decks with at least a few rules in each deck
* User can choose different game lengths
* Hosted [website](https://ptpp-picolo.github.io/) on GitHub 

To-do:
* 1. Manually parse through the jumble of ways we've collected rules and add them all to 'PTPP rules' file found in Google Drive
* 2. Write script to parse rules from csv of 'PTPP rules' file found on Google Drive
* 3. UI stuff:
  * Figure out how to add a player just by clicking 'enter'
  * Make things look nice/readable on mobile version of website

Future work:
* Add rules containing multiple names
* Allow users to add their own rules/ make their own decks
* Make admin account for devs to add rules through UI of game
* Make account/profile ability for user
  * Allow users to remove rules they don't like from decks
* Refactor code for efficiency
