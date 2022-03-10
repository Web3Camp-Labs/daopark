import styled from "styled-components";
import Link from "next/link";
import {useEffect, useState} from "react";
import PublicJs from '../public/publicJs';

const SpanBoxli = styled('span')`
  box-sizing: border-box; 
  display: block; 
  overflow: hidden; 
  width: initial; 
  height: initial; 
  background: none; 
  opacity: 1; 
  border: 0px; 
  margin: 0px; 
  padding: 0px; 
  position: relative;
  span{
  box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 80% 0px 0px;
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

export default function ItemDao(props){

    const { item } = props;
    const [ obj, setObj ] = useState(null);

    const { formatStr,ToJSON } = PublicJs;

    const number = item?.title.split('Submite New DAO: ')[1];

    useEffect(()=>{
        if(!item.body)return;
        let objFormat = ToJSON(item.body);
        setObj(objFormat)
    },[item])

    // `/dao/${formatStr('slug')}`
    return <Link href={`/dao/${number}`}><div className="!no-underline" >
            <div className="hidden sm:block rounded-2xl border-2 border-gray-100 overflow-hidden shadow-md bg-white hover:shadow-xl hover:-translate-y-1 transition-all ease duration-200">
                <SpanBoxli>
                    <span />
                    <img alt="Developer DAO" src={formatStr(obj,'cover')}  className="duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                </SpanBoxli>
                <div className="py-6 px-5 h-36">
                    <div className="flex justify-end">
                        <p className="font-cal text-lg tracking-wide bg-white drop-shadow-lg border-gray-50 border-2 text-black px-5 py-2 rounded-full max-w-max !-mt-12 !mb-0">
                            {formatStr(obj,'emoji')}
                        </p>
                    </div>
                    <h3 className="font-cal !my-0 !text-2xl font-bold tracking-wide truncate">{item.title}</h3>
                    <p className="!mt-3 !text-gray-800 italic !text-md !leading-snug !font-normal">{formatStr(obj,'tagline')} –  {formatStr(obj,'symbol')}</p></div>
            </div>
            <div className="sm:hidden overflow-hidden rounded-xl flex items-center md:h-48 h-36 border-2 border-gray-100 focus:border-black active:border-black bg-white transition-all ease duration-200">
                <div className="w-2/5 relative h-full">
                    <SpanBoxBtm>
                        <img alt="Developer DAO" src="/assets/images/demo/demo2.png" className="duration-700 ease-in-out grayscale-0 blur-0 scale-100" />
                    </SpanBoxBtm>
                </div>
                <div className="py-6 px-5 w-3/5 !relative">
                    <h3 className="font-cal !my-0 !text-xl sm:!text-2xl font-bold tracking-wide truncate">Developer DAO</h3>
                    <p className="!mt-3 !text-gray-800 italic !text-sm sm:!text-base !leading-snug !font-normal line-clamp-3">Accelerating the Education and Impact of a new wave of Web3 Builders. – {formatStr(obj,'symbol')}</p></div>
            </div>
    </div></Link>
}