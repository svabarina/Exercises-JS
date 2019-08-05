
// setTimeout(() => console.log('setTimeout'));
// setImmediate(() => console.log('setImmediate'));

// setTimeout(() => console.log('setTimeout'));
// setImmediate(() => console.log('setImmediate'));


       //alt expl   ///
// const http = require("http");
// const doWork = (duration) => {
//     const start = Date.now();
//     while (Date.now() - start < duration) {}
// }

// http.createServer((req, res) => {
//     doWork(50000);
//     res.writeHead(200);
//     res.end("Hello Work");
// })
// .listen(5000, "127.0.0.1");


       //alt expl   ///
//        const crypto = require ('crypto');
// const iterations = 4;

// for(let i = 0; i <iterations; i++) {
//     crypto.pbkdf2("secret", "salt", 100000, 64, "sha512", (err, derived) => {
//         if(err) throw err;
//         console.log(derived.toString("hex"));
//     });
// }


       //alt expl   ///
// const crypto = require('crypto');
// const initialDate = Date.now();
// const iterations = 6;
// for(let i = 0; i < iterations; i++){
//     crypto.pbkdf2("secret","salt", 100000, 64, "sha512", (err, derived) => {
//         if(err) throw err;
//         console.log(${Date.now() - initialDate} ms);
//     });
// }


       //alt expl   ///
// const http = require("http");
// const fs = require("fs");

// http.createServer((req,res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     const html = fs.readFileSync('./text.html.html');
//     res.end(html);
// })
// .listen(5000, "127.0.0.1");


       //alt expl   ///
const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    const htmlStream = fs.createReadStream(__dirname + '/index.html', {encoding: 'utf-8'});
    htmlStream
    .on('data', chunk => console.log(chunk))
    .pipe(res);
})
.listen(5000, "127.0.0.1");