const http = require('http');

const surver = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>')
        res.write('<body><form method="post" action="/process"><input type="text" name="message"></form>')
        res.end()
    } else if(req.url === '/process' && req.method === "POST"){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () =>{
            console.log('Stream finished');

            const parseBody = Buffer.concat(body).toString()
            console.log(parseBody);
            
            
            res.write('Data post Successfully');
            res.end();
            
        })
    } else{
        res.write('Not found!');
        res.end()
    }
})

surver.listen(3000, () =>{
    console.log('Server started on port 3000')
})


// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

// ourReadStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// })