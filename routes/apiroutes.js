const express = require('express');
// var app = module.exports = express();
const path = require('path');
const fs = require('fs');
// const app = express.Router();

module.exports = function (app) {

app.get('./api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
})

//create new note
app.post('./api/notes', (req, res) => {
    let db = fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);
    let newNote = {
        title: req.body.tile,
        text: req.body.text,
        id: uuid()
    }
//push new note
    db.push(newNote);
    fs.writeFileSync("db/db.json", JSON.stringyfy(db));
    res.json(db);
});

//create unique id
const uuid = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
};
// // 

// module.exports = app;
