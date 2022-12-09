import React, {useState, useEffect} from "react";
import logoImg from '../img/Logo.png';
import styled from 'styled-components';
import { Link } from "react-scroll";
import '../components/Navbar.css';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {
    const [show, setShow] = useState(false);

    const controlNavbar = () => {
        if (window.scrollY > 2950) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])

    const [clicked, setClicked] = useState(false);
    const handleClicked = () => {setClicked(!clicked)};
    const closeMenu = () => setClicked(false);

    const LogoTitle = styled.div`
    margin-left: 10px;
    font-size: 24px;
    font-weight: 400;
    color: #ffffff;
    font-family: Nico_Moji;
    transform: translateY(-3px);
    `
;

    return (
        <div className={`navbar ${show && 'nav_hide'}`}>
            <div className="platonov_roma">
                <Link to="home" spy={true} smooth={true} offset={-26} duration={500}>
                    <img src={logoImg} alt="Тут должен быть мой логотип" id="Logo" />
                </Link>

                <Link to="home" spy={true} smooth={true} offset={-26} duration={500}>
                    <LogoTitle>Platonov Roma</LogoTitle>
                </Link>
            </div>

            <ul className={clicked ? 'clicked' : ''}>
                <li>
                    <Link to="home" spy={true} smooth={true} offset={-26} duration={500} onClick={closeMenu}>Home</Link>
                </li>

                <li>
                    <Link to="about" spy={true} smooth={true} offset={-300} duration={500} onClick={closeMenu}>About me</Link>
                </li>

                <li>
                    <Link to="portfolio" spy={true} smooth={true} offset={-50} duration={500} onClick={closeMenu}>Portfolio</Link>
                </li>

                <li>
                    <Link to="contacts" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Contacts</Link>
                </li>
            </ul>

        <div className="hamburger"
            onClick={handleClicked}>
            {clicked ? <FaTimes /> : <FaBars />}            
        </div>

        </div>
    )
}

export default Navbar;