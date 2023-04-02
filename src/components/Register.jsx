import React, { useState, useContext } from 'react'
import "../CSS/register.css";
import {  Link, useNavigate } from 'react-router-dom';
import { LoginContext } from './App';


function Register() {

  const {isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

    const rendarAtRegister = useNavigate()

  const userdb =  JSON.parse(localStorage.getItem("user"));


  const [inpval,setInpval] = useState({
    username:"",
    email:"",
    password:""
  })

  const [data, setData] = useState(()=>{
    if(userdb === null){
      return []
    }else{
      return userdb;
    }
  });

  const getData = (e) => {

      const {value, name} = e.target ;

      setInpval (()=>{
          return {
            ...inpval, 
            [name]: value
          }
      })
  }

  const addData = (e) => {
      e.preventDefault();

      const {username,email,password} = inpval;

      if(username === ""){
        alert("username is required...")
      }else if(email === ""){
        alert("email is required...")
      }else if(!email.includes("@")){
        alert("Please enter valid email")
      }else if (password == ""){
        alert("password is required...")
      }else if (password.length < 5 ){
        alert("Please make password length more then 5...")
      }else{
          // console.log("coming");
          // localStorage.setItem("a", "b");

          localStorage.setItem("user", JSON.stringify([...data, inpval]));
          console.log(inpval);
          const a = localStorage.getItem("a");
          console.log("a", a);
          const temp = [...data, inpval];
          setData(()=>{
            return temp;
          })
      }  
      rendarAtRegister("/userlogin")

  }

  return (         
     <div className="register" >
        <div className="register-box">
            <h2>SignUp</h2>
            <input className='register-input username' name='username' onChange={getData} type="text" placeholder='Enter UserName' required/>
            <input className='register-input email' name='email' onChange={getData} type="email" placeholder='Enter Email' required/>
            <input className='register-input password' name='password' onChange={getData} type="password" placeholder='Enter Password' required/>
            <button className='register-btn' type='submit' onClick={addData} >Register</button>
            <Link to="/userlogin">Already have an account?</Link>
            
        </div>
    </div>
  )
}

export default Register;
