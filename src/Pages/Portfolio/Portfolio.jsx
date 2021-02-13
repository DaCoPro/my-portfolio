import './Portfolio.css';
import mernphoto from './MERNflash.png';
import squirrelphoto from './zs.png';
import uspolling from './uspoll.png';
import minesweeper from './minesweeper.png';

export default function Portfolio () {
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
            </div>
        </main>
    );
}