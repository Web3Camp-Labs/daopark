import { Octokit } from '@octokit/rest';
import {useDAO} from "../../pages/api/connect";
import {useEffect, useState} from "react";
import githubObj  from '../../public/githubConfig'
import Modal from "../modal";
import styled from "styled-components";
import TipsModal from '../tipsModal';
import  Router from "next/router";
import { useDebounce } from 'use-debounce';
import api from "../../pages/api/api";
import aboutus from "../../public/aboutus.json";

const Box = styled('div')`
    margin-top:200px;
  .nameBox{
    font-family: "PT-Mono-Bold";
    padding-bottom: 20px;
  }
  .tipsBox{
    font-size: 20px;
    font-family: "PTM55F";
    font-weight: 400;
    color: #000000;
  }
  input,textarea,.text-lg,.text-md{
    font-family: "PTM55F";
  }
  .btnFalse, .btnSub{
    width: 180px;
    height: 61px;
  }
  .btnFalse{
    line-height:40px;
  }
  .btnSub{
    background: url("/assets/images/submitBtn.png");
    font-size: 20px;
    font-family: "PT-Mono-Bold";
    font-weight: bold;
    color: rgba(0,0,0,0.9000);
    line-height: 16px;
    padding-right: 15px;
  }
`

const ImgBox = styled.div`
  width: 15rem;
  height: 15rem;
  img{
    width: 100%;
    height: 100%;
  }
`
const CoverBox = styled.div`
  border-radius: 0.375rem;
  overflow: hidden;
  width: 100%;
  img{
    width: 100%;
  }
`
const ContentBox = styled('div')`
  margin-top: 62px;
  .midBox{
    background: url("/assets/images/contentBg.png") repeat-y;
    background-size: 100%;
    padding: 0 230px 50px;
  }
`
const FlexLine = styled('div')`
    display: flex;
    align-items: flex-end;
  .rhtTips{
    margin:0 0 5px 10px;
    font-size: 20px;
    font-family: "PTM55F";
    font-weight: 400;
    color: #000000;
    line-height: 23px;
  }
  .text-md{
    margin:17px 20px 0;
    line-height: 1em;
  }
`


