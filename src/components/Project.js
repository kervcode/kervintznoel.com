import react from 'react';
import "./project.styles.css"
import { Link } from 'react-router-dom';


const Projects = ({ name, description }) => {
    console.log(name)
    return (
        <div className="projects">
            <Link to={name}>
                <h2>{name}</h2>
                <div className="project">
                    <p className="project_description">{description} text</p>
                    <img src={process.env.PUBLIC_URL + "image/" + name +".jpg"} alt="t" className="project_image" />
                </div>
            </Link>
        </div>
    )
}

export default Projects
