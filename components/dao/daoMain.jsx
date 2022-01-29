import styled from "styled-components";
import { useState } from 'react';

import Main01 from "./main_01";
import Main02 from "./main_02";
import Tweets from "./tweets";

const Box = styled('div')`

`
const SpanBox = styled('span')`
  box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0;
  img{
      position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;filter:blur(0);

  }
`

const SpanBox2 = styled('span')`
 box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;
 span{
 box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;
 }
  img{
      display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;

  }
`
export default function DaoMain() {
    const [current, setCurrent] = useState(0);
    const [list] = useState(['overview','contributors','experiences','Opportunities','Tweets','news'])

    const handleSelect = (num) =>{
        setCurrent(num)
    }

    return <div>
        <div className="w-full max-w-screen-2xl mx-auto">
            <div className="mt-24 mx-10 md:text-left text-center">
                <div className="flex md:justify-start justify-center items-center space-x-3">
                    <h1 className="font-cal text-3xl sm:text-5xl tracking-wide">Developer DAO </h1>
                    <div className="flex justify-center items-center rounded-full w-8 h-8">
                        <img src="/assets/images/passd.svg" alt="" />
                    </div>
                </div>
                <p className="text-base sm:text-lg mt-5">Accelerating the Education and Impact of a new wave of Web3 Builders.</p>
                <div className="flex md:justify-start justify-center items-center space-x-3 mt-3">
                    <a href="https://twitter.com/developer_dao" target="_blank" className="font-cal tracking-wide text-white bg-[#1da1f2] rounded-full flex justify-center items-center space-x-2 px-4 py-2">
                        <img src="/assets/images/twitterWhite.svg" alt=""/>
                        <p className="hidden lg:block">@developer_dao</p>
                    </a>
                    <a href="https://discord.com/invite/devdao" target="_blank" className="font-cal tracking-wide text-white bg-[#4A66F7] rounded-full flex justify-center items-center space-x-2 px-4 py-2">
                        <img src="/assets/images/discordWhite.svg" alt=""/>
                        <p className="hidden lg:block">@ devdao</p>
                    </a>
                    <a href="https://developerdao.com" target="_blank" className="font-cal tracking-wide text-white bg-black rounded-full flex justify-center items-center space-x-2 px-4 py-2">
                        <img src="/assets/images/globalWhite.svg" alt=""/>
                        <p className="hidden lg:block">developerdao.com</p>
                    </a>
                    <button className="font-cal tracking-wide text-black border-2 border-black rounded-full flex justify-center items-center space-x-2 px-4 py-2 min-w-max">
                        <img src="/assets/images/link.svg" alt=""/>
                        <p className="hidden lg:block">daocentr.al/ developer</p>
                    </button>
                </div>
                <div className="md:hidden flex flex-col justify-center items-center mt-8 pt-8 border-t border-gray-300">
                    <button className="font-cal w-36 h-12 whitespace-nowrap tracking-wide text-lg border-2 rounded-full border-black bg-black text-white hover:bg-white hover:text-black transition-all ease duration-150">Join</button>
                    <div className="flex justify-center items-center mt-3 -space-x-2">
                        <a href="/BayBayLucky">
                            <div className="relative shadow-lg inline-block w-8 h-8 border-2 border-white rounded-full overflow-hidden">
                                <SpanBox>
                                    <span></span>
                                    <img alt=""
                                         src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                         decoding="async" data-nimg="responsive"
                                         className="duration-700 ease-in-out grayscale blur-2xl scale-110"
                                    />
                                </SpanBox>
                            </div>
                        </a>
                        <a href="/gilcreque">
                            <div className="relative shadow-lg inline-block w-8 h-8 border-2 border-white rounded-full overflow-hidden">
                                <SpanBox>
                                    <span></span>
                                    <img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="responsive" className="duration-700 ease-in-out grayscale blur-2xl scale-110"/>
                                </SpanBox></div>
                        </a>
                        <a href="/BigBang_Trading">
                            <div className="relative shadow-lg inline-block w-8 h-8 border-2 border-white rounded-full overflow-hidden">
                                <SpanBox>
                                    <span></span>
                                    <img alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="responsive" className="duration-700 ease-in-out grayscale blur-2xl scale-110"/>
                                </SpanBox>
                            </div>
                        </a>
                        <a href="/mdzunic">
                            <div className="relative shadow-lg inline-block w-8 h-8 border-2 border-white rounded-full overflow-hidden">
                                <SpanBox>
                                    <span></span>
                                    <img alt="smartbee.eth" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="responsive" className="duration-700 ease-in-out grayscale blur-2xl scale-110"/>
                                </SpanBox>
                            </div>
                        </a>
                        <a href="/MantisClone">
                            <div className="relative shadow-lg inline-block w-8 h-8 border-2 border-white rounded-full overflow-hidden">
                                <SpanBox>
                                    <span></span>
                                    <img alt="MantisClone" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" decoding="async" data-nimg="responsive" className="duration-700 ease-in-out grayscale blur-2xl scale-110"/>
                                </SpanBox>
                            </div>
                        </a>
                        <button className="text-sm pl-4 whitespace-nowrap">+ 609 others</button>
                    </div>
                </div>
                <div className="hidden md:flex justify-start items-center mt-10">
                    {
                        list.map((item,index)=>(<span key={`top_${index}`} className={current === index ? "bg-gray-100 rounded-t-lg font-cal text-xl capitalize tracking-wide text-black px-5 py-3 transition-all ease-in-out duration-150" : "font-cal text-xl capitalize tracking-wide text-black px-5 py-3 transition-all ease-in-out duration-150"} href="/dao/developer" onClick={()=>handleSelect(index)}>{item}</span>))
                    }

                </div>
                <div className="md:hidden mt-10">
                    <select name="tab" className="font-cal text-xl text-center capitalize tracking-wide text-black bg-gray-100 rounded-t-lg pl-5 pr-10 py-3 border-none focus:outline-none focus:ring-0">
                        {
                            list.map((item,index)=>(<option key={`select_${index}`}  value={item}>{item}</option>))
                        }
                    </select></div>
            </div>
        </div>

        <div className="w-full bg-gray-100">
            <div className="max-w-screen-2xl mx-auto md:px-10 py-5 lg:py-10 grid grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="col-span-2">
                    {
                        current === 0 && <Main01 />
                    }
                    {
                        current === 1 && <Main02 title="Contributors" />
                    }
                    {
                        current === 2 && <Main02 title="Experiences" />
                    }
                    {
                        current === 3 && <Main02 title="Opportunities" />
                    }
                    {
                        current === 4 && <Tweets/>
                    }
                    {
                        current === 5 && <Main02 title="News" />
                    }

                </div>
                <div className="hidden lg:block col-span-1">
                    <div className="bg-white py-10 px-5 text-center w-full flex flex-col justify-center items-center">
                        <SpanBox2>
                            <span> <img alt="" src="/assets/images/empty-state.png" /></span>
                        </SpanBox2>
                        <p className="font-cal text-gray-600 text-2xl">This DAO does not have a token yet.</p></div>
                </div>
            </div>
        </div>
    </div>
}
