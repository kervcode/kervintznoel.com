import react from 'react';
import "./project.styles.css"
import { Route, Link } from 'react-router-dom';
import detailsPage from './detailsPage';


const Projects = ({ name, description }) => {
    console.log(name)
    return (
        <div className="projects">
        <div>
            <h2>{name}</h2>
        </div>
                
                <div className="project">
                    <p className="project_description">{description} text</p>
                    <img src={process.env.PUBLIC_URL + "image/" + name +".jpg"} alt="t" className="project_image" />
                </div>
            <Link to="/projects">
            <button className="button">Live Project</button>
          </Link>
          <Link to="/contact" >
            <button className="button">GitHub</button>
          </Link>
        </div>
    )
}

export default Projects
