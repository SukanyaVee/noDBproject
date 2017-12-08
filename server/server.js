const express = requier('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app=express();
app.use(bodyParser.json());
app.use(cors());

app.get('/api/test', (req,res)=>{
    res.status(200).send('test');
})

const PORT=3000;
app.listen(PORT, ()=>console.log('listening on port '+PORT));