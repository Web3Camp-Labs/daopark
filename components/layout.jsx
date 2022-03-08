import styled from "styled-components";

import HeaderTop from "./headerTop";
import FooterBtm from "./footer";


const Maincontent = styled('main')`
  
`

export default function Layout({children}) {

    return<div>
            <HeaderTop />
            <Maincontent>{ children }</Maincontent>
            <FooterBtm />
        </div>

}
