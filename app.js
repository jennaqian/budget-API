const express = require("express");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(require,res)=> {
    res.send("Welcome to the budgeting app!")
})

module.exports = app