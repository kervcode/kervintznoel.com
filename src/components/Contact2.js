
import React, { Component } from 'react';
import Pdf from '../Resume - KervintzNoel.pdf';
import "./contact.styles.css";

class Contact2 extends Component {
    render() {
        return (
            <div className="container">
                <h1>Contact info</h1>
                <div className="contact-form">
                    <div className="contact-item tel">
                        <a href="tel:786-923-6596" alt="">786-923-6596</a>
                    </div>

                    <div className="contact-item email">
                        <a href=" mailto: kervintznoel@outlook.com" alt="">kervintznoel@outlook.com</a>
                    </div>  
                    <div className="contact-item">
                        <a href="https://www.linkedin.com/in/kervintznoel/" target="_blank" rel="noopener noreferrer" alt="">LinkedIn</a>
                    </div>

                    <div className="contact-item">
                        <a href = {Pdf} target = "_blank" rel="noopener noreferrer">Resume</a>                  
                    </div>                  
                </div>
            </div>
        )
    }
}

export default Contact2
