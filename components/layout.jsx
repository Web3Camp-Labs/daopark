import HeaderTop from "./headerTop";
import FooterBtm from "./footer";



export default function Layout({children}) {

    return<div>
            <HeaderTop />
            <div>{ children }</div>
            <FooterBtm />
        </div>

}
