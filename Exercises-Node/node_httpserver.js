
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    categTest(req, res);
    prodTest(req, res);
})
    .listen(5000, "127.0.0.1");


const categTest = (req, res) => {
    if (/^(\/)categories$|(\/)$/gi.test(req.url)) {
        const categ = fs.readFile(__dirname + '/categories.json', (err, data) => {
            if (err) {
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            
            const categList = JSON.parse(data);
            res.end(JSON.stringify({data: (categList)}));
        })
    }
}

const prodTest = (req, res) => {
    if (/^(\/)products$|(\/)$/gi.test(req.url)) {
        const prod = fs.readFile(__dirname + '/prod.json', (err, data) => {
            if (err) {
                throw err;
            }

            res.writeHead(200, { 'Content-Type': 'application/json' });

            const prodList = /*string > obiect*/ JSON.parse(data);
            const firstTen = prodList.slice(0, 10);
            res.end(JSON.stringify/*object > string*/({data: (firstTen)}));
        })
    }
}
