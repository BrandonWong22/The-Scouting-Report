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
    "?apikey=d084cd25905084810ee3429ed54c83d9";
  return axios.get(url).then((response) => {
    return response.data[0].price;
  });
}

//configure web sockets
io.on("connection", function (socket) {
  console.log("a user connected");

  // change to get
  app.post("/stock/", (req, res) => {
    console.log("symbol", req.body.symbol);

    setInterval(() => {
      getUpToDateStockPrice(req.body.symbol).then((data) => {
        console.log(data);
        socket.emit("stock_price", data);
      });
    }, 2000);
  });

  // setInterval(() => {
  //   getUpToDateStockPrice("AAPL").then((data) => {
  //     console.log(data);
  //     socket.emit("stock_price", data);
  //   });
  // }, 2000);
});

server.listen(8080, () => console.log("Server started at 8080"));
