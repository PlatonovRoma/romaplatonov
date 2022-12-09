import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import '../components/BannerAnimation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FaReact } from 'react-icons/fa';
import { FaGulp } from 'react-icons/fa';
import Roman from '../img/Roman.webp';
import { useInView } from "react-intersection-observer";

const musicIcon = <FontAwesomeIcon icon={faMusic} />

const BannerAnimation = () => {
    let name = String('\<\/');

    const {ref: bubble, inView: bubbleInView} = useInView();

    const [afterTimeout, setAfterTimeout] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setAfterTimeout(true);
      }, 4400);
    }, []);

    return <div className="banner_animation_container" ref={bubble}>
                <div className="card">
                    <div className="percent">                            
                        <div className="dot"></div>
                            <svg>                            
                                <circle cx="288" cy="287" r="253"></circle>
                            </svg>
                        </div>    
                    </div>

                    {bubbleInView && afterTimeout ? <div className="bubble one special_1">{musicIcon}</div> : ''}
                    
                    {bubbleInView && afterTimeout ? <div className="bubble two special_2">{name}</div> : ''}
                    {bubbleInView && afterTimeout ? <div className="bubble three special_3"><FaReact /></div> : ''}
                    {bubbleInView && afterTimeout ? <div className="bubble four special_4"><FaGulp /></div> : ''}

                    <img src={Roman} id="Roman" /> 
            </div>
}

export default BannerAnimation;