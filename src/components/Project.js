import react from 'react';
import "./project.styles.css"


const Projects = ({ name, description }) => {
    return (
        <div className="projects">
            <h2>{name}</h2>
            <div className="project">
                <p className="project_description">{description} text</p>
                <img src={process.env.PUBLIC_URL + "image/form-small.png"} alt="t" className="project_image" />
            </div>
        </div>
    )
}

export default Projects
