import React from "react";
import { AiOutlineClose } from 'react-icons/ai';
import LoveTonight from '../video/Frontend_weekdays.mp4'

const Modal = ({active, modalHandler, children}) => {
    return (
        <div className={active ? 'modal active' : 'modal'}
            onClick={() => modalHandler()}>
            
            <div className={active ? 'modal_content modal_content-active' : 'modal_content'}
                onClick={e => e.stopPropagation()}>

                {children}
                
                <div className="close"
                    onClick={ () => modalHandler()}> 
                    <AiOutlineClose />                    
                </div>

                <video className="video"
                        controls                         
                        muted 
                        src={LoveTonight}>

                </video>
            </div>
        </div>
    )
}

export default Modal;