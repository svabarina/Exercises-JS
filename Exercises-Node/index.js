var inquirer = require('inquirer');
var addProduct = require('./src/addProduct');
var program = require('commander');


program
.command('addProd')
.action(function () {
    inquirer.prompt([
        {name: 'productName',
        message: 'Enter product name'}
    ]).then(answers => {
        addProduct(answers);   //rulez modulul
    });
  })
program.parse(process.argv)


// function(err, data) { 
//     if (err) throw err;
//     // data is a buffer containing file content
//     console.log(data.toString('utf8'))
// });
