import './Portfolio.css';
import mernphoto from './MERNflash.png';
import squirrelphoto from './zs.png';
import uspolling from './uspoll.png';
import minesweeper from './minesweeper.png';
import BmailInbox from './BmailInbox.png';
import BmailCompose from './BmailCompose.png';
import { useState } from 'react';

export default function Portfolio () {
    //put in seperate directory and export? 
    const projectsList = [
        {
            name:"Bmail",
            description:"A mock of 'Gmail' UI, built using React and a foreign API for technical interview.",
            // image:[],
            tags:["JS", "HTML", "CSS", "Axios", "React", "Foreign API"],
            repo:"https://github.com/DaCoPro/Bmail",
            dateCompleted: "2021-02-30"
        },
        {
            name:"The Flash App",
            description:"A MERN stack application built for users who'd like to study smarter, not harder. The Flash App is a platform for users to create decks of flashcards, and informs them what they should study.",
            image:mernphoto, 
            tags:["JS", "HTML", "CSS", "MongoDB", "Express", "Node", "React", "MERN"],
            repo:"https://github.com/DaCoPro/MERN-Flashcards",
            dateCompleted: "2021-02-05"
        },
        {
            name:"US Polling",
            description:"A Polling application built to let a user create poll questions and query other users. The results are displayed in a graphical bar-chart.",
            image:uspolling,
            tags:["JS", "HTML", "CSS", "Python", "Django", "PostreSQL", "Materialize"],
            repo:"https://github.com/DaCoPro/US-Polling",
            dateCompleted: "2021-01-05"
        },
        {
            name:"Zen Squirrel",
            description:"A project management application with built in Pomodoro Timer.",
            image:squirrelphoto,
            tags:["JS", "CSS", "HTML", "Express", "Node", "MongoDB", "OAuth" ],
            repo:"https://github.com/DaCoPro/Pomodoro-proj-mgnt",
            dateCompleted: "2020-12-25"
        },
        {
            name:"MineSweeper",
            description:"An interactive browser game built to learn the dynamics of MVC separation of concerns.",
            image:minesweeper,
            tags:["JS", "CSS", "HTML"],
            repo:"https://github.com/DaCoPro/minesweeper",
            dateCompleted: "2020-11-15"
        }
    ];
    const [projects, setProjects] = useState(projectsList)
    console.log(projects)
    return ( 

        <main className="Portfolio">
            <div className="WholeDoc">
                <div>
                    <h1>The Flash App</h1>
                    <h4>A MERN stack application built for users who'd like to study smarter, not harder. The Flash App 
                        is a platform for users to create decks of flashcards, and informs them what they should study.</h4>
                    <h4>Build with JS, HTML, CSS, MongoDB, Express, Node, & React.</h4>
                    <a href="https://github.com/DaCoPro/MERN-Flashcards"><img className="PortPic" src={mernphoto} alt=""/></a>
                </div>
                <br/>
                <hr/>
                <br/>
                <div>
                    <h1>US Polling</h1>
                    <h4>A Polling application built to let a user create poll questions and query other users. The 
                        results are displayed in a graphical bar-chart. 
                    </h4>
                    <h4>Build with Python, Django, CSS, HTML.</h4>
                    <a href="https://github.com/DaCoPro/US-Polling"><img className="PortPic" src={uspolling} alt=""/></a>
                </div>
                <br/>
                <hr/>
                <br/>
                <div>
                    <h1>Zen Squirrel</h1>
                    <h4>A project management application with built in Pomodoro Timer. 
                    </h4>
                    <h4>Build with JS, Express, Node, CSS, HTML.</h4>
                    <a href="https://github.com/DaCoPro/Pomodoro-proj-mgnt"><img className="PortPic" src={squirrelphoto} alt=""/></a>
                </div>
                <br/>
                <hr/>
                <br/>
                <div>
                    <h1>MineSweeper</h1>
                    <h4>An interactive browser game built to learn the dynamics of MVC separation of concerns. Fully functional. 
                    </h4>
                    <h4>Build with JS, CSS, HTML.</h4>
                    <a href="https://github.com/DaCoPro/minesweeper"><img className="PortPic" src={minesweeper} alt=""/></a>
                </div>
                <br/>
                <hr/>
                <br/>
                <div>
                    <h1>Bmail</h1>
                    <h4> A mock of 'Gmail' UI, built using React and a foreign API for technical interview.
                    </h4>
                    <h4>React, CSS, HTML, JS</h4>
                    <a href="https://github.com/DaCoPro/Bmail"><img className="PortPic" src={BmailInbox} alt=""/></a>
                </div>
            </div>
        </main>
    );
}