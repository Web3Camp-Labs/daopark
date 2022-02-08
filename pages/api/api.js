import axios from 'axios';

const GetAccessToken = async(requestToken) => {

    const accessToken = await axios({
        method: 'get',
        url: `http://127.0.0.1:8888/getAtoken/${requestToken}`,
        headers: {
            accept: 'application/json',
        }
    });
     console.log("=====result==",accessToken.data)
    return accessToken.data;
}
const getInfo = async(accessToken) => {

    const info = await axios({
        method: 'get',
        url: `http://127.0.0.1:8888/getInfo/${accessToken}`,
        headers: {
            accept: 'application/json',
        }
    });
     console.log("=====result==",info.data)
    return info.data;
}

export default {
    GetAccessToken,
    getInfo
};
