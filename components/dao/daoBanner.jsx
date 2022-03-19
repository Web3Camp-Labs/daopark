import styled from "styled-components";
import {useEffect, useState} from "react";
import {useDAO} from "../../pages/api/connect";
import Users from "./users";

const BannerBox = styled('div')`

`
const SpanBox = styled('span')`
  box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0;
  img{
  position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;filter:blur(0);
  }
`
export default function DaoBanner(props) {
    const { body } = props;
    const [ obj, setObj ] = useState(null);
    const {  state } = useDAO();
    const { info, accessToken } = state;

    useEffect(()=>{
        if(!body)return;
        setObj(body[0])
    },[body])

    return <BannerBox>
        <div className="w-full max-w-screen-2xl mx-auto">
            <div className="my-20 flex justify-center md:block relative h-80">
                <SpanBox>
                    <img alt="" src={obj?.CoverPhoto} className="duration-700 ease-in-out grayscale blur-2xl scale-110"/>
                </SpanBox>
                <div className="absolute w-40 h-40 md:left-10 -bottom-20 border-4 border-white rounded-full overflow-hidden">
                    <SpanBox>
                        <img alt="" src={obj?.Logo} className="duration-700 ease-in-out grayscale blur-2xl scale-110"/>
                    </SpanBox>
                </div>
                <div className="shadow-md border border-gray-100 text-center bg-white pl-4 pr-5 py-2 absolute -bottom-24 md:-bottom-20 md:left-36 rounded-full">
                    {obj?.Emoji}
                </div>
                <div
                    className="hidden absolute -bottom-20 right-10 md:flex justify-center items-center space-x-5 mx-10">
                    <Users />
                    {
                        info != null && accessToken != null &&<button className=" font-cal w-36 h-12 whitespace-nowrap tracking-wide text-lg border-2 rounded-full border-black
                                     bg-black text-white hover:bg-white hover:text-black
                                    transition-all ease duration-150">Join
                        </button>
                    }

                </div>
            </div>

        </div>

    </BannerBox>
}
