import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Mongodb connected.');
  })
  .catch((error) => {
    console.log('error', error);
  });

const app = express();
app.listen(5172, () => {
  console.log('App is listening at 5172.');
});
