import './Resume.css';

export default function Resume () {
    return ( 
        <main className="Resume">
            <div className="WholeDoc">
                <div className="Experience">
                    <h1>EXPERIENCE</h1>
                    <span><h2 className="Heading">SOFTWARE ENGINEERING</h2><h4 className="Date" >October 2020 - February 2021</h4></span>
                    <h3 className="Info">GENERAL ASSEMBLY</h3>
                    <ul>
                        <li>From October of 2020 through February of 2021, I spent 500 hours learning and utilizing full-stack engineering skills. </li>
                        <li>Areas of study included web basics, HTML - CSS - JS, Express Applications, Django/Python Applications, and MERN Stack. </li>
                        <li>Accumulated a collaborative and individual portfolio of work.</li>
                    </ul>
                    <span><h2 className="Heading">BANKING OPERATIONS</h2><h4 className="Date" >November 2018 - October 2020</h4></span>
                    <h3 className="Info">SUMMIT BANK</h3>
                    <ul>
                        <li>From November of 2018 through October of 2020. </li>
                        <li>I continually increased my responsability. I balanced all branch cash and was undergoing training for new-accounts work.</li>
                    </ul>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="Education">
                    <h1>EDUCATION</h1>
                    <span><h2 className="Heading">BACHELORS IN ECONOMICS</h2><h4 className="Date" >August 2016 -  June 2018</h4></span>
                    <h4 className="Info">CALIFORNIA STATE UNIVERSITY, FRESNO</h4>
                    <ul>
                        <li>Minor in Philosophy</li>
                        <li>Dean's List</li>
                    </ul>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className="Education">
                    <h1>EDUCATION</h1>
                    <span><h2 className="Heading">BACHELORS IN ECONOMICS</h2><h4 className="Date" >August 2016 -  June 2018</h4></span>
                    <h4 className="Info">CALIFORNIA STATE UNIVERSITY, FRESNO</h4>
                    <ul>
                        <li>Minor in Philosophy</li>
                        <li>Dean's List</li>
                    </ul>
                </div>
                
            </div>
        </main>
    );
}