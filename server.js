//import necessary modules

const express = require("express");
// const mongoose = require("mongoose");
const routes = require("./routes/api");
const db = require("./config/connection")

const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(routes);

// mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/lovelysocialnetwork", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     Got warning - these are now deprecated
// });
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Listening on http://localhost:${PORT}`)
    });
});