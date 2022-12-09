import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import './BannerLeft.css';
import Modal from "./Modal";
import './Modal.css'
import { zoomInDown } from 'react-animations';
 
const bounceAnimation = keyframes`${zoomInDown}`;
 
const BouncyDiv = styled.div`
  animation: 2s ${bounceAnimation};
`;

const Button = styled.button `
    margin-top: 27px;
    width: 200px;
    height: 47px;
    background: linear-gradient(87.32deg, #E2A300 4.47%, #E29500 95.53%);
    border: none;
    border-radius: 6px;
    color: #000000;
    font-family: Next_Art;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    transition: all 0.2s ease-out;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.458);
    transform: translateY(-5px);

    &:hover {
        background: linear-gradient(87.32deg, #ffb702 4.47%, #ffaa00 95.53%);
        cursor: pointer;
      }
      
    &:active {
        background: linear-gradient(87.32deg, #E2A300 4.47%, #E29500 95.53%);
        cursor: pointer;
        box-shadow: 0 0px 0px black;
        transform: translateY(-3px);
        transition: all 0.1s ease-out;
      }
`;



const BannerLeft = ({modalHandler, active}) => {
    
    return <>
        <BouncyDiv>
            <div className="banner_left_container">            
                <div className="uptitle">HELLO</div>            
                <h1>I’m Roma Platonov</h1>
                <p>I am a frontend developer from Sumy, Ukraine. I have been studying a frontend for a half of year and now I am looking for a job. Also I've been making a music production for 10 years. I am very exited of new CSS3 abilities like perspective, preserve 3D or some new cases of animation. I have a degree of management and economics If you are looking for someone who can complete objectives creatively, please contact me.</p>
                <Link to="/">
                    <Button onClick={() => modalHandler()}>learn more</Button>
                </Link>
                
                <Modal 
                    active={active}
                    modalHandler={modalHandler}>                        
                </Modal>
            </div>
        </BouncyDiv>
    </>
}
export default BannerLeft;