import styled from "styled-components";


const SpanBox = styled('span')`
  box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0;
  img{
  position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;filter:blur(0);
  }
`

const Astyle1 = styled('a')`
  color: rgb(29,161,242); font-weight:normal; text-decoration: none
`

export default function Tweets() {
    return <div className="bg-white md:rounded-lg w-full p-8 mb-12">
        <h2 className="font-cal text-3xl">Latest Tweets</h2>
        <div className="undefined tweet rounded-lg border border-gray-300 dark:border-gray-800 bg-white px-8 pt-6 pb-2 my-4 w-full">
            <div className="flex items-center">
                <a className="flex h-12 w-12 rounded-full overflow-hidden relative" href="https://twitter.com/FWBtweets" target="_blank" rel="noopener noreferrer">
                    <SpanBox>
                        <img alt="" src="/assets/images/demo/avatar.jpg"/>
                    </SpanBox>
                </a>

                <a href="https://twitter.com/FWBtweets" target="_blank" rel="noopener noreferrer" className="author flex flex-col ml-4 !no-underline">
                    <span className="flex items-center font-bold !text-gray-900 dark:!text-gray-100 leading-5 mt-1" title="Friends With Benefits ($FWB) 🫂">Friends With Benefits ($FWB) 🫂</span>
                    <span className="!text-gray-500 text-base" title="@FWBtweets">@FWBtweets</span>
                </a>
                <a className="ml-auto" href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/twitterBlue.svg" alt=""/>
                </a>
            </div>


            <div
                className="mt-4 mb-2 leading-normal whitespace-pre-wrap text-lg !text-gray-700 dark:!text-gray-300">looks
                like discord is down. this is now nft-general-chat
            </div>
            <a className="block mt-3 mb-4 !text-gray-500 text-base hover:!underline !no-underline"
               href="https://twitter.com/FWBtweets/status/1486426204022317060" target="_blank"
               rel="noopener noreferrer">
                <time title="Time Posted: Wed, 26 Jan 2022 19:49:58 GMT" dateTime="2022-01-26T19:49:58.000Z">3:49 AM -
                    Jan 27, 2022
                </time>
            </a>
            <div
                className="border-t border-gray-300 pt-1 flex space-x-2 md:space-x-6 text-base !text-gray-700 dark:!text-gray-300 mt-2">
                <a className="flex items-center !text-gray-500 group transition !no-underline space-x-1"
                   href="https://twitter.com/intent/like?tweet_id=1486426204022317060" target="_blank"
                   rel="noopener noreferrer">
                    <div
                        className="group-hover:!text-red-600 rounded-full w-10 h-10 group-hover:bg-red-100 flex items-center justify-center">
                        <img src="/assets/images/heart.svg" alt=""/>
                    </div>
                    <span className="group-hover:!text-red-600 group-hover:!underline">235</span></a><a
                className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1"
                href="https://twitter.com/intent/retweet?tweet_id=1486426204022317060" target="_blank"
                rel="noopener noreferrer">
                <div
                    className="group-hover:!text-purple-600 rounded-full w-10 h-10 group-hover:bg-purple-100 flex items-center justify-center">
                    <img src="/assets/images/refresh.svg" alt=""/>
                </div>
                <span className="group-hover:!text-purple-600 group-hover:!underline">6</span></a><a
                className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1"
                href="https://twitter.com/intent/tweet?in_reply_to=1486426204022317060" target="_blank"
                rel="noopener noreferrer">
                <div
                    className="group-hover:!text-[#1da1f2] rounded-full w-10 h-10 group-hover:bg-blue-100 flex items-center justify-center">
                    <img src="/assets/images/chat.svg" alt=""/>
                </div>
                <span className="group-hover:!text-[#1da1f2] group-hover:!underline">33</span></a>
                <button className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1">
                    <div
                        className="group-hover:!text-green-600 rounded-full w-10 h-10 group-hover:bg-green-100 flex items-center justify-center">
                        <img src="/assets/images/link2.svg" alt=""/>
                    </div>
                    <span className="group-hover:!text-green-600 group-hover:!underline sm:block hidden">Copy link to Tweet</span>
                </button>
            </div>
        </div>
        <div className="undefined tweet rounded-lg border border-gray-300 dark:border-gray-800 bg-white px-8 pt-6 pb-2 my-4 w-full">
            <div className="flex items-center">
                <a className="flex h-12 w-12 rounded-full overflow-hidden relative" href="https://twitter.com/FWBtweets" target="_blank" rel="noopener noreferrer">
                    <SpanBox>
                        <img alt="" src="/assets/images/demo/avatar.jpg"/>
                    </SpanBox>
                </a>

                <a href="https://twitter.com/FWBtweets" target="_blank" rel="noopener noreferrer" className="author flex flex-col ml-4 !no-underline">
                    <span className="flex items-center font-bold !text-gray-900 dark:!text-gray-100 leading-5 mt-1" title="Friends With Benefits ($FWB) 🫂">Friends With Benefits ($FWB) 🫂</span>
                    <span className="!text-gray-500 text-base" title="@FWBtweets">@FWBtweets</span>
                </a>
                <a className="ml-auto" href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/twitterBlue.svg" alt=""/>
                </a>
            </div>


            <div
                className="mt-4 mb-2 leading-normal whitespace-pre-wrap text-lg !text-gray-700 dark:!text-gray-300">looks
                like discord is down. this is now nft-general-chat
            </div>
            <a className="block mt-3 mb-4 !text-gray-500 text-base hover:!underline !no-underline"
               href="https://twitter.com/FWBtweets/status/1486426204022317060" target="_blank"
               rel="noopener noreferrer">
                <time title="Time Posted: Wed, 26 Jan 2022 19:49:58 GMT" dateTime="2022-01-26T19:49:58.000Z">3:49 AM -
                    Jan 27, 2022
                </time>
            </a>
            <div
                className="border-t border-gray-300 pt-1 flex space-x-2 md:space-x-6 text-base !text-gray-700 dark:!text-gray-300 mt-2">
                <a className="flex items-center !text-gray-500 group transition !no-underline space-x-1"
                   href="https://twitter.com/intent/like?tweet_id=1486426204022317060" target="_blank"
                   rel="noopener noreferrer">
                    <div
                        className="group-hover:!text-red-600 rounded-full w-10 h-10 group-hover:bg-red-100 flex items-center justify-center">
                        <img src="/assets/images/heart.svg" alt=""/>
                    </div>
                    <span className="group-hover:!text-red-600 group-hover:!underline">235</span></a><a
                className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1"
                href="https://twitter.com/intent/retweet?tweet_id=1486426204022317060" target="_blank"
                rel="noopener noreferrer">
                <div
                    className="group-hover:!text-purple-600 rounded-full w-10 h-10 group-hover:bg-purple-100 flex items-center justify-center">
                    <img src="/assets/images/refresh.svg" alt=""/>
                </div>
                <span className="group-hover:!text-purple-600 group-hover:!underline">6</span></a><a
                className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1"
                href="https://twitter.com/intent/tweet?in_reply_to=1486426204022317060" target="_blank"
                rel="noopener noreferrer">
                <div
                    className="group-hover:!text-[#1da1f2] rounded-full w-10 h-10 group-hover:bg-blue-100 flex items-center justify-center">
                    <img src="/assets/images/chat.svg" alt=""/>
                </div>
                <span className="group-hover:!text-[#1da1f2] group-hover:!underline">33</span></a>
                <button className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1">
                    <div
                        className="group-hover:!text-green-600 rounded-full w-10 h-10 group-hover:bg-green-100 flex items-center justify-center">
                        <img src="/assets/images/link2.svg" alt=""/>
                    </div>
                    <span className="group-hover:!text-green-600 group-hover:!underline sm:block hidden">Copy link to Tweet</span>
                </button>
            </div>
        </div>
        <div className="undefined tweet rounded-lg border border-gray-300 dark:border-gray-800 bg-white px-8 pt-6 pb-2 my-4 w-full">
            <div className="flex items-center">
                <a className="flex h-12 w-12 rounded-full overflow-hidden relative" href="https://twitter.com/FWBtweets" target="_blank" rel="noopener noreferrer">
                    <SpanBox>
                        <img alt="" src="/assets/images/demo/avatar.jpg"/>
                    </SpanBox>
                </a>

                <a href="https://twitter.com/FWBtweets" target="_blank" rel="noopener noreferrer" className="author flex flex-col ml-4 !no-underline">
                    <span className="flex items-center font-bold !text-gray-900 dark:!text-gray-100 leading-5 mt-1" title="Friends With Benefits ($FWB) 🫂">Friends With Benefits ($FWB) 🫂</span>
                    <span className="!text-gray-500 text-base" title="@FWBtweets">@FWBtweets</span>
                </a>
                <a className="ml-auto" href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/twitterBlue.svg" alt=""/>
                </a>
            </div>


            <div
                className="mt-4 mb-2 leading-normal whitespace-pre-wrap text-lg !text-gray-700 dark:!text-gray-300">looks
                like discord is down. this is now nft-general-chat
            </div>
            <a className="block mt-3 mb-4 !text-gray-500 text-base hover:!underline !no-underline"
               href="https://twitter.com/FWBtweets/status/1486426204022317060" target="_blank"
               rel="noopener noreferrer">
                <time title="Time Posted: Wed, 26 Jan 2022 19:49:58 GMT" dateTime="2022-01-26T19:49:58.000Z">3:49 AM -
                    Jan 27, 2022
                </time>
            </a>
            <div
                className="border-t border-gray-300 pt-1 flex space-x-2 md:space-x-6 text-base !text-gray-700 dark:!text-gray-300 mt-2">
                <a className="flex items-center !text-gray-500 group transition !no-underline space-x-1"
                   href="https://twitter.com/intent/like?tweet_id=1486426204022317060" target="_blank"
                   rel="noopener noreferrer">
                    <div
                        className="group-hover:!text-red-600 rounded-full w-10 h-10 group-hover:bg-red-100 flex items-center justify-center">
                        <img src="/assets/images/heart.svg" alt=""/>
                    </div>
                    <span className="group-hover:!text-red-600 group-hover:!underline">235</span></a><a
                className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1"
                href="https://twitter.com/intent/retweet?tweet_id=1486426204022317060" target="_blank"
                rel="noopener noreferrer">
                <div
                    className="group-hover:!text-purple-600 rounded-full w-10 h-10 group-hover:bg-purple-100 flex items-center justify-center">
                    <img src="/assets/images/refresh.svg" alt=""/>
                </div>
                <span className="group-hover:!text-purple-600 group-hover:!underline">6</span></a><a
                className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1"
                href="https://twitter.com/intent/tweet?in_reply_to=1486426204022317060" target="_blank"
                rel="noopener noreferrer">
                <div
                    className="group-hover:!text-[#1da1f2] rounded-full w-10 h-10 group-hover:bg-blue-100 flex items-center justify-center">
                    <img src="/assets/images/chat.svg" alt=""/>
                </div>
                <span className="group-hover:!text-[#1da1f2] group-hover:!underline">33</span></a>
                <button className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1">
                    <div
                        className="group-hover:!text-green-600 rounded-full w-10 h-10 group-hover:bg-green-100 flex items-center justify-center">
                        <img src="/assets/images/link2.svg" alt=""/>
                    </div>
                    <span className="group-hover:!text-green-600 group-hover:!underline sm:block hidden">Copy link to Tweet</span>
                </button>
            </div>
        </div>
        <div className="undefined tweet rounded-lg border border-gray-300 dark:border-gray-800 bg-white px-8 pt-6 pb-2 my-4 w-full">
            <div className="flex items-center">
                <a className="flex h-12 w-12 rounded-full overflow-hidden relative" href="https://twitter.com/FWBtweets" target="_blank" rel="noopener noreferrer">
                    <SpanBox>
                        <img alt="" src="/assets/images/demo/avatar.jpg"/>
                    </SpanBox>
                </a>

                <a href="https://twitter.com/FWBtweets" target="_blank" rel="noopener noreferrer" className="author flex flex-col ml-4 !no-underline">
                    <span className="flex items-center font-bold !text-gray-900 dark:!text-gray-100 leading-5 mt-1" title="Friends With Benefits ($FWB) 🫂">Friends With Benefits ($FWB) 🫂</span>
                    <span className="!text-gray-500 text-base" title="@FWBtweets">@FWBtweets</span>
                </a>
                <a className="ml-auto" href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/twitterBlue.svg" alt=""/>
                </a>
            </div>


            <div
                className="mt-4 mb-2 leading-normal whitespace-pre-wrap text-lg !text-gray-700 dark:!text-gray-300">looks
                like discord is down. this is now nft-general-chat
            </div>
            <a className="block mt-3 mb-4 !text-gray-500 text-base hover:!underline !no-underline"
               href="https://twitter.com/FWBtweets/status/1486426204022317060" target="_blank"
               rel="noopener noreferrer">
                <time title="Time Posted: Wed, 26 Jan 2022 19:49:58 GMT" dateTime="2022-01-26T19:49:58.000Z">3:49 AM -
                    Jan 27, 2022
                </time>
            </a>
            <div
                className="border-t border-gray-300 pt-1 flex space-x-2 md:space-x-6 text-base !text-gray-700 dark:!text-gray-300 mt-2">
                <a className="flex items-center !text-gray-500 group transition !no-underline space-x-1"
                   href="https://twitter.com/intent/like?tweet_id=1486426204022317060" target="_blank"
                   rel="noopener noreferrer">
                    <div
                        className="group-hover:!text-red-600 rounded-full w-10 h-10 group-hover:bg-red-100 flex items-center justify-center">
                        <img src="/assets/images/heart.svg" alt=""/>
                    </div>
                    <span className="group-hover:!text-red-600 group-hover:!underline">235</span></a><a
                className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1"
                href="https://twitter.com/intent/retweet?tweet_id=1486426204022317060" target="_blank"
                rel="noopener noreferrer">
                <div
                    className="group-hover:!text-purple-600 rounded-full w-10 h-10 group-hover:bg-purple-100 flex items-center justify-center">
                    <img src="/assets/images/refresh.svg" alt=""/>
                </div>
                <span className="group-hover:!text-purple-600 group-hover:!underline">6</span></a><a
                className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1"
                href="https://twitter.com/intent/tweet?in_reply_to=1486426204022317060" target="_blank"
                rel="noopener noreferrer">
                <div
                    className="group-hover:!text-[#1da1f2] rounded-full w-10 h-10 group-hover:bg-blue-100 flex items-center justify-center">
                    <img src="/assets/images/chat.svg" alt=""/>
                </div>
                <span className="group-hover:!text-[#1da1f2] group-hover:!underline">33</span></a>
                <button className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1">
                    <div
                        className="group-hover:!text-green-600 rounded-full w-10 h-10 group-hover:bg-green-100 flex items-center justify-center">
                        <img src="/assets/images/link2.svg" alt=""/>
                    </div>
                    <span className="group-hover:!text-green-600 group-hover:!underline sm:block hidden">Copy link to Tweet</span>
                </button>
            </div>
        </div>
        <div className="undefined tweet rounded-lg border border-gray-300 dark:border-gray-800 bg-white px-8 pt-6 pb-2 my-4 w-full">
            <div className="flex items-center">
                <a className="flex h-12 w-12 rounded-full overflow-hidden relative" href="https://twitter.com/FWBtweets" target="_blank" rel="noopener noreferrer">
                    <SpanBox>
                        <img alt="" src="/assets/images/demo/avatar.jpg"/>
                    </SpanBox>
                </a>

                <a href="https://twitter.com/FWBtweets" target="_blank" rel="noopener noreferrer" className="author flex flex-col ml-4 !no-underline">
                    <span className="flex items-center font-bold !text-gray-900 dark:!text-gray-100 leading-5 mt-1" title="Friends With Benefits ($FWB) 🫂">Friends With Benefits ($FWB) 🫂</span>
                    <span className="!text-gray-500 text-base" title="@FWBtweets">@FWBtweets</span>
                </a>
                <a className="ml-auto" href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/twitterBlue.svg" alt=""/>
                </a>
            </div>


            <div
                className="mt-4 mb-2 leading-normal whitespace-pre-wrap text-lg !text-gray-700 dark:!text-gray-300">looks
                like discord is down. this is now nft-general-chat
            </div>
            <a className="block mt-3 mb-4 !text-gray-500 text-base hover:!underline !no-underline"
               href="https://twitter.com/FWBtweets/status/1486426204022317060" target="_blank"
               rel="noopener noreferrer">
                <time title="Time Posted: Wed, 26 Jan 2022 19:49:58 GMT" dateTime="2022-01-26T19:49:58.000Z">3:49 AM -
                    Jan 27, 2022
                </time>
            </a>
            <div
                className="border-t border-gray-300 pt-1 flex space-x-2 md:space-x-6 text-base !text-gray-700 dark:!text-gray-300 mt-2">
                <a className="flex items-center !text-gray-500 group transition !no-underline space-x-1"
                   href="https://twitter.com/intent/like?tweet_id=1486426204022317060" target="_blank"
                   rel="noopener noreferrer">
                    <div
                        className="group-hover:!text-red-600 rounded-full w-10 h-10 group-hover:bg-red-100 flex items-center justify-center">
                        <img src="/assets/images/heart.svg" alt=""/>
                    </div>
                    <span className="group-hover:!text-red-600 group-hover:!underline">235</span></a><a
                className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1"
                href="https://twitter.com/intent/retweet?tweet_id=1486426204022317060" target="_blank"
                rel="noopener noreferrer">
                <div
                    className="group-hover:!text-purple-600 rounded-full w-10 h-10 group-hover:bg-purple-100 flex items-center justify-center">
                    <img src="/assets/images/refresh.svg" alt=""/>
                </div>
                <span className="group-hover:!text-purple-600 group-hover:!underline">6</span></a><a
                className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1"
                href="https://twitter.com/intent/tweet?in_reply_to=1486426204022317060" target="_blank"
                rel="noopener noreferrer">
                <div
                    className="group-hover:!text-[#1da1f2] rounded-full w-10 h-10 group-hover:bg-blue-100 flex items-center justify-center">
                    <img src="/assets/images/chat.svg" alt=""/>
                </div>
                <span className="group-hover:!text-[#1da1f2] group-hover:!underline">33</span></a>
                <button className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1">
                    <div
                        className="group-hover:!text-green-600 rounded-full w-10 h-10 group-hover:bg-green-100 flex items-center justify-center">
                        <img src="/assets/images/link2.svg" alt=""/>
                    </div>
                    <span className="group-hover:!text-green-600 group-hover:!underline sm:block hidden">Copy link to Tweet</span>
                </button>
            </div>
        </div>

    </div>

}
