import Head from "next/head";
import '../styles/globals.css'
import { DAOContextProvider } from "./api/connect";

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page);


  return   <>
    <Head>
      <title>DAO Park</title>
      <meta name="description" content="DAO park is a collection of DAOs, that you can submit your DAO's information and get exposure to all the involvers in Web 3.0.

" />
      {/*<link rel="icon" href="./favicon.ico" />*/}
    </Head>
    <DAOContextProvider>
      {getLayout(<Component {...pageProps} />)}
    </DAOContextProvider>

  </>
}

export default MyApp
