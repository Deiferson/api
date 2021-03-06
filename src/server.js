const express = require('express');
const routes = require('./routes');
var cors = require('cors')
const app = express();
require('./conn');
const port = 5000;

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(port, () =>{
    console.log(`Executando ... localhost:${port}`)
})

