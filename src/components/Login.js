import React from 'react'
import Header from './Header';
import {useState, useRef} from "react";
import { checkValidData } from '../utils/validate';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate} from "react-router-dom";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const name= useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        //Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
        // Sign In / Sign Up
        if(!isSignInForm){
            //Signup Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
              .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                navigate("./browse");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + " - " + errorMessage);
                // ..
              });
        }else{
            //Signin  Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              navigate("./browse");
              // ...
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " - " + errorMessage);
            });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }

  return (
    <>
     <Header/>
    <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="hero image"/>
    </div>
    <form
    onSubmit = {(e) => e.preventDefault()}
     className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
       {!isSignInForm && (
            <input ref={name} type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-500" />
       )}
        <input ref={email} type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-500" />
        <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-500" />
       <p className="text-red-500">{errorMessage}</p>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
            
            </p>
    </form>
    </>
  )
}


export default Login;