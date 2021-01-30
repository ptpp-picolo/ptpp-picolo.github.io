const GSheetReader = require('g-sheets-api');

const optionsGeneral = {
    sheetID: '1Maer5sI2D3_Vj96OxOx2aE8ycsNNBmcLtG992kFFZ78',
    sheetNumber: 1,
};
const optionsFrisbee = {
    sheetID: '1Maer5sI2D3_Vj96OxOx2aE8ycsNNBmcLtG992kFFZ78',
    sheetNumber: 2,
};
const optionsDrinking = {
    sheetID: '1Maer5sI2D3_Vj96OxOx2aE8ycsNNBmcLtG992kFFZ78',
    sheetNumber: 3,
};
const optionsStoner = {
    sheetID: '1Maer5sI2D3_Vj96OxOx2aE8ycsNNBmcLtG992kFFZ78',
    sheetNumber: 4,
};

var deck1 = [];
var deck2 = [];
var deck3 = [];
var deck4 = [];

function readGSheetsDeck1() {
    GSheetReader(optionsGeneral, generatedDeck => {
        deck1 = generatedDeck;
        setDLFlag(1);
    })
}

function readGSheetsDeck2() {
    GSheetReader(optionsFrisbee, generatedDeck => {
        deck2 = generatedDeck;
        setDLFlag(2);
    })
}

function readGSheetsDeck3() {
    GSheetReader(optionsDrinking, generatedDeck => {
        deck3 = generatedDeck;
        setDLFlag(3);
    })
}

function readGSheetsDeck4() {
    GSheetReader(optionsStoner, generatedDeck => {
        deck4 = generatedDeck;
        setDLFlag(4);
    })
}

function setDLFlag(deckNum) {
    switch(deckNum) {
        case 0:
            sessionStorage.setItem("DLFlag1", false);
            sessionStorage.setItem("DLFlag2", false);
            sessionStorage.setItem("DLFlag3", false);
            sessionStorage.setItem("DLFlag4", false);
            break;
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
    }
}

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