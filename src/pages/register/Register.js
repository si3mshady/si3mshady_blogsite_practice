import './register.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
export default function Register() {

    const [email,  setEmail] = useState()
    const [username,  setUsername] = useState()
    const [password,  setPassword] = useState()
    const [error,setError] = useState(false)

    const handleSubmit = async (e) => {
        
        e.preventDefault();
        setError(false)

        try {   const resp = await axios.post("/auth/register", {
            email,
            username,
            password,
        }       
        
        )

        resp.data && window.location.replace('/login') // if successful register  redirect to login page 
        console.log(resp)
} catch(err) {
    console.log(err)
    setError(true)
}
     
    }
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form onSubmit={handleSubmit} className='registerForm'>


                <label>Username</label>
                <input className="registerInput"
                 onChange={(e) => {setUsername(e.target.value)}}
                type="text" placeholder="Enter your username..." />

                <label>Email</label>
                <input className="registerInput" 
                onChange={(e) => {setEmail(e.target.value)}}
                type="text" placeholder="Enter your email..." />

                <label>Password</label>
                <input className="registerInput"
                 onChange={(e) => {setPassword(e.target.value)}}
                type="password" placeholder="Enter your password..." />

               
                <button type='submit' className="registerButton">Register</button>
            </form>         
            <button className="registerLoginButton"><Link className="link" to="/login">Login </Link>   </button>
            {error && <span style={{color:"red"}}>Something went wrong!</span>}
        </div>
    )
}
