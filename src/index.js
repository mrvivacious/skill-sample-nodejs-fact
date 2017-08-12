'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "Magical Messages";
var GET_MAGICAL_MESSAGE = "Here's a message for you: ";
var HELP_MESSAGE = "You can say tell me a magical message, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "The best way to start doing something is to start doing it.",         
    "A period of consistent failure does not necessarily mean that success will never be seen.",          
    "If you're always learning, when are you applying?",    
    "When you aren't feeling your best, you are prone to fall for the worst",    
    "The way you see yourself is not the way others see you...and the way others see you isn't" +
                    " necessarily who you really are.",    
    "Commitments and responsibilities cease, but knowledge and love is eternal.",    
    "Live and let live. Don't let the lives of others inhibit you from living yours.",   
    "Don't hold others to your personal standards, and don't hold yourself to the standards " +
                    "of others.",
    "Never let a desire grow strong enough that you begin questioning yourself.",   
    "Acquired pleasures should only supplement an already joyful life.",    
    "Moving can sometimes be better than standing still, but it's always good to be engaged.",  
    "Your life is, after all, only yours. Do exactly what you want.",            
    "When there are no pending duties or present responsibilities, you become as free " +
                    "as free can be.",
    "Others may be engaging in certain activities. Others may have varying levels of success. " +
                    "Step out of your comfort zone when appropriate, but stay true to yourself.",
    "When you truly understand, you can begin to love. When you don't understand, you might suffer.",
    "Life doesn't have to be about being the best, or being a step ahead of everyone. Life, rather, " +
                    "can be about living how you want, making the efforts necessary to bring yourself what " +
                    "you really want, developing yourself however you want. It's your life, and your life is only " +
                    "whatever you make of it.",
    "If something requires your best, and you approach that something with anything less than your best, " +
                    "any outcome becomes fair.",
    "When you have nothing left to do, you can improve yourself, enjoy yourself, or both.",
    "Live in a way that you can respect.",
    "What are your best interests? Who knows them? Who has them in mind?",
    "One success is greater and more significant than any number of failures.",
    "One cannot be proficient in everything. Just develop yourself the way you want, with the " +
                    "skills you want.",
    "When you think about something, you dedicate your resources to that something. Would you " +
                    "rather dedicate your resources to what others are up to, or what you are up to?",
    "When you stop living for yourself, your development stops as well.",
    "You are a wonderful person.",
    "You are very beautiful today.",
    "You should smile more. You have a wonderful smile.",
    "You are loved.",
    "People in this world appreciate you, just the way you are.",
    "I am happy I know you!",
    "Have a wonderful day!",
    "I know there are great things in store for you.",
    "You add value to all the lives you touch.",
    "You look lovely today.",
    "Hearing your voice always makes my day.",
    "You are a champion.",
    "You are a awesome.",
    "You inspire many.",
    "You are a meaningful and special individual.",
    "Don't forget to smile, you are beautiful!",
    "You did a good job today.",
    "You are a role model and a great friend."
    "I am glad I know you."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewMessageIntent');
    },
    'GetNewMessageIntent': function () {
        var messageArr = data;
        var messageIndex = Math.floor(Math.random() * messageArr.length);
        var randomMessage = messageArr[messageIndex];
        var speechOutput = GET_MAGICAL_MESSAGE + randomMessage;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomMessage)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
