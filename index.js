// This sample demonstrates handling intents from an Alexa skill using the Alexa Skills Kit SDK (v2).
// Please visit https://alexa.design/cookbook for additional examples on implementing slots, dialog management,
// session persistence, api calls, and more.
const Alexa = require('ask-sdk-core');

const JAN=[
            'lohri. Lohri is a popular winter Punjabi folk festival',
            'republic day. Republic Day of India is celebrated on 26th of January every year.',
            'vasant panchami.  Vasant Panchami is the Hindu festival that highlights the coming of spring.'
        ];
const FEB=[
            'Khajuraho Dance Festival of Madhya Pradesh. . During the festival, one can relish a number of live classical dance performances like Bharatnatyam, Mohniattam, Kathak, Odissi and Manipuri. Participating in this splendid festival would be a truly exciting experience that one will remember for many, many years.',
            'Mahashivratri. . Mahashivratri is celebrated in every Shiva temple in the month of Phalguna as per the Hindu calendar. It is said that the chanting Om Namah Shivah on this day purifies the sins committed in past lives.',
            'Taj Mahotsav of Agra. . TajMahotsav shows India rich culture, dance, food and music in a unique way. It is organized by Uttar Pradesh Tourism to promote tourism in India. Many famous musicians, chefs, dancers, and artists take part in this festival to tender visitors a wonderful experience.',
   ];
        
const MAR=[
            'Holi. . The main features of this festival are water balloon fights, water colors and bhaang, a traditional drink. Though each place in India has its own unique way of celebrating holi, yet it totally depends on you which place attracts you the most.',
            'Chapchar Kut of Mizoram. .  Music and dance performances are the main attractions of the festival. People from different religions and cultures come together and take part in this festival. Another attraction is the Bamboo festival in which only the women participate.',
            'Mewar Festival of Rajasthan. . It is one superb festival for women to exhibit their outfit and jewelry. There are a whole lot of activities which keep the visitors engaged and excited.',
    ];
    
const APR=[
    'Baisakhi of Punjab. . Being a spiritual festival, people dressed in colorful outfits offer prayers in Gurudwaras on this day. During this time, you can scout the lively celebrations and cultural performances.',
    'Ram Navami. . On this auspicious day, people visit shrines, listen to tales about Ram and chant mantras. Many pilgrims keep fast during the occasion to do the sacred pooja. Ujjain, Ayodhya and Rameshwaram are the three most important places where huge celebrations take place to mark the event of Ram Navami.',
    'Pooram, Kerala. . It is a colorful festival in which scores of people take part, a performance during the festival that deserves a special mention is the dance of parasols atop elegantly decorated elephants.',
    ];
    
const MAY=[
            'Ganga Dussehra. . It is said that Rishi Bhagirath performed meditation for many years to bring Ganga on earth. Pilgrims take a bath during the festival at the main holy ghats of India such as Rishikesh, Varanasi and Haridwar.',
            'Moatsu Festival. . One can relish a lot of dancing and singing during the festival. The main attraction of this event is Sangpangtu. People wear the best outfit and have different sorts of cuisine around a bonfire.',
            'Banganga Festival. . Pilgrims from India as well as foreign countries visit here for worship and take a bathe in Banganaga River, which is said to have been formed by Arjuna, the main hero of Mahabharta. It is indeed an idyllic option of recreation for the travelers coming to Jaipur during the festival.',
    
    ];
    
const JUN=[
            'Hemis Festival of Jammu and Kashmir. . Locals are seen wearing colorful dresses, brocades robes and masks. The main attraction of the festival is country liquor which is offered during the celebration time.',
            'Sindhu Darshan Festival. . It is celebrated with great enthusiasm and many tourists flock to this region to explore the beauty of nature. Locals worships river and tender fruits, flowers and prayers to the holy River.',
            'Rath Yatra of Odisha. . The mixture of pilgrims and travelers from every nook and corner of the world, beautifully decorated chariots and music of the gongs certain renders a never to forget experience.',
    ];
    
const JUL=[
            'Champakulam Boat Race of Kerala. . This boat race is held every year in Champakulam, a tranquil village in the district of Allapuzha. People from all over the world flock this place in July to enjoy this enthralling boat race.',
            'Nag Panchami. . Naga Devta, serpent deity, is worshipped on this sacred day for Hindus and the effigy of this deity is revered by giving a bath with milk.',
            'Ashadi Ekadashi of Pandharpur. . This sanctified Yatra incorporates more than a million of pilgrims undertaking 21 days long journey to Vithoba Temple at Pandharpur, by foot.',
    ]
    
const AUG=[
            'Eid-ul-Fitr. . There is a famous Muslim belief that fasting evokes the sense of responsibility in a person and Eid signifies his devotion to Allah.',
            'Onam of Kerala. . It is also well known as the harvest festival of Kerala. The state government of Kerala organizes the Tourism week celebration in the duration of Onam.',
            'Raksha Bandhan of North India. . This day is marked by a simple ceremony in which the sister ties a rakhi (A colorful thread) around the wrist of her brother.',
    ];
    
