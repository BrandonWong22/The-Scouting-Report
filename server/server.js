const express = require("express");
const app = express();
const cors = require("cors");
const searchCompany = require("./routes/searchCompany");
// const http = require("http").Server(app);
const server = require("http").Server(app);
const io = require("socket.io")(server);
const axios = require("axios");

let stockPrice = "";
let defSymbol = "AAPL";

let data = "hello world";

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/search", searchCompany);

app.get("/testtest", (req, res) => {
  res.send("working");
});

app.post("/stock/", async (req, res) => {
  // defSymbol = req.body.symbol;
  // setInterval(getUpToDateStockPrice, 10000);
  // try {
  //   getUpToDateStockPrice(req.body.symbol);
  // } catch (err) {
  //   console.log(error);
  // }

  console.log("working");

  res.send("working");
});

function getUpToDateStockPrice() {
  let url =
    "https://financialmodelingprep.com/api/v3/quote-short/AAPL?apikey=d084cd25905084810ee3429ed54c83d9";
  axios.get(url).then((response) => {
    stockPrice = response.data[0].price;
    data = stockPrice;
    // console.log("stock price", stockPrice);
    // console.log("data", data);
  });
}

setInterval(() => getUpToDateStockPrice(), 2000);

//configure web sockets
io.on("connection", function (socket) {
  console.log("a user connected");
  setInterval(() => socket.emit("stock_price", data), 2000);

  // console.log(data);
});

server.listen(8080, () => console.log("Server started at 8080"));
