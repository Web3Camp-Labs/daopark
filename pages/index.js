import Layout from "../components/layout";
import Banner from "../components/banner";

import HomeList from "../components/homelist";

export default function Home() {


    return (<div className="w-full my-24">
               <Banner />
               <HomeList />
           </div>
    )
}

Home.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
