const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/ping', function (req, res) {
    return res.send('pong');
});

// Serve static files
app.use(express.static('build'));

// Set the port
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
