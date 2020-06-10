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

//function to stock prices every 10 seconds

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

  res.send("working");
});

function getUpToDateStockPrice(compSymbol) {
  let url =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    compSymbol +
    "?apikey=d084cd25905084810ee3429ed54c83d9";
  axios.get(url).then((response) => {
    stockPrice = response.data[0].price;
    console.log(stockPrice);
  });
}

// setInterval(() => getUpToDateStockPrice(defSymbol), 3000);

//configure web sockets
io.on("connection", function (socket) {
  console.log("a user connected");
  socket.emit("stock_price", data);
});

server.listen(8080, () => console.log("Server started at 8080"));
