import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
import React, {useState, useEffect, useContext} from 'react'
import {Context} from '../../context/Context'

export default function Settings() {
    const {user} = useContext(Context);
    return (
        <div className="settings">
            <div className="settingsWrapper">                
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>                
                    
                </div>     
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="https://i.kym-cdn.com/entries/icons/original/000/009/889/Morpheus2.jpg" alt=""/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fas fa-user"></i>                    
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                        <label>Username</label>
                        <input type="text" placeholder="Eliott"/>
                        <label>Email</label>
                        <input type="email" placeholder="Eliott@gmail.com"/> 
                        <label>Password</label>
                        <input type="password"/>
                        <button className="settingsSubmit">Update</button>
                        
                </form>      
            </div>
            <Sidebar/>
            
        </div>
    )
}
