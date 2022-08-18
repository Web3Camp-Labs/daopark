import styled from "styled-components";
import {useEffect, useState} from "react";
import {Octokit} from "@octokit/rest";

const Box = styled.div`
  padding-bottom: 25px;
  .boxBgMiddle{
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  h2{
    margin-bottom: 8px;
    font-size: 40px;
    font-family: "PT-Mono-Bold";
    font-weight: bold;
    color: rgba(0,0,0,0.9000);
    line-height: 44px;
  }
  .mt30{
    padding-top: 30px;
    font-size: 40px;
    font-family: "PT-Mono-Bold";
    font-weight: bold;
    color: rgba(0,0,0,0.9000);
    line-height: 44px;
  }
    .boxBg{
      background-color: rgb(217, 175, 217); background-image: linear-gradient(0deg, rgb(217, 175, 217) 0%, rgb(151, 217, 225) 100%); border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;
    }
  .noTop{
    border-top-color: transparent;
  }
`

const ImgBox = styled.span`
  box-sizing: border-box; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: relative; max-width: 100%;display: flex;
  justify-content: center;
  .img1{
    display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0;
  }
  .img2{
    position: absolute; inset: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;
  }
`

const LineBox = styled.div`
    display: flex;
    align-items: center;
  justify-content: flex-start;
  margin-top: 8px;
  img{
    width: 133px!important;
    margin: 0;
  }
`
const UlBox = styled.ul`
  margin:65px 0 0 -75px;
  &:after { content: "."; display: block; height: 0; clear: both; visibility: hidden; }
    li{
      width: 18vw;
      background: #FFFFFF url("/assets/images/contributorsBg.png") no-repeat left top;
      border-radius: 8px;
      border: 4px solid #000000;
      float:left;
      margin:0 0 50px 75px;

      &>div{
        border-bottom: 4px solid #000000;
        text-align: center;
        &:last-child{
          margin-bottom:4px;
        }
      }
      
      img{
        width: 110px;
        height: 110px;
        margin: 50px auto 16px;
        border-radius: 110px;
      }
      .name{
        font-size: 22px;
        font-family: "PT-Mono-Bold";
        font-weight: bold;
        color: rgba(0,0,0,0.9000);
        line-height: 24px;
        margin-bottom: 20px;
      }
      .contribution{
        padding: 9px 0 7px;
        background: url("/assets/images/contributorBtm.png") no-repeat center;
      }
    }
`

export default function Contributors(props) {

    const [ list, setList ] = useState([]);
    const { body } = props;
    const [ obj, setObj ] = useState(null);
    const [ showLoading,SetShowLoading] = useState(false);

    useEffect(()=>{
        if(!body)return;
        setObj(body)
    },[body])

    useEffect(()=>{
        if(obj == null || !obj.Github)return;
        const [owner,repo] = obj.Github.split("/");
        if(!owner || !repo) return;
        SetShowLoading(true);
        const getContributors = async () =>{
            const octokit = new Octokit({});
            const listData = await octokit.rest.repos.listContributors({
                owner,
                repo,
            });
            SetShowLoading(false);
            setList(listData.data)
        }
        getContributors();
    },[obj])

    return <Box>
        <div className=" w-full px-12 mb-12">
            <div>
                <h2 className="font-cal text-3xl">Contributors</h2>
                <LineBox><img src="/assets/images/decor.png" alt=""/></LineBox>
            </div>
            {
                showLoading&&<div className="boxBgMiddle">
                    <div className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin noTop" />
                </div>
            }
            {
                !showLoading&&!list.length && <div className="flex flex-col items-center justify-center">
                    <div className="my-8 flex flex-col justify-center items-center">
                        <ImgBox>
                    <span>
                        <img alt="" src="/assets/images/noContent.png" />
                        </span>
                        </ImgBox>
                        <p className="font-cal text-gray-600 text-2xl mt30">No Contributors Yet.</p>
                    </div>
                </div>
            }
            {
                !showLoading&&!!list.length &&<UlBox>
                    {
                        list.map(item=>(<li  key={item.id}>
                               <div className="topBox">
                                   <a href={item.html_url} target="_blank" rel="noreferrer">
                                       <div>
                                            <img src={item.avatar_url} alt=""/>
                                       </div>
                                       <div className="name">{item.login}</div>
                                   </a>
                                </div>
                                <div className="contribution">
                                    <a href={item.html_url} target="_blank" rel="noreferrer">
                                        <span className="text-2xl">{item.contributions}</span> Contributions
                                    </a>
                                </div>
                            </li>

                        ))
                    } {
                        list.map(item=>(<li  key={item.id}>
                               <div className="topBox">
                                   <a href={item.html_url} target="_blank" rel="noreferrer">
                                       <div>
                                            <img src={item.avatar_url} alt=""/>
                                       </div>
                                       <div className="name">{item.login}</div>
                                   </a>
                                </div>
                                <div className="contribution">
                                    <a href={item.html_url} target="_blank" rel="noreferrer">
                                        <span className="text-2xl">{item.contributions}</span> Contributions
                                    </a>
                                </div>
                            </li>

                        ))
                    }
                </UlBox>
            }

        </div>
    </Box>
}
