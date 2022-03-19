import axios from 'axios';
import githubConfig from "../../public/githubConfig";
import  { graphql, buildSchema } from 'graphql';
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


const getDiscussions = async (accessToken) =>{

    const disc = await axios.post( `https://api.github.com/graphql`,{
        query:`query {
                repository(owner: "Web3-Camp", name: "test-issue") {
                    discussions(first: 10) {
                        totalCount
            
                         pageInfo {
                            startCursor
                            endCursor
                            hasNextPage
                            hasPreviousPage
                          }
                           
                          edges {
                            cursor
                            node {
                              id
                              title
                              body
                            }
                          }
                     
                          nodes {
                            id
                            title
                            body
                            createdAt
                            author{
                               avatarUrl
                               login
                            }
                           comments(first: 10){
                                totalCount
                                nodes{
                                id
                                 body
                                }
                            }
                          }

                    }
                }
            }`
    },
     {   headers: {
            accept: 'application/json',
            Authorization: `token ${accessToken}`
        }}
    )



    return disc.data;
}

const getDiscussionCategory= async(accessToken) =>{
    const result = await axios.post( `https://api.github.com/graphql`,{
            query:`query {
                repository(owner: "Web3-Camp", name: "test-issue") {
                    discussionCategories(first: 10) {
                        totalCount
                          edges {
                            cursor
                            node {
                              id
                              name
                            }
                          }
                    }
                }
            }`
        },
        {   headers: {
                accept: 'application/json',
                Authorization: `token ${accessToken}`
            }}
    )
    return result.data;
}

// query:`mutation {
//                  createDiscussion(input:{body:"111",title:"333",CategoryId:'${Cateid}',repositoryId:'${repoId}'}) {
//                     discussion{
//                         id
//                     }
//             }`




const addDiscussion = async (accessToken,Cateid,repoId,title,body) =>{

    const disc = await axios.post( `https://api.github.com/graphql`,{
        query:`mutation {
                 createDiscussion(input:{body:"0000000",title:"333",categoryId:"DIC_kwDOG8j77s4CN_3s",repositoryId:"R_kgDOG8j77g"}) {
                    discussion{
                        id
                    }
            }
            }`
    },
     {   headers: {
            accept: 'application/json',
            Authorization: `token ${accessToken}`
        }}
    )

    console.log("=====addDiscussion========",disc)

    return disc.data;
}





export default {
    GetAccessToken,
    getInfo,
    getDiscussions,
    getDiscussionCategory,
    addDiscussion,
    getUserInfo,
    getListInfo,
    getTwitterID,
    getTwitterList
};
