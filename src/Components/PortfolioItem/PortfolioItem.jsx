import './PortfolioItem.css';

export default function PortfolioItem ({ project }) {
    return (
        <div className="PortfolioItem">
            <h3>{ project.name }</h3>
            <h4>{ project.description }</h4>
            <img src={project.image} alt=""/>
        </div>
    )
}

