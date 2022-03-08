import { Octokit } from '@octokit/rest';

import {useEffect, useState} from "react";
import {useDAO} from "../pages/api/connect";
import ItemDao from "./item";


export default function Homelist() {

    const {  state } = useDAO();
    const { accessToken } = state;
    const [ list,setList ] = useState([])

    useEffect(()=>{
        const octokit = new Octokit({});

        const getList = async () =>{
           const listArr =  await octokit.rest.issues.listForRepo({
                owner: "wendychaung",
                repo: "test-issue",
               // labels:"daopark"
            });
            setList(listArr.data)
        }
        getList()
    },[accessToken])


    return  <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-cal text-4xl mt-32 pb-5 mx-10">Popular DAOs</h2>
        <div className="grid grid-cols-1 gap-8 m-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
            {
                list.map((item,index)=> <ItemDao item={item} key={item.id}/>
              )
            }


     </div>
    </div>

}
