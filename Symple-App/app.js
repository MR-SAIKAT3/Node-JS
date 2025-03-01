//Dependencies

const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes/quots');

// App object - Module scaffolding

const app = {};

app.config = {
    timeBetweenQuotes : 1000,
};

app.printQuote = function printQuote(){
    const allQuotes = quotesLibrary.allQuotes();
    const numberOfQuotes = allQuotes.length;

    const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

    const selectedQuote = allQuotes[randomNumber - 1];

    console.log(selectedQuote);
    
}

app.infiniteLoop = function infiniteLoop() {
    setInterval(() => {
        app.printQuote()
    }, app.config.timeBetweenQuotes);
};

app.infiniteLoop();



