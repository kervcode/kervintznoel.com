import react from 'react';
import "./project.styles.css";
import { Route, Link } from 'react-router-dom';
import detailsPage from './detailsPage';


const Projects = ({ name, description, live, git, technologies }) => {
    console.log(technologies)
    return (
            <div className="project_card">
               <div className="img_box">
                    <img src={process.env.PUBLIC_URL + "image/" + name +".jpg"} alt="t" className="project_image" />
               </div>
                <h2 className="project_card_name">{name}</h2>
               <div className="content">
                   <p>{description}</p>
                   <ul>  
                        <p className="stack">Technology used:</p>
                        {technologies.map( technology => <li> {technology} </li>)}
                   </ul>
                   <div className="btn">
                        <Link to="/projects">
                            <button className="button">Projects</button>
                        </Link>
                        <Link to="/contact">
                            <button className="button">Contact me</button>
                        </Link>
                    </div>
               </div>
            </div>
    )
}

export default Projects
