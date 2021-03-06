import react from 'react';
import { Link } from "react-router-dom";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Footer = () => (
    <div className = "footer">
        <p> Develop by Kervintz -  &copy; 2021 </p>
        <div>
            <a href="https://github.com/kervcode" target="_blank">
                <GitHubIcon className="social-icons"/>
            </a>
            <a href="https://www.linkedin.com/in/kervintznoel/" target="_blank">
                <LinkedInIcon className="social-icons"/>
            </a>
        </div>
    </div>
)



export default Footer;