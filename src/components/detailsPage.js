import { Description } from '@material-ui/icons';
import React from 'react';
import data from './data/data.json';


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
                <h2>Project Description</h2>
                <div className="container">
                    <div className="description"> 
                        <h3>
                            {data.[id].project_name}
                        </h3>

                        <div>
                            {data.[id].description}
                        </div>
                    </div>
                    <div className="technologies">
                        <ul>
                            {
                                technologies.map( (tech, i) => {
                                    return(<li key={i}>{tech}</li>)
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div>

                        {
                            images.map((image, i) => {
                                console.log(image)
                                return (
                                    <div key={i}>
                                        <img src={process.env.PUBLIC_URL + "image/" + image +".png"} alt={image} />
                                    </div>
                                )
                            })
                        }
                
                </div>
            </div>
        );
    }
  }

  export default DetailsPage;