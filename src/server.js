const express = require('express');
const app = express();
require('./conn');

const port = 5000;

app.get('/', (req, res) => {
     console.log('ok')
     res.send('ok')
});

app.listen(port, () =>{
    console.log(`Executando ... localhost:${port}`)
})

