import React, { useState } from 'react';
import "./contact.styles.css";
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


function Contact() {
  const [sent, setSent] = useState(false)
  const [text, setText] = useState("")
  const [error, setError] = useState("")
  
  const handleSubmit = async() => {
    setSent(true)
    
    try {
      await axios.post("http://localhost:3003/send_mail", {
        text
      })
    } catch (error) {
      console.log(error)
    }
  } 
  
  
     return (
       <div className="contact-form">
       <h1 className="contact-heading">Get in Touch</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup control_id="formBasicEmail">
            <Label className="text-muted">Email address</Label>
            <Input
              type="email"
              name="email"
              value=""
              className="text-primary form_input"
              onChange=""
              placeholder="Enter email"
              errors={error}
            />
          </FormGroup>
        <FormGroup control_id="formBasicName">
         <Label className="text-muted">Name</Label>
         <Input
           type="text"
           name="name"
           value={}
           className="text-primary form_input"
           onChange={}
           placeholder="Name"
         />
       </FormGroup>      
        <FormGroup control_id="formBasicSubject">
         <Label className="text-muted">Subject</Label>
         <Input
           type="text"
           name="subject"
           className="text-primary form_input"
           value={}
           onChange={}
           placeholder="Subject"
         />
       </FormGroup>
        <FormGroup control_id="formBasicMessage">
         <Label className="text-muted">Message</Label>
         <Input
           type="textarea"
           name="message"
           className="text-primary form_input"
           value={}
           onChange={}
           placeholder="Your special message to me"
         />
       </FormGroup>
       <Button id="submit" variant="primary" type="submit" disabled={}>
         Submit
       </Button>
     </Form>
     </div>
     )
}


export default Contact