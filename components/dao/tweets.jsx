import styled from "styled-components";
import {useEffect,useState} from "react";
import api from "../../pages/api/api";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Box = styled.div`
  .boxBgMiddle{
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }
  .noTop{
    border-top-color: transparent;
  }
  h2{
    margin-bottom: 8px;
    font-size: 40px;
    font-family: "PT-Mono-Bold";
    font-weight: bold;
    color: rgba(0,0,0,0.9000);
    line-height: 44px;
  }
  .topTitle{
    margin-bottom: 40px;
  }
  .boxBrdr{
    width: 94%;
  }
  .iconSVG{
    width: 24px;
  }
`

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
  box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;display: flex;
  justify-content: center;
  .img1{
    display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;
  }
  .img2{
    position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;
  }
`
const LineBox = styled.div`
    display: flex;
    align-items: center;
  justify-content: flex-start;
  margin-top: 8px;
  img{
    width: 133px!important;
    margin: 0;
  }
`

export default function Tweets(props) {

    const [ list ,setList ] = useState([]);
    const [ mediaList,setMediaList ] = useState([]);
    const [ userList,setUserList ] = useState([]);
    const [ showCopy,setShowCopy ] = useState([]);
    const { body } = props;
    const [ obj, setObj ] = useState(null);
    const [ showLoading,SetShowLoading] = useState(true);

    useEffect(()=>{
        if(!body)return;
        setObj(body)

        const getTwitter = async() =>{
            const twitterID = await api.getTwitterID(body.Twitter);
            if(!twitterID.data)return;
            SetShowLoading(true);
            const listArr = await api.getTwitterList(twitterID.data[0].id)
            if(listArr.meta.result_count === 0){
                SetShowLoading(false);
                return;
            }
            
            const { data, includes} = listArr;

            let arr = [];
            for (let i = 0; i < data.length; i++) {
                arr[i] = false;
            }
            setShowCopy([...arr])
            setList(data)
            const { media, users} = includes;
            setMediaList(media);
            setUserList(users);
            SetShowLoading(false);
        }
        getTwitter();
    },[]);

    const formatUser = (userid) =>{
        const userArr = userList.filter(item=>item.id === userid);
        return userArr[0];
    }
    const formatDate = (date)=>{
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
    const formatImg = (url)=>{
        const img = mediaList.filter(obj=>obj.media_key === url);
        return img[0]?.url;

    }

    const copyTweet = (index) =>{
        let arr = [...showCopy];
        arr[index] = true;
        setShowCopy([...arr]);
        setTimeout(()=>{
            let arrF = [...showCopy];
            arrF[index] = false;
            setShowCopy([...arrF]);

        },2000)
    }


    return <Box><div className="w-full p-8 mb-12 pb-24">
        <div className="topTitle">
            <h2 className="font-cal text-3xl">Latest Tweets</h2>
            <LineBox><img src="/assets/images/decor.png" alt=""/></LineBox>
        </div>

        {
            showLoading&&<div className="boxBgMiddle">
                <div className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin noTop" />
            </div>
        }
        {
            !showLoading&&!list.length &&   <div className="flex flex-col items-center justify-center">
                <div className="my-8 flex flex-col justify-center items-center">
                    <ImgBox>
                    <span>
                        <img alt="" src="/assets/images/noContent.png" />
                        </span>
                    </ImgBox>
                    <p className="font-cal text-2xl mt-10">No News Yet.</p>
                </div>
            </div>
        }
        {
            !showLoading&&!!list.length && list.map((item,index)=>(<div className="undefined tweet rounded-lg border border-gray-300 dark:border-gray-800 bg-white px-8 pt-6 pb-2 my-4 w-full boxBrdr" key={item.id}>
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
                {
                    !!item.attachments && item.attachments.media_keys.map(imgUrl=>(<div className="rounded-2xl overflow-hidden border border-gray-200 drop-shadow-sm mb-5" key={imgUrl}>
                        <ImgBox >

                            <img alt="" src={formatImg(imgUrl)}
                                 className="hover:brightness-90 transition-all ease-in-out duration-150 duration-700 ease-in-out grayscale-0 blur-0 scale-100 img1"/>
                        </ImgBox>
                    </div>))
                }
                <a className="block mt-3 mb-4 !text-gray-500 text-base hover:!underline !no-underline"
                   href={`https://twitter.com/${formatUser(item.author_id)?.username}/status/${item.conversation_id}`} target="_blank"
                   rel="noopener noreferrer">
                    <time title={item.created_at}>{formatDate(item.created_at)}
                    </time>
                </a>
                <div
                    className="border-t border-gray-300 pt-1 flex space-x-2 md:space-x-6 text-base !text-gray-700 dark:!text-gray-300 mt-2">
                    <a className="flex items-center !text-gray-500 group transition !no-underline space-x-1"
                       href={`https://twitter.com/intent/like?tweet_id=${item.conversation_id}`} target="_blank"
                       rel="noopener noreferrer">
                        <div
                            className="group-hover:!text-red-600 rounded-full w-10 h-10 group-hover:bg-red-100 flex items-center justify-center">
                            <img src="/assets/images/heart.svg" alt="" className="iconSVG"/>
                        </div>
                        <span className="group-hover:!text-red-600 group-hover:!underline">{item?.public_metrics.like_count}</span></a><a
                    className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1"
                    href={`https://twitter.com/intent/retweet?tweet_id=${item.conversation_id}`} target="_blank"
                    rel="noopener noreferrer">
                    <div
                        className="group-hover:!text-purple-600 rounded-full w-10 h-10 group-hover:bg-purple-100 flex items-center justify-center">
                        <img src="/assets/images/refresh.svg" alt="" className="iconSVG"/>
                    </div>
                    <span className="group-hover:!text-purple-600 group-hover:!underline">{item?.public_metrics.retweet_count}</span></a><a
                    className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1"
                    href={`https://twitter.com/intent/tweet?in_reply_to=${item.conversation_id}`} target="_blank"
                    rel="noopener noreferrer">
                    <div
                        className="group-hover:!text-[#1da1f2] rounded-full w-10 h-10 group-hover:bg-blue-100 flex items-center justify-center">
                        <img src="/assets/images/chat.svg" alt=""  className="iconSVG"/>
                    </div>
                    <span className="group-hover:!text-[#1da1f2] group-hover:!underline">{item?.public_metrics.reply_count}</span></a>
                    {
                        !showCopy[index]&&<button className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1">
                            <div
                                className="group-hover:!text-green-600 rounded-full w-10 h-10 group-hover:bg-green-100 flex items-center justify-center">
                                <img src="/assets/images/link2.svg" alt=""  className="iconSVG"/>
                            </div>
                            <CopyToClipboard text={`https://twitter.com/${formatUser(item.author_id)?.username}/status/${item.conversation_id}`}
                                             onCopy={() => copyTweet(index)}>
                                <span className="group-hover:!text-green-600 group-hover:!underline sm:block hidden" >Copy link to Tweet</span>
                            </CopyToClipboard>
                        </button>
                    }
                    {
                        showCopy[index] &&<button className="flex items-center mr-4 !text-gray-500 group transition !no-underline space-x-1">
                            <div
                                className="group-hover:!text-green-600 rounded-full w-10 h-10 group-hover:bg-green-100 flex items-center justify-center">
                                <img src="/assets/images/right.svg" alt=""/>
                            </div>
                            <span className="group-hover:!text-green-600 group-hover:!underline sm:block hidden" >Copied</span>
                        </button>
                    }

                </div>
            </div>))
        }



    </div>
    </Box>
}
