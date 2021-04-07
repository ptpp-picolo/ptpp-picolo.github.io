const sheet1Url = 'https://spreadsheets.google.com/feeds/cells/1Maer5sI2D3_Vj96OxOx2aE8ycsNNBmcLtG992kFFZ78/1/public/full?alt=json';
const sheet2Url = 'https://spreadsheets.google.com/feeds/cells/1Maer5sI2D3_Vj96OxOx2aE8ycsNNBmcLtG992kFFZ78/2/public/full?alt=json';
const sheet3Url = 'https://spreadsheets.google.com/feeds/cells/1Maer5sI2D3_Vj96OxOx2aE8ycsNNBmcLtG992kFFZ78/3/public/full?alt=json';
const sheet4Url = 'https://spreadsheets.google.com/feeds/cells/1Maer5sI2D3_Vj96OxOx2aE8ycsNNBmcLtG992kFFZ78/4/public/full?alt=json';

var deck1 = [];
var deck2 = [];
var deck3 = [];
var deck4 = [];

/**
 * Download the specified deck from the google spreadsheet of rules
 * @param deckNum the deck to download
*/
$.DLDeck = function(deckNum) {
    // the 5 attributes of the JSON objects
    var ruleID;
    var nameRule;
    var virusRule;
    var ruleString;
    var EOVRuleString;
    switch(deckNum) {
        // which of the 4 decks to parse the sheet google sheet for
        case 1:
            $.getJSON(sheet1Url, function(data) {
                // data.feed.entry is the array of cells in the sheet. This includes the value of the cell
                var entry = data.feed.entry;
                // array starts at 1 because the first row of cells is the titles
                // entry.length / 5 is the amount of rows of data
                for(var i = 1; i < (entry.length / 5); i++) {
                    // content.$t is the value of the cell
                    ruleID = entry[i * 5].content.$t;
                    
                    // turn the y/n into true/false
                    nameRule = entry[(i * 5) + 1].content.$t == "y";

                    virusRule = entry[(i * 5) + 2].content.$t == "y";

                    ruleString = entry[(i * 5) + 3].content.$t;

                    if(entry[(i * 5) + 4].content.$t == "-1") {
                        EOVRuleString = "";
                    } else {
                        EOVRuleString = entry[(i * 5) + 4].content.$t
                    }

                    var newObj = {
                        ruleID: ruleID,
                        nameRule: nameRule,
                        virusRule: virusRule,
                        ruleString: ruleString,
                        EOVRuleString: EOVRuleString
                    }

                    // add the generated object to the appropriate deck
                    deck1.push(newObj);
                }
            })
            setDLFlag(1);
            break;
        case 2:
            $.getJSON(sheet2Url, function(data) {
                var entry = data.feed.entry;
                for(var i = 1; i < (entry.length / 5); i++) {
                    ruleID = entry[i * 5].content.$t;
                    
                    nameRule = entry[(i * 5) + 1].content.$t == "y";

                    virusRule = entry[(i * 5) + 2].content.$t == "y";

                    ruleString = entry[(i * 5) + 3].content.$t;

                    if(entry[(i * 5) + 4].content.$t == "-1") {
                        EOVRuleString = "";
                    } else {
                        EOVRuleString = entry[(i * 5) + 4].content.$t
                    }

                    var newObj = {
                        ruleID: ruleID,
                        nameRule: nameRule,
                        virusRule: virusRule,
                        ruleString: ruleString,
                        EOVRuleString: EOVRuleString
                    }

                    deck2.push(newObj);
                }
            })
            setDLFlag(2);
            break;
        case 3:
            $.getJSON(sheet3Url, function(data) {
                var entry = data.feed.entry;
                for(var i = 1; i < (entry.length / 5); i++) {
                    ruleID = entry[i * 5].content.$t;
                    
                    nameRule = entry[(i * 5) + 1].content.$t == "y";

                    virusRule = entry[(i * 5) + 2].content.$t == "y";

                    ruleString = entry[(i * 5) + 3].content.$t;

                    if(entry[(i * 5) + 4].content.$t == "-1") {
                        EOVRuleString = "";
                    } else {
                        EOVRuleString = entry[(i * 5) + 4].content.$t
                    }

                    var newObj = {
                        ruleID: ruleID,
                        nameRule: nameRule,
                        virusRule: virusRule,
                        ruleString: ruleString,
                        EOVRuleString: EOVRuleString
                    }

                    deck3.push(newObj);
                }
            })
            setDLFlag(3);
            break;
        case 4:
            $.getJSON(sheet4Url, function(data) {
                var entry = data.feed.entry;
                for(var i = 1; i < (entry.length / 5); i++) {
                    ruleID = entry[i * 5].content.$t;
                    
                    nameRule = entry[(i * 5) + 1].content.$t == "y";

                    virusRule = entry[(i * 5) + 2].content.$t == "y";

                    ruleString = entry[(i * 5) + 3].content.$t;

                    if(entry[(i * 5) + 4].content.$t == "-1") {
                        EOVRuleString = "";
                    } else {
                        EOVRuleString = entry[(i * 5) + 4].content.$t
                    }

                    var newObj = {
                        ruleID: ruleID,
                        nameRule: nameRule,
                        virusRule: virusRule,
                        ruleString: ruleString,
                        EOVRuleString: EOVRuleString
                    }

                    deck4.push(newObj);
                }
            })
            setDLFlag(4);
    }
};

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