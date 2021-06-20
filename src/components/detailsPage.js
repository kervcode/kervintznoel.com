import { Description } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import data from './data/data.json';
import './detailPage.css'


class DetailsPage extends React.Component {
    render() {
        const id = this.props.match.params.id;
        const technologies = data.[id].technologies;
        const images = data.[id].image_urls;


        console.log(id)
        console.log(images)
        console.log(technologies)
    
        return (
            <div >
                <h1>Project Description</h1>
                <div className="container">
                    <h2 id="project_name">
                        {data.[id].project_name}
                    </h2>
                

                    <div className="description"> 
                        
                        <div className="project_title">
                            {data.[id].description}
                        </div>

                        <div className="project_technologies">
                            <h3>Technologies used: </h3>
                            <ul>
                                {
                                    technologies.map( (tech, i) => {
                                        return(<li key={i}>{tech}</li>)
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    

                    <div className="project_images">
                    {
                        images.map((image, i) => {
                            console.log(image)
                            return (
                                <div key={i}>
                                    <img src={`/image/${image}`} alt={image} />
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
            
            // <Link to={{ pathname: '/projects'}} >
            //     <button className="button">Return</button>
            // </Link>
                    
        );
    }
  }

  export default DetailsPage;