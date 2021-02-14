import './Contact.css';
import liLogo from './liLogo.png'
import ghLogo from './ghLogo.png'

export default function Contact () {
    return (
        <main className="Contact">
            <h1>Contact Me:</h1>
            <h2>comerbdavid@gmail.com</h2>
            <div className="CMLinks">
                <a href="https://www.linkedin.com/in/d-comer/"><h4><img className="LinkLogos" src={liLogo} /></h4></a>
                <a href="https://github.com/DaCoPro"><h4><img className="LinkLogos" src={ghLogo} /></h4></a>
            </div>
            
            
        </main>
    );
}