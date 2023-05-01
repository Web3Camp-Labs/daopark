import styled from "styled-components";
import {useEffect, useState} from "react";

import Main01 from "./main_01";
import Main02 from "./main_02";
import Tweets from "./tweets";
import githubObj from "../../public/githubConfig";
import Contributors from "./contributors";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Link from 'next/link';

const MainBox = styled.div`
    .bgGreen{
      background: #F0FDF2;
    }
  .borderBox{
    background: #F0FDF2 url("/assets/images/btmArrow.svg") no-repeat 90% center;
    background-size: 12px;
  }
    .bgFlex{
      display: flex;
      align-items: center;
      img{
        width: 27px;
        margin-right: 8px;
      }
    }
  .txtFont{
    font-family: "PT-Mono-Bold";
  }
  .TitleBox{
    font-family: "PT-Mono-Bold";
  }
  .content{
    font-family: "PTM55F";
    font-size: 28px!important;
    margin-bottom: 50px;
  }
  @media (max-width: 560px) {
    .content{
      text-align: left;
    }
  }
`

const SpanBox = styled('span')`
  box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0;
  img{
      position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;filter:blur(0);

  }
`

const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  background: #CEF3F7;
  border-radius: 8px;
  border: 2px solid #000000;
  padding-bottom: 10px;
  img{
    width: 100%;
  }
  .midBox{
    width: 100%;
    border-radius: 8px;
    margin:-10px 0 0 -10px;
    border: 2px solid #000000;
    background: #fff;
    padding-top: 50px;
  }
  .rhtBg{
    background: url("/assets/images/bgRht.png") no-repeat 93% 60px;
    background-size: 150px;
  }
  .rhtDecor{
    background: url("/assets/images/rhtTop.png") no-repeat 91% top;
    background-size: 50px;
  }
  .lftBg{
      background:url("/assets/images/bglft.png") no-repeat 4% 99%;
      background-size: 150px;
  }
  @media (max-width: 560px) {
    margin: 0 30px;
    .rhtBg{
      background: url("/assets/images/bgRht.png") no-repeat center 100px;
      padding-top: 100px;
    }
    .rhtDecor{
      background: url("/assets/images/rhtTop.png") no-repeat center top;
    }
    .lftBg{
      background:url("/assets/images/bglft.png") no-repeat 20% 90%;
      background-size: 250px;
      padding: 100px 0;
    }
  }
