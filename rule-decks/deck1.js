//general deck
const deck1 = [
    {
        "ruleID": 1000,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Play never have I ever starting with 3 fingers up",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1001,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Take a sip if you are wearing blue",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1002,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Reverse buffalo is in effect",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1003,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Play never have I ever starting with 3 fingers up",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1004,
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", kill your drink",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1005,
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", pack a bowl",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1006,
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", drink with two hands until your name is mentioned in a rule again",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1007,
        "nameRule": true,
        "virusRule": true,
        "RuleString": ", you're the question master. Anytime you ask someone a question and they respond, they have to drink one.",
        "EOVRuleString": "Whoever was the question master is no longer the question master"
    },
    {
        "ruleID": 1008,
        "nameRule": true,
        "virusRule": true,
        "RuleString": ", talk in a British accent until the game tells you to stop",
        "EOVRuleString": "Whoever was talking in a British accent can stop"
    },
    {
        "ruleID": 1009,
        "nameRule": true,
        "virusRule": true,
        "RuleString": "  is the viking master",
        "EOVRuleString": "Whoever was the viking master has lost those privileges"
    },
    {
        "ruleID": 1010,
        "nameRule": false,
        "virusRule": true,
        "RuleString": "If you say someone's name, switch shirts with them",
        "EOVRuleString": "You can now say people's names without having to switch shirts with them"
    },
    {
        "ruleID": 1011,
        "nameRule": false,
        "virusRule": true,
        "RuleString": "Gecko until the game tells you to stop",
        "EOVRuleString": "You no longer have to gecko"
    },
    {
        "ruleID": 1012,
        "nameRule": false,
        "virusRule": true,
        "RuleString": "Whoever clicked on this rule can only speak in questions until the game tells you to stop",
        "EOVRuleString": "Whoever is speaking in questions can stop"
    },
    {
        "ruleID": 1013,
        "nameRule": false,
        "virusRule": true,
        "RuleString": "If you touch any part of your head, you have to take a drink",
        "EOVRuleString": "You no longer have to drink if you touch your head"
    },
    {
        "ruleID": 1014,
        "nameRule": false,
        "virusRule": true,
        "RuleString": "Buffalo is in effect for anyone who doesn't already play the game",
        "EOVRuleString": "Buffalo is no longer in effect"
    },
    {
        "ruleID": 1015,
        "nameRule": false,
        "virusRule": true,
        "RuleString": "The last word of any spoken sentence has to be repeated twice. Drink everytime you forget to do this.",
        "EOVRuleString": "You no longer have to repeat the last word of every sentence"
    },
    {
        "ruleID": 1016,
        "nameRule": false,
        "virusRule": true,
        "RuleString": "Floor is lava! If you touch the floor, you must kill your drink",
        "EOVRuleString": "The floor is no longer lava"
    },
    {
        "ruleID": 1017,
        "nameRule": false,
        "virusRule": true,
        "RuleString": "Swine rule is in effect (every sentence must contain a swear, must point at the person you are talking to, no fancy words). Drink everytime you mess up",
        "EOVRuleString": "Swine rule is no longer in effect"
    },
    {
        "ruleID": 1018,
        "nameRule": false,
        "virusRule": true,
        "RuleString": "Gentlemen rule is in effect (no swearing, no pointing, must use fancy words) Drink everytime you mess up",
        "EOVRuleString": "Gentlemen rule is no longer in effect"
    },
    {
        "ruleID": 1019,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Ladies, drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1020,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Guys, drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1021,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Ladies, drink two",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1022,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Guys, drink two",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1023,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Visually impaired people, drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1024,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "People wearing glasses, drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1025,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "People wearing contacts, drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1026,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "People wearing contacts, drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1027,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "People are not visually impaired, drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1028,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "If you like raisins, drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1029,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "If you hate raisins, drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1030,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Everyone drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1031,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Take a sip for every country you've visited",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1032,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "Take a sip for every person you've hooked up with",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1033,
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", pick a category and start with an item from the category. Go in a circle naming things from the category. The first person who repeats or stumbles has to drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1034,
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", you start. Go in a circle naming fruits. The first person who repeats or stumbles has to drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1035,
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", you start. Go in a circle naming vegetables. The first person who repeats or stumbles has to drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1036,
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", you start. Go in a circle naming beer brands. The first person who repeats or stumbles has to drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1037,
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", you start. Go in a circle naming countries. The first person who repeats or stumbles has to drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1038,
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", you start. Go in a circle naming states within the U.S. The first person who repeats or stumbles has to drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1039,
        "nameRule": true,
        "virusRule": false,
        "RuleString": ", say a word. Go in a circle saying words that rhyme with the first one. The first person who repeats or stumbles has to drink one",
        "EOVRuleString": ""
    },
    {
        "ruleID": 1040,
        "nameRule": false,
        "virusRule": false,
        "RuleString": "If you've ever broken a bone, drink one",
        "EOVRuleString": ""
    }
];