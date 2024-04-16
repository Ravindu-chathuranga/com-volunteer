import React from 'react'
import './Signup.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock, faXmark, faIdCard, faUser} from '@fortawesome/free-solid-svg-icons'

export default function Signup() {
  return (
    <div className="wrapper">
        <span className="icon-close"><FontAwesomeIcon icon={faXmark} /></span>
        <div className="form-box login">
            <h2>Login </h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                    <input type="email" required/>
                    <label>E mail</label>
                </div>
                <div className="input-box">
                    <span className="icon"><FontAwesomeIcon icon={faLock}/></span>
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div className="remember-forget">
                    <label className='remember'><input type="checkbox"/> Remember me </label>
                    <a href="#">Forget password</a>
                </div>
                <button type="submit" class="login">Sign up</button>
                <div className="login-register">
                    <p>Don't have an account? <a href='#' className="register-link">Register</a></p>
                </div>
            </form>
        </div> 
        

        <div className="form-box register">
            <h2> Registration  </h2>
            <form action="#">
                <div className="input-box">
                    <span className="icon"><FontAwesomeIcon icon={ faUser} /></span>
                    <input type="user" required/>
                    <label>First Name</label>
                </div>
                <div className="input-box">
                    <span className="icon"><FontAwesomeIcon icon={ faUser} /></span>
                    <input type="user" required/>
                    <label>Last Name</label>
                </div>
                <div className="input-box">
                    <span className="icon"><FontAwesomeIcon icon={faIdCard}/></span>
                    <input type="user" required/>
                    <label>NIC</label>
                </div> 
                <div className="input-box">
                    <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                    <input type="email" required/>
                    <label>E mail</label>
                </div>
                <div className="input-box">
                    <span className="icon"><FontAwesomeIcon icon={faLock}/></span>
                    <input type="password" required/>
                    <label>Password</label>
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox"/> I agree to the terms & conditions </label>
                    
                </div>
                <button type="submit" className="login">Register</button>
                <div className="login-register">
                    <p>Already have an account? <a href='#' className="login-link">Sign up</a></p>
                </div>
            </form>
        </div> 
    </div>
  )
}

// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faLock, faXmark, faIdCard, faUser } from '@fortawesome/free-solid-svg-icons';
// import './Signup.scss';

// export default function Signup() {
//   const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

//   const toggleForm = () => {
//     setIsLoginFormVisible(!isLoginFormVisible);
//   };

//   return (
//     <div className={`wrapper ${isLoginFormVisible ? 'login-active' : 'register-active'}`}>
//       <span className="icon-close" onClick={toggleForm}><FontAwesomeIcon icon={faXmark} /></span>

//       <div className={`form-box login ${isLoginFormVisible ? 'active' : ''}`}>
//         <h2>Login</h2>
//         <form action="#">
//           {/* Login form content */}
//         </form>
//         <div className="login-register">
//           <p>Don't have an account? <button onClick={toggleForm} className="register-link">Register</button></p>
//         </div>
//       </div>

//       <div className={`form-box register ${isLoginFormVisible ? '' : 'active'}`}>
//         <h2>Registration</h2>
//         <form action="#">
//           {/* Registration form content */}
//         </form>
//         <div className="login-register">
//           <p>Already have an account? <button onClick={toggleForm} className="login-link">Login</button></p>
//         </div>
//       </div>
//     </div>
//   );
// }