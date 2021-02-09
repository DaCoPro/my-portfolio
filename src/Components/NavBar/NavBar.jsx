import './NavBar.css';
import { Link } from 'react-router-dom';
export default function NavBar () {
    
    return ( 
        <div className="NavBar">
            <h3 className="MyName">David Comer</h3>
            <div className="Links">
                <Link className="NavLink" to="/intro">Intro</Link>
                <Link className="NavLink" to="/resume">Resume</Link>
                <Link className="NavLink" to="/portfolio">Portfolio</Link>
                <Link className="NavLink" to="/contact">Contact</Link>
            </div>
        </div>
    );
}
