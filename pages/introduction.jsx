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
                    <p className="text-md md:text-lg text-gray-600 w-10/12 m-auto">A brief introduction of DAO.</p>
                </div>
            </div>
            <div className="relative h-80 md:h-150 w-full max-w-screen-lg lg:2/3 md:w-5/6 m-auto mb-10 md:mb-20 md:rounded-2xl overflow-hidden">
                <SpanBoxMiddle>
                    <img src="/assets/images/dao.gif"  className="duration-700 ease-in-out grayscale-0 blur-0 scale-100"
                    />
                </SpanBoxMiddle>
            </div>
            <article className="w-11/12 sm:w-3/4 m-auto prose prose-md sm:prose-lg">
            
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