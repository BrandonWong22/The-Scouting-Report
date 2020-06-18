const express = require("express");
const app = express();
const cors = require("cors");
const searchCompany = require("./routes/searchCompany");
// const http = require("http").Server(app);
const server = require("http").Server(app);
const io = require("socket.io")(server);
const axios = require("axios");

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/search", searchCompany);

app.get("/testtest", (req, res) => {
  res.send("working");
});

function getUpToDateStockPrice(symbol) {
  let url =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    symbol +
    "?apikey=" +
    process.env.API_KEY;
  return axios.get(url).then((response) => {
    return response.data[0].price;
  });
}

let interval;

//configure web sockets
io.on("connection", function (socket) {
  console.log("a user connected", socket.id);

  if (interval) {
    clearInterval(interval);
  }

  socket.on("disconnect", (reason) => {
    console.log("user disconnected");
    clearInterval(interval);
  });

  socket.on("client-message", (symbol) => {
    console.log("CLIENT EVENT", symbol);
    interval = setInterval(() => {
      getUpToDateStockPrice(symbol).then((data) => {
        console.log(data);
        socket.emit("stock_price", data);
      });
    }, 2000);
  });
});

server.listen(8080, () => console.log("Server started at 8080"));
