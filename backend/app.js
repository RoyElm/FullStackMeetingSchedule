global.config = require("./config.json");
const express = require("express");
const cors = require("cors");
const server = express();
const meetingController = require("./controller-logic-layer/meetingController");


server.use(express.json());
server.use(cors());
server.use("/api/meeting",meetingController);


server.listen(3001, () => console.log("Listening...."))
