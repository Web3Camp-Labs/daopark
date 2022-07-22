import {useEffect, useState} from "react";
import {useDAO} from "../pages/api/connect";
import ItemDao from "./item";
import api from "../pages/api/api";
import styled from "styled-components";
import aboutus from "../public/aboutus.json";
const Box = styled.div`
  .titleBox{
    font-family: "PT-Mono-Bold";
    padding-top: 1.2rem;
  }
  .noTop{
    border-top-color:transparent
  }
  @media (max-width: 1000px) {
   .m-10{
     margin: 1rem!important ;
   }
    .mx-10{
     margin:2.5rem 1rem 1rem!important ;
   }
  }
`
const FirstLine = styled.div`
    display: flex;
    align-items: center;
    margin-top:3rem;
    padding-left: 3rem;
    img{
      line-height: 0;
      height: 25px;
    }
`
export default function HomeList() {

    const {  state } = useDAO();
    const { accessToken, search } = state;
    const [ list,setList ] = useState([])
    const [ showLoading,SetShowLoading] = useState(false)

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
        SetShowLoading(true);
        const GetPrList = async() =>{
            const listInfo = await api.getListInfo();
           const arr = listInfo.filter(item=> item.Name.indexOf(search)>-1 || item.Mission.indexOf(search)>-1 || item.Slug.indexOf(search)>-1 || item.Tagline.indexOf(search)>-1 || item.Values.indexOf(search)>-1)
            setList([...arr]);
            SetShowLoading(false);
        }
        GetPrList();
    },[search])

    return <Box>
        <div className="max-w-screen-2xl mx-auto">
            <FirstLine>
                <img src="/assets/images/titleLft.png" alt=""/>
                <h2 className="font-cal text-4xl  pb-5 mx-10 titleBox">Hottest DAOs</h2>
                <img src="/assets/images/titleRht.png" alt=""/>
            </FirstLine>

            {
                showLoading&&<div className="boxBg">
                <div className="w-16 h-16 border-4 border-blue-400 border-solid rounded-full animate-spin noTop" />
                </div>
            }
            {
                !showLoading && <div className="grid grid-cols-1 gap-8 m-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                    {
                        search == null &&<ItemDao index={1} item={aboutus[0]}/>
                    }
                    {
                        !!list.length && list.map((item,index)=> <ItemDao index={index+2} item={item} key={item.DAOIndex}/>
                        )
                    }
                </div>
            }

        </div>
    </Box>
}
