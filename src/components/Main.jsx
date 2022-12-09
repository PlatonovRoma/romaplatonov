import React from "react";
import './Main.css'
import SectionItem from "./SectionItem";
import { FaGitAlt } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';
import { TiHtml5 } from 'react-icons/ti';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { DiGulp } from 'react-icons/di';
import AboutMe from "./AboutMe";

const Main = () => {    
    return <>
        <main>
            <section className="section_1">
                <div className="section_1_container">
                    <SectionItem icon={<FaGitAlt/>} title='Git' text='I have a basic knowledge of VCS (Version control system) to collaborate in team: GitHub repositories, branches etc.'/>
                    <SectionItem icon={<SiAdobephotoshop/>} title='Photoshop' text='Advanced skills in Photoshop and Figma to complete layouts of any dificulty.'/>
                    <SectionItem icon={<TiHtml5/>} title='HTML5' text='I use all new stuff in HTML5 in my work: tags, properties, metadata basics, whatever...'/>
                    <SectionItem icon={<DiCss3/>} title='CSS3' text='CSS3 allows me to create beautiful animations, transitions and filters. Anyway, guys on Youtube are full of ideas. Thank them for ability to steal some :)'/>
                    <SectionItem icon={<SiJavascript/>} title='Javascript' text='Every frontend developer must know JS, so I am not exeption. I like to use native Javascript, ES6 and ES2022 as well as JS-frameworks.'/>
                    <SectionItem icon={<FaReact/>} title='React' text='This site was written on React and it`s plugins: react-animations, react-icons, react-owl-carousel, react-router-dom and styled-components. '/>
                    <SectionItem icon={<DiGulp/>} title='Gulp' text='Okay, if "npm build" is not enough we can use Gulp task manager: code minification, transformation images to Webp, font convertation, autoprefixer etc. '/>
                </div>
            </section>
            <AboutMe />
        </main>
    </>
}

export default Main;