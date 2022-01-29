import {useRouter} from "next/router";
import Layout from "../../../components/layout";
import styled from "styled-components";

import TopFix from "../../../components/dao/topfix";
import DaoBanner from "../../../components/dao/daoBanner";
import DaoMain from "../../../components/dao/daoMain";
import Daolist from "../../../components/dao/daolist";
import DaoBannerFull from "../../../components/dao/daoBannerFull";
import DaoDetail from "../../../components/dao/daoDetail";

const DetailBox = styled('div')`

`

export default function Dao() {
    const router = useRouter();
    const {id} = router.query;

    return <DetailBox>
        {
            id === 'developer' &&<div className="w-full my-30" >
                <TopFix />
                <DaoBanner />
                <DaoMain />
                <Daolist />
            </div>
        }
        {
            id !== 'developer' &&<div className="w-full my-30" >
                <div className="w-full max-w-screen-2xl mx-auto">
                    <DaoBannerFull />
                    <DaoDetail />
                    <Daolist />
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
