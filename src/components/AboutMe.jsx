import React from "react";
import './AboutMe.css';
import { useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { useInView } from "react-intersection-observer";
import { bounceInLeft } from 'react-animations';
import styled, { keyframes } from "styled-components";

/*
import 'animate.css/animate.min.css'
import { AnimationOnScroll } from "react-animation-on-scroll";
*/

const Animation = keyframes`${bounceInLeft}`;
 
const TitleAnimation = styled.div`
  animation: 1s ${Animation};
`;

const AboutMe = () => {
    const [activePicture, setActivePictire] = useState(false);
    const [activePicture2, setActivePictire2] = useState(false);
    const [activePicture3, setActivePictire3] = useState(false);
    const {ref: title, inView: titleInView} = useInView();
         
    return (
        <section className="section_2" id="about">

            <div className="circle_1">
                <div className="section_2_container">
                    <div className="loader"><span></span></div>
                    <div className="loader"><span></span></div>
                    <div className="loader"><i></i></div>
                    <div className="loader"><i></i></div>
                </div>
            </div>

            <div className="circle_2">
                <div className="section_2_container_2">
                    <div className="loader_2"><span></span></div>
                    <div className="loader_2"><span></span></div>
                    <div className="loader_2"><i></i></div>
                    <div className="loader_2"><i></i></div>
                </div>
            </div>

            <div className="circle_3">
                <div className="section_2_container_3">
                    <div className="loader_3"><span></span></div>
                    <div className="loader_3"><span></span></div>
                    <div className="loader_3"><i></i></div>
                    <div className="loader_3"><i></i></div>
                </div>
            </div>

            <div className="text_block">
                
                <h2 ref={title}>
                    {titleInView ? <TitleAnimation>About me</TitleAnimation> : <span className="dummy">.</span>}
                </h2>
                                
                <p>
                    Okay, hello again! My name is Roma and I'm 35 years old. Before I started to discover frontend development I was a touring artist, driver and manager of my music band. 
                    So even before IT-direction my life was full of projects. Watever if it is a recording or simple touring date I've had to plan, organize, motivate and contol. 
                    Also working on a project for me is similar to write music or to draw pictures because bringin a functionality on a web-page is the same creativity.
                    This site was my final test on programming courses. I desided to choose React and discover it's abilities.
                    At present I keep going study some new and I am looking for a team where I could be useful as well as freelance projects. <br />
                    <br /> My contacts and social medias are described below.
                </p>

                <div className={activePicture ? 'about_picture_active' : 'about_picture'}>
                    <div className={activePicture ? 'picture_wrapper_active' : 'picture_wrapper'} 
                        onClick={() => {setActivePictire(true)}} >                            

                        <div className={activePicture ? 'picture_close_active picture_close' : ''} 
                            onClick={e => e.stopPropagation(setActivePictire(false))}> 
                                <AiOutlineClose />   
                        </div>                           
                    </div>                    
                </div>

                <div className={activePicture2 ? 'about_picture_2_active' : 'about_picture_2'}>
                    <div className={activePicture2 ? 'picture_wrapper_2_active' : 'picture_wrapper_2'}
                        onClick={() => {setActivePictire2(true)}}>

                        <div className={activePicture2 ? 'picture_close_active picture_close' : ''} 
                            onClick={e => e.stopPropagation(setActivePictire2(false))}> 
                                <AiOutlineClose />   
                        </div> 
                    </div>
                </div>

                <div className={activePicture3 ? 'about_picture_3_active' : 'about_picture_3'}>
                    <div className={activePicture3 ? 'picture_wrapper_3_active' : 'picture_wrapper_3'}
                        onClick={() => {setActivePictire3(true)}}>

                        <div className={activePicture3 ? 'picture_close_active picture_close' : ''} 
                            onClick={e => e.stopPropagation(setActivePictire3(false))}> 
                                <AiOutlineClose />   
                        </div> 
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;