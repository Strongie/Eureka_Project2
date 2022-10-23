const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json');


const PORT = process.env.port || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


app.use('./routes/apiroutes', require('./routes/apiroutes'));
app.use('./routes/htmlroutes', require('./routes/htmlroutes'));




// Listening is the last thing Express should do. This sets up the server.
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

