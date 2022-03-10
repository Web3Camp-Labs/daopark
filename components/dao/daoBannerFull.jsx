import styled from "styled-components";
import PublicJs from "../../public/publicJs";
import {useEffect, useState} from "react";

const SpanBox = styled('span')`
  box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0;
  img{
  position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;
  }
`

const Box = styled('div')`
  .blur30{
  backdrop-filter:blur(30px)
  }
`

export default function DaoBannerFull(props) {
    const { title, body } = props;
    const [ obj, setObj ] = useState(null);
    const { formatStr,ToJSON } = PublicJs;


    useEffect(()=>{
        if(!body)return;
        let objFormat = ToJSON(body);
        setObj(objFormat)
    },[body])


    return <Box>
        <div className="my-20 relative group h-150">
            <SpanBox>
                <img alt="Olympus DAO" src={formatStr(obj,'cover')} decoding="async" data-nimg="fill"
                     className="group-hover:scale-105 group-hover:duration-300 duration-700 ease-in-out grayscale-0 blur-0 scale-100"
                     sizes="100vw"
                />
            </SpanBox>
            <div className="absolute bottom-0 md:px-20 px-10 md:py-12 py-6 w-full bg-black bg-opacity-50 blur30">
                <div className="flex justify-end">
                    <p className="font-cal tracking-wide text-lg bg-white drop-shadow-lg border-gray-50 border-2 text-black px-5 py-2 rounded-full max-w-max md:-mt-16 md:mb-5 -mt-12">{formatStr(obj,'emoji')}</p>
                </div>
                <h1 className="font-cal text-4xl text-white md:text-5xl lg:text-6xl mb-5 tracking-wide">{title}</h1>
                <p className="text-gray-200 italic md:text-xl text-md leading-8">{formatStr(obj,'tagline')} &nbsp;{formatStr(obj,'symbol')}</p></div>
        </div>
    </Box>
}
