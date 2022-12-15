require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

const cors =require('cors');
const whitelist = ["http://localhost:3000"];

const corsOptions = {

  origin: function (origin, callback) {

    if (!origin || whitelist.indexOf(origin) !== -1) {

      callback(null, true)

    } else {

      callback(new Error("Not allowed by CORS"))

    }

  },

  credentials: true,

}

mongoose.connect(mongoString);
const database = mongoose.connection;
const routes = require('./routes/route');

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors(corsOptions))

app.use(express.json());
app.use('/api', routes)

app.listen(4001, () => {
    console.log(`Server Started at ${4001}`)
})