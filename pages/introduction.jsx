import Layout from "../components/layout";
import styled from "styled-components";
import DaoList from "../components/dao/daolist";

const SpanBoxMiddle = styled.span`
  box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;
  img{
    position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;
  }
`

export default function Introduction() {
    return <div>
        <div className="w-full my-30">
            <div className="flex flex-col justify-center items-center">
                <div className="text-center w-full md:w-7/12 m-auto">
                    <h1 className="font-bold text-3xl font-cal md:text-6xl mb-10 text-gray-800">What is a DAO?</h1>
                    <p className="text-md md:text-lg text-gray-600 w-10/12 m-auto">A deep dive into Decentralized
                    Autonomous Organizations (DAOs), their governance structure, as well as some DAO examples.</p>
                </div>
                <a target="_blank" href="https://twitter.com/StevenTey" rel="noreferrer">
                    <div className="my-8">
                        <div className="inline-block text-md md:text-lg align-middle ml-3">by <span
                            className="font-semibold">Steven Tey</span></div>
                    </div>
                </a>
            </div>
            <div className="relative h-80 md:h-150 w-full max-w-screen-lg lg:2/3 md:w-5/6 m-auto mb-10 md:mb-20 md:rounded-2xl overflow-hidden">
                <SpanBoxMiddle>
                    <img src="/assets/images/dao.gif"  className="duration-700 ease-in-out grayscale-0 blur-0 scale-100"
                    />
                </SpanBoxMiddle>
            </div>
            <article className="w-11/12 sm:w-3/4 m-auto prose prose-md sm:prose-lg">
                <p>
                    <strong>Decentralized Autonomous Organizations</strong>, or DAOs for short, are self-governing organizations that enable groups of like-minded individuals to work towards a mutual goal.</p><p>Think <a
                    href="https://www.dictionary.com/e/slang/subreddit/" target="_blank" rel="noopener noreferrer">subreddits
                    ↗</a>, but:
                </p>
                <ul>
                    <li>Instead of clicking "Join" to join a subreddit, you have to own a DAO's token to be a part of
                        it.
                    </li>
                    <li>Instead of having a moderator to make sure all the content is appropriate, a DAO self-governs
                        through a pre-determined set of principles/rules.
                    </li>
                    <li>Instead of upvoting/downvoting posts, each DAO member has voting rights that allow them to make
                        governance decisions for the DAO. These voting rights are proportionate to the number of the
                        DAO's tokens that they own.
                    </li>
                    <li>Instead of transacting in Reddit Gold, which is controlled by Reddit and can be shut down at any
                        time, DAOs transact via the Ethereum blockchain, which is decentralized and
                        censorship-resistant.
                    </li>
                </ul>
                <p>In other words, DAOs are a safe and efficient way for complete strangers to work together over the
                    internet without having to worry that one of them is going to go rogue and run away with the
                    money.
                </p>
                <p>There is no hierarchy, red tape, or any of the bureaucratic BS that plague traditional
                    organizations. Everything is done on-chain, which provides complete transparency and reduces the
                    chances of corruption.
                </p>
                <h2>Governance Structure in DAOs</h2>
                <p>Unlike traditional organizations,
                    where hierarchy matters, DAOs generally have a flat structure.
                </p>
                <p>When a new idea is proposed in
                    traditional organizations, it usually requires approval by someone from the "managerial" or
                    "executive" layers before it can be implemented.
                </p>
                <p>In DAOs:</p>
                <ul>
                    <li>Proposed ideas are voted on by everyone in the DAO in a fully-transparent manner using tools
                        like <a href="https://snapshot.org/" target="_blank" rel="noopener noreferrer">Snapshot ↗</a>,
                        which is powered by IFPS + the Ethereum blockchain.
                    </li>
                    <li>Any discussions prior to voting take place on platforms like Discourse (e.g. <a
                        href="https://gov.uniswap.org/" target="_blank" rel="noopener noreferrer">Uniswap's Governance
                        Discourse ↗</a>), which is fully open-source and customizable.
                    </li>
                    <li>For a full-suite DAO governance &amp; management experience, DAOs also use tools like <a
                        href="https://www.boardroom.info/" target="_blank" rel="noopener noreferrer">Boardroom ↗</a>,
                        which gives a 30,000 foot view of their DAO's operations.
                    </li>
                </ul>
                <p>This method of governance is inspired by the concept of "<a href="https://www.holacracy.org/" target="_blank"
                                                                               rel="noopener noreferrer">holocracy ↗</a>",
                    which encourages autonomy and ownership over bureaucracy and hierarchy.</p><h2>Types of DAOs</h2>
                <p>There are several types of DAOs in today's market:</p>
                <ul>
                    <li>Investment DAOs</li>
                    <li>Protocol DAOs</li>
                    <li>Service DAOs</li>
                    <li>Project DAOs</li>
                    <li>Community DAOs</li>
                </ul>
                <h3>Investment DAOs</h3><p>Imagine raising $50M in 3 days from thousands to <a
                    href="https://www.nytimes.com/2021/11/17/business/crypto-constitution-sothebys.html" target="_blank"
                    rel="noopener noreferrer">purchase an original copy of the U.S. constitution ↗</a>. While not all of
                    them are that flamboyant, investment DAOs allow users to pool together large sums of money and make
                    investments in projects that align with their manifesto (e.g.: <a
                        href="https://docs.klimadao.finance/klima.fi-manifesto" target="_blank"
                        rel="noopener noreferrer">Klima DAO's manifesto ↗</a>).</p><p>These DAOs are usually
                    mission-driven and have a large following behind them. Some prominent examples include the
                    aforementioned <a className="cursor-pointer" href="/dao/constitution">Constitution DAO</a>, the
                    decentralized investing protocol <a className="cursor-pointer" href="/dao/syndicate">Syndicate
                        DAO</a> and the climate-change driven <a className="cursor-pointer" href="/dao/klima">Klima
                        DAO</a>.</p>

                <h3>Protocol DAOs</h3><p>Think money, but programmable. Protocol DAOs introduced the concept of
                    transferrable <a href="https://www.investopedia.com/news/what-erc20-and-what-does-it-mean-ethereum/"
                                     target="_blank" rel="noopener noreferrer">ERC20 ↗</a> tokens that power all sorts
                    of transactions in the secondary market. DAO members are able to vote on proposals to change the
                    underlying mechanisms of the protocol itself.</p><p>Uniswap, for instance, has a <a
                    href="https://snapshot.org/#/uniswap" target="_blank" rel="noopener noreferrer">list of proposals on
                    Snapshot ↗</a> for token holders to vote and provide feedback on. Once a consensus has been reached,
                    the proposal is then accepted and implemented.</p>
                <h3>Service DAOs</h3><p><a
                    href="https://www.forbes.com/sites/jackkelly/2021/04/17/a-war-for-talent-is-starting-spoiler-alert-workers-will-win/"
                    target="_blank" rel="noopener noreferrer">The world needs talent ↗</a>, now more than ever. Service
                    DAOs are talent aggregators,&nbsp;where professionals of the same field come together and form an
                    on-chain alliance to provide their services as a collective whole.</p><p>From software development (<a
                    className="cursor-pointer" href="/dao/developer">Developer DAO</a>) to design (<a
                    className="cursor-pointer" href="/dao/vector">Vector DAO</a>) to legal services (<a
                    className="cursor-pointer" href="/dao/lex">Lex DAO</a>), service DAOs provide a way for companies to
                    hire talent in web3.</p>

                <h3>Project DAOs</h3><p>Similar to service DAOs, project DAOs are individuals united to build
                    projects/products to achieve a certain goal. Revenue generated by these products is then funneled
                    back into a treasury governed by the DAO's token holders.</p><p>Some notable examples:</p>
                <ul>
                    <li><a className="cursor-pointer" href="/dao/badger">Badger DAO</a>: built a <a
                        href="https://badger.com/products" target="_blank" rel="noopener noreferrer">suite of products
                        ↗</a> that make it easy for users to earn yield on their Bitcoin through a DeFi bridge
                    </li>
                    <li><a className="cursor-pointer" href="/dao/indexcoop">Index Coop</a>: built products like the <a
                        href="https://www.indexcoop.com/dpi" target="_blank" rel="noopener noreferrer">Defi Pulse Index
                        ↗</a>, which gives investors a safer, capitalization-weighted index to invest in the DeFi market
                    </li>
                    <li><a className="cursor-pointer" href="/dao/seedclub">Seed Club</a>: released products like <a
                        href="https://www.partybid.app/" target="_blank" rel="noopener noreferrer">PartyBid ↗</a>, a way
                        for people to pool together funds to purchase NFTs as a team
                    </li>
                </ul>
                <h3>Community DAOs</h3><p>Humans are social animals. We naturally gravitate toward like-minded people
                    and form social groups around a common topic.</p><p>Community DAOs exist to give these groups of
                    people a space to interact and have discussions –&nbsp;similar to good ol' Reddit. For members of
                    community DAOs, financial returns are not as important as community-exclusive perks such as early
                    access to latest releases, member-only meetups, etc.</p><p>Some examples include –&nbsp;<a
                    className="cursor-pointer" href="/dao/fwb">Friends With Benefits</a>, <a className="cursor-pointer"
                                                                                             href="/dao/pleasr">Pleasr
                    DAO</a>, and <a className="cursor-pointer" href="/dao/orange">Orange DAO</a> (DAO of YC Alumni).</p>

                <h2>DAOs = Future of Work</h2><p>DAOs have grown a lot in popularity in recent years, thanks to the rise
                    of Web3 and the rising desire for operational transparency and autonomy in today's workforce.</p>
                <p>While there are still certain limitations when it comes to running a DAO&nbsp;(e.g. over-abundance in
                    autonomy leading to a never-ending decision-making process), DAOs are still in their infant
                    stage.</p><p>As we see more innovation in the DAO tooling space (e.g. <a
                    href="https://utopialabs.com/" target="_blank" rel="noopener noreferrer">Zenefits for DAOs ↗</a>),
                    DAOs will continue to evolve and mature. And who knows, maybe one day, instead of registering an
                    LLC/C Corp in Delaware, we'll be registering a DAO on the Ethereum blockchain instead.</p>
                <h2>Further Reading</h2><p>Below is a growing list of resources to learn more about DAOs:</p>
                <ul>
                    <li><a href="https://wiki.metagame.wtf/docs/great-houses/house-of-daos" target="_blank"
                           rel="noopener noreferrer">House of DAOs –&nbsp;Metagame ↗</a></li>
                    <li><a href="https://coopahtroopa.mirror.xyz/_EDyn4cs9tDoOxNGZLfKL7JjLo5rGkkEfRa_a-6VEWw"
                           target="_blank" rel="noopener noreferrer">DAO Landscape –&nbsp;Coopahtroopa ↗</a></li>
                    <li><a href="https://blog.aragon.org/what-is-a-dao/" target="_blank" rel="noopener noreferrer">What
                        is a DAO –&nbsp;Aragon ↗</a></li>
                    <li><a href="https://www.notboring.co/p/the-dao-of-daos-5b9" target="_blank"
                           rel="noopener noreferrer">The DAO of DAOs –&nbsp;Not Boring by Packy McCormick ↗</a></li>
                </ul>
            </article>
            <div className="relative mt-10 sm:mt-20 mb-20">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center"><span className="px-2 bg-white text-sm text-gray-500">Continue Reading</span>
                </div>
            </div>
            <DaoList len={4} />
        </div>
    </div>
}

Introduction.getLayout = function getLayout(page)
    {
        return (
            <Layout>
                {page}
            </Layout>
        )
    }