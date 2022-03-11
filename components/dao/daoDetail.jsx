import styled from "styled-components";
import {useEffect, useState} from "react";
import githubObj  from '../../public/githubConfig'
import { CopyToClipboard } from 'react-copy-to-clipboard';

const SpanBox = styled('span')`
  box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0;
  img{
      position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;filter:blur(0);

  }
`
const Success = styled.div`
  width: 100px;
  height: 50px;
  position: absolute;
  left:50%;
  top:50%;
  margin:-10px 0 0 -50px;
  -webkit-transform:rotate(-45deg);
  transform:rotate(-45deg);
  overflow:hidden;

  &:before,&:after{
    content:"";
    position:absolute;
    background:#fff;
  }
  &:before{
    width:4px;
    height:20px;
    left:50%;
  }
  &:after{
    width:35px;
    height:4px;
    bottom:55%;
  }
`
export default function DaoDetail(props) {
    const {  body } = props;
    const [ obj, setObj ] = useState(null);
    const [ show, setShow ] = useState(false);

    useEffect(()=>{
        if(!body)return;
        setObj(body[0])
    },[body])

    const Tips = () =>{
        setShow(true);
        setTimeout(()=>{
            setShow(false);
        },1500)
    }

    return <div className="my-24 sm:mx-10 flex flex-col lg:flex-row lg:space-x-12 space-x-0 lg:space-y-0 space-y-12">

        <div className="mx-10 flex-auto space-y-5"><h2 className="font-cal text-5xl tracking-wide pb-5">What is {obj?.Name}?</h2>
            <div className="pb-10">
                <h2 className="font-cal text-3xl tracking-wide pb-5">Our Values</h2>
               <p className="text-lg text-gray-600">{obj?.Values}</p>
            </div>
            <div className="mb-12">
                <h2 className="font-cal text-3xl tracking-wide pb-5">Our Mission</h2>
                <p className="text-lg text-gray-600">{obj?.Mission}</p>
            </div>
        </div>
        <div
            className="sm:rounded-xl sm:shadow-xl border border-gray-200 sm:border-gray-100 bg-gray xl:w-2/5 lg:w-1/2 w-full py-10">
            <div className="mx-10">
                <div className="mb-10 grid grid-flow-col auto-cols-auto gap-3 h-10">
                    <a href={`https://twitter.com/${obj?.Twitter}`} target="_blank" rel="noreferrer" className="col-span-1 text-white bg-black rounded-lg flex justify-center items-center">
                        <img src="/assets/images/twitterwhite.svg" alt=""/>
                    </a>
                    <a href={`https://discord.com/invite/${obj?.Discord}`}  rel="noreferrer" target="_blank" className="col-span-1 bg-black rounded-lg flex justify-center items-center">
                        <img src="/assets/images/discordwhite.svg" alt=""/>
                    </a>
                    <a href={`https://${obj?.Website}`} target="_blank"  rel="noreferrer"  className="col-span-1 bg-black rounded-lg flex justify-center items-center">
                        <img src="/assets/images/linkwhite.svg" alt=""/>
                    </a>
                </div>
                <div className="flex flex-row w-full h-16 my-12 rounded-lg border-2 border-black bg-white">
                    <div className="hidden sm:flex items-center border-r-2 border-black px-6">
                        <img src="/assets/images/link.svg" alt=""/>
                    </div>
                    <div
                        className="flex items-center flex-auto lg:flex-initial w-80 truncate px-5 text-lg font-cal tracking-wide">
                        {githubObj.baseUrl.split('http://')[1]}/{obj?.Slug}
                    </div>
                    {
                        show &&<button className="flex items-center justify-center w-28 m-1 text-xl rounded-md font-cal tracking-wide bg-black text-white hover:bg-gray-900 transition-all ease duration-150 relative cursor-not-allowed">
                            <Success/>
                        </button>
                    }
                    {
                        !show &&<CopyToClipboard text={`${githubObj.baseUrl}/${obj?.Slug}`}
                                                 onCopy={() => Tips()}>
                            <button
                                className="flex items-center justify-center w-28 m-1 text-xl rounded-md font-cal tracking-wide bg-black text-white hover:bg-gray-900 transition-all ease duration-150">
                                Copy
                            </button>

                        </CopyToClipboard>
                    }
                </div>
            </div>
            <div className="border border-gray-200 w-full my-10"></div>
            <div className="flex justify-center items-center text-xl -space-x-2 mx-10">
                {
                    [...Array(3)].map((item,index)=>(
                        <a href="/BayBayLucky" key={index}>
                            <div className="relative shadow-lg inline-block w-12 h-12 border-2 border-white rounded-full overflow-hidden">
                                <SpanBox>
                                    <span />
                                    <img alt=""
                                         src="/assets/images/demo/avatar.jpg"
                                         decoding="async" data-nimg="responsive"
                                         className="duration-700 ease-in-out grayscale blur-2xl scale-110"
                                    />
                                </SpanBox>
                            </div>
                        </a>
                    ))
                }
                <span className="pl-4">+ 202 others</span></div>
            <div className="mx-10">
                <button className=" font-cal mt-5 w-full whitespace-nowrap tracking-wide py-3 px-6 text-2xl border-2 rounded-md border-black bg-black text-white hover:bg-white hover:text-black transition-all ease duration-150" >Join {obj?.Name}
                </button>
            </div>
        </div>
    </div>
}
