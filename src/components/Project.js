import react from 'react';
import "./project.styles.css";
import { Route, Link } from 'react-router-dom';
import detailsPage from './detailsPage';


const Projects = ({ name, description, live, git, technologies }) => {
    console.log(name)
    return (
            <div className="project_card">
               <div className="img_box">
                    <img src={process.env.PUBLIC_URL + "image/" + name +".jpg"} alt="t" className="project_image" />
               </div>
                <h2>{name}</h2>
               <div className="content">
                   <p>{description}</p>
                   <ul>  
                        {technologies.map( (technology, i) => {
                            <li key={i}>technology</li>
                        })}
                   </ul>
               </div>
            </div>
    )
}

export default Projects
