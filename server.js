const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');


const PORT = process.env.port || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));





require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);


// Listening is the last thing Express should do. This sets up the server.
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

