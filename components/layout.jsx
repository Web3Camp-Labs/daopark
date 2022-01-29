import styled from "styled-components";

import HeaderTop from "./headerTop";
import FooterBtm from "./footer";


const Maincontent = styled('main')`
  
`


export default function Layout({children}) {

    return<div>
            <HeaderTop></HeaderTop>
            <Maincontent>{ children }</Maincontent>
            <FooterBtm></FooterBtm>
        </div>

}
