const express = require('express');
const port = 8000;

const server = express();

//endpoint
server.get('/', (req, res)=>{
    res.send('Hello Worl!');
});

//endpoint returns list of hobbits
server.get('/hobbits', (req, res) => {
    const hobbits = [
        {
            id: 1, 
            name: 'Samwise Gamgee'
        }, 
        {
            id: 2,
            name: 'Frodo Baggins'
        }
    ];

    //200 - successful
    res.status(200).json(hobbits);
})

server.listen(port, () => {
    console.log(`API running on port ${port}`);
});