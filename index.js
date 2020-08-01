const express = require('express');
const port = 8000;

const server = express();

//endpoint
server.get('/', (req, res)=>{
    res.send('Hello World');
});

server.listen(port, () => {
    console.log(`API running on port ${port}`);
});