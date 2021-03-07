import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import "./contact.styles.css";
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap';


class Contact extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: '<YOUR_EMAIL_ID>',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'outlook',
      'template_XXXXXXXX',
       templateParams,
      'user_XXXXXXXXXXXXXXXXXXXX'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
        <>
          <div className="contact-form">
            <h1 className="contact-heading">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup control_id="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
            <FormGroup control_id="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary input"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>      
            <FormGroup control_id="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
            <FormGroup control_id="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
                placeholder="Your special message to me"
              />
            </FormGroup>
            <Button id="submit" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </div>
        </>
    )
  }
}
export default Contact