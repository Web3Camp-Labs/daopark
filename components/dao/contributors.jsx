import styled from "styled-components";
import {useEffect, useState} from "react";
import {Octokit} from "@octokit/rest";
import Router from "next/router";
import GithubConfig from "../../public/githubConfig";

const Box = styled.div`
    .boxBg{
      background-color: rgb(217, 175, 217); background-image: linear-gradient(0deg, rgb(217, 175, 217) 0%, rgb(151, 217, 225) 100%); border-top-left-radius: 0.5rem; border-top-right-radius: 0.5rem;
    }
`
const SpanBox = styled('span')`
 box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;
 span{
 box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;
 }
  .img1{
      display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;
  }
  .img2{
    position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;
  }
`

export default function Contributors(props) {

    const [ list, setList ] = useState([]);
    const { owner,repo } = GithubConfig;

    useEffect(()=>{
        const getContributors = async () =>{
            const octokit = new Octokit({});

            const listdata = await octokit.rest.repos.listContributors({
                owner,
                repo,
            });
            setList(listdata.data)
        }
        getContributors()
    },[])

    return <Box>
        <div className="bg-white md:rounded-lg w-full px-12 py-8 mb-12">
            <h2 className="font-cal text-3xl">Contributors</h2>
            <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                {
                    list.map(item=>( <a href={item.html_url} target="_blank" rel="noreferrer" key={item.id}>
                        <div className="relative flex flex-col items-center pb-8 rounded-lg border border-gray-200 group hover:shadow-xl transition-all">
                            <div className="w-full h-24 -mb-12 boxBg"  />
                            <div className="rounded-full overflow-hidden w-20 h-20 border-2 border-white bg-white">
                                <SpanBox >
                            <span>
                                <img src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2780%27%20height=%2780%27/%3e" className="img1"/>
                            </span>
                                    <img src={item.avatar_url}
                                         className="duration-700 ease-in-out grayscale-0 blur-0 scale-100 img2"/>
                                </SpanBox>
                            </div>
                            <div className="text-center w-5/6 mx-auto">
                                <p className="text-2xl font-cal text-black mb-3 truncate">{item.login}</p>
                                <p className="text-gray-600"> <span className="text-2xl">{item.contributions}</span> Contributions</p>
                            </div>
                        </div>
                    </a>))
                }

            </div>
        </div>
    </Box>
}
