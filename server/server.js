const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.get('/genres', function (req, res) {
    axios({
        method: 'GET',
        url: 'https://unogs-unogs-v1.p.rapidapi.com/api.cgi',
        headers: {
            'content-type': 'application/octet-stream',
            'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com',
            'x-rapidapi-key': process.env.UNOGS_API_KEY,
            useQueryString: true,
        },
        params: {
            t: 'genres',
        },
    })
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.send(error);
            console.error(error);
        });
});

// Serve static files
app.use(express.static('build'));

// Set the port
const PORT = process.env.PORT || 5000;

// Listen
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
