import Layout from "../components/layout";
import styled from "styled-components";
import AddBanner from "../components/add/addBanner";

import AddContent from "../components/add/addContent";

const DAOBox = styled('div')`
  .boxBg{
  position:fixed;z-index:9999;top:16px;left:16px;right:16px;bottom:16px;pointer-events:none
  }
`

export default function AddDAO() {
    return <DAOBox >
            <div className="w-full">
                <div className="boxBg" />
                <div className="w-full">
                    <AddBanner />
                    <AddContent />
                </div>
             </div>
        </DAOBox>

}
AddDAO.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
