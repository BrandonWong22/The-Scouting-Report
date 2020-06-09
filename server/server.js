const express = require("express");
const app = express();
const cors = require("cors");
const getAllComapnies = require("./routes/getAllCompanies");
const searchCompany = require("./routes/searchCompany");

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/", getAllComapnies); //will store this in a database eventually
app.use("/search", searchCompany);

app.listen(8080, () => console.log("Server started at 8080"));
