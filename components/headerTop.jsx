import styled from "styled-components";
import React,{ useEffect,useState } from 'react';
import { withRouter } from 'next/router';
import Link from "next/link";
import githubObj  from '../public/githubConfig'
import api from "../pages/api/api";
import {useDAO} from "../pages/api/connect";

const HeaderBox = styled('header')`
  .h50Top{
  height: 50px; transition: all 0.1s ease 0s;
  }
`
const RhtBox = styled('span')`
  box-sizing: border-box; 
  display: block; 
  overflow: hidden; 
  width: initial; 
  height: initial; 
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

function HeaderTop({router}) {
    const {  dispatch, state } = useDAO();
    const { accessToken, info } = state;
    const [showTop,setShowTop] = useState(false);
    const [url,setUrl] = useState('/');
    const [asToken,setAsToken] = useState('');
    const [infoData,setInfoData] = useState(null);



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
            console.log("=====LoginInfo=====",LoginInfo)
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
        if(accessToken ==null || info ==null) return;
        setAsToken(accessToken)
        setInfoData(info)

    },[accessToken, info])

    const handleInput = (e) =>{
        console.log(e.target.value)
    }
    return <HeaderBox>
        <div className={ showTop ? "fixed top-0 w-full  bg-white z-30 transition-all ease duration-150 drop-shadow-md" :"fixed top-0 w-full  bg-white z-30 transition-all ease duration-150"}>
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
                                className="w-full absolute overflow-hidden rounded-md py-3 px-5 z-20 focus-within:shadow-lg -mt-6 focus-within:bg-white bg-gray-100">
                                <div className="flex space-between w-full items-center">
                                    <div className="flex flex-auto items-center">

                                        <input
                                            className="w-full focus:outline-none text-lg font-cal tracking-wide text-gray-700 bg-gray-100 focus:bg-white transition ease duration-150"
                                            placeholder="Search DAOs by name, emoji, slogan..." autoComplete="off" value="" onChange={e=>handleInput(e)}/>
                                    </div>
                                    <button className="hover:rotate-180 transition-all ease duration-200 hidden">

                                    </button>
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
                        infoData!= null &&<a href="/mine">
                            <div className="relative shadow-2xl inline-block w-12 h-12 border-2 border-gray-100 hover:border-black rounded-full overflow-hidden transition-all ease duration-150">
                                <RhtBox>
                                    <img src={infoData?.avatar_url}/>
                                </RhtBox>
                            </div>
                        </a>
                    }


                    </div>
                <div className="lg:hidden mt-1">
                    <div>
                        <button type="button">
                            <img src="/assets/images/column.svg" alt="" width="32"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </HeaderBox>
}
export default withRouter(HeaderTop);
