import styled from "styled-components";


const SpanBox = styled('span')`
 box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;
 span{
 box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;
 }
  img{
      display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;

  }
`

export default function Main02(props) {
    return <div className="w-full px-12 py-8 mb-12">
        <h2 className="font-cal text-3xl">{props.title}</h2>
        <div className="flex flex-col items-center justify-center">
            <div className="my-8 flex flex-col justify-center items-center">
                <SpanBox>
                    <span>
                        <img alt="" src="/assets/images/noContent.png" />
                        </span>
                </SpanBox>
                <p className="font-cal text-gray-600 text-2xl">No {props.title} Yet.</p>
            </div>
        </div>
    </div>
}
