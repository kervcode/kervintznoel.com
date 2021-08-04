// //esversion6 

// import React from 'react';
// import "./contact.styles.css";
// import axios from 'axios';
// import {  withRouter } from 'react-router-dom';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

  
// class Contact extends React.Component {

//   state = {
//     name: '',
//     email: '',
//     subject:'',
//     message: ''
//   }
  
  

//   onNameChange = (e) => {
//       this.setState({name: e.target.value})
//   }

//   onEmailChange= (e) => {
//       this.setState({email: e.target.value})
//   }

//   onSubjectChange= (e) => {
//       this.setState({subject: e.target.value})
//   }

//   onMsgChange= (e) => {
//       this.setState({message: e.target.value})
//   }


//   resetForm = () => {
//     this.setState({
//       name: '',
//       email: '',
//       subject:'',
//       message: ''
//     })
//   }

//   submitEmail = (e) => {
//     e.preventDefault();

   

//     const data = {
//       name: this.state.name,
//       email: this.state.email,
//       subject: this.state.subject,
//       message: this.state.message
//     };

//     console.log(data);

//     this.resetForm();

//     // https://kervintznoel-api.herokuapp.com/data

//     // http://localhost:5000/data

//     axios.post('https://kervintznoel-api.herokuapp.com/data', data)
//     .then(response => console.log(response))
//     .catch(error => console.log(error))
   
//   }

  



  
//   render() {
//       return (
//         <div className="contact-form">
//           <h1 className="contact-heading">Get in Touch</h1>
//             <Form onSubmit={this.submitEmail} method="POST">
//               <FormGroup control_id="formBasicName">
//               <div className="input-field">
//                 <Label className="text-muted">Name</Label>
//                 <Input
//                   type="text"
//                   name="name"
//                   id="name"
//                   className="text-primary form_input"
//                   placeholder="Name"
//                   value={this.state.name}
//                   onChange={this.onNameChange}
//                 />
//               </div>
        
//             </FormGroup> 
//               <FormGroup control_id="formBasicEmail">
//                 <div className="input-field">
//                   <Label className="text-muted">Email address</Label>
//                   <Input
//                     type="email"
//                     name="email"              
//                     id="email"
//                     className="text-primary form_input"
//                     placeholder="Enter email"
//                     value={this.state.email}
//                     onChange={this.onEmailChange}
//                     required
//                   />
//                 </div>
//               {/*{errors.email && <p className="validation">{errors.email}</p>} */}
//             </FormGroup>
            
//           <FormGroup control_id="formBasicSubject">
//               <div className="input-field">
//                 <Label className="text-muted">Subject</Label>
//                 <Input
//                   type="text"
//                   name="subject"
//                   id="subject"
//                   className="text-primary form_input"
//                   value={this.state.subject}
//                   onChange={this.onSubjectChange}
//                   placeholder="Subject"
//                 />
//               </div>
          
//           {/*{errors.subject && <p className="validation">{errors.subject}</p>} */}
//         </FormGroup>
//           <FormGroup control_id="formBasicMessage">
//               <div className="input-field">
//                 <Label className="text-muted">Message</Label>
//                 <Input
//                   type="textarea"
//                   name="message"
//                   id="message"
//                   className="text-primary form_input"
//                   value={this.state.message}
//                   onChange={this.onMsgChange}
//                   placeholder="Your special message to me"
//                 />
//               </div>
          
//           {/*{errors.message && <p className="validation">{errors.message}</p>} */}
//         </FormGroup>
//         <Button id="submit" type="submit">
//           Submit
//         </Button>
//       </Form>
//       </div>
//       )
//   }
// }


// export default withRouter(Contact);