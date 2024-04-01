import data from './data/data.json';
import Projects from './Project';
import "./project.styles.css";


const ProjectList = () => {
  

    let projects = data.map( (dt) => 
    <Projects 
        id={dt.id}
        key={dt.id} 
        name={dt.project_name}
        description={dt.description} 
        live={dt.live_link}
        git={dt.github_link}
        technologies={dt.technologies}
    /> )
    
 
    
    return (
       <div className="container">
            <h1>Projects</h1>
                <div className="projectContainer">{ projects }</div>
       </div>
    )
    
}

export default ProjectList;
