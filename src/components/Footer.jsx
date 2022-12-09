import React from "react";
import '../components/Footer.css';
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import logoImg from '../img/Logo.png'
import arrow from '../img/ArrowRight.png'
import styled, { keyframes } from "styled-components";
import { fadeInLeft } from 'react-animations';
import { fadeInRight } from 'react-animations';
import { useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
 
const bounceAnimation = keyframes`${fadeInLeft}`;
 
const FooterAnimation = styled.div`
  animation: 1s ${bounceAnimation};
`;
 
const bounceAnimation2 = keyframes`${fadeInRight}`;
 
const FooterAnimation2 = styled.div`
  animation: 1s ${bounceAnimation2};
    display: flex;
    justify-content: start;
    align-items: flex-start;
`;

const Footer = () => {
    const {ref: myRef, inView: myElementIsVisible} = useInView();
    const {ref: myRef2, inView: myElementIsVisible2} = useInView();
    const {ref: myRef3, inView: myElementIsVisible3} = useInView();
    const {ref: myRef4, inView: myElementIsVisible4} = useInView();
    
    return (
        <footer id="contacts">
            <div className="footer-container">
                <div className="footer_left">
                    <ul>
                        <li ref={myRef}>
                            {myElementIsVisible ? 
                                <FooterAnimation>
                                    <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
                                        Home
                                    </Link>
                                </FooterAnimation> : ''}
                        </li>

                        <li ref={myRef2}>
                            {myElementIsVisible2 ? 
                                <FooterAnimation>
                                    <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
                                        About Me
                                    </Link>
                                </FooterAnimation> : ''}
                        </li>

                        <li ref={myRef3}>
                            {myElementIsVisible3 ? 
                                <FooterAnimation>
                                    <Link to="portfolio" spy={true} smooth={true} offset={50} duration={500}>
                                        Portfolio
                                    </Link>
                                </FooterAnimation> : ''}
                        </li>

                        <li ref={myRef4}>
                            {myElementIsVisible4 ? 
                                <FooterAnimation>
                                    <Link to="contacts" spy={true} smooth={true} offset={50} duration={500}>
                                        Contact
                                    </Link>
                            </FooterAnimation> : ''}
                        </li>                                          
                    </ul>
                </div>

                <div className="footer_center">
                    <ul>
                        <li ref={myRef}>{myElementIsVisible ? <FooterAnimation>Contacts:</FooterAnimation> : ''}</li>
                        
                        <li ref={myRef2}>
                            {myElementIsVisible2 ? 
                                <FooterAnimation>
                                    <a href="mailto:negodiay@gmail.com" className="contacts_email">
                                        <div className="email">
                                            <MdOutlineEmail />
                                        </div>
                                        negodiay@gmail.com
                                    </a>
                                </FooterAnimation> : ''
                            }    
                        </li>

                        <li ref={myRef3}>
                            {myElementIsVisible3 ?
                                <FooterAnimation>
                                    <a href="https://www.instagram.com/roma_platonov_music/" className="contacts_email" target={"_blank"}>
                                        <div className="email">
                                            <AiOutlineInstagram />
                                        </div>
                                        roma_platonov_music
                                    </a>
                                </FooterAnimation> : ''
                            }    
                        </li>                    

                        <li ref={myRef4}>
                            {myElementIsVisible4 ? 
                                <FooterAnimation>
                                    <a href="tel:+380674878556" className="contacts_email">
                                        <div className="email">
                                            <FiPhoneCall />
                                        </div>
                                        +380674878556
                                    </a>
                                </FooterAnimation> : ''
                            }     
                        </li>                    
                                            
                    </ul>
                </div>

                <div className="footer_right">
                    {myElementIsVisible ? 
                        <FooterAnimation2>
                            <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
                                <img src={logoImg} alt="Тут должен быть мой логотип" id="Logo" />
                                <div className="logo_title">Platonov Roma</div>
                            </Link>                                         
                        </FooterAnimation2> : ''
                    }
                </div>

                <div className="copyright">
                    {myElementIsVisible4 ? 
                        <FooterAnimation2>
                            <span>Copyright © 2022, Platonov Roma</span>
                        </FooterAnimation2> : ''
                    }
                </div>
                
                <Link to="home" spy={true} smooth={true} offset={50} duration={500} className="cunt">
                    <div className={myElementIsVisible ? 'home_arrow home_arrow_appear' : ''}>
                        <img src={arrow} alt="" />
                    </div>
                </Link>
            </div>
        </footer>
    )
};

export default Footer;