`
export default function DaoMain(props) {
    const [current, setCurrent] = useState(0);
    const [list] = useState(['overview','contributors','news'])
    const [ showCopy,setShowCopy ] = useState(false);
    const { body } = props;
    const [ obj, setObj ] = useState(null);

    useEffect(()=>{
        if(!body)return;
        setObj(body[0])
    },[body])

    const handleSelect = (num) =>{
        setCurrent(num)
    }
    const handleDrop = (e) =>{
       console.log(e.target.value)
        const index = list.findIndex(item=>item === e.target.value);
        setCurrent(index)
    }
    const copyLink = () =>{
        setShowCopy(true);
        setTimeout(()=>{
            setShowCopy(false);
        },2000)
    }

    return <MainBox>
        <div className="w-full max-w-screen-2xl mx-auto">
            <div className="mt-24 mx-10 md:text-left text-center">
                <div className="flex md:justify-start justify-center items-center space-x-3">
                    <h1 className="font-cal text-3xl sm:text-5xl TitleBox pt-8">{obj?.Name}</h1>
                    <div className="flex justify-center items-center rounded-full w-8 h-8">
                        <img src="/assets/images/passd.svg" alt="" />
                    </div>
                </div>
                <p className="text-base  mt-5 content">{obj?.Tagline}</p>
                <div className="flex md:justify-start justify-center items-center space-x-3 mt-3">
                    <a href={`https://twitter.com/${obj?.Twitter}`} target="_blank" className="font-cal tracking-wide text-white bg-[#1da1f2] rounded-lg flex justify-center items-center space-x-2 px-4 py-2 border-2 border-black min-w-max"  rel="noreferrer">
                        <img src="/assets/images/twitterWhite.svg" alt=""/>
                        <p className="hidden lg:block ">@{obj?.Twitter}</p>
                    </a>
                    <a href={`https://discord.com/invite/${obj?.Discord}`} target="_blank" className="font-cal tracking-wide text-white bg-[#4A66F7] rounded-lg flex justify-center items-center space-x-2 px-4 py-2 border-2 border-black min-w-max" rel="noreferrer">
                        <img src="/assets/images/discordWhite.svg" alt=""/>
                        <p className="hidden lg:block">@ {obj?.Discord}</p>
                    </a>
                    <a href={`https://${obj?.Website}`} target="_blank" className="font-cal tracking-wide text-white bg-black rounded-lg flex justify-center items-center space-x-2 px-4 py-2 border-2 border-black min-w-max" rel="noreferrer">
                        <img src="/assets/images/globalWhite.svg" alt=""/>
                        <p className="hidden lg:block">Website</p>
                    </a>
                    {
                        obj?.Mirror &&<a href={`https://${obj?.Mirror}`} target="_blank"  rel="noreferrer"
                                         className="font-cal tracking-wide text-white bg-[#959595] rounded-lg flex justify-center items-center space-x-2 px-4 py-2 border-2 border-black min-w-max">
                            <img src="/assets/images/mirror.svg" alt=""/><p className="hidden lg:block">{obj?.Mirror}</p>
                        </a>
                    }

                    {
                        !showCopy &&<CopyToClipboard text={`${githubObj.baseUrl}/dao/${obj?.Slug}`}
                                                    onCopy={() => copyLink()}>
                            <button className="font-cal tracking-wide text-black border-2 border-black rounded-xl flex justify-center items-center space-x-2 px-4 py-2 min-w-max">
                                <img src="/assets/images/link.svg" alt=""/>
                                <p className="hidden lg:block"> {githubObj.baseUrl.split('//')[1]}/dao/{obj?.Slug}</p>
                            </button>
                        </CopyToClipboard>
                    }
                    {
                        showCopy &&<button className="font-cal tracking-wide text-black border-2 border-black rounded-full flex justify-center items-center space-x-2 px-4 py-2 min-w-max">
                            <img src="/assets/images/right.svg" alt=""/>
                            <p className="hidden lg:block">Copied to Clipboard</p>
                        </button>
                    }

                </div>
                {/*<div className="md:hidden flex flex-col justify-center items-center mt-8 pt-8 border-t border-gray-300">*/}
                {/*    <button className="font-cal w-36 h-12 whitespace-nowrap tracking-wide text-lg border-2 rounded-full border-black bg-black text-white hover:bg-white hover:text-black transition-all ease duration-150">Join</button>*/}
                {/*    <div className="flex justify-center items-center mt-3 -space-x-2">*/}
                {/*        {*/}
                {/*            [...Array(3)].map((item,index)=>(<Link href="/" key={index} passHref>*/}
                {/*                <div className="relative shadow-lg inline-block w-8 h-8 border-2 border-white rounded-full overflow-hidden">*/}
                {/*                    <SpanBox>*/}
                {/*                        <span />*/}
                {/*                        <img alt=""*/}
                {/*                             className="duration-700 ease-in-out grayscale blur-2xl scale-110"*/}
                {/*                        />*/}
                {/*                    </SpanBox>*/}
                {/*                </div>*/}
                {/*            </Link>))*/}
                {/*        }*/}
                {/*        <button className="text-sm pl-4 whitespace-nowrap">+ 609 others</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="hidden md:flex justify-start items-center mt-10">
                    {
                        list.map((item,index)=>(<span key={`top_${index}`} className={current === index ? "bgGreen rounded-t-lg font-cal text-xl capitalize tracking-wide text-black px-5 py-3 transition-all ease-in-out duration-150 bgFlex txtFont" : "font-cal text-xl capitalize tracking-wide text-black px-5 py-3 transition-all ease-in-out duration-150 txtFont"}  onClick={()=>handleSelect(index)}>
                            {
                                current === index && <img src="/assets/images/star.png" alt=""/>
                            }  {item}</span>))
                    }

                </div>
                <div className="md:hidden mt-10">
                    <select name="tab" className="font-cal text-xl text-center capitalize tracking-wide text-black bg-gray-100 borderBox rounded-t-lg pl-5 pr-10 py-3 border-none focus:outline-none focus:ring-0 " onChange={(e) => handleDrop(e)}>
                        {
                            list.map((item,index)=>(<option  onClick={()=>handleSelect(index)} key={`select_${index}`}  value={item}>{item}</option>))
                        }
                    </select></div>
            </div>
        </div>

        <div className="w-full bgGreen">
            <div className=" w-full max-w-screen-2xl mx-auto md:px-10 py-5 lg:py-10 ">
                <div className="col-span-2">
                    <ContentBox>
                        <div className="midBox">
                            <div className="rhtDecor">
                                <div className="rhtBg">
                                    <div className="lftBg">
                                        {
                                            current === 0 && <Main01 body={obj} />
                                        }
                                        {
                                            current === 1 && !!obj?.Github && <Contributors body={obj} />
                                        }
                                        {
                                            current === 1 && !obj?.Github && <Main02 title="Contributors" />
                                        }
                                        {
                                            current === 2 && !!obj?.Twitter && <Tweets body={obj}/>
                                        }
                                        {
                                            current === 2 && !obj?.Twitter && <Main02 title="News"/>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </ContentBox>
                </div>
                {/*<div className="hidden lg:block col-span-1">*/}
                {/*    <div className="bg-white py-10 px-5 text-center w-full flex flex-col justify-center items-center">*/}
                {/*        <SpanBox2>*/}
                {/*            <span> <img alt="" src="/assets/images/empty-state.png" /></span>*/}
                {/*        </SpanBox2>*/}
                {/*        <p className="font-cal text-gray-600 text-2xl">This DAO does not have a token yet.</p></div>*/}
                {/*</div>*/}
            </div>
        </div>
    </MainBox>
}
