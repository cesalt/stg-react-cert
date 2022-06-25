import React, {useState} from "react";
import validator from "validator";

import { TextField, Button, Checkbox } from "@mui/material";

export default function LogIn(){

    const [toggle, setToggle] = useState(false)

    const [formInputs, setFormInput] = useState({
        email: '',
        password: ''
    })

    const visable = toggle ? 'text' : 'password'

    const validEmail = validator.isEmail(formInputs.email) ? false : true

    const validPassword = validator.isStrongPassword(formInputs.email) ? false : true


    const toggleClickHandler = () => setToggle(!toggle)
        
    const formChangeHandler = (e) => {
        const name = e.target.name
        const value = e.target.value

        setFormInput(values => ({...values, [name]: value}))
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('default prevented')

    }

    console.log(validator.isEmail(formInputs.email))


    return(

        <>
            <form onChange={formChangeHandler} onSubmit={submitHandler} >
            <TextField name="email" />
            <TextField name="password" variant="filled" type={visable} />
            <Checkbox onChange={toggleClickHandler}></Checkbox>
            <Button type='submit' disabled={validEmail}> Login </Button>
            </form>
        </>

    )


}