const axios = require('axios');
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());

app.get('/', function (request, response, next) {
    var yelp_api = 'https://api.yelp.com/v3/businesses/shish-kabob-cafe-houston/reviews'
    var config = {
        headers: {
            Authorization: 'Bearer ay7PtHFK0jv6-tSrwuI7RI-NrdgD-cNRg8Hd5loXltsCIP-fx1efdWFLheGTyi2dWZElvrGauxdsQbEOQt46RveEFolHNDgg6NahBiNt4gU0V_FnHw8WDFTQ_SAwWnYx'
        }
    }

    var yelpreview =[]

    axios.get(yelp_api, config)
        .then((results) => {
            response.json(results.data)
        })
        .catch(next)
});




app.listen(8000, function () {
    console.log('Listening on port 8000');
});