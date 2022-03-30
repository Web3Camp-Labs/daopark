import Link from "next/link";
import styled from "styled-components";
import {useEffect, useState} from "react";
import api from "../../pages/api/api";
import {Octokit} from "@octokit/rest";
import {useDAO} from "../../pages/api/connect";

const Box = styled.div`
display: flex;
`

const SpanBox = styled('span')`
  box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0;
  img{
  position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;filter:blur(0);
  }
`

export default function Users(){
    const {  state } = useDAO();
    const { info, accessToken } = state;
    const [discussionInfo, setDiscussionInfo ] = useState(null);
    const [userList, setUserList ] = useState([]);
    useEffect(()=>{
        if(accessToken==null)return;

        const getRepo = async () =>{
            const info =await api.getDiscussion(accessToken,65);
            setDiscussionInfo(info?.data?.repository.discussion);
        }
        getRepo();
    },[accessToken])

    const UniqueArr = (objArr) =>{
        let obj ={};
        return objArr.reduce((cur,next) => {
            if(next.node.body!== "I\tJoined") return cur;
            obj[next.node.author.login] ? "" : obj[next.node.author.login] = true && cur.push(next);
            return cur;
        },[])
    }

    useEffect(()=>{
        if(discussionInfo==null)return;
        const userArr = UniqueArr(discussionInfo?.comments.edges);
        setUserList(userArr);
    },[discussionInfo])

    const handleJoin = () =>{

        const discussionId = "D_kwDOG8j77s4APEMA";
        const body = "I\tJoined";

        api.addComment(accessToken,discussionId,body);
        window.location.reload()
    }

    return <Box>
        <div className="flex justify-center items-center -space-x-2">
            {
                userList.map((item,index)=>(<Link href={`/${item.node.author.login}`} key={`user_${index}`} passHref>
                    <div className="relative shadow-lg inline-block w-10 h-10 border-2 border-white rounded-full overflow-hidden">
                        <SpanBox>
                            <span />
                            <img alt="" src={item.node.author.avatarUrl} decoding="async" data-nimg="responsive" className="duration-700 ease-in-out grayscale blur-2xl scale-110" />
                        </SpanBox>
                    </div>
                </Link>))
            }
            {
                userList.length >5 && <button className="pl-4 whitespace-nowrap">+ others</button>
            }

        </div>
        {
            info != null && accessToken != null &&<button className=" font-cal w-36 h-12 whitespace-nowrap tracking-wide text-lg border-2 rounded-full border-black bg-black text-white hover:bg-white hover:text-black transition-all ease duration-150 ml-5" onClick={()=>handleJoin()}>Join
            </button>
        }
    </Box>
}