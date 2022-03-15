import styled from "styled-components";
import React,{ useEffect,useState } from 'react';
import { withRouter } from 'next/router';
import Link from "next/link";
import githubObj  from '../public/githubConfig'
import api from "../pages/api/api";
import {useDAO} from "../pages/api/connect";
import Router from "next/router";

const HeaderBox = styled('header')`
  position: relative;
  .h50Top{
  height: 50px; transition: all 0.1s ease 0s;
  }
  .navBox{
    position: absolute;
    top: 6.5rem;
    right: 1rem;
  }
`
const RhtBox = styled('span')`
  box-sizing: border-box; 
  display: block; 
  overflow: hidden;
  background: none;
  opacity: 1; 
  border: 0; 
  margin: 0; 
  padding: 0; 
  position: relative;
  width: 100%;
  height: 100%;
  img{
    position: absolute;
    inset: 0; 
    box-sizing: border-box;
    padding: 0; border: none;
    margin: auto; 
    display: block; 
    width: 100%; 
    height: 100%;
    object-fit: cover;
  }
`

const Logo = styled.span`
  font-size: 2rem;
  font-family: "CalSans-SemiBold";
  padding-top: 20px;
`

const SpanBox = styled.div`
  box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;
  span{
    box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 100% 0px 0px;
  }
  img{
    position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;
  }
`

