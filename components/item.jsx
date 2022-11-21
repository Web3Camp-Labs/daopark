import styled from "styled-components";
import Link from "next/link";
import {useEffect, useState} from "react";

const LiBox = styled.div`
  border-radius: 8px;
  border: 2px solid #000000!important;
  &.bg1{
    background:url("/assets/images/bg/bg1.png");
    background-size: 100% 100%;
  }
  &.bg2{
    background:url("/assets/images/bg/bg2.png");
    background-size: 100% 100%;
  }
  &.bg3{
    background:url("/assets/images/bg/bg3.png");
    background-size: 100% 100%;
  }
  &.bg4{
    background:url("/assets/images/bg/bg4.png");
    background-size: 100% 100%;
  }
  &.bg5{
    background:url("/assets/images/bg/bg5.png");
    background-size: 100% 100%;
  }
  &.bg6{
    background:url("/assets/images/bg/bg6.png");
    background-size: 100% 100%;
  }
  &.bg7{
    background:url("/assets/images/bg/bg7.png");
    background-size: 100% 100%;
  }
  &.bg8{
    background:url("/assets/images/bg/bg8.png");
    background-size: 100% 100%;
  }
`

const SpanBoxli = styled('span')`
  box-sizing: border-box; 
  display: block; 
  overflow: hidden; 
  width: initial; 
  height: initial; 
  background: none; 
  opacity: 1; 
  border: 0px; 
  margin: 1rem; 
  padding: 0px; 
  position: relative;
  span{
  box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; 
    padding: 53% 0px 0px;
  }
  img{
      position: absolute; 
      inset: 0px; 
      box-sizing: border-box; 
      padding: 0px; 
      border: none; 
      margin: auto; 
      display: block; 
      //width: 0px; 
      //height: 0px; 
      min-width: 100%; 
      max-width: 100%; 
      min-height: 100%; 
      max-height: 100%; 
      object-fit: cover;
  }
`

const SpanBoxBtm = styled('span')`
box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;
img{
position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;
}
`
const TitleBox = styled.h3`
    background: url("/assets/images/bg/titleBg.svg") repeat-x -1px;
    background-size: auto 100%;
    padding: 0.4rem 1rem 0.39rem;
   font-family: "PT-Mono-Bold";
`
const ContentBox = styled.p`
  margin: 0.4rem 1rem;
  font-family: "PTM55F";
`

const Li560 = styled.div`
  border-radius: 8px;
  border: 2px solid #000000!important;
  &.bg1{
    background:url("/assets/images/bg/bg1.png");
    background-size: 100% 100%;
  }
  &.bg2{
    background:url("/assets/images/bg/bg2.png");
    background-size: 100% 100%;
  }
  &.bg3{
    background:url("/assets/images/bg/bg3.png");
    background-size: 100% 100%;
  }
  &.bg4{
    background:url("/assets/images/bg/bg4.png");
    background-size: 100% 100%;
  }
  &.bg5{
    background:url("/assets/images/bg/bg5.png");
    background-size: 100% 100%;
  }
  &.bg6{
    background:url("/assets/images/bg/bg6.png");
    background-size: 100% 100%;
  }
  &.bg7{
    background:url("/assets/images/bg/bg7.png");
    background-size: 100% 100%;
  }
  &.bg8{
    background:url("/assets/images/bg/bg8.png");
    background-size: 100% 100%;
  }
`

export default function ItemDao(props){

    const { item,index } = props;
    const [ obj, setObj ] = useState(null);

    useEffect(()=>{
        if(item == null) return;
        setObj(item)
    },[item])

    return <Link href={`/dao/${obj?.Slug}`} as={`/dao/${obj?.Slug}`} passHref><div className="!no-underline" >
            <LiBox  className={`hidden sm:block rounded-2xl  overflow-hidden bg${index % 8}`}>
                <SpanBoxli>
                    <span />
                    <img src={obj?.CoverPhoto}  className="duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                </SpanBoxli>
                <div className="h-36">
                    {/*<div className="flex justify-end">*/}
                    {/*    <p className="font-cal text-lg tracking-wide bg-white drop-shadow-lg border-gray-50 border-2 text-black px-5 py-2 rounded-full max-w-max !-mt-12 !mb-0">*/}
                    {/*        /!*{obj?.Emoji}*!/*/}
                    {/*    </p>*/}
                    {/*</div>*/}
                    <TitleBox className="font-cal !my-0 !text-2xl font-bold tracking-wide truncate ">{obj?.Name}</TitleBox>
                    <ContentBox className="!mt-3 !text-gray-800 !text-md !leading-snug !font-normal">{obj?.Tagline} –  {obj?.TokenSymbol}</ContentBox></div>
            </LiBox>
            <Li560 className={`sm:hidden overflow-hidden rounded-xl flex items-center md:h-48 h-36 border-2 border-gray-100 focus:border-black active:border-black bg-white transition-all ease duration-200 bg${index % 8}`}>
                <div className="w-2/5 relative h-full">
                    <SpanBoxBtm>
                        <img src={obj?.CoverPhoto} className="duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                    </SpanBoxBtm>
                </div>
                <div className="py-6 px-5 w-3/5 !relative">
                    <TitleBox className="font-cal !my-0 !text-xl sm:!text-2xl font-bold tracking-wide truncate">{obj?.Name}</TitleBox>
                    <p className="!mt-3 !text-gray-800 !text-sm sm:!text-base !leading-snug !font-normal line-clamp-3">{obj?.Tagline} – {obj?.TokenSymbol}</p></div>
            </Li560>
    </div></Link>
}