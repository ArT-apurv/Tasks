const express = require("express");
const app = express();
const tasks = require("./Routes/tasksRouter");
const connectDB = require("./Database/Connect");
require("dotenv").config();

const Ports = 3000;

app.use(express.json());
app.use(express.static("./public"));

app.use("/api/v1/tasks", tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(Ports, () => {
      console.log(`The server is running on port ${Ports}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
