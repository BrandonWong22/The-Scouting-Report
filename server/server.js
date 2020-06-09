const express = require("express");
const app = express();
const cors = require("cors");
const searchCompany = require("./routes/searchCompany");
const http = require("http").Server(app);
const io = require("socket.io")(http);

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/search", searchCompany);

io.on("connection", function (socket) {
  console.log("a user connected");
});

http.listen(8080, () => console.log("Server started at 8080"));
