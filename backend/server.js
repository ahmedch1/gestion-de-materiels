const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("la liaison a notre base de données Mongodb est réussi");
});

const materielsRouter=require('./routes/materiels');
const materielsReservesRouter=require('./routes/materielsreserves');

app.use('/materiels',materielsRouter);
app.use('/materielsreserves',materielsReservesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
