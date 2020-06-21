const PORT = process.env.PORT || 8080;
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

// function getCurrentDate(date) {
//   let dateStr =
//     ("00" + (date.getMonth() + 1)).slice(-2) +
//     "/" +
//     ("00" + date.getDate()).slice(-2) +
//     "/" +
//     date.getFullYear() +
//     " " +
//     ("00" + date.getHours()).slice(-2) +
//     ":" +
//     ("00" + date.getMinutes()).slice(-2) +
//     ":" +
//     ("00" + date.getSeconds()).slice(-2);

//   return dateStr;
// }

function getUpToDateStockPrice(symbol) {
  let url =
    "https://financialmodelingprep.com/api/v3/quote-short/" +
    symbol +
    "?apikey=" +
    process.env.API_KEY;
  return axios.get(url).then((response) => {
    // let updatedDate = getCurrentDate(new Date());
    // let getLocalDate = new Date(`${updatedDate} UTC`); //NEED TO USE THIS FOR PRODUCTION

    return [
      response.data[0].price,
      // getLocalDate.toLocaleString("en-US", { timeZone: "America/Toronto" }),
      new Date(),
    ];
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
    }, 3000);
  });
});

server.listen(PORT, () => console.log("Server started"));
