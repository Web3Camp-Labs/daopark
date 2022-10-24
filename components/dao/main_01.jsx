import {useEffect, useState} from "react";
import styled from "styled-components";


const Box =  styled.div`
    padding-bottom: 150px;
  h2{
    margin-bottom: 8px;
    font-size: 35px;
    font-family: "PT-Mono-Bold";
    font-weight: bold;
    color: rgba(0,0,0,0.9000);
    line-height: 44px;
  }
  p{
    padding-top: 35px;
    font-family: "PTM55F";
  }
  article{
    width: 74%;
    &>div{
      margin-top: 35px;
      &:first-child{
        margin-top: 0;
      }
    }
  }
  @media (max-width: 1280px) {
    article{
      width: 90%;
    }
    &.px-12{
      padding: 20px;
    }
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

export default function Main01(props) {

    const { body } = props;
    const [ obj, setObj ] = useState(null);

    useEffect(()=>{
        if(!body)return;
        setObj(body)
    },[body])

    return <Box className="w-full px-12 mb-12 min-h-50" >
        <article>
            <div>
                <h2>Our Mission</h2>
                <LineBox><img src="/assets/images/decor.png" alt=""/></LineBox>
                <p>{obj?.Mission}</p>
            </div>
            <div>
                <h2>Our Values</h2>
                <LineBox><img src="/assets/images/decor.png" alt=""/></LineBox>
                <p>{obj?.Values}</p>
            </div>

        </article>
    </Box>
}
