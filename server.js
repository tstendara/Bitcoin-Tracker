const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = 3000;

express()
    .use(express.static(path.join(__dirname, 'public')))
    .use(parser())

    .get('/', (req, res) => {
        res.send("hola")
    })

    .listen(port, ()=> console.log(`listening on ${port} `))



