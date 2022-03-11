import styled from "styled-components";

import {useEffect,useState} from "react";
import ItemDao from "../item";

const Box = styled.div`
  @media (max-width: 1000px) {
   .m-10{
     margin: 1rem!important ;
   }
    .mx-10{
      margin:1rem!important ;
    }
  }
`

export default function DaoList() {
    const [list, setList] = useState([]);

    useEffect(()=>{
        const list = sessionStorage.getItem('list');
        const ListArr = JSON.parse(list);
        let afterArr = getRandomArrayElements(ListArr, ListArr.length>8?8:ListArr.length);
        setList(afterArr);
    },[])

    const getRandomArrayElements = (arr, count) => {
        let shuffled = arr.slice(0);
        let i = arr.length;
        let min = i - count;
        let temp;
        let index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }

    return <Box>
        <div className="max-w-screen-2xl mx-auto">
            <h2 className="font-cal text-4xl mt-32 pb-5 mx-10">People who joined this DAO also joined</h2>
            <div className="grid grid-cols-1 gap-8 m-10 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                {
                    list.map((obj,index)=>(<ItemDao item={obj} key={obj.DAOIndex}/>))
                }
            </div>
        </div>
    </Box>


}
