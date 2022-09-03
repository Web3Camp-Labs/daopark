import api from "./api/api";
import {useDAO} from "./api/connect";
import Router from "next/router";
import Layout from "../components/layout";
import styled from "styled-components";
import {Octokit} from "@octokit/rest";

const Main = styled.div`
    flex-grow: 1;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Discussion(){

    const {  state } = useDAO();
    const { accessToken } = state;

    const addDiscussion = async() =>{
        const cat = await api.getDiscussionCategory(accessToken);
        console.log("=======",cat?.data.repository)

        const idArr = cat?.data.repository.discussionCategories.edges.filter(item=> item.node.name === "General");
        const Cateid = idArr[0].node.id

        const octokit = new Octokit({
            auth: accessToken,
        });

        const repoInfo = await octokit.rest.repos.get({
            owner:'Web3-Camp',
            repo:'daopark-db',
        });



        // const repoInfo = await api.getRepository(accessToken)
        const repoId = repoInfo.data.node_id;
        console.log("========repoId=====",repoId)
        const add = await api.addDiscussion(accessToken,Cateid,repoId,"test title with api","test body with api")
        console.log("==========",add)
    }
    const back = () =>{
        Router.push("/")
    }
    return <Main>
        <div onClick={()=>addDiscussion()}>click add discussion</div>
    </Main>
}
Discussion.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
