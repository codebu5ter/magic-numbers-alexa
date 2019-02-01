/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the world of Magic Numbers! Say Magic Number One or Magic Number Two to see the magic of numbers!';

    if (!supportsAPL(handlerInput)) {
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .withSimpleCard('Magic Numbers', speechText)
        .getResponse();
    }
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Magic Numbers', speechText)
      .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./resources/yesnohelpdisplay.json'),
        datasources: {
          "bodyTemplate1Data": {
            "type": "object",
            "objectId": "bt1Sample",
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://s3.amazonaws.com/magic-numbers/arts-arts-and-crafts-concept-1314543.jpg",
                        "size": "small",
                        "widthPixels": 0,
                        "heightPixels": 0
                    },
                    {
                        "url": "https://s3.amazonaws.com/magic-numbers/arts-arts-and-crafts-concept-1314543.jpg",
                        "size": "large",
                        "widthPixels": 0,
                        "heightPixels": 0
                    }
                ]
            },
            "title": "Magic Numbers",
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": speechText
                }
            }
          }
        }
      })
      .getResponse();
  },
};

const MagicNumberOneIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'MagicNumberOneIntent';
  },
  handle(handlerInput) {
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    attributes.num = 0;
    const speechText = 'Step 1. Think of a whole number 1 through 10., Step 2. Double it!, Step 3. Add 4., Step 4. Divide by 2., Step 5. Subtract the original number., When you are done, say Done.';

    if (!supportsAPL(handlerInput)) {
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
    }
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./resources/numberdisplay.json'),
        datasources: require('./resources/magiconedata.json')
      })
      .getResponse();
  },
};

const MagicNumberTwoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'MagicNumberTwoIntent';
  },
  handle(handlerInput) {
    const attributes = handlerInput.attributesManager.getSessionAttributes();
    attributes.num = 1;
    const speechText = 'Step 1. Choose a number, any number!, Step 2. Multiply the number by 100., Step 3. Subtract the original number from the answer., Step 4. Add the digits in your answer., When you are done, say Done.';

    if (!supportsAPL(handlerInput)) {
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
    }
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./resources/numberdisplay.json'),
        datasources: require('./resources/magictwodata.json')
      })
      .getResponse();
  },
};

const DoneIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'DoneIntent';
  },
  handle(handlerInput) {
    let speechText = '';
    const num = handlerInput.attributesManager.getSessionAttributes().num;
    if(!num){
      speechText = 'Did you get the number 2?';
    } else {
      speechText = 'Did you get the number 18?';
    }

    if (!supportsAPL(handlerInput)) {
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .getResponse();
    }
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./resources/yesnohelpdisplay.json'),
        datasources: {
          "bodyTemplate1Data": {
            "type": "object",
            "objectId": "bt1Sample",
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://s3.amazonaws.com/magic-numbers/count-counting-graphic-1329296.jpg",
                        "size": "small",
                        "widthPixels": 0,
                        "heightPixels": 0
                    },
                    {
                        "url": "https://s3.amazonaws.com/magic-numbers/count-counting-graphic-1329296.jpg",
                        "size": "large",
                        "widthPixels": 0,
                        "heightPixels": 0
                    }
                ]
            },
            "title": "Magic Numbers",
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": speechText
                }
            }
          }
        }
      })
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'You can say Magic Number One or Magic Number Two to see the magic of numbers.';

    if (!supportsAPL(handlerInput)) {
      return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt(speechText)
        .withSimpleCard('Magic Numbers', speechText)
        .getResponse();
    }
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Magic Numbers', speechText)
      .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./resources/yesnohelpdisplay.json'),
        datasources: {
          "bodyTemplate1Data": {
            "type": "object",
            "objectId": "bt1Sample",
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://s3.amazonaws.com/magic-numbers/pay-2662758_1920.jpg",
                        "size": "small",
                        "widthPixels": 0,
                        "heightPixels": 0
                    },
                    {
                        "url": "https://s3.amazonaws.com/magic-numbers/pay-2662758_1920.jpg",
                        "size": "large",
                        "widthPixels": 0,
                        "heightPixels": 0
                    }
                ]
            },
            "title": "Magic Numbers",
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": speechText
                }
            }
          }
        }
      })
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    if (!supportsAPL(handlerInput)) {
      return handlerInput.responseBuilder
        .speak(speechText)
        .getResponse();
    }
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./resources/yesnohelpdisplay.json'),
        datasources: {
          "bodyTemplate1Data": {
            "type": "object",
            "objectId": "bt1Sample",
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://s3.amazonaws.com/magic-numbers/pay-2662758_1920.jpg",
                        "size": "small",
                        "widthPixels": 0,
                        "heightPixels": 0
                    },
                    {
                        "url": "https://s3.amazonaws.com/magic-numbers/pay-2662758_1920.jpg",
                        "size": "large",
                        "widthPixels": 0,
                        "heightPixels": 0
                    }
                ]
            },
            "title": "Magic Numbers",
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": speechText
                }
            }
          }
        }
      })
      .getResponse();
  },
};

const YesIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';
  },
  handle(handlerInput) {
    const speechText = 'That is the magic of maths and numbers!';

    if (!supportsAPL(handlerInput)) {
      return handlerInput.responseBuilder
        .speak(speechText)
        .withSimpleCard('Magic Numbers', speechText)
        .getResponse();
    }
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Magic Numbers', speechText)
      .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./resources/yesnohelpdisplay.json'),
        datasources: {
          "bodyTemplate1Data": {
            "type": "object",
            "objectId": "bt1Sample",
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://s3.amazonaws.com/magic-numbers/pay-2662758_1920.jpg",
                        "size": "small",
                        "widthPixels": 0,
                        "heightPixels": 0
                    },
                    {
                        "url": "https://s3.amazonaws.com/magic-numbers/pay-2662758_1920.jpg",
                        "size": "large",
                        "widthPixels": 0,
                        "heightPixels": 0
                    }
                ]
            },
            "title": "Magic Numbers",
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": speechText
                }
            }
          }
        }
      })
      .getResponse();
  },
};

const NoIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent';
  },
  handle(handlerInput) {
    const speechText = 'Please try again!';

    if (!supportsAPL(handlerInput)) {
      return handlerInput.responseBuilder
        .speak(speechText)
        .getResponse();
    }
    
    return handlerInput.responseBuilder
      .speak(speechText)
      .addDirective({
        type: 'Alexa.Presentation.APL.RenderDocument',
        version: '1.0',
        document: require('./resources/yesnohelpdisplay.json'),
        datasources: {
          "bodyTemplate1Data": {
            "type": "object",
            "objectId": "bt1Sample",
            "backgroundImage": {
                "contentDescription": null,
                "smallSourceUrl": null,
                "largeSourceUrl": null,
                "sources": [
                    {
                        "url": "https://s3.amazonaws.com/magic-numbers/pay-2662758_1920.jpg",
                        "size": "small",
                        "widthPixels": 0,
                        "heightPixels": 0
                    },
                    {
                        "url": "https://s3.amazonaws.com/magic-numbers/pay-2662758_1920.jpg",
                        "size": "large",
                        "widthPixels": 0,
                        "heightPixels": 0
                    }
                ]
            },
            "title": "Magic Numbers",
            "textContent": {
                "primaryText": {
                    "type": "PlainText",
                    "text": speechText
                }
            }
          }
        }
      })
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

function supportsAPL(handlerInput) {
  const supportedInterfaces = handlerInput.requestEnvelope.context.System.device.supportedInterfaces;
  const aplInterface = supportedInterfaces['Alexa.Presentation.APL'];
  return aplInterface != null && aplInterface != undefined;
}

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    MagicNumberOneIntentHandler,
    MagicNumberTwoIntentHandler,
    DoneIntentHandler,
    YesIntentHandler,
    NoIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
