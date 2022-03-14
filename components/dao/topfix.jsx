import styled from "styled-components";
import {useEffect, useState} from "react";
// import githubObj from "../../public/githubConfig";
// import Link from "next/link";

const SpanBox = styled('span')`
  box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0;
  img{
      position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;filter:blur(0);
  }
`

export default function TopFix(props) {
    const { body } = props;
    const [ obj, setObj ] = useState(null);
    const [showTop,setShowTop] = useState(false);

    useEffect(()=>{
        if(!body)return;
        console.log("======",body)
        setObj(body[0])
    },[body])


    const handleScroll = () => {
        let scrollY = window.scrollY;
        if( scrollY > 200){
            setShowTop(true)
        }else{
            setShowTop(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)

    },[])

    return<div className={!showTop?"fixed w-full top-0 z-20 hidden lg:flex justify-between items-center bg-white border-t h-20 border-gray-200 transition-all ease duration-200":"fixed w-full drop-shadow-md top-20 hidden lg:flex justify-between items-center z-10 bg-white border-t h-20 border-gray-200 transition-all ease duration-200"}>




        <div className="flex justify-between items-center 2xl:w-1536 m-auto px-5 sm:px-10 w-full">
            <div className="flex justify-between items-center space-x-2">
                <div className="relative w-14 h-14 border-3 border-white rounded-full overflow-hidden">
                    <SpanBox>
                        <img src="/assets/images/demo/avatar.jpg" className="duration-700 ease-in-out grayscale blur-2xl scale-110"/>
                    </SpanBox>
                </div>
                <h1 className="font-cal text-2xl tracking-wide">Developer DAO </h1>
                <div className="flex justify-center items-center rounded-full w-8 h-8">
                    <img src="/assets/images/passd.svg" alt=""/>
                </div>
            </div>
            <div className="flex justify-between items-center space-x-2">
                <a className="bg-gray-100 rounded-lg font-cal text-lg capitalize tracking-wide text-black px-3 py-2 transition-all ease-in-out duration-150" href="/dao/developer" rel="noreferrer">overview</a>
                <a className=" font-cal text-lg capitalize tracking-wide text-black px-3 py-2 transition-all ease-in-out duration-150" href="/dao/developer/contributors" rel="noreferrer">contributors</a>
                <a className=" font-cal text-lg capitalize tracking-wide text-black px-3 py-2 transition-all ease-in-out duration-150" href="/dao/developer/tweets" rel="noreferrer">news</a>
            </div>
            <div>
                <button className=" font-cal w-36 h-12 whitespace-nowrap tracking-wide text-lg border-2 rounded-full border-black bg-black text-white hover:bg-white hover:text-black transition-all ease duration-150">Join
                </button>
            </div>
        </div>
    </div>
}
