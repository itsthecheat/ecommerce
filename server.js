require('dotenv').config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import usersRouter from './routes/users'
import jwt from 'jsonwebtoken'
import bP from 'body-parser'

const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

 const getToken = (user) => {
   return jwt.sign(user, process.env.JWT_SECRET, {
     expiresIn: '48h'
   })
 }

app.use('/users', usersRouter);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

export { getToken }
