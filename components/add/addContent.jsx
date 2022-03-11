import { Octokit } from '@octokit/rest';
import {useDAO} from "../../pages/api/connect";
import {useState} from "react";
import githubObj  from '../../public/githubConfig'
import Modal from "../modal";
import styled from "styled-components";
import TipsModal from '../tipsModal';
import  Router from "next/router";

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

export default function AddContent() {

    const {  state } = useDAO();
    const { accessToken } = state;

    const [ daoName, setDaoName ] = useState('');
    const [ slug, setSlug ] = useState('');
    const [ tagline, setTagline ] = useState('');
    const [ mission, setMission ] = useState('');
    const [ values, setValues ] = useState('');
    const [ emoji, setEmoji ] = useState('');
    const [ tokenSymbol, setTokenSymbol ] = useState('');
    const [ tokenAddress, setTokenAddress ] = useState('');
    const [ logo, setLogo] = useState('');
    const [ cover, setCover] = useState('');
    const [ imgTit, setImgTit] = useState('');
    const [ showBox, setShowBox ] = useState(false);
    const [ showSuccess, setShowSuccess ] = useState(false);
    const [ twitter, setTwitter] = useState('');
    const [ discord, setDiscord] = useState('');
    const [ mirror, setMirror] = useState('');
    const [ website, setWebsite] = useState('');
    const [ email, setEmail] = useState('');


    const handleSubmit = async () =>{
        console.log("=====handleSubmit=")
        // const bodyStr = `Dao Name: ${daoName}
        //              Slug: ${slug}
        //              Tagline: ${tagline}
        //              Mission: ${mission}
        //              Values: ${values}
        //              Emoji: ${emoji}
        //              Token Symbol: ${tokenSymbol}
        //              Token Contract Address: ${tokenAddress}
        //              Logo: ${logo}
        //              Cover photo: ${cover}
        //              Twitter: ${twitter}
        //              Discord: ${discord}
        //              Mirror: ${mirror}
        //              Website: ${website}
        //              Email: ${email}
        // `;

        const bodyStr ={
            Name: daoName,
            Slug: slug,
            Tagline: tagline,
            Mission: mission,
            Values: values,
            Emoji: emoji,
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
            owner: "Web3-Camp",
            repo: "test-issue",
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
                setSlug(value);
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
            case 'emoji':
                setEmoji(value);
                break;
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

    const ReturnDisabled = () =>{

        return !(daoName.length && slug.length && tagline.length && mission.length && values.length && emoji.length && tokenSymbol.length && tokenAddress.length && logo.length && cover.length && twitter.length && discord.length && mirror.length && website.length && email.length)
    }
    return  <div className="sm:mx-24 mx-5 my-24 space-y-6">
        <TipsModal show={showSuccess}/>
        <Modal close={closeImageBox} title={imgTit} show={showBox} handleImg={handleImg}/>
        <div className="bg-white shadow p-5 sm:rounded-lg sm:p-10">
            <div className="lg:grid lg:grid-cols-3 lg:gap-6">
                <div className="lg:col-span-1">
                    <h3 className="font-cal text-4xl text-gray-900">DAO Profile</h3>
                    <p className="mt-5 text-lg text-gray-800">This information will be displayed publicly on your DAO&#x27;s page.
                        <a className="underline text-gray-700 hover:text-black ml-1" href="/dao/developer">See example.</a>
                    </p>
                    <p className="mt-5 text-lg text-gray-800">* marks required fields.</p>
                </div>
                <div className="mt-5 lg:mt-0 lg:col-span-2 space-y-10">
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-xl font-medium text-gray-700 tracking-wide">Name *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" maxLength="40" name="daoName" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="Awesome DAO" value={daoName} onChange={e=>handleInput(e,'daoName')}/>
                            </div>
                            <div className="flex justify-end">{daoName.length}/40</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-xl text-gray-700 tracking-wide">Slug *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-800 text-lg">{githubObj.baseUrl}/dao/</span>
                                <input type="text" name="slug" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="awesome" value={slug} onChange={e=>handleInput(e,'slug')}/></div>
                        </div>
                    </div>
                    <div>
                        <label className="font-cal block text-xl font-medium text-gray-700 tracking-wide">Tagline *</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <textarea maxLength="120" rows="2" name="tagline" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="Add a slogan or your mission statement"  value={tagline} onChange={e=>handleInput(e,'tagline')}/>
                        </div>
                        <div className="flex justify-end">{tagline.length}/120</div>
                    </div>
                    <div>
                        <label className="font-cal block text-xl font-medium text-gray-700">Mission *</label>
                        <div className="mt-1">
                            <textarea name="mission" rows="3" className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-lg border border-gray-300 rounded-md placeholder-gray-400" placeholder="What&#x27;s your DAO&#x27;s mission/north stars?" value={mission} onChange={e=>handleInput(e,'mission')} />
                        </div>
                        {/*<div className="flex justify-end">Markdown supported.</div>*/}
                    </div>
                    <div>
                        <label htmlFor="values" className="font-cal block text-xl font-medium text-gray-700">Values *</label>
                        <div className="mt-1">
                            <textarea name="values" rows="3" className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-lg border border-gray-300 rounded-md placeholder-gray-400" placeholder="What are your DAO&#x27;s values? List them out in bullet points. Use ** to bold text." value={values} onChange={e=>handleInput(e,'values')}/>
                        </div>
                        {/*<div className="flex justify-end">Markdown supported.</div>*/}
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <label className="font-cal block text-xl text-gray-700 tracking-wide">Emoji *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" name="emoji" className="font-cal focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400 tracking-wide" placeholder="(💥 , 💥 )" value={emoji} onChange={e=>handleInput(e,'emoji')}/>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <label className="font-cal block text-xl text-gray-700 tracking-wide">Token Symbol *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" name="tokenSymbol" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="$DAO" value={tokenSymbol} onChange={e=>handleInput(e,'tokenSymbol')}/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3">
                            <label className="font-cal block text-xl text-gray-700 tracking-wide">Token Contract Address *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" name="tokenAddress" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="0x500c5c9fe70e5820ec829354620f1c070224917d" value={tokenAddress} onChange={e=>handleInput(e,'tokenAddress')}/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="font-cal block text-xl text-gray-700">Logo *</label>

                       <button className="mt-1 flex w-60 h-60 justify-cente items-center border-2 border-gray-300 border-dashed rounded-md" onClick={()=>showImageBox('logo')}>
                            {
                                !!logo &&<ImgBox><img src={logo} alt=""/></ImgBox>
                            }
                           {
                               !logo &&
                                <div className="space-y-1 text-center">
                                    <img src="/assets/images/pic.svg" alt="" className="mx-auto h-12 w-12 text-gray-400"/>
                                    <p className="pl-1 text-md">
                                        <span className="text-black">Click here</span> to fill image url
                                    </p>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB (recommended size: 400px x 400px)</p>
                                </div>
                           }
                        </button>
                    </div>
                    <div>
                        <label className="font-cal block text-xl text-gray-700">Cover photo *</label>
                        <button className="mt-1 flex w-full justify-center  border-2 border-gray-300 border-dashed rounded-md" onClick={()=>showImageBox('cover')}>
                            {
                                !!cover &&<CoverBox><img src={cover} alt=""/></CoverBox>
                            }
                            {
                                !cover && <div className="space-y-1 text-center px-6 pt-5 pb-6">
                                    <img src="/assets/images/pic.svg" alt="" className="mx-auto h-12 w-12 text-gray-400"/>
                                    <p className="pl-1 text-md">
                                        <span className="text-black">Click here</span> to upload a file
                                    </p>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB (recommended size: 1200px x 630px)</p>
                                </div>
                            }

                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-xl text-gray-700 tracking-wide">Twitter *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-800 text-lg">@</span>
                                <input type="text" name="twitter" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-gray-300 placeholder-gray-400 tracking-wide"
                                placeholder="DAOPARK" value={twitter} onChange={e=>handleInput(e,'twitter')}/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-xl text-gray-700 tracking-wide">Discord</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-800 text-lg">discord.gg/</span>
                                <input type="text" name="discord" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-gray-300 placeholder-gray-400 tracking-wide" placeholder="p2jdESeVfy" value={discord} onChange={e=>handleInput(e,'discord')}/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-xl text-gray-700 tracking-wide">Mirror</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" name="mirror" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-l-md sm:text-lg border-gray-300 placeholder-gray-400 tracking-wide" placeholder="daopark" value={mirror} onChange={e=>handleInput(e,'mirror')}/>
                                <span className="inline-flex items-center px-8 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-800 text-lg" >.mirror.xyz</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-xl text-gray-700 tracking-wide">Website *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-800 text-lg">https://</span>
                                <input type="text" name="website" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-gray-300 placeholder-gray-400 tracking-wide" placeholder="daopark.com" value={website} onChange={e=>handleInput(e,'website')}/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label className="font-cal block text-xl font-medium text-gray-700 tracking-wide">Email (to get notified when your DAO is listed) *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="email" name="email" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="steven@daocentral.com" value={email} onChange={e=>handleInput(e,'email')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*border-black bg-black text-white hover:bg-white hover:text-black font-cal ml-3 inline-flex tracking-wider justify-center items-center w-28 h-12 border-2 shadow-sm text-lg rounded-md transition-all ease duration-150*/}
            <div className="mt-10 flex justify-end">
                <button type="submit" disabled={ReturnDisabled()} onClick={()=>handleSubmit()}
                        className={ReturnDisabled()?"bg-gray-300 cursor-not-allowed font-cal inline-flex tracking-wider justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white focus:outline-none transition-all ease duration-150":"border-black bg-black text-white hover:bg-white hover:text-black font-cal inline-flex tracking-wider justify-center items-center w-28 h-12 border-2 shadow-sm text-lg rounded-md transition-all ease duration-150"} >
                    Submit
                </button>
            </div>
        </div>
    </div>
}