function HeaderTop({router}) {
    const {  dispatch, state } = useDAO();

    const { accessToken, info } = state;
    const [showTop,setShowTop] = useState(false);
    const [url,setUrl] = useState('/');
    const [asToken,setAsToken] = useState('');
    const [infoData,setInfoData] = useState(null);
    const [keywords,setKeywords] = useState('');

    const handleScroll = () => {
        let scrollY = window.scrollY;
        if( scrollY > 100){
            setShowTop(true)
        }else{
            setShowTop(false)
        }
    }

    useEffect(()=>{
        const myinfo = sessionStorage.getItem("info");
        const accessTokenInfo = sessionStorage.getItem("asToken");
        if(myinfo && accessTokenInfo){
            const LoginInfo = JSON.parse(myinfo);
            dispatch({type: 'SET_INFO',payload:LoginInfo});
            dispatch({type: 'SET_ACCESS_TOKEN',payload:accessTokenInfo});
        }

        window.addEventListener("scroll",handleScroll)
        const {clientID,authorizeUri,redirectUri} = githubObj;
        setUrl(`${authorizeUri}?client_id=${clientID}&redirect_uri=${redirectUri}`)
    },[])

    useEffect(()=>{
        if(!router.query.code) return;

        const getAT = async () =>{
            const accessToken =await api.GetAccessToken(router.query.code)
            if(!accessToken) return;
            dispatch({type: 'SET_ACCESS_TOKEN',payload:accessToken});
        }
        getAT()
    },[router.query])

    useEffect(()=>{
        if(!asToken) return;

        const getIn = async() =>{
            const infoD = await api.getInfo(asToken)
            // setInfoData(infoD)
            dispatch({type: 'SET_INFO',payload:infoD});
            sessionStorage.setItem("info",JSON.stringify(infoD))
            sessionStorage.setItem("asToken",asToken)
        }
        getIn()
    },[asToken]);

    useEffect(()=>{
        if(accessToken ==null) return;
        setAsToken(accessToken)
    },[accessToken])

    useEffect(()=>{
        if( info ==null) return;
        setInfoData(info)
    },[info])

    const handleInput = (e) =>{
        setKeywords(e.target.value)
    }

    const submitFunc = (e) =>{
        if(e.keyCode === 13){
            dispatch({type: 'SET_SEARCH',payload:keywords});
            // setKeywords('')
            Router.push("/")
        }
    }

    return <HeaderBox>
        <div className={ showTop ? `fixed top-0 w-full  bg-white z-30 transition-all ease duration-150 drop-shadow-md` :"fixed top-0 w-full  bg-white z-30 transition-all ease duration-150"}>
            {/*<a href="/nftdrop">*/}
            {/*    <div className="flex flex-row items-center justify-between w-full h-10 px-4 font-semibold text-sm border-b border-gray-500 border-opacity-10 bg-gray-100">*/}
            {/*        <div className="w-5"></div>*/}
            {/*        <p className="hidden sm:block">On Launching A Viral NFT Drop →</p>*/}
            {/*        <p className="sm:hidden">On Launching A Viral NFT Drop →</p>*/}
            {/*        <button>*/}
            {/*            <img src="/assets/images/close.svg" alt="" width="24"/>*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*</a>*/}
            <div className="flex gap-4 xl:gap-6 justify-between items-center 2xl:w-1536 m-auto px-5 sm:px-10 w-full h-20">
                <div className="flex justify-start items-center gap-4 xl:gap-6 w-full">
                    <Link href="/">
                        <Logo>DAO PARK</Logo>
                    </Link>
                    {
                        showTop && <div className="relative flex-auto">
                            <div
                                className="w-full absolute overflow-hidden rounded-md py-3 px-5 z-20 focus-within:shadow-lg -mt-6 bg-gray-100">
                                <div className="flex space-between w-full items-center">
                                    <div className="flex flex-auto items-center">
                                        <input
                                            className="w-full focus:outline-none text-lg font-cal tracking-wide text-gray-700 bg-gray-100  transition ease duration-150"
                                            placeholder="Search DAOs by name, slogan..." autoComplete="off" value={keywords}  onChange={e=>handleInput(e)} onKeyDown={(e)=>submitFunc(e)}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }


                </div>
                <div className="hidden lg:flex gap-4 xl:gap-6 justify-between items-center">
                    <Link href="/add">
                        <a className="whitespace-nowrap font-cal tracking-wide py-2 px-5 text-lg border-2 border-white text-gray-800 hover:text-black transition-all ease duration-150">Add a DAO</a>
                    </Link>
                    {
                        infoData == null &&<div>
                            <Link href={url}>
                                <a id="login" className="whitespace-nowrap font-cal tracking-wide py-2 px-5 text-lg border-2 border-white text-gray-800 hover:text-black transition-all ease duration-150">Login </a>
                            </Link>

                        </div>
                    }
                    {
                        infoData!= null &&<Link href={`/${infoData.login}`}>
                            <div className="relative shadow-2xl inline-block w-12 h-12 border-2 border-gray-100 hover:border-black rounded-full overflow-hidden transition-all ease duration-150">
                                <RhtBox>
                                    <img src={infoData?.avatar_url}/>
                                </RhtBox>
                            </div>
                        </Link>
                    }


                    </div>
                <div className="lg:hidden mt-1">
                    <div>
                        <button type="button">
                            <img src="/assets/images/column.svg" alt="" width="32"/>
                        </button>
                    </div>
                </div>
                <div className="rounded-lg shadow-xl border border-gray-100 p-3 bg-white navBox hidden">

                    <Link className="flex justify-between items-center px-5 py-3 rounded-lg bg-white hover:bg-gray-100 transition-all ease-in-out duration-150"
                       href="/">
                        <div className="flex items-center space-x-5">
                            <div className="relative shadow-2xl inline-block w-10 h-10 rounded-full overflow-hidden">
                                <SpanBox>
                                    <span />
                                    <img alt="" src="/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1478585075508064257%2FwXXA4i-1.jpg&amp;w=3840&amp;q=75"
                               />
                                </SpanBox>
                            </div>
                            <div>
                                <p className="font-cal text-lg -mb-1">srdothunter</p>
                                <p className="font-cal text-base text-gray-500">@srdothunter</p>
                            </div>
                            <img src="/assets/images/arrow.svg" alt=""/>
                        </div>

                    </Link>
                    <Link className="flex justify-between items-center px-5 py-3 rounded-lg bg-white hover:bg-gray-100 transition-all ease-in-out duration-150" href="/add">
                    <div className="flex items-center space-x-5">
                        <img src="/assets/images/add.svg" alt=""/>
                        <p className="font-cal text-lg">Add a DAO</p>
                        <img src="/assets/images/arrow.svg" alt=""/>
                    </div>
                </Link>


                    {/*<button*/}
                    {/*    className="flex justify-between items-center px-5 py-3 w-full rounded-lg bg-white hover:bg-gray-100 transition-all ease-in-out duration-150">*/}
                    {/*    <div className="flex items-center space-x-5">*/}

                    {/*        <p className="font-cal text-lg">Logout</p></div>*/}

                    {/*</button>*/}
                </div>
            </div>
        </div>
    </HeaderBox>
}
export default withRouter(HeaderTop);
