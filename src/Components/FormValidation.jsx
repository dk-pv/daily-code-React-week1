import React, { useState } from 'react'
import "./FormValidation.css"

const FormValidation = () => {

    const [FormData,setFormData] = useState({
        firstName : "",
        lastName : "",
        Email : "",
        phoneNumber : "",
        password : "",
        confirmPassword : "",

    })

    const [errors,setErrors] = useState()

    const isValidEmail = (Email) =>{
      const emailRegex =/^\S+@\S+\.\S+$/;
      return emailRegex.test(Email);
    };

    const isValidPhoneNumber = (phoneNumber) =>{
      const phoneRegex =/^\d{10}$/;
      return phoneRegex.test(phoneNumber);
    };

    const isValidPassword = (password) => {
      const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
      const numberRegex = /[0-9]/
      const upperCaseRegex = /[A-Z]/
      const lowerCaseRegex = /[a-z]/
      return(
        password.length >= 8 &&
        symbolRegex.test(password)&&
        numberRegex.test(password)&&
        upperCaseRegex.test(password)&&
        lowerCaseRegex.test(password)
      );
    };
    
      const ValidateForm = () =>{
      let newError = {};

      if (!FormData.firstName){
        newError.firstName = "first name is required"
      }
      if (!FormData.lastName){
        newError.lastName = "last name is required"
      }
      if (!FormData.Email){
        newError.Email = "email is required"
      }else if(!isValidEmail(FormData.Email)){
        newError.Email = "Invalid email Format"
      }
      if (!FormData.phoneNumber){
        newError.phoneNumber = "phone number is required"
      }else if(!isValidPhoneNumber(FormData.phoneNumber)){
        newError.phoneNumber = "phone number is mubt be 10 digits"
      }
      if (!FormData.password){
        newError.password = "password is required"
      }else if(!isValidPassword(FormData.password)){
        newError.password = "Use a mix of letters and numbers,Include at least one special character, such as !, @, #, or ?"
      }
      if (!FormData.confirmPassword){
        newError.confirmPassword = "confirmPassword is required"
      }else if(FormData.confirmPassword !== FormData.password){
        newError.confirmPassword = "password must match"
      }
  
      setErrors(newError);
      return Object.keys(newError).length === 0
    }

    const handleSubmit = (e) =>{
      e.preventDefault();

      const isValid = ValidateForm();
      if(isValid){
        console.log("Form Submitted" , FormData);
      }else{
        console.log("Form  Validation Failed")
      }
    };

    const handleChange = (e) =>{

      const {name , value} = e.target;

      setFormData({
        ...FormData,
        [name]:value,
      })
    }

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <label>FirstName : </label>
        <input type="text"name='firstname' value={FormData.firstName} placeholder='enter your first name' />
        onChange = {handleChange}

        <br />
        <label>LastName : </label>
        <input type="text"name='lastname' value={FormData.lastName} placeholder='enter your last name' />
        onChange = {handleChange}

        <br />
        <label>Email : </label>
        <input type="email" name='email' value={FormData.Email} placeholder='enter your Email' />
        onChange = {handleChange}

        <br />
        <label>PhoneNumber : </label>
        <input type="tel" name='phone number' value={FormData.phoneNumber} placeholder='enter your phoneNumber' />
        onChange = {handleChange}

        <br />
        <label>Password</label>
        <input type="password" name='password' value={FormData.password} placeholder='enter Password' />
        onChange = {handleChange}

        <br />
        <label>FirstName</label>
        <input type="password"name='firstname' value={FormData.confirmPassword} placeholder='confirmpassword' />
        onChange = {handleChange}

        <br />
        <button>submit</button>
      </form>
    </div>
  )
}

export default FormValidation
