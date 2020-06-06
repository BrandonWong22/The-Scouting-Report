const express = require("express");
const router = express.Router();
const axios = require("axios");
const companies = require("../data/companies.json");

require("dotenv").config();
let API_KEY = process.env.API_KEY;
let API_URL_PROFILE = process.env.API_URL_PROFILE;

// router.get("/", (req, res) => {
//   let url = API_URL_PROFILE + "aapl" + "?apikey=" + API_KEY;
//   axios.get(url).then((response) => {
//     console.log(response.data);
//     if (response.status === 200) {
//       res.status(200).send(response.data);
//     }
//   });
// });

router.get("/:symbol", (req, res) => {
  let companySymbol = req.params.symbol;

  let url = API_URL_PROFILE + companySymbol + "?apikey=" + API_KEY;
  axios.get(url).then((response) => {
    res.status(200).send(response.data);
  });
});

module.exports = router;
