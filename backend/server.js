const express = require('express');

const cors = require('cors');

const port = process.env.PORT || 5000;

const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

const uri = process.env.MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("la liaison a notre base de données Mongodb est réussi");
});

const materielsRouter=require('./routes/materiels');
const materielsReservesRouter=require('./routes/materielsreserves');
app.use('/login', require('./routes/signin'));
app.use('/signup',require('./routes/signup'));
app.use('/materiels',materielsRouter);
app.use('/materielsreserves',materielsReservesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
