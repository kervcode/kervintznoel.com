import react from 'react';
import data from './data/data.json';
import Projects from './Project';


const Project_lists = () => {
    console.log(data)

    let projects = data.map( (dt) => 
    <Projects 
        key={dt.id} 
        name={dt.project_name}
        description={dt.description} 
        live={dt.live_link}
        git={dt.github_link}
        tech={dt.technologies}
    /> )
    
    return (
       <div>
            <h2>Projects</h2>
            <div>{ projects }</div>
       </div>
    )
    
}

export default Project_lists;


