import styled from "styled-components";
import Link from "next/link";
import aboutus from "../../public/aboutus.json";

const Box = styled('div')`
  width: 100%;
  height: 541px;
  background: linear-gradient(90deg, #DAFCFF 0%, #FFE6E6 100%);
  .clipBox{
  clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%);-webkit-clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)
  }
`
const SpanBox = styled('span')`
    box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;
    span{
      box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;padding-top:75%
    }
    img{
        position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;
        filter:blur(0);           
    }
`

const TitleBox = styled('h1')`
    padding-top: 118px;
  font-size: 66px;
  font-family: "PT-Mono-Bold";
  font-weight: bold;
  color: rgba(0,0,0,0.9);
  line-height: 74px;
`
const Tips = styled('p')`
  font-size: 28px;
  font-weight: 400;
  color: rgba(0,0,0,0.9);
  font-family: "PTM55F";
  line-height: 38px;
  padding:  10px 0 20px;
  width: 80%;
`
const ABox = styled('a')`
  font-size: 28px;
  font-family: "PT-Mono-Bold";
  font-weight: bold;
  color: #000000;
  line-height: 32px;
`
const ContentBox = styled('div')`
  margin-top: 62px;
  .midBox{
    background: url("/assets/images/contentBg.png") repeat-y;
    background-size: 100%;
    padding: 0 51px 50px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  .title{
    font-size: 39px;
    font-family: "PT-Mono-Bold";
    font-weight: bold;
    color: #000000;
    line-height: 44px;
    margin-bottom: 23px;
  }
  .desc{
    font-size: 28px;
    font-family: "PTM55F";
    font-weight: 400;
    color: rgba(0,0,0,0.9000);
    line-height: 38px;
  }
`
const RhtBox = styled('div')`
  width: 288px;
  height: 83px;
  background: #FFFFFF;
  border-radius: 8px;
  border: 4px solid #000000;
  div{
    margin-left: 23px;
    border-left: 4px solid #000000;
    height: 100%;
    background: linear-gradient(180deg, #EBFF7B 0%, #CAFF7C 100%);
    text-align: center;
    line-height: 78px;
    font-size: 28px;
    font-family: "PT-Mono-Bold";
    font-weight: bold;
    color: rgba(0,0,0,0.9);
  }
`

export default function AddBanner() {
    return  <Box>
        <div className="max-w-screen-2xl mx-auto relative">
            <TitleBox>Add a DAO</TitleBox>
            <Tips>@Have a DAO that you&#x27;d like to add? Fill out the form below and we will get it added to the database.</Tips>
             <ABox href="/introduction">What is a DAO?</ABox>
            <ContentBox>
                <div><img src="/assets/images/contentTop.png" alt=""/></div>
                <div className="midBox">
                    <div className="desc">
                        <div className="title">DAO</div>
                        <div>This information will be displayed publicly on your DAO&#x27;s page.</div>
                        <div>* marks required fields.</div>
                    </div>
                    <RhtBox>
                        <Link href={`/dao/${aboutus[0].Slug}`}><div>See example</div></Link>


                    </RhtBox>
                </div>
                <div><img src="/assets/images/contentbtm.png" alt=""/></div>
            </ContentBox>
        </div>
    </Box>
}
