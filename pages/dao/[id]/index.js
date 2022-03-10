import {useRouter} from "next/router";
import Layout from "../../../components/layout";
import styled from "styled-components";

import TopFix from "../../../components/dao/topfix";
import DaoBanner from "../../../components/dao/daoBanner";
import DaoMain from "../../../components/dao/daoMain";
import DaoList from "../../../components/dao/daolist";
import DaoBannerFull from "../../../components/dao/daoBannerFull";
import DaoDetail from "../../../components/dao/daoDetail";
import {useEffect, useState} from "react";
import {Octokit} from "@octokit/rest";

const DetailBox = styled('div')`

`

export default function Dao() {
    const router = useRouter();
    const {id} = router.query;
    const [detailInfo, setDetailInfo ] = useState();
    useEffect(()=>{
        const octokit = new Octokit({});
        const getDetail = async () =>{

           const detail = await octokit.rest.issues.get({
                owner: "Web3-Camp",
                repo: "test-issue",
                issue_number: id
            });
            setDetailInfo(detail.data)
            console.log("==detail.data=====",detail.data)
        }
        getDetail()
    },[id])

    return <DetailBox>
        {
            id === 'developer' &&<div className="w-full my-30" >
                <TopFix />
                <DaoBanner />
                <DaoMain />
                <DaoList />
            </div>
        }
        {
            id !== 'developer' &&<div className="w-full my-30" >
                <div className="w-full max-w-screen-2xl mx-auto">
                    <DaoBannerFull title={detailInfo?.title} body={detailInfo?.body}/>
                    <DaoDetail  body={detailInfo?.body}/>
                    <DaoList />
                </div>
            </div>
        }

    </DetailBox>
}
Dao.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
