// Dependencies

const fs = require('fs');

// Quotes object - Module scaffolding

const quotes = {};

// Get all the quotes and return them to the user

quotes.allQuotes = function allQuotes(){
    const fileContent = fs.readFileSync(`${__dirname}/quotes.txt`, 'utf-8');

    const arrayOfQuotes = fileContent.split(/\r?\n/);

    return arrayOfQuotes;
}

module.exports = quotes;