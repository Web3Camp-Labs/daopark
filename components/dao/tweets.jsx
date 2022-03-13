import styled from "styled-components";
import {useEffect,useState} from "react";
import api from "../../pages/api/api";
import githubConfig from "../../public/githubConfig";

const SpanBox = styled('span')`
  box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0;
  img{
  position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;filter:blur(0);
  }
`
//
// const Astyle1 = styled('a')`
//   color: rgb(29,161,242); font-weight:normal; text-decoration: none
// `

const ImgBox = styled.span`
  box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;
  span{
    box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;
  }
  .img1{
    display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;
  }
  .img2{
    position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;
  }
`

export default function Tweets() {

    const [ list ,setList ] = useState([]);
    const [ mediaList,setMediaList ] = useState([]);
    const [ userList,setUserList ] = useState([]);

    useEffect(()=>{
        const getTwitter = async() =>{
            const twitterID = await api.getTwitterID(githubConfig.TwitterName);
            console.log("==twitterID===",twitterID)
            const listArr = await api.getTwitterList(twitterID.data[0].id)
            const { data, includes} = listArr;
            setList(data)
            const { media, users} = includes;
            setMediaList(media);
            setUserList(users);
            console.log("=======listArr====",listArr)
        }
        getTwitter();
    },[]);

    const formatUser = (userid) =>{
        const userArr = userList.filter(item=>item.id === userid);
        return userArr[0];
    }
    const formateDate = (date)=>{
        const dateStr = new Date(date).toLocaleDateString();
        const timeStr = new Date(date).toLocaleTimeString();
        return `${timeStr} - ${dateStr}`
    }

    const formatText = (text,item) =>{
        if(item.entities){
            return text.split("https://t.co")[0];
        }else{
            return text
        }

    }

    return <div className="bg-white md:rounded-lg w-full p-8 mb-12">
        <h2 className="font-cal text-3xl">Latest Tweets</h2>
        {
            list.map((item)=>(<div className="undefined tweet rounded-lg border border-gray-300 dark:border-gray-800 bg-white px-8 pt-6 pb-2 my-4 w-full" key={item.id}>
                <div className="flex items-center">
                    <a className="flex h-12 w-12 rounded-full overflow-hidden relative" href="https://twitter.com/FWBtweets" target="_blank" rel="noopener noreferrer">
                        <SpanBox>
                            <img alt="" src={formatUser(item.author_id)?.profile_image_url}/>
                        </SpanBox>
                    </a>

                    <a href={`https://twitter.com/${formatUser(item.author_id)?.username}`} target="_blank" rel="noopener noreferrer" className="author flex flex-col ml-4 !no-underline">
                        <span className="flex items-center font-bold !text-gray-900 dark:!text-gray-100 leading-5 mt-1" title={formatUser(item.author_id)?.name}>{formatUser(item.author_id)?.name}</span>
                        <span className="!text-gray-500 text-base" title={`@${formatUser(item.author_id)?.username}`}>@{formatUser(item.author_id)?.username}</span>
                    </a>
                    <a className="ml-auto" href={`https://twitter.com/${formatUser(item.author_id)?.username}/status/${item.conversation_id}`} target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/twitterBlue.svg" alt=""/>
                    </a>
                </div>
                <div className="mt-4 mb-2 leading-normal whitespace-pre-wrap text-lg !text-gray-700 dark:!text-gray-300">
                    {formatText(item.text,item)}
                </div>
                <div className="rounded-2xl overflow-hidden border border-gray-200 drop-shadow-sm mb-5">
                    <ImgBox >
                        <span>
                            <img alt="" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%272048%27%20height=%271000%27/%3e" className="img1"/>
                        </span>
                        <img alt="" src="/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fnews_img%2F1501624224569516035%2FlTq_dKiN%3Fformat%3Dpng%26name%3Dorig&amp;w=3840&amp;q=75"
                    className="hover:brightness-90 transition-all ease-in-out duration-150 duration-700 ease-in-out grayscale-0 blur-0 scale-100 img2"/>
                    </ImgBox>

                </div>
                <a className="block mt-3 mb-4 !text-gray-500 text-base hover:!underline !no-underline"
                   href={`https://twitter.com/${formatUser(item.author_id)?.username}/status/${item.conversation_id}`} target="_blank"
                   rel="noopener noreferrer">
                    <time title={item.created_at} dateTime={item.created_at}>{formateDate(item.created_at)}
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
            </div>))
        }



    </div>

}
