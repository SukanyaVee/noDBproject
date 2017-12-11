const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ctrl = require('./controller.js')

const app=express();
app.use(bodyParser.json());
app.use(cors());

const APIurl = '/api/budgeting'

app.get(APIurl, ctrl.get)
app.post(APIurl, ctrl.post);
app.put(`${APIurl}/:id`, ctrl.update);
app.delete(`${APIurl}/:id`, ctrl.delete)
    // cuse a control variable to link to function in controller file for 
    // (req,res)=>{
    // res.status(200).send('test')};

const PORT=3000;
app.listen(PORT, ()=>console.log('listening on port '+PORT));