const express = require('express');
var app = modules.exports = express();
const path = require('path');
const fs = require('fs');

app.get('./routes/apiroutes.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
}

app.post('./routes/apiroutes.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
} 
