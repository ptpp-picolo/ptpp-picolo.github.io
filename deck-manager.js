const GSheetReader = require('g-sheets-api');

const options1 = {
    sheetId: '1Maer5sI2D3_Vj96OxOx2aE8ycsNNBmcLtG992kFFZ78',
    sheetNumber: 1,
};
const options2 = {
    sheetId: '1Maer5sI2D3_Vj96OxOx2aE8ycsNNBmcLtG992kFFZ78',
    sheetNumber: 2,
};
const options3 = {
    sheetId: '1Maer5sI2D3_Vj96OxOx2aE8ycsNNBmcLtG992kFFZ78',
    sheetNumber: 3,
};
const options4 = {
    sheetId: '1Maer5sI2D3_Vj96OxOx2aE8ycsNNBmcLtG992kFFZ78',
    sheetNumber: 4,
};

var deck1 = [];
var deck2 = [];
var deck3 = [];
var deck4 = [];

/**
 * Parse the data from the specified page of the PTPP Rule Deck spreadsheet
 * @param {Number} deckNum the deck being parsed
 */
function readGSheetsDeck(deckNum) {
    switch(deckNum) {
        case 1:
            GSheetReader(options1, generatedDeck => {
                deck1 = generatedDeck;
                setDLFlag(1);
            });
            break;
        case 2:
            GSheetReader(options2, generatedDeck => {
                deck2 = generatedDeck;
                setDLFlag(2);
            });
            break;
        case 3:
            GSheetReader(options3, generatedDeck => {
                deck3 = generatedDeck;
                setDLFlag(3);
            });
            break;
        case 4:
            GSheetReader(options4, generatedDeck => {
                deck4 = generatedDeck;
                setDLFlag(4);
            });
    }
}

/**
 * Either set all download check flags to false, or set the specified flag to true
 * @param {Number} deckNum if 1-4, the specific deck to flag, otherwise default
 */
function setDLFlag(deckNum) {
    switch(deckNum) {
        case 1:
            sessionStorage.setItem("DLFlag1", true);
            break;
        case 2:
            sessionStorage.setItem("DLFlag2", true);
            break;
        case 3:
            sessionStorage.setItem("DLFlag3", true);
            break;
        case 4:
            sessionStorage.setItem("DLFlag4", true);
            break;
        default:
            sessionStorage.setItem("DLFlag1", false);
            sessionStorage.setItem("DLFlag2", false);
            sessionStorage.setItem("DLFlag3", false);
            sessionStorage.setItem("DLFlag4", false);
    }
}

/**
 * Fetch the current download state of the specified deck
 * @param {Number} deckNum the deck flag being fetched
 */
function fetchDLFlag(deckNum) {
    switch(deckNum) {
        case 1:
            return sessionStorage.getItem("DLFlag1");
        case 2:
            return sessionStorage.getItem("DLFlag2");
        case 3:
            return sessionStorage.getItem("DLFlag3");
        case 4:
            return sessionStorage.getItem("DLFlag4");
    }
}