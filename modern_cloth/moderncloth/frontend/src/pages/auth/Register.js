import React, { useState, useEffect } from "react";
import { auth } from "../../firebase";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'

const Register = ( {history} ) => {
  const [email, setEmail] = useState("");

//   const { user } = useSelector((state)=>({...state}))

//   useEffect(()=>{
//     if(user && user.token) history.push('/')
//   },[user])

  const submitHandler = async (e) => {
    e.preventDefault();
    const config = {
        url: 'http://localhost:3000/register/complete',
    //   url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    }


    await auth.sendSignInLinkToEmail(email, config);
    toast.success(
      `We sent a link to ${email}. Check your inbox.`
    );
    // save user email in local storage
    window.localStorage.setItem("registrationEmail", email);
    // clear state
    setEmail("")
  }
  

  const registerForm = () => (
    <form onSubmit={submitHandler}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Your Email'
        autoFocus
      />
      <br />
      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>
          <ToastContainer />
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;