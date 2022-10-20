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
  .noTop{
    border-top-color: transparent;
  }
  .h50Top{
  height: 50px; transition: all 0.1s ease 0s;
  }
  .navBox{
    position: absolute;
    top: 6.5rem;
    right: 2.5rem;
  }
  .w100Bg{
    margin-bottom: 1rem;
  }
  .lft{
    display: flex;
    img{
      margin-right: 1rem;
    }
  }
  .logout{
    padding: 0;
    width: 100%;
    display: flex;
    .justify-between{
      width: 100%;
    }
  }
  .loginBox a{
    display: inline-block;
    text-align: center;
    padding-right: 0.5rem;
    background:url("/assets/images/btnBg.png") no-repeat right center;
    background-size: 100%;
    line-height: 4.7rem;
    width: 100px;
    
    font-family: "PT-Mono-Bold"!important;
    flex-shrink: 0;
  }
  .topSearch{
    background: #f00;
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
  margin: 0 ;
  img{
    width: 90px;
  }
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

const SearchBox = styled('div')`
    background:url("/assets/images/searchBg.png") no-repeat;
    background-size:auto 100%;
    width: 556px;
    height: 50px;
    display: flex;
    align-items: center;
    input{
      margin-left: 10px;
      margin-top: -5px;
      width: 350px;
    }
    img{
      margin-bottom:8px;
    }
`

function HeaderTop({router}) {
    const {  dispatch, state } = useDAO();

    const { accessToken, info } = state;
    const [showTop,setShowTop] = useState(false);
    const [showNav,setShowNav] = useState(false);
    const [url,setUrl] = useState('/');
    const [asToken,setAsToken] = useState('');
    const [infoData,setInfoData] = useState(null);
    const [keywords,setKeywords] = useState('');
    const [showloading,setShowloading] = useState(false);

    const handleScroll = () => {
        let scrollY = window.scrollY;
        if( scrollY > 100 && window.screen.width > 1024){
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
        document.addEventListener('click',(e)=>{
            setShowNav(false)
        })
    },[])

    // useEffect(()=>{
    //     setShowNav(false)
    // },[router.pathname])

    useEffect(()=>{
        if(!router.query.code) return;
        setShowloading(true)
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
            setShowloading(false)
            Router.push("/")
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
            // setKeywords('')\
            Router.push("/")
        }
    }
    const handleNav = (e) =>{
        e.nativeEvent.stopImmediatePropagation();
        setShowNav(!showNav)
    }

    const handleLogout = async() =>{
        dispatch({type: 'SET_INFO',payload:null});
        sessionStorage.removeItem("info")
        sessionStorage.removeItem("asToken")
        Router.push("/")
        window.location.reload()
        setShowloading(false)
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
            <div className="flex gap-4 xl:gap-6 justify-between items-center 2xl:w-1536 m-auto px-5 sm:px-10 w-full">
                <div className="flex justify-start items-center gap-4 xl:gap-6 w-full">
                    <Link href="/" passHref>
                        <Logo>
                            <img src="/assets/images/logo.png" alt=""/>
                        </Logo>
                    </Link>
                    {
                        showTop && <div className="relative flex-auto">
                            <SearchBox
                                className="w-full absolute overflow-hidden rounded-md py-3 px-5 z-20 focus-within:shadow-lg -mt-6 ">
                                <div className="flex space-between w-full items-center">
                                    <div className="flex flex-auto items-center">
                                        <img src="/assets/images/searchIcon.png" alt=""/>
                                        <input
                                            className="w-full focus:outline-none text-lg font-cal tracking-wide text-gray-700 transition ease duration-150"
                                            placeholder="Search DAOs..." autoComplete="off" value={keywords}  onChange={e=>handleInput(e)} onKeyDown={(e)=>submitFunc(e)}/>
                                    </div>
                                </div>
                            </SearchBox>
                        </div>
                    }

                </div>
                <div className=" lg:flex gap-4 xl:gap-6 justify-between items-center loginBox">
                    {/*<Link href="/add">*/}
                    {/*    <a className="whitespace-nowrap font-cal tracking-wide py-2 px-5 text-lg border-2 border-white text-gray-800 hover:text-black transition-all ease duration-150">Add a DAO</a>*/}
                    {/*</Link>*/}
                    {
                        infoData == null && !showloading &&<div>
                            <Link href={url}>
                                <a id="login">Sign In </a>
                            </Link>

                        </div>
                    }
                    {
                        infoData == null && showloading&&<div>
                            <div className="w-10 h-10 border-4 border-black border-solid rounded-full animate-spin noTop" />
                        </div>
                    }
                    {
                        infoData!= null && <div className="relative shadow-2xl inline-block w-12 h-12 border-2 border-gray-100 hover:border-black rounded-full overflow-hidden transition-all ease duration-150">
                                <RhtBox onClick={(e)=>handleNav(e)}>
                                    <img src={infoData?.avatar_url} alt=""/>
                                </RhtBox>
                            </div>

                    }
                    </div>
                {/*<div className="lg:hidden mt-1">*/}
                {/*    <div>*/}
                {/*        <button type="button">*/}
                {/*            <img src="/assets/images/column.svg" alt="" width="32"/>*/}
                {/*        </button>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {
                    showNav &&<div className="rounded-lg shadow-xl border  p-3 bg-white navBox border-4 border-black">

                        {/*<Link className="flex justify-between items-center px-5 py-3 rounded-lg bg-white hover:bg-gray-100 transition-all ease-in-out duration-150"*/}
                        {/*      href={`/${infoData?.login}`}>*/}
                        {/*    <div className="flex items-center space-x-5 w100Bg">*/}
                        {/*        <div className="relative shadow-2xl inline-block w-10 h-10 rounded-full overflow-hidden">*/}
                        {/*            <SpanBox>*/}
                        {/*                <span />*/}
                        {/*                <img src={infoData?.avatar_url}/>*/}
                        {/*            </SpanBox>*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <p className="font-cal text-lg -mb-1">{infoData?.name}</p>*/}
                        {/*            <p className="font-cal text-base text-gray-500">@{infoData?.login}</p>*/}
                        {/*        </div>*/}
                        {/*        <img src="/assets/images/arrow.svg" alt=""/>*/}
                        {/*    </div>*/}

                        {/*</Link>*/}
                        <Link className="flex justify-between items-center  rounded-lg bg-white hover:bg-gray-100 transition-all ease-in-out duration-150" href="/add" passHref>
                            <div className="flex items-center space-x-5 justify-between w100Bg px-2 py-4">

                                <div className="lft">
                                    {/*<img src="/assets/images/add.svg" alt=""/>*/}
                                    <p className="font-cal text-lg">Add a DAO</p>
                                </div>
                                <img src="/assets/images/arrow.svg" alt=""/>
                            </div>
                        </Link>
                        <img src="/assets/images/line.png" alt="" width="256" />
                        <div className="flex justify-between items-center px-5 py-3 rounded-lg bg-white hover:bg-gray-100 transition-all ease-in-out duration-150 logout" >
                            <div className="flex items-center space-x-5 justify-between px-2 py-4" onClick={()=>handleLogout()}>
                                <div className="lft">
                                    {/*<img src="/assets/images/logout.svg" alt=""/>*/}
                                    <p className="font-cal text-lg">logout</p>
                                </div>
                                <img src="/assets/images/arrow.svg" alt=""/>
                            </div>
                        </div>

                    </div>
                }

            </div>
        </div>
    </HeaderBox>
}
export default withRouter(HeaderTop);
