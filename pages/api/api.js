import axios from 'axios';
import githubConfig from "../../public/githubConfig";
import  { graphql, buildSchema } from 'graphql';
const { backEnd,repo } = githubConfig;

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
        // url: `https://raw.githubusercontent.com/Web3-Camp/daopark-db/main/dao.json?rd=${randomString()}`,
        url: `https://api.gitrows.com/@github/web3-camp/daopark-db/dao.json`,
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


const getDiscussion = async (accessToken,discussionNumber) =>{
    const disc = await axios.post( `https://api.github.com/graphql`,{
        query:`query {
                repository(owner: "Web3-Camp", name: ${repo}) {
                    discussion(number: ${discussionNumber}) {
                        body
                        number
                        createdAt
                          author{
                            avatarUrl
                            login
                          }

                          comments(first: 5){
                            totalCount
                            edges{
                                node{
                                    id
                                    body
                                    author{
                                       avatarUrl
                                       login
                                    }
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
const getDiscussions = async (accessToken) =>{

    const disc = await axios.post( `https://api.github.com/graphql`,{
        query:`query {
                repository(owner: "Web3-Camp", name: ${repo}) {
                    discussions(first: 100) {
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
                            number
                            author{
                               avatarUrl
                               login
                            }
                           comments(first: 100){
                            totalCount
                            edges{
                            node{
                            author{
                               avatarUrl
                               login
                            }
                            } 
                            }
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
                repository(owner: "Web3-Camp", name: ${repo}) {
                    discussionCategories(first: 100) {
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

const addDiscussion = async (accessToken,Cateid,repoId,title,body) =>{

    const disc = await axios.post( `https://api.github.com/graphql`,{
        query:`mutation {
                 createDiscussion(input:{body:"${body}",title:"${title}",categoryId:"${Cateid}",repositoryId:"${repoId}"}) {
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

    return disc.data;
}
const addComment = async (accessToken,discussionId,body) =>{
    const disc = await axios.post( `https://api.github.com/graphql`,{
            query:`mutation {
                 addDiscussionComment(input:{body:"${body}",discussionId:"${discussionId}"}) {
                    comment{
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

    return disc.data;
}



const getComments= async(accessToken,qStr) =>{
    const result = await axios.post( `https://api.github.com/graphql`,{
            query:`query {
                search(first: 100,query:"${qStr}",type:DISCUSSION) {
                    edges {
                       cursor
                    }
                    nodes{
                        ... on Discussion {
                        body
                      }
                    }
                    discussionCount
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

const exportobj = {
    GetAccessToken,
    getInfo,
    getDiscussion,
    getDiscussions,
    getDiscussionCategory,
    addDiscussion,
    addComment,
    getComments,
    getUserInfo,
    getListInfo,
    getTwitterID,
    getTwitterList
};

export default exportobj;