const SEP=[
            'Ganesh Chaturthi. . People bring home idols of Lord Ganesha and commemorate the festival by giving reverence to the Lord in a unique way for five days, seven days or eleven days depending on the family custom and commitment of every person.',
            'Pune Festival of Maharashtra. . It is the largest festival held in Pune. Pune festival is primarily focused on the celebration of song and dance, art and culture, custom and tradition.',
    ];
    
const OCT=[
            'Durga Puja. . Durga Puja is commonly known as Sharodotsav, which evokes the supremacy of female Shakti signified by the Goddess Durga who slaughtered Asura to reinstate serenity and sacredness on earth again.',
            'Dussehra. . The sacred day is celebrated to memorialize the slaughter of Ravana by Lord Rama. Thus, this day is the emblem of victory of noble over the evil. The effigy of Ravana, Meghanath and Kumbhakaran are burnt on this auspicious day.',
            'Diwali. . The day is mainly celebrated to solemnize the homecoming of Lord Rama from his fourteen years of exile. The people rejoice this day by burning crackers and lighting their homes with candles. It is believed that the deity of wealth, Goddess Lakshmi, use to arrive at home on Diwali.',
            'Id-ul-Zuha or Bakrid . . It is the practice of sacrificing a goat. Id-ul-Zuha is called a festival of sacrifice. On Bakra-Eid, Muslims sacrifice best halal domestic animals to honor the sacrifice of Prophet Ibrahim.',
            'Navaratri. . All through the nine days of Navratri, fasting and feasting take primacy over all ordinary daily activities amongst the Hindus devotees. Navratri is a significant Hindu festival and is celebrated with immense fervor all through the nation.',
    ];
    
const NOV=[
            'Gurpurab of Punjab. . The celebration of this festival starts very early in the morning and Guru Granth Sahib is paid homage by the Sikh devotees. This festival is celebrated throughout the country, especially in Punjab.',
            'Muharram. . This event begins at the first day of Muharram month and lasts for ten days and ends on 10th of day of Muharram month. It is the first month of Islamic calendar.',
            'Ka Pomblang Nongkrem of Shillong and Meghalaya. . People from all over the globe collect together at Smit, and enjoy the event of prayer to the Goddess Ka Blei Synshar for affluent harvest and opulence of the people.',
    ];
    
const DEC=[
            'Kartik Ekadashi. . Women keep a fast and eat once a day all through the month of Kartik till the Poornima, full moon day, of Kartik. The munificence of the fast and bath lies in the demolition of all wrongdoings and their outcomes.',
            'Christmas. . the Christians celebrate Christmas by attending events in Church, passing time with dear ones, putting up new dress and eating a cheerful meal. A number of families exchange offerings or provide small gifts to kids.',
            'Ganga Gangasagar of West Bengal. . A plunge in the ocean at the place where the Ganges blends into the sea at the propitious hour is said to be of immense religious value.',
    ];
    


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome to indian fest. Tell me the month?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const GameIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MonthFest';
    },
    handle(handlerInput) {
        
        const userAction = handlerInput.requestEnvelope.request.intent.slots.action.value;
        
        
        
        
        let speakText = '';
        let repromptOutput =" whats your next month you want?";
       // const combo = userAction + '';

let a = JAN[Math.floor(Math.random()*JAN.length)];
let b = FEB[Math.floor(Math.random()*FEB.length)];
let c = MAR[Math.floor(Math.random()*MAR.length)];
let d = APR[Math.floor(Math.random()*APR.length)];
let e = MAY[Math.floor(Math.random()*MAY.length)];
let f = JUN[Math.floor(Math.random()*JUN.length)];
let g = JUL[Math.floor(Math.random()*JUL.length)];
let h = AUG[Math.floor(Math.random()*AUG.length)];
let i = SEP[Math.floor(Math.random()*SEP.length)];
let j = OCT[Math.floor(Math.random()*OCT.length)];
let k = NOV[Math.floor(Math.random()*NOV.length)];
let l = DEC[Math.floor(Math.random()*DEC.length)];
        
        switch(userAction)
        {
            case "January":
                speakText+= "the festival is " + a;
                break;
            case "February":
                speakText+="the festival is " + b ;
                break;
            case "march":
                speakText+= "the festival is " + c;
                break;
            case "April":
                speakText+="the festival is " + d;
                break;
            case "may":
                speakText+="the festival is " + e;
                break;
            case "June":
                speakText+="the festival is " + f;
                break;
            case "July":
                speakText+="the festival is " + g;
                break;
            case "august":
                speakText+="the festival is " + h;
                break;
            case "September":
                speakText+="the festival is " + i;
                break;
            case "October" :
                speakText+="the festival is " + j;
                break;
            case "November":
                speakText+="the festival is " + k;
                break;
            case "December" :
                speakText+="the festival is " + l;
                break;
            default:
            speakText +="please enter the correct name of month.";
                 break;
        }
        
        
        let speakOutput = speakText;
        
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(repromptOutput)
            .getResponse();
    }
};
const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'This is a skill to let you know about indian festivals. Of which month you want to know?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. You can create custom handlers
// for your intents by defining them above, then also adding them to the request
// handler chain below.
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. If you receive an error
// stating the request handler chain is not found, you have not implemented a handler for
// the intent being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above. Make sure any new handlers or interceptors you've
// defined are included below. The order matters - they're processed top to bottom.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        GameIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
