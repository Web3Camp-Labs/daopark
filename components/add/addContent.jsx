import { Octokit } from '@octokit/rest';
import {useDAO} from "../../pages/api/connect";

export default function AddContent() {

    const {  state } = useDAO();
    const { accessToken } = state;


    const handleSubmit = async () =>{
        console.log("=========",accessToken)
        const octokit = new Octokit({
            auth: accessToken,
        });
        const listdata = await octokit.rest.issues.create({
            owner: "Web3-Camp",
            repo: "test-issue",
            title: "name:description login issue",
            labels: ["daopark"],
            body: "name: Tracking issue\n" +
                "about: Use this template for tracking new features.\n" +
                "title: \"[DATE]: [FEATURE NAME]\"\n" +
                "labels: tracking issue, needs triage\n" +
                "assignees: octocat"
        });

        console.log("===22====",listdata)
    }
    return  <div className="sm:mx-24 mx-5 my-24 space-y-6">
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
                            <label htmlFor="name" className="font-cal block text-xl font-medium text-gray-700 tracking-wide">Name *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" required="" maxLength="40" name="name" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="Awesome DAO"/>
                            </div>
                            <div className="flex justify-end">/40</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="slug" className="font-cal block text-xl text-gray-700 tracking-wide">Slug *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-800 text-lg">daocentral.com/dao/</span>
                                <input type="text" required="" name="slug" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="awesome"/></div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="tagline" className="font-cal block text-xl font-medium text-gray-700 tracking-wide">Tagline *</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <textarea maxLength="120" required="" rows="2" type="text" name="tagline" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="Add a slogan or your mission statement"></textarea>
                        </div>
                        <div className="flex justify-end">/120</div>
                    </div>
                    <div>
                        <label htmlFor="mission" className="font-cal block text-xl font-medium text-gray-700">Mission *</label>
                        <div className="mt-1">
                            <textarea required="" name="mission" rows="3" className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-lg border border-gray-300 rounded-md placeholder-gray-400" placeholder="What&#x27;s your DAO&#x27;s mission/north stars?"></textarea>
                        </div>
                        <div className="flex justify-end">Markdown supported.</div>
                    </div>
                    <div>
                        <label htmlFor="values" className="font-cal block text-xl font-medium text-gray-700">Values *</label>
                        <div className="mt-1">
                            <textarea required="" name="values" rows="3" className="shadow-sm focus:ring-black focus:border-black block w-full sm:text-lg border border-gray-300 rounded-md placeholder-gray-400" placeholder="What are your DAO&#x27;s values? List them out in bullet points. Use ** to bold text."></textarea>
                        </div>
                        <div className="flex justify-end">Markdown supported.</div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="col-span-1">
                            <label htmlFor="emoji" className="font-cal block text-xl text-gray-700 tracking-wide">Emoji *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" required="" name="emoji" className="font-cal focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400 tracking-wide" placeholder="(💥 , 💥 )"/>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <label htmlFor="tokenSymbol" className="font-cal block text-xl text-gray-700 tracking-wide">Token Symbol *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" required="" name="tokenSymbol" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="$DAO"/></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3">
                            <label htmlFor="slogan" className="font-cal block text-xl text-gray-700 tracking-wide">Token Contract Address *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" required="" name="tokenAddress" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="0x500c5c9fe70e5820ec829354620f1c070224917d"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label className="font-cal block text-xl text-gray-700">Logo *</label>
                        <button
                            className="mt-1 flex w-60 h-60 justify-cente items-center border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <img src="/assets/images/pic.svg" alt="" className="mx-auto h-12 w-12 text-gray-400"/>
                                <p className="pl-1 text-md">
                                    <span className="text-black">Click here</span> to upload a file
                                </p>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB (recommended size: 400px x 400px)</p>
                            </div>
                        </button>
                    </div>
                    <div>
                        <label className="font-cal block text-xl text-gray-700">Cover photo *</label>
                        <button className="mt-1 flex w-full justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                                <img src="/assets/images/pic.svg" alt="" className="mx-auto h-12 w-12 text-gray-400"/>
                                <p className="pl-1 text-md">
                                    <span className="text-black">Click here</span> to upload a file
                                </p>
                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB (recommended size: 1200px x 630px)</p></div>
                        </button>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="twitter" className="font-cal block text-xl text-gray-700 tracking-wide">Twitter *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-800 text-lg">@</span>
                                <input type="text" required="" name="twitter" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-gray-300 placeholder-gray-400 tracking-wide"
                                placeholder="DAOCentral"/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="discord" className="font-cal block text-xl text-gray-700 tracking-wide">Discord</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-800 text-lg">discord.gg/</span>
                                <input type="text" name="discord" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-gray-300 placeholder-gray-400 tracking-wide"
                                placeholder="p2jdESeVfy"/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="mirror" className="font-cal block text-xl text-gray-700 tracking-wide">Mirror</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="text" name="mirror" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-l-md sm:text-lg border-gray-300 placeholder-gray-400 tracking-wide" placeholder="daocentral"/>
                                <span className="inline-flex items-center px-8 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-800 text-lg">.mirror.xyz</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="website" className="font-cal block text-xl text-gray-700 tracking-wide">Website *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-800 text-lg">https://</span>
                                <input type="text" required="" name="website" className="focus:ring-black focus:border-black flex-1 block w-full rounded-none rounded-r-md sm:text-lg border-gray-300 placeholder-gray-400 tracking-wide" placeholder="daocentral.com"/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="col-span-3 sm:col-span-2">
                            <label htmlFor="email" className="font-cal block text-xl font-medium text-gray-700 tracking-wide">Email (to get notified when your DAO is listed) *</label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                                <input type="email" required="" name="email" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="steven@daocentral.com"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 flex justify-end">
                <button type="submit" disabled="" onClick={handleSubmit}
                        className="bg-gray-300 cursor-not-allowed font-cal ml-3 inline-flex tracking-wider justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white focus:outline-none transition-all ease duration-150">
                    Submit
                </button>
            </div>
        </div>
    </div>
}
