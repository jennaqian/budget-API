// Dependencies
const express = require("express");
const cors = require("cors")

// Configuration
const app = express();
const budgetController = require("./controllers/budgetController.js")

// MiddleWare
app.use(express.json());
app.use(cors());

//Routes
app.get("/",(require,res)=> {
    res.send("Welcome to the budgeting app!")
})

app.use("/budget", budgetController)
app.get("*", (req, res) => {
    res.status(404).send("Page not found.")
})

module.exports = app