import { Octokit } from '@octokit/rest';

import {useEffect, useState} from "react";
import {useDAO} from "../pages/api/connect";
import ItemDao from "./item";
import api from "../pages/api/api";
import styled from "styled-components";

const Box = styled.div`
  @media (max-width: 1000px) {
   .m-10{
     margin: 1rem!important ;
   }
    .mx-10{
     margin:2.5rem 1rem 1rem!important ;
   }
  }
`

export default function HomeList() {

    const {  state } = useDAO();
    const { accessToken, search } = state;
    const [ list,setList ] = useState([])
    const octokit = new Octokit({});

    useEffect(()=>{
        const getList = async () =>{
            const listInfo = await api.getListInfo();
            setList(listInfo)
            sessionStorage.setItem('list',JSON.stringify(listInfo));
        }
        getList();
    },[accessToken])

    useEffect(()=>{
        if( search == null ) return;
        // setList([]);
        const GetPrList = async() =>{
            // const listPr = await octokit.rest.search.issuesAndPullRequests({
            //     owner: "Web3-Camp",
            //     repo: "test-issue",
            //     q:`${search}+repo:Web3-Camp/test-issue+in:body+is:pr`,
            // });
            // setList(listPr?.data?.items)
            // console.log("========search=GetPrList=====",listPr.data.items)

        }
        GetPrList();

    },[search])


    return <Box>
        <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-cal text-4xl mt-32 pb-5 mx-10">Popular DAOs</h2>
            <div className="grid grid-cols-1 gap-8 m-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                {
                    !!list.length && list.map((item,index)=> <ItemDao item={item} key={item.DAOIndex}/>
                    )
                }

            </div>
        </div>
    </Box>

}
