import styled from "styled-components";
import Layout from "../../components/layout";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {useDAO} from "../api/connect";
import api from "../api/api";

const Divbox = styled.div`
    .bgLinear{
        background-color: rgb(217, 175, 217); 
        background-image: linear-gradient(0deg, rgb(217, 175, 217) 0%, rgb(151, 217, 225) 100%);
    }
  @media (max-width: 1000px) {
    .mlr0{
      margin: 0!important ;
      padding: 0 1rem;
    }
  }
`

const ImgBox = styled.span`
    box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0; margin: 0; padding: 0; position: absolute; inset: 0;
    img{
      position: absolute; inset: 0; box-sizing: border-box; padding: 0; border: none; margin: auto; display: block; width: 0; height: 0; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;
    }
`

const PicBox = styled.span`
  box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;
  span{
    box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 80% 0px 0px;
  }
  img{
    position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;
  }
`
const Follow = styled.div`
  display: flex;
  justify-content: flex-start;
  div:first-child{
    margin-right: 20px;
  }
`;

export default function Mine(){
    const {  state } = useDAO();
    const { accessToken } = state;

    const router = useRouter();
    const { user } = router.query;

    const [ info, setInfo ] = useState();

    useEffect(()=>{
        if(accessToken ==null || !user) return;
        const getUserData = async () =>{
            const userData = await api.getUserInfo(accessToken,user);
            setInfo(userData)
        }

        const getRepo = async () =>{
            const info =await api.getDiscussions(accessToken);
            // setDiscussionInfo(info?.data?.repository.discussion);
        }
        getRepo();
        getUserData();
    },[user,accessToken])


    return <Divbox>
        <div className="w-full my-30">
            <div className="flex relative justify-center origin-bottom h-96 max-w-screen-2xl w-full mx-auto">
                <div className="w-full h-full md:rounded-3xl bgLinear" />
                <div className="absolute w-48 h-48 -bottom-20 border-8 border-white rounded-full overflow-hidden">
                <ImgBox>
                    <img src={info?.avatar_url}
                   className="duration-700 ease-in-out grayscale-0 blur-0 scale-100"
                 />
                </ImgBox>
                </div>
            </div>
            <div
                className="max-w-screen-2xl sm:w-11/12 w-full mx-auto md:my-44 my-32 grid lg:grid-cols-7 grid-cols-1 lg:gap-x-10 gap-y-10 lg:gap-y-0">
                <div className="lg:col-span-2 grid auto-rows-max">
                    <div className="lg:rounded-xl lg:shadow-xl border-t border-b lg:border border-gray-200 bg-white grid">
                        <div className="py-3 bg-gradient-to-r from-black via-gray-800 to-black text-center lg:rounded-t-xl">
                            <p className="text-white font-mono text-2xl tracking-widest">{info?.login}</p></div>
                        <div className="flex justify-end pt-5 pr-6">
                            <a href={info?.html_url} target="_blank" rel="noreferrer">
                                <img src="/assets/images/icons8-github.svg" alt=""/>
                            </a></div>
                        <div className="px-6 pb-10 min-w-0">
                            <h1 className="font-cal tracking-wide text-2xl sm:text-3xl truncate">{info?.name}</h1>
                            <p className="text-gray-700 font-medium text-lg sm:text-xl my-2 truncate pt-8">{info?.bio}</p>
                            <Follow>
                                <div className="text-gray-700"><span className="text-2xl">{info?.followers}</span>  followers</div>
                                <div className="text-gray-700"><span className="text-2xl">{info?.following}</span> following</div>
                            </Follow>

                        </div>
                    </div>
                </div>
                <div className="lg:col-span-5 lg:mx-auto mx-5 w-full mlr0">
                    <div className="flex space-x-10 mb-5 border-b border-gray-500">
                        <button className="flex items-center pb-4 border-b-2 border-black"><h2
                            className="text-xl font-medium">Joined</h2>
                            <div
                                className="flex items-center justify-center w-8 h-8 text-white text-md font-medium ml-2 bg-black rounded-full">1
                            </div>
                        </button>
                    </div>
                    <div className="grid gap-8 xl:grid-cols-3 sm:grid-cols-2 grid-cols-1">
                        <div className="not-prose">
                            <a href="/dao/developer">
                            <div
                                className="hidden sm:block rounded-2xl border-2 border-gray-100 shadow bg-white hover:shadow-xl hover:-translate-y-1 transition-all ease duration-200">
                                <div className="rounded-t-2xl overflow-hidden">
                                    <PicBox>
                                        <span />
                                        <img alt=""
                                             src="https://daocentral.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdaojones%2Fimage%2Fupload%2Fv1637755736%2FCleanShot_2021-11-24_at_04.08.33_pxl0kp.png&w=1920&q=75"
                                    className="duration-700 ease-in-out grayscale-0 blur-0 scale-100"/>
                                </PicBox>
                                </div>
                                <div className="py-6 px-5 h-36">
                                    <div className="flex justify-end"><p
                                        className="font-cal text-lg tracking-wide bg-white drop-shadow-lg border-gray-50 border-2 text-black px-5 py-2 rounded-full max-w-max -mt-12 mb-0">(🧱,
                                        🚀)</p></div>
                                    <h3 className="font-cal my-0 text-2xl font-bold tracking-wide truncate">Developer
                                        DAO</h3><p
                                    className="mt-3 text-gray-800 italic text-base leading-snug font-normal line-clamp-2">Build
                                    web3 with frens 🤝</p></div>
                            </div>
                            <div
                                className="sm:hidden overflow-hidden rounded-xl flex items-center md:h-48 h-36 border-2 border-gray-100 focus:border-black active:border-black bg-white transition-all ease duration-200">
                                <div className="w-2/5 relative h-full">
                                    <ImgBox><img
                                    alt=""
                                    src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdaojones%2Fimage%2Fupload%2Fv1637755736%2FCleanShot_2021-11-24_at_04.08.33_pxl0kp.png&amp;w=3840&amp;q=75"
                                    className="duration-700 ease-in-out grayscale-0 blur-0 scale-100" /></ImgBox>
                                </div>
                                <div className="py-6 px-5 w-3/5 relative"><h3
                                    className="font-cal my-0 text-xl sm:text-2xl font-bold tracking-wide truncate">Developer
                                    DAO</h3><p
                                    className="mt-3 text-gray-800 italic text-sm sm:text-base leading-snug font-normal line-clamp-2">Build
                                    web3 with frens 🤝</p></div>
                            </div>
                        </a></div>
                    </div>
                </div>
            </div>
        </div>
    </Divbox>
}

Mine.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}