export default function AddContent() {

    const {  state } = useDAO();
    const { accessToken } = state;

    const [ daoName, setDaoName ] = useState('');

    const [ slug, setSlug ] = useState('');
    const [slugValue] = useDebounce(slug, 1000);
    const [slugTip, setSlugTips] = useState(false);

    const [ tagline, setTagline ] = useState('');
    const [ mission, setMission ] = useState('');
    const [ values, setValues ] = useState('');
    // const [ emoji, setEmoji ] = useState('');
    const [ tokenSymbol, setTokenSymbol ] = useState('');
    const [ github, setGithub ] = useState('');

    const [ tokenAddress, setTokenAddress ] = useState('');
    const [addressValue] = useDebounce(tokenAddress, 1000);
    const [ website, setWebsite] = useState('');
    const [addressTip, setAddressTips] = useState(false);
    const [githubTips, setGithubTips] = useState(false);
    const [websiteTips, setWebsiteTips] = useState(false);
    const [githubValue] = useDebounce(github, 1000);
    const [websiteValue] = useDebounce(website, 1000);

    const [ logo, setLogo] = useState('');
    const [ cover, setCover] = useState('');
    const [ imgTit, setImgTit] = useState('');
    const [ showBox, setShowBox ] = useState(false);
    const [ showSuccess, setShowSuccess ] = useState(false);
    const [ twitter, setTwitter] = useState('');
    const [ discord, setDiscord] = useState('');
    const [ mirror, setMirror] = useState('');

    const [ email, setEmail] = useState('');
    const [listInfo, setListInfo] = useState([])


    const handleSubmit = async () =>{
        const bodyStr ={
            Name: daoName,
            Slug: slug,
            Github: github,
            Tagline: tagline,
            Mission: mission,
            Values: values,
            // Emoji: emoji,
            TokenSymbol: tokenSymbol,
            TokenContractAddress: tokenAddress,
            Logo: logo,
            CoverPhoto: cover,
            Twitter: twitter,
            Discord: discord,
            Mirror: mirror,
            Website: website,
            Email: email
        };
        const octokit = new Octokit({
            auth: accessToken,
        });
        const listdata = await octokit.rest.issues.create({
            owner: githubObj.org,
            repo: githubObj.repo,
            title: daoName,
            labels: ["daopark"],
            body: JSON.stringify(bodyStr,null,2)
        });
        if(listdata.status === 201){
            setShowSuccess(true)
            setTimeout(()=>{
                setShowSuccess(false)
                Router.push("/")
            },3000)
        }
    }


    const handleInput = (e,type) =>{
        const { value } = e.target;
        switch(type){
            case 'daoName':
                setDaoName(value);
                break;
            case 'slug':
                setSlug(value)
                break;
            case 'tagline':
                setTagline(value);
                break;
            case 'mission':
                setMission(value);
                break;
            case 'values':
                setValues(value);
                break;
            // case 'emoji':
            //     setEmoji(value);
            //     break;
            case 'tokenSymbol':
                setTokenSymbol(value);
                break;
            case 'tokenAddress':
                setTokenAddress(value);
                break;
            case 'logo':
                setLogo(value);
                break;
            case 'cover':
                setCover(value);
                break;
            case 'twitter':
                setTwitter(value);
                break;
            case 'discord':
                setDiscord(value);
                break;
            case 'mirror':
                setMirror(value);
                break;
            case 'website':
                setWebsite(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'Github':
                setGithub(value);
                break;
            default:break;
        }
    }
    const showImageBox = (type)=>{
        setShowBox(true)
        setImgTit(type)
    }
    const closeImageBox = () =>{
        setShowBox(false)
    }

    const handleImg = (obj,title) =>{
        setShowBox(false);
        if(title==="logo"){
            setLogo(obj)
        }else{
            setCover(obj)
        }
    }
    useEffect(()=>{
        const initInfo = async () =>{
            const listInfoArr = await api.getListInfo();
            setListInfo(listInfoArr)
        }
        initInfo()
    },[])

    useEffect(()=>{
        if(!slugValue) return;
        const SearchSlug = async () =>{
            const listArr = listInfo.filter(item=>item.Slug === slugValue);
            setSlugTips(!!listArr.length)
        }
        SearchSlug()
    },[slugValue])

    useEffect(()=>{
        if(!githubValue) return;
        const SearchGithub = async () =>{
            const listArr = listInfo.filter(item=>item.Github.toLowerCase() === githubValue.toLowerCase());
            setGithubTips(!!listArr.length)
        }
        SearchGithub()
    },[githubValue])

    useEffect(()=>{
        if(!websiteValue) return;
        const SearchWebsite = async () =>{
            const listArr = listInfo.filter(item=>item.Website.toLowerCase() === websiteValue.toLowerCase());
            setWebsiteTips(!!listArr.length)
        }
        SearchWebsite()
    },[websiteValue])

    // useEffect(()=>{
    //     if(!addressValue) return;
    //     const SearchAddress = async () =>{
    //         const listInfo = await api.getListInfo();
    //         const listArr = listInfo.filter(item=>item.TokenContractAddress === addressValue);
    //         setAddressTips(!!listArr.length)
    //     }
    //     SearchAddress()
    // },[addressValue])



    const ReturnDisabled = () =>{

        return !(daoName.length && slug.length && tagline.length && mission.length && values.length && logo.length  && cover.length  && github.length && website.length  )

    }

    return  <Box className="w-full max-w-screen-2xl mx-auto">
        <TipsModal show={showSuccess}/>
        <Modal close={closeImageBox} title={imgTit} show={showBox} handleImg={handleImg}/>
            <ContentBox>
                <div><img src="/assets/images/contentTop.png" alt=""/></div>

                <div className="midBox">
                    <div >
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-2xl font-medium text-gray-700 tracking-wide font-bold nameBox ">Name *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" maxLength="40" name="daoName" className="focus:ring-black focus:border-black flex-1 block w-full sm:text-lg  placeholder-gray-400 border-2 border-black rounded-lg " placeholder={aboutus[0].Name} value={daoName} onChange={e=>handleInput(e,'daoName')}/>
                            </div>
                            <div className="flex justify-end tipsBox  mb-6">{daoName.length}/40</div>
                        </div>
                    </div>
                    <div>
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-2xl text-gray-700 tracking-wide nameBox">Slug *</label>
                            <div className="mt-1 flex rounded-md shadow-sm mb-12">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-black border-2 bg-gray-50 text-gray-800 text-lg">{githubObj.baseUrl}/dao/</span>
                                <input type="text" name="slug" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-black border-2 placeholder-gray-400"
                                        placeholder={aboutus[0].Slug} value={slug} onChange={e=>handleInput(e,'slug')}/></div>
                            {
                                slugTip && <p className="pt-1 text-left text-red-500"><b>{githubObj.baseUrl}/dao/{slugValue}</b> is not available. Please choose a different slug.</p>
                            }

                        </div>
                    </div>
                    <div>
                        <label className="font-cal block text-2xl font-medium text-gray-700 tracking-wide nameBox">Tagline *</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <textarea maxLength="120" rows="2" name="tagline" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-black border-2 placeholder-gray-400" placeholder="Add a slogan or your mission statement"  value={tagline} onChange={e=>handleInput(e,'tagline')}/>
                        </div>
                        <div className="flex justify-end tipsBox mt-1 mb-6">{tagline.length}/120</div>
                    </div>
                    <div>
                        <label className="font-cal block text-2xl font-medium text-gray-700 nameBox">Mission *</label>
                        <div className="mt-1  mb-12">
                            <textarea name="mission" rows="3" className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-lg border border-black border-2 rounded-md placeholder-gray-400" placeholder="What&#x27;s your DAO&#x27;s mission/north stars?" value={mission} onChange={e=>handleInput(e,'mission')} />
                        </div>
                        {/*<div className="flex justify-end">Markdown supported.</div>*/}
                    </div>
                    <div>
                        <label htmlFor="values" className="font-cal block text-2xl font-medium text-gray-700 nameBox">Values *</label>
                        <div className="mt-1  mb-12">
                            <textarea name="values" rows="3" className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-lg border border-black border-2 rounded-md placeholder-gray-400" placeholder="What are your DAO&#x27;s values? List them out in bullet points. Use ** to bold text." value={values} onChange={e=>handleInput(e,'values')}/>
                        </div>
                        {/*<div className="flex justify-end">Markdown supported.</div>*/}
                    </div>
                    <div>
                        {/*<div className="col-span-1">*/}
                        {/*    <label className="font-cal block text-xl text-gray-700 tracking-wide">Emoji *</label>*/}
                        {/*    <div className="mt-1 flex rounded-md shadow-sm">*/}
                        {/*        <input type="text" name="emoji" className="font-cal focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400 tracking-wide" placeholder={aboutus[0].Emoji} value={emoji} onChange={e=>handleInput(e,'emoji')}/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="col-span-1">
                            <label className="font-cal block text-2xl text-gray-700 tracking-wide nameBox">Token Symbol</label>
                            <div className="mt-1 flex rounded-md shadow-sm  mb-12">
                                <input type="text" name="tokenSymbol" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-black border-2 placeholder-gray-400" placeholder={aboutus[0].TokenSymbol} value={tokenSymbol} onChange={e=>handleInput(e,'tokenSymbol')}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-span-3">
                            <label className="font-cal block text-2xl text-gray-700 tracking-wide nameBox">Token Contract Address </label>
                            <div className="mt-1 flex rounded-md shadow-sm mb-12">
                                <input type="text" name="tokenAddress" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-black border-2 placeholder-gray-400" placeholder={aboutus[0].TokenContractAddress} value={tokenAddress} onChange={e=>handleInput(e,'tokenAddress')}/>

                            </div>
                            {/*{*/}
                            {/*    addressTip && <p className="pt-1 text-left text-red-500"><b>{addressValue}</b> is not available. Please choose a different token contract address.</p>*/}
                            {/*}*/}
                        </div>
                    </div>
                    <div className="mb-12">
                        <label className="font-cal block text-2xl text-gray-700 nameBox">Logo *</label>

                        <FlexLine>
                            <button className="mt-1 flex w-60 h-60 justify-cente items-center border-2 border-gray-300 border-dashed rounded-md" onClick={()=>showImageBox('logo')}>
                                {
                                    !!logo &&<ImgBox><img src={logo} alt=""/></ImgBox>
                                }
                                {
                                    !logo &&
                                    <div className="text-center">
                                        <img src="/assets/images/picture.png" alt="" className="mx-auto text-gray-400"/>
                                        <p className="pl-1 text-md">
                                            <span className="text-black">Click here</span> to fill image url
                                        </p>

                                    </div>
                                }
                            </button>
                            <p className="text-xs rhtTips">PNG, JPG, GIF  (recommended size: 400px x 400px)</p>
                        </FlexLine>

                    </div>
                    <div>
                        <label className="font-cal block text-2xl text-gray-700 nameBox">Cover photo *</label>
                        <button className="mt-1 flex w-full justify-center  border-2 border-gray-300 border-dashed rounded-md mb-12 h-96 pt-24" onClick={()=>showImageBox('cover')}>

                            {
                                !!cover &&<CoverBox><img src={cover} alt=""/></CoverBox>
                            }
                            {
                                !cover && <div className="space-y-1 text-center px-6 pt-5 pb-6">
                                    <img src="/assets/images/picture.png" alt="" className="mx-auto text-gray-400"/>
                                    <p className="pl-1 text-md">
                                        <span className="text-black">Click here</span> to upload a file
                                    </p>
                                    <p className="text-md">PNG, JPG, GIF up (recommended size: 1200px x 630px)</p>
                                </div>
                            }

                        </button>
                    </div>
                    <div>
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-2xl text-gray-700 tracking-wide nameBox">Twitter</label>
                            <div className="mt-1 flex rounded-md shadow-sm mb-12">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-black border-2 bg-gray-50 text-gray-800 text-lg">@</span>
                                <input type="text" name="twitter" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-black border-2 placeholder-gray-400 tracking-wide"
                                placeholder={aboutus[0].Twitter} value={twitter} onChange={e=>handleInput(e,'twitter')}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-2xl text-gray-700 tracking-wide nameBox">Discord</label>
                            <div className="mt-1 flex rounded-md shadow-sm  mb-12">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-black border-2 bg-gray-50 text-gray-800 text-lg">discord.gg/</span>
                                <input type="text" name="discord" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-black border-2 placeholder-gray-400 tracking-wide" placeholder={aboutus[0].Discord} value={discord} onChange={e=>handleInput(e,'discord')}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-2xl text-gray-700 tracking-wide nameBox">Github *</label>
                            <div className="mt-1 flex rounded-md shadow-sm  mb-12">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-black border-2 bg-gray-50 text-gray-800 text-lg">https://github.com/</span>
                                <input type="text" name="slug" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-black border-2 placeholder-gray-400"
                                       placeholder={aboutus[0].Github} value={github} onChange={e=>handleInput(e,'Github')}/></div>
                            {
                                githubTips&&<p className="pt-1 text-left text-red-500"><b>{github}</b> is not available. Please choose a different github address.</p>
                            }

                        </div>
                    </div>
                    <div>
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-2xl text-gray-700 tracking-wide nameBox">Mirror</label>
                            <div className="mt-1 flex rounded-md shadow-sm  mb-12">
                                <input type="text" name="mirror" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-l-md sm:text-lg border-black border-2 placeholder-gray-400 tracking-wide" placeholder={aboutus[0].Mirror} value={mirror} onChange={e=>handleInput(e,'mirror')}/>
                                <span className="inline-flex items-center px-8 rounded-r-md border border-l-0 border-black border-2 bg-gray-50 text-gray-800 text-lg" >.mirror.xyz</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-2xl text-gray-700 tracking-wide nameBox">Website *</label>
                            <div className="mt-1 flex rounded-md shadow-sm  mb-12">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-black border-2 bg-gray-50 text-gray-800 text-lg">https://</span>
                                <input type="text" name="website" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-black border-2 placeholder-gray-400 tracking-wide" placeholder={aboutus[0].Website} value={website} onChange={e=>handleInput(e,'website')}/>
                            </div>
                            {
                                websiteTips&&<p className="pt-1 text-left text-red-500"><b>{website}</b> is not available. Please choose a different website address.</p>
                            }
                        </div>
                    </div>
                    <div>
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-2xl font-medium text-gray-700 tracking-wide nameBox">Email</label>
                            <div className="mt-1 flex rounded-md shadow-sm  mb-12">
                                <input type="email" name="email" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-black border-2 placeholder-gray-400" placeholder={aboutus[0].Email} value={email} onChange={e=>handleInput(e,'email')}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" disabled={ReturnDisabled()} onClick={()=>handleSubmit()}
                                className={ReturnDisabled()?"bg-gray-300 cursor-not-allowed font-cal inline-flex tracking-wider justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white focus:outline-none transition-all ease duration-150 btnFalse":"btnSub"} >
                            Submit
                        </button>
                    </div>
                </div>

                <div><img src="/assets/images/contentbtm.png" alt=""/></div>
            </ContentBox>

    </Box>
}
