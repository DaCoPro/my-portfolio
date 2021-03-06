//technical imports
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

//import other files and components
import './Resume.css';
import MERNProjects from '../../Components/Dropdowns/MernProjects';
import WebProjects from '../../Components/Dropdowns/WebProjects';
import DjangoProjects from '../../Components/Dropdowns/DjangoProjects';
import GitProjects from '../../Components/Dropdowns/GitProjects';
//img imports
import mernLogo from './mernlogo.png';
import hcjLogo from './hcj2.png';
import pjLogo from './pj.jpg';
import gitLogo from './git.png';

export default function Resume () {
    //Initialize selector to 0
    const [showProjects, setShowProjects] = useState(0);

    // //When a skill logo is clicked, setShowProjects to it's id.
    // function handleMERNClick(evt) {
    //     if (showProjects !== 1) {
    //         setShowProjects(1);
    //     } else {
    //         setShowProjects(0);
    //     }
    // }
    // function handleWebClick(evt) {
    //     if (showProjects !== 2) {
    //         setShowProjects(2);
    //     } else {
    //         setShowProjects(0);
    //     }
    // }
    // function handleDjangoClick(evt) {
    //     if (showProjects !== 3) {
    //         setShowProjects(3);
    //     } else {
    //         setShowProjects(0);
    //     }
    // }
    // function handleGitClick(evt) {
    //     if (showProjects !== 4) {
    //         setShowProjects(4);
    //     } else {
    //         setShowProjects(0);
    //     }
    // }

    return ( 
        <main className="Resume">
            <div className="WholeDoc">
                
                
                <div className="Skills">
                    <span><h1 className="Heading">MY SKILLS</h1></span>
                    
                    <div className="SkillLogos">
                        <div className="Logo">
                            <img className="Logos" src={mernLogo}  />
                        </div>
                        <div  className="Logo">
                            <img className="Logos" src={hcjLogo}  />
                        </div>
                        <div  className="Logo">
                            <img className="Logos" src={pjLogo}  />
                        </div>
                        <div className="Logo">
                            <img className="Logos" src={gitLogo}  />
                        </div>
                    </div>
                    <div className="PortLinkDiv">
                        <Link className="PortLink" to="/portfolio">GO TO PORTFOLIO</Link>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="Experience">
                    <h1>EXPERIENCE</h1>
                    <span><h2 className="Heading">SOFTWARE ENGINEERING</h2><h4 className="Date" >October 2020 - February 2021</h4></span>
                    <h3 className="Info">GENERAL ASSEMBLY</h3>
                    <ul>
                        <li>500 hours learning and utilizing full-stack engineering skills. </li>
                        <li>Areas of study included web basics, HTML - CSS - JS, Express Applications, Django/Python Applications, and MERN Stack. </li>
                        <li>Accumulated a collaborative and individual portfolio of work.</li>
                    </ul>
                    <span><h2 className="Heading">BANKING OPERATIONS</h2><h4 className="Date" >November 2018 - October 2020</h4></span>
                    <h3 className="Info">SUMMIT BANK</h3>
                    <ul>
                        <li>Developed professional skills and learned to operate as a part of an organization. </li>
                        <li>Responsible for all branch accounting and for moving money with a variety of banking and federal software. </li>
                        <li>I continually increased my responsability. I balanced all branch cash and was undergoing training for new-accounts work.</li>
                    </ul>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="Education">
                    <h1>EDUCATION</h1>
                    <span><h2 className="Heading">FRESNO STATE UNIVERSITY</h2><h4 className="Date" >August 2016 -  June 2018</h4></span>
                    <h4 className="Info">B.A. ECONOMICS</h4>
                    <p>Philosophy minor, Dean's List.</p>
                    <span><h2 className="Heading">GENERAL ASSEMBLY</h2><h4 className="Date" >August 2016 -  June 2018</h4></span>
                    <h4 className="Info">SOFTWARE ENGINEERING IMMERSIVE PROGRAM</h4>
                    <p>Full Stack Web Development</p>
                </div>
            </div>
        </main>
    );
}