import aboutus from "../public/aboutus.json";

export default function FooterBtm() {
    const [ obj ] = aboutus;

    return   <footer className="border-t flex justify-between items-center h-20">
        <div className="flex justify-between items-center 2xl:w-1536 m-auto px-10 w-full ">
            <a className="text-gray-500 text-lg font-cal hover:text-black transition-all ease duration-150" href={`/${obj.blog}`}>Blog</a>
            <div className="flex space-x-8">
                <a href={`https://discord.com/invite/${obj.Discord}`} target="_blank" rel="noreferrer">
                    <img src="/assets/images/discord.svg" alt="" className="text-gray-500 hover:text-black transition-all ease duration-150"/>
                </a>
                <a href={`https://twitter.com/${obj.Twitter}`} target="_blank" rel="noreferrer">
                    <img src="/assets/images/twitter.svg" alt="" className="text-gray-500 hover:text-black transition-all ease duration-150" />
                </a>
            </div>
        </div>
    </footer>
}
