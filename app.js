const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

require('./routes/index')(app);

app.listen(port, () => {
    console.log("Server running on localhost: " + port)
})