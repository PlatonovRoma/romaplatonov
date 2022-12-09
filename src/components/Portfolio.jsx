import React from "react";
import './Portfolio.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import travel from '../img/Travel agency.jpg';
import business from '../img/Business event page.jpg';
import shop from '../img/Internet shop.jpg';
import beauty from '../img/Beauty center.jpg';
import huesos from '../img/Responsive caffe  order-list.jpg';
import { BsArrowRight } from 'react-icons/bs';
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { bounceInLeft } from 'react-animations';
import styled, { keyframes } from "styled-components";

const Animation = keyframes`${bounceInLeft}`;
 
const TitleAnimation = styled.div`
  animation: 1s ${Animation};
`;


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
            display: "block", 
            background: "linear-gradient(87.32deg, #E2A300 4.47%, #E29500 95.53%)",
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            position: 'absolute',
            top: '50%',
            right: '-100px',            
            }}
        onClick={onClick}
      />
    );
  }

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
            display: "block", 
            background: "linear-gradient(87.32deg, #E2A300 4.47%, #E29500 95.53%)",
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            position: 'absolute',
            top: '50%',
            left: '-100px',
            }}
        onClick={onClick}
      />
    );
  }

const Portfolio = () => {
    const {ref: title, inView: titleInView} = useInView();

    const [active, setActive] = useState(false);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
      };
    return (
        <section className="section_3" id="portfolio">
            <h2 ref={title}>
                    {titleInView ? <TitleAnimation>Portfolio</TitleAnimation> : <span className="dummy">.</span>}
            </h2>

            <div className="slider_wrapper">
                <Slider {...settings}>
                    <div className="slider_item">
                        <div className={active ? 'slider_item_img slider_item_img_active' : 'slider_item_img'}>
                            <img src={travel} alt="" />
                        </div>

                        <div className="slider_item_text">
                            <h3>Travel agency</h3>
                            <p>
                                At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.
                            </p>
                            <div className="more"
                                onClick={() => {active ? setActive(false) : setActive(true)}}>More <span><BsArrowRight /></span></div>
                        </div>
                    </div>
                    
                    <div className="slider_item">
                        <div className={active ? 'slider_item_img slider_item_img_active' : 'slider_item_img'}>
                            <img src={business} alt="" />
                        </div>

                        <div className="slider_item_text">
                            <h3>Business event page</h3>
                            <p>
                                On this Open Source project I was responsible for the initial UI/UX architecture, structure, design and animations. The idea was to follow the 3 column UX trend of webchats like skype, hipchat, gitter and slack. Building upon that an Open Source alternative with similar functionalities.
                            </p>
                            <div className="more"
                                onClick={() => {active ? setActive(false) : setActive(true)}}>More <span><BsArrowRight /></span></div>
                        </div>
                    </div>
                      
                    <div className="slider_item">
                        <div className={active ? 'slider_item_img slider_item_img_active' : 'slider_item_img'}>
                            <img src={shop} alt="" />
                        </div>

                        <div className="slider_item_text">
                            <h3>Internet shop page</h3>
                            <p>
                                The idea behind this project was to create a showcase of everything I've worked on in the past few years. I tried to keep the UI as simple as possible coupled with the web technologies that I believe make most sense for a non reactive website in todays web development stack.
                            </p>
                            <div className="more"
                                onClick={() => {active ? setActive(false) : setActive(true)}}>More <span><BsArrowRight /></span></div>
                        </div>
                    </div>
                      
                    <div className="slider_item">
                        <div className={active ? 'slider_item_img slider_item_img_active' : 'slider_item_img'}>
                            <img src={beauty} alt="" />
                        </div>

                        <div className="slider_item_text">
                            <h3>Beauty center</h3>
                            <p>
                                In this project I acted as part of a small group of misfits hell-bent on making cool stuff. That was probably the biggest challange of the project as it has a huge number of different templates, to make everything run smoothly and cohesively was a huge win.
                            </p>
                            <div className="more"
                                onClick={() => {active ? setActive(false) : setActive(true)}}>More <span><BsArrowRight /></span></div>
                        </div>
                    </div>
                      
                    <div className="slider_item">
                        <div className={active ? 'slider_item_img slider_item_img_active' : 'slider_item_img'}>
                            <img src={huesos} alt="" />
                        </div>

                        <div className="slider_item_text">
                            <h3>Responsive caffe order-list</h3>
                            <p>
                                The idea behind this project was to create a showcase of everything I've worked on in the past few years. I tried to keep the UI as simple as possible coupled with the web technologies that I believe make most sense for a non reactive website in todays web development stack.
                            </p>
                            <div className="more"
                                onClick={() => {active ? setActive(false) : setActive(true)}}>More <span><BsArrowRight /></span></div>
                        </div>
                    </div>                    
  
                </Slider>
            </div>
        </section>
    )
}

export default Portfolio;