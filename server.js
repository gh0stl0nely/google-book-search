const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

// Configure input parser
app.use(express.urlencoded({"extended": true}));
app.use(express.json());

// Connect to MongoDB
const mongoURL = process.env.MONGODB_URI || "mongodb://localhost:27017/googleBook";
mongoose.connect(mongoURL, {useNewUrlParser: true, useUnifiedTopology: true});

// Connect to PORT 

app.listen(PORT, function(){
    console.log("Connected to " + PORT);
})