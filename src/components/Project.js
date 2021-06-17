import react from 'react';
import "./project.styles.css";
import { Route, Link } from 'react-router-dom';
import detailsPage from './detailsPage';


const Projects = ({ name, description, live, git, technologies, dt, id }) => {
    
    return (
            <div className="project_card">
                <div className="project_card--title">
                    <h2>{name}</h2>
                </div>
                <div className="project_card--box">
                        <img src={process.env.PUBLIC_URL + "image/" + name +".jpg"} alt="t" className="project_card--image" />
                </div>
                <div className="btn">
                    <Link to={`projects/${id}`}>
                        <button className="button">Details</button>
                    </Link>
                    <Link to={{pathname: live }} target="_blank">
                        <button className="button">Live Project</button>
                    </Link>
                    <Link to={{pathname: git}} target="_blank">
                        <button className="button">GitHub link</button>
                    </Link>
                    
                </div>
            </div>
    )
}

export default Projects
