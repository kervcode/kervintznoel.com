import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import "./contact.styles.css";
import axios from 'axios';
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';


class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    disabled: false,
    emailSent: null,
    errors: [],
  } 
 
  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
    
    console.log(value)
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    
    this.setState({
        disable: true
    })
    
    axios.post('http://localhost:3003/api/contact', this.state)
            .then(res => {
                console.log(res.data)
                if(res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                    this.clearForm();
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })
  }

  clearForm =  () => {
    this.setState(
      {
        name: '',
        email: '',
        subject: '',
        message: '',
      }
    )
  }
  
  
    
  
render(){
  
  const { name, email, subject, message, errors} = this.state;
  
    return (
        <>
          <div className="contact-form">
            <h1 className="contact-heading">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup control_id="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={email}
                className="text-primary form_input"
                onChange={this.change}
                placeholder="Enter email"
                errors={errors}
              />
            </FormGroup>
            <FormGroup control_id="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={name}
                className="text-primary form_input"
                onChange={this.change}
                placeholder="Name"
              />
            </FormGroup>      
            <FormGroup control_id="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary form_input"
                value={subject}
                onChange={this.change}
                placeholder="Subject"
              />
            </FormGroup>
            <FormGroup control_id="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary form_input"
                value={message}
                onChange={this.change}
                placeholder="Your special message to me"
              />
            </FormGroup>
            <Button id="submit" variant="primary" type="submit" disabled={this.disabled}>
              Submit
            </Button>
          </Form>
          </div>
        </>
    )
  }
}
export default Contact