import './Intro.css';
import testPhoto from './me.jpg';


export default function Intro() {
    return (
        <div className="Intro">
            
            <div className="Photo">
                <img src={testPhoto} />
            </div>
            <div className="Statement">
                <h4>     From analyzing econometric data, to balancing a bank vault, to building a browser game, I have developed an eye for detail and a passion for creating a great final product. I consistently work well under pressure, I prioritize personal growth, and I am dedicated to contributing ideas and collaborating with my team to achieve our goals. </h4>

            </div>
          
        </div>
    )
}