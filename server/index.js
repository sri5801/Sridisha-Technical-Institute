const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/user.js");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://xenonstack:xenonstack@cluster0.cmrt097.mongodb.net/xenon?retryWrites=true&w=majority",
    { useNewUrlParser: true}
  )
  .then(() => {
    app.listen(port, (req, res) => {
      console.log("MongoDB Connected and server is running");
    });
  });

  app.get("/",(req,res)=>{
    res.send("Welcome");
  })

  app.use("/",userRouter)