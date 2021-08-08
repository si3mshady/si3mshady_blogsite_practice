import { Link } from 'react-router-dom'
import './topbar.css'
import React  from 'react'
export default function TopBar() {
   const imgUrl =  "https://cdn.vox-cdn.com/thumbor/K1WKyMb31K-K1vvseGAyFsjfYYE=/0x0:1200x675/1200x800/filters:focal(478x31:670x223)/cdn.vox-cdn.com/uploads/chorus_image/image/60384393/0_c9S8ajFBpwX89ZuU.0.jpeg"
   const user =   false;
    return (
        
        <div className="top">
            <div className='topLeft'>
                <i className="topIcon fab fa-facebook"></i>
                <i class="topIcon fab fa-twitter"></i>
                <i class="topIcon fab fa-instagram"></i>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                    {user && <Link className="link" to="/">LOGOUT</Link>}
                    </li>

                </ul>
            </div>
            <div className='topRight'>
               { user ? (<img className="topImage" src={imgUrl} alt="blank"/>):
               (
               <ul className="topList">
                   <li className="topListItem" >
                    <Link to="/login" className="link"> LOGIN</Link>
                   </li>
                
                   <li className="topListItem" > 
                    <Link  to="/register"  className="link"> REGISTER</Link>
                   </li>
                
               </ul>
               ) }

                <i class="topSearchIcon fas fa-search"></i>
            </div>            
        </div>
    )
}
// resume 12:43