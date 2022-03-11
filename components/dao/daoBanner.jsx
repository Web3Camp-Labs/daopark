import styled from "styled-components";
import aboutus from "../../public/aboutus.json";

const BannerBox = styled('div')`

`
const SpanBox = styled('span')`
  box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0;
  img{
  position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;filter:blur(0);
  }
`
export default function DaoBanner() {

    return <BannerBox>
        <div className="w-full max-w-screen-2xl mx-auto">
            <div className="my-20 flex justify-center md:block relative h-80">
                <SpanBox>
                    <img alt="" src={aboutus?.CoverPhoto} className="duration-700 ease-in-out grayscale blur-2xl scale-110"/>
                </SpanBox>
                <div className="absolute w-40 h-40 md:left-10 -bottom-20 border-4 border-white rounded-full overflow-hidden">
                    <SpanBox>
                        <img alt="" src={aboutus?.Logo} className="duration-700 ease-in-out grayscale blur-2xl scale-110"/>
                    </SpanBox>
                </div>
                <div className="shadow-md border border-gray-100 text-center bg-white pl-4 pr-5 py-2 absolute -bottom-24 md:-bottom-20 md:left-36 rounded-full">
                    {aboutus?.Emoji}
                </div>
                <div
                    className="hidden absolute -bottom-20 right-10 md:flex justify-center items-center space-x-5 mx-10">
                    <div className="flex justify-center items-center -space-x-2">
                        {
                            [...Array(3)].map((item,index)=>(<a href="/BayBayLucky" key={`user_${index}`}>
                                <div className="relative shadow-lg inline-block w-10 h-10 border-2 border-white rounded-full overflow-hidden">
                                    <SpanBox>
                                        <span></span>
                                        <img alt="" src="/assets/images/demo/avatar.jpg" decoding="async" data-nimg="responsive" className="duration-700 ease-in-out grayscale blur-2xl scale-110" />
                                    </SpanBox>
                                </div>
                            </a>))
                        }
                        <button className="pl-4 whitespace-nowrap">+others</button>
                    </div>
                    <button className=" font-cal w-36 h-12 whitespace-nowrap tracking-wide text-lg border-2 rounded-full border-black
                                     bg-black text-white hover:bg-white hover:text-black
                                    transition-all ease duration-150">Join
                    </button>
                </div>
            </div>

        </div>

    </BannerBox>
}
