const express = require('express')
const app = express()
var  cors = require( 'cors' );
const port = 8888;
const axios = require('axios');
// process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

// github config
const clientID = 'Iv1.94a72acba60a8147';
const clientSecret = '4476e0059dcdc514675c658bf7ba16703ef25734';
// github config


// twitter Config
const BearerToken = 'AAAAAAAAAAAAAAAAAAAAAP%2B8aAEAAAAA%2F%2Fh0vJX2TZupA7H7JLxh9m0nekc%3DfI6lFb8RyMD2w1TR0DhNYgIwPRdT0RS0HvOXN3NWeOnFdmZ7gs'
// twitter Config


app.use(cors());


app.get('/getAtoken/:code', function (req, res) {
    var params = req.params;
    console.log("===params.code====",params.code)
     axios({
        method: 'post',
        url: 'https://github.com/login/oauth/access_token?' +
            `client_id=${clientID}&` +
            `client_secret=${clientSecret}&` +
            `code=${params.code}`,
        headers: {
            accept: 'application/json'
        }
    }).then((dataResult)=>{
        console.log("=====dataResult.data==",dataResult.data)
        res.send(dataResult.data.access_token);
    }).catch((error)=>{
        res.status(500).send(error);
    })
});

app.get('/getInfo/:accessToken', function (req, res) {
    var params = req.params;

    axios({
        method: 'get',
        url: `https://api.github.com/user`,
        headers: {
            accept: 'application/json',
            Authorization: `token ${params.accessToken}`
        }
    }).then((dataResult)=>{
        res.send(dataResult.data);
    }).catch((error)=>{
        res.status(500).send(error);
    });
});

app.get('/getUserInfo/:accessToken/:username', function (req, res) {
    const params = req.params;
    const { accessToken, username } = params;

    axios({
        method: 'get',
        url: `https://api.github.com/users/${username}`,
        headers: {
            accept: 'application/json',
            Authorization: `token ${accessToken}`
        }
    }).then((dataResult)=>{
        res.send(dataResult.data);
    }).catch((error)=>{
        res.status(500).send(error);
    });
    // res.send(result.data);
});


app.get('/getTwitterID/:userName', function (req, res) {
    var params = req.params;
    console.log("=====",params.userName)
    axios({
        method: 'get',
        url: `https://api.twitter.com/2/users/by?usernames=${params.userName}`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${BearerToken}`
        }
    }).then((dataResult)=>{
        res.send(dataResult.data);
    }).catch((error)=>{
        res.status(500).send(error);
    });
})

app.get('/getTwitterList/:id', function (req, res) {
    var params = req.params;
    console.log("==params.id===",params.id)
    axios({
        method: 'get',
        url: `https://api.twitter.com/2/users/${params.id}/tweets?tweet.fields=public_metrics,author_id,created_at,conversation_id,entities&expansions=attachments.media_keys,author_id&media.fields=duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width,alt_text&user.fields=name,username,profile_image_url&max_results=10`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${BearerToken}`
        }
    }).then((dataResult)=>{
        res.send(dataResult.data);
    }).catch((error)=>{
        res.status(500).send(error);
    });
    //
    // console.log("===getTwitterList====",result.data)
    // res.send(result.data);
})


app.listen(port, () => {
    console.log(`Example app listening on http://127.0.0.1:8888`)
})


