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

export default {
    GetAccessToken,
    getInfo
};
