import styled from "styled-components";
import {useState} from "react";
import {useDAO} from "../pages/api/connect";
import aboutus from "../public/aboutus.json";

const BannerBox = styled('div')`
  .h-150{
    height: 42rem;
    
  }
  .h50{
    height: 50px; 
    transition: all 0.1s ease 0s;
    background:url("/assets/images/inputBg.png") no-repeat center;
    background-size: auto 100%;
    display: flex;
    input{
      background: none;
      margin-left: 3rem;
      font-family: "PTM55F"!important;
      color: rgba(0,0,0,0.9);

      margin-top: -0.25rem;
    }
    .imgPosition{
      margin: -8px 0 0 35px;
      width: 35px;
      height: 35px;
    }
  }
  .mtTop{
    top: 50%;
  }
  .banner{
    display: block;
  }
  @media (max-width: 560px) {
    .banner{
      display: none;
    }
    .h50{
      width: 326px;
      background-size: 100%;
    }
  }
`

const SpanBox = styled('span')`
    box-sizing: border-box;
    display: block; 
    overflow:hidden; 
    width: initial; 
    height: initial; 
    background: none; 
    opacity: 1; 
    border: 0;
    margin: 0;
    padding: 0; 
    position: absolute; 
    top:0;left:0;bottom:0;right:0;
    img{
      position: absolute;
      box-sizing: border-box; 
      padding: 0;
      border: 0;
      display: block;
    inset: 0px;margin: auto; display: block;min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;
    }
`


export default function Banner() {
    const {  dispatch } = useDAO();
    const [keywords,setKeywords] = useState('');
    const [ obj ] = aboutus;

    const handleInput = (e) =>{
        setKeywords(e.target.value)
    }
    const submitFunc = (e) =>{
        if(e.keyCode === 13){
            dispatch({type: 'SET_SEARCH',payload:keywords});
            setKeywords('')
        }
    }

    return <BannerBox>
        <div className="relative">
            {/*<SpanBox>*/}
                <img alt="" src="/assets/images/banner.png" className="duration-700 ease-in-out grayscale-0 blur-0 scale-100 banner"/>
            {/*</SpanBox>*/}
            <div className="absolute top-0 flex flex-col items-center justify-center w-full mtTop">
                <div className="relative w-11/12 lg:w-2/3 max-w-2xl mt-10">
                    <div className="w-full absolute overflow-hidden rounded-md py-3 px-5 z-20 focus-within:shadow-lg bg-white h50" >
                        <img src="/assets/images/search.png" alt="" className="imgPosition"/>
                        <div className="flex space-between w-full items-center">
                            <div className="flex flex-auto items-center">
                                <input className="w-full focus:outline-none text-lg font-cal tracking-wide text-gray-700 " placeholder="Search DAOs..." autoComplete="off" value={keywords} onChange={e=>handleInput(e)} onKeyDown={(e)=>submitFunc(e)}/></div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="absolute bottom-0 px-10 sm:px-20 py-5 flex justify-between items-center w-full">*/}
            {/*    <a className="text-gray-400 text-base sm:text-lg hover:text-gray-300 transition-all ease duration-150" href={`/dao/${obj.Slug}`}>{obj.Name} – <i>{obj.Tagline}</i>*/}
            {/*    </a>*/}
            {/*    /!*<a className="text-lg font-cal tracking-wide whitespace-nowrap bg-white border-gray-50 border-2 text-black px-5 py-2 rounded-full max-w-max hover:scale-105 transition-all ease duration-150" href={`/dao/${obj.Slug}`}>{obj.Emoji}*!/*/}
            {/*    /!*</a>*!/*/}
            {/*</div>*/}
        </div>
    </BannerBox>
}
