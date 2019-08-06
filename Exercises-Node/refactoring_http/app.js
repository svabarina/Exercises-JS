const express = require('express')
const categ = require("./categories.json")
const prod = require('./prod.json')
const http = require('http')
const app = express()
const router = express.Router();


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
const server = http.createServer(app);
server.listen(5000);

