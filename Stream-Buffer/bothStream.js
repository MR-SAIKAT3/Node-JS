const http = require('http');
const fs = require('fs');

const surver = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream(`${__dirname}/bigData.txt`,'utf-8');
    myReadStream.pipe(res)
});

surver.listen(3000, () => {
    console.log('Surver listening on port 3000');
})