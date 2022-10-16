import Layout from "../components/layout";
import styled from "styled-components";
import aboutus from "../public/aboutus.json";
import githubObj from "../public/githubConfig";

const ContentBox = styled('div')`
  margin: 118px auto 0 ;
  .midBox{
    background: url("/assets/images/contentBg.png") repeat-y;
    background-size: 100%;
    padding: 0 230px 50px;
    margin: 0 auto;
  }
`

export default function Introduction() {
    return <div>
        <div className="w-full">

            <ContentBox className="mx-10">
                <div><img src="/assets/images/contentTop.png" alt=""/></div>

                <div className="midBox">

ddddd

                </div>

                <div><img src="/assets/images/contentbtm.png" alt=""/></div>
            </ContentBox>


        </div>
    </div>
}

Introduction.getLayout = function getLayout(page)
    {
        return (
            <Layout>
                {page}
            </Layout>
        )
    }