import Layout from "../components/layout";
import styled from "styled-components";

const ContentBox = styled('div')`
  margin: 118px auto 0;
  .inner{
    background:#CEF3F7;
    border-radius: 8px;
    border: 2px solid #000000;
    padding-bottom: 10px;
    margin: 0 3rem;
  }
  
  .midBox{
    margin:-10px 0 0 -10px;
    width: 100%;
    background:#fff url("/assets/images/bgRht.png") no-repeat 80rem 4rem  ;
    background-size: 107px ;
    border-radius: 8px;
    border: 2px solid #000000;
    padding: 34px 176px 40px;
  }
  @media (max-width: 1000px) {
    .inner{
      margin: 0 2rem;
    }
    .midBox{
      background:#fff url("/assets/images/bgRht.png") no-repeat 40vw 4rem ;
      background-size: 107px ;
      padding: 34px 40px 40px;
    }
  }
`

const TitleBox = styled.div`
  font-size: 40px;
  font-family: "PT-Mono-Bold";
  font-weight: bold;
  color: rgba(0,0,0,0.9);
  line-height: 74px;
  padding: 0 2rem ;
  text-align: center;
`
const BtmBox = styled.div`
  font-size: 20px;
  font-family: "PTM55F";
  font-weight: 400;
  color: rgba(0,0,0,0.9);
  line-height: 26px;
`
const SubTitle = styled.div`
  margin: 35px 0;
  .top{
    font-size: 24px;
    font-family: "PT-Mono-Bold";
    font-weight: bold;
    color: rgba(0,0,0,0.9);
    line-height: 27px;
    padding-bottom: 20px;
  }
    .line{
      width: 132px;
      height: 11px;
      background: linear-gradient(360deg, #9EFF7D 0%, #F2FF7B 100%);
      border: 2px solid #000000;
    }
`

export default function Introduction() {
    return<div className="w-full">
            <ContentBox className="max-w-screen-2xl mx-auto">
                <div className="inner">
                    <div className="midBox">
                        <TitleBox>About</TitleBox>
                        <div>

                            <SubTitle>
                                <div className="top">What is a DAO?</div>
                                <div className="line" />
                            </SubTitle>
                            <BtmBox>We are a collective of unique individuals pushing for a bright future. A world in which prosperity is abundant and technology acts as a communal connective tissue. We believe in a web3 world, where data and payments are fluid and controlled by the creators. We believe in the pursuit of open knowledge for the greater good. The tools for connecting the dots are finally here. Technology is constantly evolving and blockchain technology, a fluid and open system, is suited to help us catalyze change. Friends With Benefits are creators, rebels, artists, thinkers, and doers forming an organization to discuss and shape that future. By gathering those looking to create change, Friends With Benefits aims to take these new tools and help implement web3 in a multitude of ways. By unifying our community through a social token - $FWB - members can be confident that everyone in the group has shared skin in the game. By teasing the future of token-permissioned access, Friends With Benefits strives to showcase how a community can reach scale without diminishing quality along the way. We invite all those who share this vision to join us.</BtmBox>
                        </div>
                        <div>
                            <SubTitle>
                                <div className="top">What is a DAO?</div>
                                <div className="line" />
                            </SubTitle>
                            <BtmBox>We are a collective of unique individuals pushing for a bright future. A world in which prosperity is abundant and technology acts as a communal connective tissue. We believe in a web3 world, where data and payments are fluid and controlled by the creators. We believe in the pursuit of open knowledge for the greater good. The tools for connecting the dots are finally here. Technology is constantly evolving and blockchain technology, a fluid and open system, is suited to help us catalyze change. Friends With Benefits are creators, rebels, artists, thinkers, and doers forming an organization to discuss and shape that future. By gathering those looking to create change, Friends With Benefits aims to take these new tools and help implement web3 in a multitude of ways. By unifying our community through a social token - $FWB - members can be confident that everyone in the group has shared skin in the game. By teasing the future of token-permissioned access, Friends With Benefits strives to showcase how a community can reach scale without diminishing quality along the way. We invite all those who share this vision to join us.</BtmBox>
                        </div>


                    </div>
                </div>


            </ContentBox>

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