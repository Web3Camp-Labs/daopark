import axios from 'axios';
import githubConfig from "../../public/githubConfig";

const { backEnd } = githubConfig;

const GetAccessToken = async(requestToken) => {

    const accessToken = await axios({
        method: 'get',
        url: `${backEnd}/getAtoken/${requestToken}`,
        headers: {
            accept: 'application/json',
        }
    });
    return accessToken.data;
}
const getInfo = async(accessToken) => {

    const info = await axios({
        method: 'get',
        url: `${backEnd}/getInfo/${accessToken}`,
        headers: {
            accept: 'application/json',
        }
    });
    return info.data;
}
const getUserInfo = async(accessToken,user) => {

    const info = await axios({
        method: 'get',
        url: `${backEnd}/getUserInfo/${accessToken}/${user}`,
        headers: {
            accept: 'application/json',
        }
    });
    return info.data;
}
const randomString = (e)=> {
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
    for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}

const getListInfo = async () =>{
    const infoList = await axios({
        method: 'get',
        url: `https://raw.githubusercontent.com/Web3-Camp/test-issue/main/dao.json?rd=${randomString()}`,
        headers: {
            accept: 'application/json',
        }
    });
    infoList.data.reverse();
    return infoList.data;
}

const getTwitterID = async (userName) =>{
    const Twitter = await axios({
        method: 'get',
        url: `${backEnd}/getTwitterID/${userName}`,
        headers: {
            accept: 'application/json'
        }
    });
    return Twitter.data;
}
const getTwitterList = async (id) =>{
    const Twitter = await axios({
        method: 'get',
        url: `${backEnd}/getTwitterList/${id}`,
        headers: {
            accept: 'application/json'
        }
    });
    return Twitter.data;
}

export default {
    GetAccessToken,
    getInfo,
    getUserInfo,
    getListInfo,
    getTwitterID,
    getTwitterList
};
