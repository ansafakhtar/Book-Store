import express from "express";
import { mongoose } from "mongoose";
import booksRoute from "./routes/bookRoute.js";
import userRoute from "./routes/userRoute.js"
import errorMiddleware from "./middleware/error.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// adMIN47
const app = express();

dotenv.config({ path: "../backend/config/config.env" });

app.use(express.json());
app.use(cookieParser());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
  });

app.use('/api/v1', booksRoute);
app.use('/api/v1', userRoute);

app.use(errorMiddleware);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log('App connected to database');
    app.listen(process.env.PORT, () => {
      console.log(`App is listening to port: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });