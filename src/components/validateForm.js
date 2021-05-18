export default function validateForm(values) {
    let errors = {}

    // EMAIL
    if(!values.email.trim()) {
        errors.email= "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
      }

    // NAME
    if(!values.name) {
        errors.name = "Name required"
    }

    // SUBJECT
    if(!values.subject) {
        errors.subject = "Subject required"
    }


    // MESSAGE
    if(!values.message) {
        errors.message = "Message required"
    }

    return errors;
}