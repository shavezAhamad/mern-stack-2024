import express from "express";
import mongoose from "mongoose";
import cors from 'cors';

const PORT = 4000;

const app = express();
app.use(cors)

await mongoose
  .connect(
    "mongodb+srv://shavezkhanit:shavez123@shavez-mern.mc8wcdm.mongodb.net/?retryWrites=true&w=majority&appName=shavez-mern"
  )
  console.log("MongoDB connection is successful");
  

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server is running at http://localhost:4000");
});
