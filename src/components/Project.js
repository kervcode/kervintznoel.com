
import "./project.styles.css";
import {  Link, useParams } from 'react-router-dom';

// <Link to={{ pathname: "/your-path", hash: "#" }} >Link Text</Link>

const Projects = ({ name, live, git, id }) => {
    
    return (
            <div className="project_card">
                <div className="project_card--title">
                    <h2>{name}</h2>
                </div>
                <div className="project_card--box">
                        <img src={"image/" + name + ".jpg"} alt="t" className="project_card--image" />
                </div>
                <div className="btn">
                    <Link to={`${id}`}>
                        <button className="button">Details</button>
                    </Link>
                    <Link to={`${live}`} target="_blank">
                        <button className="button">Live Project</button>
                    </Link>
                    <Link to={`${git}`} target="_blank">
                        <button className="button">GitHub link</button>
                    </Link>
                </div>
            </div>
    )
}

export default Projects
