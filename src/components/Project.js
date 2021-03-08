import react from 'react';
import "./project.styles.css"
import { Route, Link } from 'react-router-dom';
import detailsPage from './detailsPage';


const Projects = ({ name, description, live, git }) => {
    console.log(name)
    return (
        <div className="projectContainer">
            <div>
                <h2>{name}</h2>
            </div>
                
            <div className="project">
                <p className="project_description">{description} text</p>
                <img src={process.env.PUBLIC_URL + "image/" + name +".jpg"} alt="t" className="project_image" />
            </div>
            <a href={live} className="button-container">
            <button className="button">Live Project</button>
            </a>
            <a href={git} className="button-container">
                <button className="button">GitHub</button>
            </a>
        </div>
    )
}

export default Projects
