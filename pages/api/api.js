import axios from 'axios';

const ip = "192.168.0.100:8888"

const GetAccessToken = async(requestToken) => {

    const accessToken = await axios({
        method: 'get',
        url: `http://${ip}/getAtoken/${requestToken}`,
        headers: {
            accept: 'application/json',
        }
    });
    return accessToken.data;
}
const getInfo = async(accessToken) => {

    const info = await axios({
        method: 'get',
        url: `http://${ip}/getInfo/${accessToken}`,
        headers: {
            accept: 'application/json',
        }
    });
    return info.data;
}

const getListInfo = async () =>{
    const infoList = await axios({
        method: 'get',
        url: `https://raw.githubusercontent.com/Web3-Camp/test-issue/main/dao.json`,
        headers: {
            accept: 'application/json',
        }
    });
    return infoList.data;
}

const getTwitterID = async (userName) =>{
    const Twitter = await axios({
        method: 'get',
        url: `http://${ip}/getTwitterID/${userName}`,
        headers: {
            accept: 'application/json'
        }
    });
    return Twitter.data;
}
const getTwitterList = async (id) =>{
    const Twitter = await axios({
        method: 'get',
        url: `http://${ip}/getTwitterList/${id}`,
        headers: {
            accept: 'application/json'
        }
    });
    console.log("=====Twitter======",Twitter)
    return Twitter.data;
}

export default {
    GetAccessToken,
    getInfo,
    getListInfo,
    getTwitterID,
    getTwitterList
};
