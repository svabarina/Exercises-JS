
const fs = require('fs');


    const x = (data) => {
        let product = JSON.stringify(data);
        console.log(product);
        fs.writeFileSync(__dirname + '/keyboardInput/keyInput.json', product);
        // fs.readFileSync(__dirname + '/keyboardInput/keyInput.json');
        // console.log("Output Content : \n"+ content);
    }

    module.exports = x;


