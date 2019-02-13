const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;

app.use(expressLayouts);
app.set('view engine', 'ejs');

require('./routes/index')(app);

app.listen(port, () => {
    console.log("Server running on localhost: " + port)
})