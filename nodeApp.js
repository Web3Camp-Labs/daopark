const express = require('express')
const app = express()
var  cors = require( 'cors' );
const port = 8888;
const axios = require('axios');

// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';


const clientID = '8b058019ca38ddf2b110';
const clientSecret = '8249b90e7800d7eb38db608eec8cbc2540b50d23';

app.use(cors());


app.get('/getAtoken/:code', async function (req, res) {
    var params = req.params;
    console.log("===params.code====",params.code)
    const tokenResponse = await axios({
        method: 'post',
        url: 'https://github.com/login/oauth/access_token?' +
            `client_id=${clientID}&` +
            `client_secret=${clientSecret}&` +
            `code=${params.code}`,
        headers: {
            accept: 'application/json'
        }
    });

    console.log("===accessToke222n=====",tokenResponse.data.access_token)
    res.send(tokenResponse.data.access_token);
});

app.get('/getInfo/:accessToken', async function (req, res) {
    var params = req.params;
    console.log("==accessToken======",params.accessToken)
    const result = await axios({
        method: 'get',
        url: `https://api.github.com/user`,
        headers: {
            accept: 'application/json',
            Authorization: `token ${params.accessToken}`
        }
    });
    console.log(result.data);

    res.send(result.data);
});


app.listen(port, () => {
    console.log(`Example app listening on http://127.0.0.1:8888`)
    })


