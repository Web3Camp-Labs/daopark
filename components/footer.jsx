import aboutus from "../public/aboutus.json";
import styled from "styled-components";

const LinkBox = styled.a`
    display: flex;
  align-items: center;
  width:40rem;
  white-space: nowrap;
  img{
    margin-left: 30px;
  }
`

export default function FooterBtm() {
    const [ obj ] = aboutus;

    return   <footer className=" flex justify-between items-center h-20">
        <div className="flex justify-between items-center 2xl:w-1536 m-auto px-10 w-full ">
            <LinkBox className="text-gray-500 text-lg font-cal hover:text-black transition-all ease duration-150" href={`${obj.Blog}`} target="_blank" rel="noreferrer">Build by <img src="/assets/images/logoWeb3.png" alt=""/></LinkBox>
            <div className="flex space-x-8">
                <a href={`https://discord.com/invite/${obj.Discord}`} target="_blank" rel="noreferrer">
                    <img src="/assets/images/discord.svg" alt="" className="text-gray-500 hover:text-black transition-all ease duration-150"/>
                </a>
                <a href={`https://twitter.com/${obj.Twitter}`} target="_blank" rel="noreferrer">
                    <img src="/assets/images/twitter.svg" alt="" className="text-gray-500 hover:text-black transition-all ease duration-150" />
                </a>
                <a href={`https://github.com/${obj.Github}`} target="_blank" rel="noreferrer">
                    <img src="/assets/images/github.svg" alt="" className="text-gray-500 hover:text-black transition-all ease duration-150" />
                </a>
            </div>
        </div>
    </footer>
}
