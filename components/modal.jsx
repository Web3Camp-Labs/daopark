import styled from "styled-components";
import {useState} from "react";

const Mask = styled.div`
    background: rgba(0,0,0,0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999999;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
`;

const ModalBox = styled.div`
  background: #fff;
  width: 40vw;
  height: 15rem;
  border-radius: 0.375rem;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 2rem;
  position: relative;
  .mb20{
    margin-bottom: 1rem;
  }
  .closeBox{
    position: absolute;
    right: 1rem;
    top:1rem;
    cursor: pointer;
  }
`


export default function Modal(props){

    const [ imgUrl, setImgUrl ] = useState('');
    const { title,close,show,handleImg } = props;

    const handleInput = (e) =>{
        setImgUrl(e.target.value)
    }
    const handleClose = () =>{
        close();
        setImgUrl('');
    }
    const handleSubmit = () =>{
        handleImg(imgUrl,title)
        setImgUrl('');
    }

    return <div>
        {
            show && <Mask>
                <ModalBox>
                    <img src="/assets/images/close.svg" alt="" width="24" className="closeBox" onClick={()=>handleClose()}/>
                    <div className="col-span-3 sm:col-span-2">
                        <label className="font-cal block text-xl font-medium text-gray-700 tracking-wide mb20">{title} *</label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                            <input type="text" name="daoName" className="focus:ring-black focus:border-black flex-1 block w-full rounded-md sm:text-lg border-gray-300 placeholder-gray-400" placeholder="fill image url"  value={imgUrl} onChange={e=>handleInput(e)}/>
                        </div>
                    </div>
                    <div className="mt-10 flex">
                        <button type="submit" disabled="" onClick={e=>handleSubmit(e)}
                                className={imgUrl?.length?"border-black bg-black text-white hover:bg-white hover:text-black font-cal inline-flex tracking-wider justify-center items-center w-28 h-12 border-2 shadow-sm text-lg rounded-md transition-all ease duration-150":"bg-gray-300 cursor-not-allowed font-cal inline-flex tracking-wider justify-center py-2 px-4 border border-transparent shadow-sm text-lg font-medium rounded-md text-white focus:outline-none transition-all ease duration-150"} >
                            Submit
                        </button>
                    </div>
                </ModalBox>
            </Mask>
        }
    </div>
}