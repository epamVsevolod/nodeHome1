const express = require('express');
const app = express();
const cors = require('cors');
// const { Pile } = require('./models/pile.model');
const { getNewPile } = require('./rest/api/newPile');

app.use(cors())
app.use(express.static('./public'));

// let counter = 0;
// let test;

app.get('/start', (req, res) => {
    const testReq = getNewPile();
    testReq
        .then(obj => res.send(JSON.stringify(obj)),
            error => console.log(error)
    );
});

// app.get('/', (req, res) => {
//     Pile.find().exec((error, docs) => {
//         if (error) throw error;
//         res.send(counter + JSON.stringify(docs));
//         counter++;
//     })
// });

// app.get('/', (req, res) => {
//     Pile.find().exec((error, docs) => {
//         if (error) throw error;
//         res.send(counter + JSON.stringify(docs));
//         counter++;
//     })
// });

app.listen(3002);