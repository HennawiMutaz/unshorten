const express = require('express');
const request = require('request');
const app = express();



app.use(express.static('public')); //* users can only access 'public' folder

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/expand', (req, res) => {
    let shortUrl = req.query.shortUrl;
    if (!shortUrl.startsWith('http')) {
        shortUrl = 'https://' + shortUrl;
    }
    request({
        url: shortUrl,
        method: 'HEAD',
        followAllRedirect: true
    },
    (err, response, body) => {
        if (err) {
            console.log(err);
            res.send('ERROR')
        } else {
            res.send(response.request.href);
        }
    }
    );

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});