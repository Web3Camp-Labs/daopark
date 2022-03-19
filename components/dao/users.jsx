import Link from "next/link";
import styled from "styled-components";
import {useEffect, useState} from "react";
import api from "../../pages/api/api";
import {Octokit} from "@octokit/rest";
import {useDAO} from "../../pages/api/connect";

const SpanBox = styled('span')`
  box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0;
  img{
  position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;filter:blur(0);
  }
`

export default function Users(){
    const {  state } = useDAO();
    const { accessToken } = state;

    useEffect(()=>{
        if(accessToken==null)return;

        const getRepo = async () =>{



            const aa =await api.getDiscussions(accessToken);

            console.log("======aa====",aa)
        }
        getRepo();










        // const aa =await octokit.rest.search.issuesAndPullRequests({
        //     owner: "Web3-Camp",
        //     repo: "test-issue",
        //     q:"twitter+repo:Web3-Camp/test-issue+in:body",
        // });
        // const octokit = new Octokit({
        //     auth: accessToken,
        // });
        // const GetDissussion = async () =>{
        //    // const aa = await octokit.rest.teams.createDiscussionInOrg({
        //    //      org:"Web3-Camp",
        //    //      team_slug:'test-issue',
        //    //      title:"title",
        //    //      body:"description",
        //    //  });
        //    const aa = await octokit.rest.orgs.get({
        //        org:"Web3-Camp",
        //    });
        //     console.log("====GetDissussion========",aa)
        // }
        // GetDissussion()
    },[accessToken])

    return <div>

        <div className="flex justify-center items-center -space-x-2">
            {
                [...Array(3)].map((item,index)=>(<Link href="/xrdavies" key={`user_${index}`}>
                    <div className="relative shadow-lg inline-block w-10 h-10 border-2 border-white rounded-full overflow-hidden">
                        <SpanBox>
                            <span />
                            <img alt="" src="/assets/images/demo/avatar.jpg" decoding="async" data-nimg="responsive" className="duration-700 ease-in-out grayscale blur-2xl scale-110" />
                        </SpanBox>
                    </div>
                </Link>))
            }
            <button className="pl-4 whitespace-nowrap">+others</button>
        </div>
    </div>
}