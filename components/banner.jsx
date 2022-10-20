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
    border-radius: 8px;
    border: 2px solid #000000;
    background: #000;
    display: flex;
    padding:0 2px 2px 0;
    .whiteBox{
      display: flex;
      height: 100%;
      background: #fff;
      width: calc(100% - 112px);
      margin-left:112px;
      border-bottom-right-radius: 8px;
      position: relative;
    }
    input{
      background: none;
      margin-left: 3rem;
      font-family: "PTM55F"!important;
      color: rgba(0,0,0,0.9);

      margin-top: -0.25rem;
    }
    .imgPosition{
      position: absolute;
      left: -75px;
      top:5px;
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
  .banner560{
    display: none;
  }
  @media (max-width: 560px) {
    .banner{
      display: none;
    }
    .h50{
      .whiteBox{
        width: calc(100% - 50px);
        margin-left:50px;
      }
      .imgPosition{
        left: -36px;
        top:12px;
        width: 20px;
        height: 20px;
      }
    }
    .mtTop{
      top:65%;
    }
    
    .banner560{
      display: block;
      width: 100%;
      height: 580px;
      background: url("/assets/images/banner560.png") center;
      background-size: auto 100%;
    }
    .h50{
      width: 326px;
      background-size: 100%;
    }
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
                <img alt="" src="/assets/images/banner.png" className="duration-700 ease-in-out grayscale-0 blur-0 scale-100 banner"/>
            <div className="banner560" />
            <div className="absolute top-0 flex flex-col items-center justify-center w-full mtTop">
                <div className="relative w-11/12 lg:w-2/3 max-w-2xl mt-10">
                    <div className="w-full absolute overflow-hidden rounded-md z-20 focus-within:shadow-lg bg-white h50" >
                        <div className="whiteBox">
                            <img src="/assets/images/search.png" alt="" className="imgPosition"/>
                            <div className="flex space-between w-full items-center">
                                <div className="flex flex-auto items-center">
                                    <input className="w-full focus:outline-none text-lg font-cal tracking-wide text-gray-700 " placeholder="Search DAOs..." autoComplete="off" value={keywords} onChange={e=>handleInput(e)} onKeyDown={(e)=>submitFunc(e)}/></div>
                            </div>
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
