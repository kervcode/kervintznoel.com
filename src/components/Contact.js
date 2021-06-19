import React, { useState } from 'react';
import "./contact.styles.css";
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import useForm from './useForm';
import validateForm from './validateForm'


// function Contact() {

//   const { handleChange, values, handleSubmit, errors } = useForm(validateForm)

//   const [sent, setSent] = useState(false)
//   const [text, setText] = useState("")
//   const [error, setError] = useState("")
  

    
//     try {
//        axios.post("http://localhost:3003/send_mail", {
//         text
//       })
//     } catch (error) {
//       console.log(error)
//     }
  
class Contact extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        subject:'',
        message: ''
      }
  }

  onNameChange(e) {
      this.setState({name: e.target.value})
  }

  onEmailChange(e) {
      this.setState({email: e.target.value})
  }

  onSubjectChange(e) {
      this.setState({subject: e.target.value})
  }

  onMsgChange(e) {
      this.setState({message: e.target.value})
  }

  submitEmail(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
          alert("Message Sent."); 
          this.resetForm()
      }else if(response.data.status === 'fail'){
          alert("Message failed to send.")
      }
    })
}

resetForm(){
    this.setState({name: '', email: '', subject:'', message: ''})
}

  
     render() {
      return (
        <div className="contact-form">
         <h1 className="contact-heading">Get in Touch</h1>
           <Form onSubmit={this.submitEmail.bind(this)} method="POST">
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
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </div>
       
              {/*{errors.name && <p className="validation">{errors.name}</p>} */}
            </FormGroup> 
             <FormGroup control_id="formBasicEmail">
               <div className="input-field">
                 <Label className="text-muted">Email address</Label>
                 <Input
                   type="email"
                   name="email"              
                   id="email"
                   className="text-primary form_input"
                   placeholder="Enter email"
                   value={this.state.email}
                   onChange={this.onEmailChange.bind(this)}
                   required
                 />
               </div>
             {/*{errors.email && <p className="validation">{errors.email}</p>} */}
           </FormGroup>
            
         <FormGroup control_id="formBasicSubject">
             <div className="input-field">
               <Label className="text-muted">Subject</Label>
               <Input
                 type="text"
                 name="subject"
                 id="subject"
                 className="text-primary form_input"
                 value={this.state.subject}
                 onChange={this.onSubjectChange.bind(this)}
                 placeholder="Subject"
               />
             </div>
          
          {/*{errors.subject && <p className="validation">{errors.subject}</p>} */}
        </FormGroup>
         <FormGroup control_id="formBasicMessage">
             <div className="input-field">
               <Label className="text-muted">Message</Label>
               <Input
                 type="textarea"
                 name="message"
                 id="message"
                 className="text-primary form_input"
                 value={this.state.message}
                 onChange={this.onMsgChange.bind(this)}
                 placeholder="Your special message to me"
               />
             </div>
          
          {/*{errors.message && <p className="validation">{errors.message}</p>} */}
        </FormGroup>
        <Button id="submit" type="submit">
          Submit
        </Button>
      </Form>
      </div>
      )

     }
}


export default Contact