import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const Footer = () => (
    <div className = "footer">
        <p> &copy;2021 | Designed & coded with <span className="emoji">&#9829;</span> by Kervintz</p>
        <div>
            <a href="https://github.com/kervcode" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="social-icons"/>
            </a>
            <a href="https://www.linkedin.com/in/kervintznoel/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="social-icons"/>
            </a>
        </div>
    </div>
)



export default Footer;