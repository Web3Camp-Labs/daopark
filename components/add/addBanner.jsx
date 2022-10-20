import styled from "styled-components";
import Link from "next/link";
import aboutus from "../../public/aboutus.json";

const Box = styled('div')`
  width: 100%;
  display: flex;
  justify-content: center;
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
  font-size: 40px;
  font-family: "PT-Mono-Bold";
  font-weight: bold;
  color: rgba(0,0,0,0.9);
  line-height: 44px;
  padding: 118px 2rem 0;
`
const Tips = styled('p')`
  font-size: 20px;
  font-weight: 400;
  color: rgba(0,0,0,0.9);
  font-family: "PTM55F";
  line-height: 38px;
  padding:  10px 2rem 20px;
`
const ABox = styled('a')`
  font-size: 22px;
  font-family: "PT-Mono-Bold";
  font-weight: bold;
  color: #000000;
  line-height: 32px;
  padding: 0 2rem;
`
const ContentBox = styled('div')`
  margin: 62px 2rem 0;
  background: #CEF3F7;
  border-radius: 8px;
  border: 2px solid #000000;
  padding-bottom: 10px;
  .midBox{
    width: 100%;
    border-radius: 8px;
    margin:-10px 0 0 -10px;
    border: 2px solid #000000;
    background: #fff url("/assets/images/addBanner.png");
    padding: 42px 53px;
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
    font-size: 24px;
    font-family: "PTM55F";
    font-weight: 400;
    color: rgba(0,0,0,0.9000);
    line-height: 38px;
  }
  @media (max-width: 560px) {
    .midBox{
      padding: 20px;
    }
  }
`
const RhtLine = styled.div`
    display: flex;
    justify-content: flex-end;
  @media (max-width: 560px) {
    justify-content: center;
    margin-top: 40px;
  }
`
const RhtBox = styled('div')`
  width: 188px;
  height: 53px;
  background: #FFFFFF;
  border-radius: 8px;
  border: 4px solid #000000;
  div{
    margin-left: 20px;
    border-left: 4px solid #000000;
    height: 100%;
    background: linear-gradient(180deg, #EBFF7B 0%, #CAFF7C 100%);
    text-align: center;
    line-height: 46px;
    font-size: 18px;
    font-family: "PT-Mono-Bold";
    font-weight: bold;
    color: rgba(0,0,0,0.9);
  }
`

export default function AddBanner() {
    return  <Box>
        <div className="w-full max-w-screen-2xl mx-auto relative">
            <TitleBox>Add a DAO</TitleBox>
            <Tips>@Have a DAO that you&#x27;d like to add? Fill out the form below and we will get it added to the database.</Tips>
             <ABox href="/introduction">What is a DAO?</ABox>
            <ContentBox>
                <div className="midBox">
                    <div className="desc">
                        <div className="title">DAO Profile</div>
                        <div>This information will be displayed publicly on your DAO&#x27;s page.</div>
                        <div>* marks required fields.</div>
                    </div>
                    <RhtLine>
                        <RhtBox>
                            <Link href={`/dao/${aboutus[0].Slug}`}><div>See example</div></Link>
                        </RhtBox>
                    </RhtLine>

                </div>
            </ContentBox>
        </div>
    </Box>
}
