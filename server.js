//import necessary modules

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/api");

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/lovelysocialnetwork", {

});

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))