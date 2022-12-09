import React from "react";
import './Banner.css';
import { useEffect } from "react";
import { useState } from "react";
import BannerAnimation from "./BannerAnimation";

const Banner = ({active}) => {
    const [isDisplayed, setIsDisplayed] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setIsDisplayed(true);
      }, 1500);
    }, []);
    
    return  <div className={active ? 'banner_container hide_banner' : 'banner_container'}>
                {isDisplayed ? <BannerAnimation active={active}/> : ''}
            </div>
}
export default Banner;