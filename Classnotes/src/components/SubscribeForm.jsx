import { useState } from "react";
import { useFormInput } from "../hooks/useFormInput";


export default function SubscribeForm(){
    const [status, setStatus] = useState('')
    // const [firstName, setFirstName] = useState('Mary')
    // const [email, setEmail] = useState('mary@poppins.com')
     const [nameInputProps, resetName] = useFormInput('Mary');
     const [emailInputProps, resetEmail] = useFormInput('mary@pop.com')


    // const handleNameChange = (e) => {
    //     setFirstName(e.target.value)
    // }
    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value)
    // }
    function handleSubscribe() {
        // setFirstName('')
        // setEmail('')
        resetEmail(); resetName();
        setStatus('Thanks for subscribing')
   }
   return(
    <div>
        <label>First Name:
        <input {...nameInputProps}></input>
        </label>
        <label>Email:
            <input type="email" {...emailInputProps} />
        </label>
        <button onClick={handleSubscribe}>Subscribe</button>
        <div>{status}</div>
    </div>
   )
}