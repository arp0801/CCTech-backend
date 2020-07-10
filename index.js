const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fullStack', {useNewUrlParser: true, useUnifiedTopology: true}, 
() => console.log('connected to db'));

app.use(express.json());

app.use(cors());

const gallery = require('./Routes/gallery');

app.use('', gallery);



app.listen(3000, () => console.log('Server Running'));  