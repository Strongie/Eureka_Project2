const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();


// GET Route for index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);


// GET Route for notes.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);