import './login.css'
import React, {useState, useEffect, useRef, useContext} from 'react'
import { Link } from 'react-router-dom'
import {Context} from '../../context/Context'
import axios from 'axios'

export default function Login() {
    const {dispatch, isFetching}= useContext(Context)
    const userRef = useRef();
    const passwordRef = useRef();



    const handleSubmit = async (e) => {
       e.preventDefault()
       dispatch({type: "LOGIN_START"})

       try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password: passwordRef.current.value
            })


            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
       } catch (err) {

                dispatch({type: "LOGIN_FAILURE"})


       }

    

     


    }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form onSubmit={handleSubmit} className='loginForm'>

                <label>Username</label>
                <input ref={userRef}  type="text" placeholder="Enter your username..." />

                <label>Password</label>
                <input ref={passwordRef}  className="loginInput" type="password" placeholder="Enter your password..." />
              
                <button type="submit" disabled={isFetching} className="loginButton">LOGIN</button>
            </form>         
            <button className="loginRegisterButton">
                        <Link className="link" to="/register">Register </Link>      
           </button>
        </div>
    )
}
