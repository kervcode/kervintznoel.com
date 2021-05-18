import { useState, useEffect} from 'react'
import validateForm from './validateForm'


const useForm = (validateForm) => {
    const [values, setValues] = useState({
        email: '',
        name: '',
        subject: '',
        message:'',
    })

    const [errors, setErrors] = useState({});

    const [isSubmitting, setIsSubmitting] = useState(false)


    const handleChange = e => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validateForm(values));
        setIsSubmitting(true);
    }

    return {handleChange, values, handleSubmit, errors}
}

export default useForm;