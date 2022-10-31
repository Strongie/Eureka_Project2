const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json');
const apiroutes = require('./routes/apiroutes.js');
const htmlroutes = require('./routes/htmlroutes.js');
// const router = express.Router();


const PORT = process.env.port || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


// app.use('/api', apiroutes);
// app.use('/', htmlroutes);
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);


// Listening is the last thing Express should do. This sets up the server.
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

