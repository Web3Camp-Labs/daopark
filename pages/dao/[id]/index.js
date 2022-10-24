import {useRouter} from "next/router";
import Layout from "../../../components/layout";

import DaoBanner from "../../../components/dao/daoBanner";
import DaoMain from "../../../components/dao/daoMain";
import DaoList from "../../../components/dao/daolist";
import {useEffect, useState} from "react";
import aboutUs from "../../../public/aboutus.json";
import styled from "styled-components";
// import api from "../../api/api";

const BodyBox = styled.div`
`


export default function Dao() {
    const router = useRouter();
    const {id} = router.query;
    const [detailInfo, setDetailInfo ] = useState();

    useEffect(()=>{
        const getDetail = async () =>{
            const list = sessionStorage.getItem('list');
            const ListArr = list !=null ? JSON.parse(list):[] ;
            const detail = ListArr.filter(item=>item.Slug === id);
            setDetailInfo(detail)
        }
        getDetail()
    },[id])

    return <BodyBox>
        <div className="w-full" >
            {/*<TopFix  body={id === aboutUs.Slug?aboutUs:detailInfo}/>*/}
            <DaoBanner body={id === aboutUs[0].Slug?aboutUs:detailInfo}/>
            <DaoMain body={id === aboutUs[0].Slug?aboutUs:detailInfo} />
            <DaoList len={8} title="People also joined" />
        </div>
        {/*{*/}
        {/*    id === aboutUs.Slug &&<div className="w-full my-30" >*/}
        {/*        <TopFix  />*/}
        {/*        <DaoBanner />*/}
        {/*        <DaoMain />*/}
        {/*        <DaoList len={8} title="People who joined this DAO also joined" />*/}
        {/*    </div>*/}
        {/*}*/}
        {/*{*/}
        {/*    id !== aboutUs.Slug &&<div className="w-full my-30" >*/}
        {/*        <div className="w-full max-w-screen-2xl mx-auto">*/}
        {/*            <DaoBannerFull body={detailInfo}/>*/}
        {/*            <DaoDetail  body={detailInfo}/>*/}
        {/*            <DaoList len={8} title="People who joined this DAO also joined"/>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*}*/}

    </BodyBox>
}

// export async function getStaticProps({params}) {

//     return {
//         props:{}
//     }
// }

// export async function getStaticPaths() {

//     const list = await api.getListInfo();

//     const paths = list.map(post => ({
//             params: {id: post.Slug},
//         }))
//     paths.push({
//         params: {id:aboutUs[0].Slug },
//     })

//     return {paths, fallback: false}
// }


Dao.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
