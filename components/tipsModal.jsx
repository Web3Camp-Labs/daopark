import styled from "styled-components";

const Mask = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999999;
    display: flex;
    justify-content: center;
    align-items: center;
  background: rgba(0,0,0,0.2);
`;
const MaskBg = styled.div`
  width:200px;
  height:200px;
  position:relative;
  background: rgba(0,0,0,0.7);
  border-radius: 5px;
`
const Success = styled.div`
  width:100px;
  height:50px;
  position:absolute;
  left:50%;
  top:50%;
  margin:-40px 0 0 -50px;
  -webkit-transform:rotate(-45deg);
  transform:rotate(-45deg);
  overflow:hidden;

  &:before,&:after{
    content:"";
    position:absolute;
    background:#fff;
    border-radius:5px;
  }
  &:before{
    width:10px;
    height:50px;
    left:0;
    -webkit-animation:dgLeft 0.5s linear 1s 1 both;
    animation:dgLeft 0.5s linear 1s 1 both;
  }
  &:after{
    width:100px;
    height:10px;
    bottom:0;
    -webkit-animation:dgRight 0.5s linear 1.5s 1 both;
    animation:dgRight 0.5s linear 1.5s 1 both;
  }

`

export default function TipsModal(props){
    const { show } = props;
    return <div>
        {
            show &&<Mask>
                <MaskBg>
                    <Success />
                </MaskBg>
            </Mask>
        }
    </div>
}