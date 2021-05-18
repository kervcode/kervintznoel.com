import React, { useState } from 'react';
import "./contact.styles.css";
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import useForm from './useForm';
import validateForm from './validateForm'


function Contact() {

  const { handleChange, values, handleSubmit, errors } = useForm(validateForm)

  const [sent, setSent] = useState(false)
  const [text, setText] = useState("")
  const [error, setError] = useState("")
  

    
    try {
       axios.post("http://localhost:3003/send_mail", {
        text
      })
    } catch (error) {
      console.log(error)
    }
  
  
  
     return (
       <div className="contact-form">
       <h1 className="contact-heading">Get in Touch</h1>
        <Form onSubmit={handleSubmit}>
          <FormGroup control_id="formBasicEmail">
            <div className="input-field">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"              
                id="email"
                className="text-primary form_input"
                placeholder="Enter email"
                value={values.email}
                onChange={handleChange}
          
              />
            </div>

            
            {errors.email && <p className="validation">{errors.email}</p>}
          </FormGroup>
        <FormGroup control_id="formBasicName">
            <div className="input-field">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value=""
                id="name"
                className="text-primary form_input"
                placeholder="Name"
                value={values.name}
                  onChange={handleChange}
              />
            </div>
         
         {errors.name && <p className="validation">{errors.name}</p>}
       </FormGroup>      
        <FormGroup control_id="formBasicSubject">
            <div className="input-field">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                id="subject"
                className="text-primary form_input"
                value={values.subject}
                onChange={handleChange}
                placeholder="Subject"
              />
            </div>
         
         {errors.subject && <p className="validation">{errors.subject}</p>}
       </FormGroup>
        <FormGroup control_id="formBasicMessage">
            <div className="input-field">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                className="text-primary form_input"
                value={values.message}
                onChange={handleChange}
                placeholder="Your special message to me"
              />
            </div>
         
         {errors.message && <p className="validation">{errors.message}</p>}
       </FormGroup>
       <Button id="submit" type="submit" disabled="">
         Submit
       </Button>
     </Form>
     </div>
     )
}


export default Contact