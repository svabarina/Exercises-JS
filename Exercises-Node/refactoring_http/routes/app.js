const express = require('express')
const categ = require("../src/prod.json")
const prod = require('../src/categories.json')
const https = require('https')
const app = express()
const router = express.Router();
const fs = require('fs');
const path = require('path');


router.get('/categories', (req, res) => {
    res.json({data: categ});
    // console.log(categ);
})

router.get('/categories/:id', (req, res) => {
    const gvnid = parseInt(req.params.id);
    // console.log(gvnid);
    // console.log(typeof(gvnid));
    const filtered = categ.filter(item =>{
        if(gvnid === item.id){
            return true;
        } else{
            return false;
        }
    })
    res.json(filtered);
    });


router.get('/products', (req, res) => {
    res.json({data: prod});
});

router.get('/products/:id', (req, res) => {
    const randomid = parseInt(req.params.id);
    const filteredd = prod.filter(itm => {
        if (randomid === itm.id) {
            return true;
        } else {
            return false;
        }
    })
    res.json(filteredd);
})

app.use(router);
const server = https.createServer({
    key: fs.readFileSync(path.resolve(__dirname, './server.key')),
    cert: fs.readFileSync(path.resolve(__dirname, './server.cert'))
}, app);


server.listen(5000);

module.exports = app;