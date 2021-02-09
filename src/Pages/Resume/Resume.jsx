import './Resume.css';

export default function Resume () {
    return ( 
        <main className="Resume">
            <div className="WholeDoc">
                <div className="Experience">
                    <h1>Experience</h1>
                    <h2>Software Engineering</h2>
                    <h4>General Assembly</h4>
                    <ul>
                        <li>From October of 2020 through February of 2021, I spent 500 hours learning and utilizing full-stack engineering skills. </li>
                        <li>Areas of study included web basics, HTML - CSS - JS, Express Applications, Django/Python Applications, and MERN Stack. </li>
                        <li>Accumulated a collaborative and individual portfolio of work.</li>
                    </ul>
                    <h2>Client Services Advisor</h2>
                    <h4>Summit Bank</h4>
                    <ul>
                        <li>From November of 2018 through October of 2020. </li>
                        <li>I continually increased my responsability. I balanced all branch cash and was undergoing training for new-accounts work.</li>
                    </ul>
                </div>
                <div className="Education">
                    <h1>Education</h1>
                    <h2>California State University, Fresno</h2>
                    <h4>Bachelors in Economics </h4>
                    <ul>
                        <li>Minor in Philosophy</li>
                        <li>Dean's List</li>
                    </ul>
                </div>
                <a href="">Download My Resume</a>
            </div>
        </main>
    );
}