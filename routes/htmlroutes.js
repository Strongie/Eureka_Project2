const path = require('path');
const fs = require('fs');



module.exports = function (app) {
// GET Route for notes.html
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// GET Route for index.html
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);
};