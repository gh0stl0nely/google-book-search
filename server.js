const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
// const db = require("./model/Books");
const PORT = process.env.PORT || 3001;

// Configure input parser
app.use(express.urlencoded({"extended": true}));
app.use(express.json());
app.use(cors());

// Define route usage
const api_route = require("./routes/api");
app.use("/api", api_route);

// Connect to MongoDB
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost:27017/googleBook";
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true});
// db.Book.create({
    // title: "KHOI",
    // author: "123",
    // "imageURL": "213",
    // description: "213",
    // link: "123123123"
// }, function(){
//     console.log("SUCESS")
// });


// Connect to PORT 
app.listen(PORT, function(){
    console.log("Connected to " + PORT);
})