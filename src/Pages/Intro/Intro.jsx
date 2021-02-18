import './Intro.css';
//import photos
import testPhoto from './me.jpg';
import smithPhoto from './Smith.jpeg';
import climbingPhoto from './Climbing.jpeg'


export default function Intro() {
    return (
        <div className="Intro">
            <div className="Photo">
                <img className="mePhoto" src={testPhoto} />
            </div>
            <div className="Statement">

                <h4 className="PS">From analyzing econometric data, to balancing a bank vault, to building an application, I have developed an eye for detail and a passion for creating a great final product. I consistently work well under pressure, I prioritize personal growth, and I am dedicated to contributing ideas and collaborating with my team to achieve our goals. </h4>
            </div>
                {/* <img className="smithPhoto" src={smithPhoto} alt=""/>
            <div className="climbingBlurb">
                <img className="climbingPhoto" src={climbingPhoto} alt=""/>
                <h4>In addition to being a programmer, I'm a 5.10a outdoor climber, who's been climbing in Central Oregon since 2019.s</h4>
            </div>  */}
        </div>
    )
}