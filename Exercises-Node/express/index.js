
const express = require('express');
const app = express();
const http = require('http');
const router = express.Router();

router.get('/users/:id', (req, res) => {
    res.json({
        name: "Test User"
    })
});

app.use(router);

const server = http.createServer(app);
server.listen(3000);


