//import necessary modules

const express = require("express");
// const mongoose = require("mongoose");
const routes = require("./routes/api");
const connection = require("./config/connection")

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

connection.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`)
    });
});