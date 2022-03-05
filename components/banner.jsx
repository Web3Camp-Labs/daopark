import styled from "styled-components";

const BannerBox = styled('div')`
  .h50{
    height: 50px; transition: all 0.1s ease 0s;
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

    const handleInput = (e) =>{
        console.log(e.target.value)
    }
    return <BannerBox>
        <div className="relative h-150">
            <SpanBox>
                <img alt="Developer DAO" sizes="100vw" src="/assets/images/banner.png" decoding="async" data-nimg="fill" className="duration-700 ease-in-out grayscale-0 blur-0 scale-100"/>
            </SpanBox>
            <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-30">
                <h1 className="text-white -mt-10 mr-auto ml-10 sm:mx-auto w-3/4 sm:w-auto text-5xl font-cal tracking-wider">Find and learn about DAOs</h1>
                <div className="relative w-11/12 lg:w-2/3 max-w-2xl mt-10">
                    <div className="w-full absolute overflow-hidden rounded-md py-3 px-5 z-20 focus-within:shadow-lg bg-white h50" >
                        <div className="flex space-between w-full items-center">
                            <div className="flex flex-auto items-center">
                                <input className="w-full focus:outline-none text-lg font-cal tracking-wide text-gray-700 " placeholder="Search DAOs by name, emoji, slogan..." autoComplete="off" value="" onChange={e=>handleInput(e)}/></div>
                            <button className="hover:rotate-180 transition-all ease duration-200 hidden"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 px-10 sm:px-20 py-5 flex justify-between items-center w-full">
                <a className="text-gray-400 text-base sm:text-lg hover:text-gray-300 transition-all ease duration-150" href="/dao/developer">Developer DAO – <i>Accelerating the Education and Impact of a new wave of Web3 Builders.</i>
                </a>
                <a className="text-lg font-cal tracking-wide whitespace-nowrap bg-white border-gray-50 border-2 text-black px-5 py-2 rounded-full max-w-max hover:scale-105 transition-all ease duration-150" href="/dao/developer">(🧱, 🚀)
                </a>
            </div>
        </div>
    </BannerBox>
}
