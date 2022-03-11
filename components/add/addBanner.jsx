import styled from "styled-components";

const Box = styled('div')`
  .clipBox{
  clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%);-webkit-clip-path:polygon(10% 0, 100% 0%, 100% 100%, 0 100%)
  }
`
const SpanBox = styled('span')`
    box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;
    span{
      box-sizing:border-box;display:block;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;padding-top:75%
    }
    img{
        position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;
        filter:blur(0);           
    }
`
export default function AddBanner() {
    return  <Box>
        <div className="flex flex-col-reverse lg:flex-row sm:mx-24 mx-10 lg:space-x-12 space-x-0 lg:space-y-0 space-y-12 space-y-reverse">
            <div className="mt-auto">
                <a className="bg-gray-100 text-black px-5 py-2 rounded-full max-w-max hover:bg-gray-200 transition-all ease duration-150"
                href="/introduction">What is a DAO?</a>
                <h1 className="font-cal text-6xl sm:text-7xl md:text-8xl my-5">Add a DAO</h1>
                <p className="text-gray-800 text-lg w-80 sm:w-96">Have a DAO that you&#x27;d like to add? Fill out
                    the form below and we will get it added to the database.</p>
            </div>
            <div className="flex-auto clipBox">
                <SpanBox>
                    <span></span>
                    <img alt="DAO Gif" src="/assets/images/dao.gif" className="duration-700 ease-in-out grayscale blur-2xl scale-110"/>
                </SpanBox>
            </div>
        </div>
    </Box>
}
