import React, {useState, useContext } from 'react'
import { render } from 'react-dom';
import {Link, useNavigate} from "react-router-dom";
import "../CSS/login.css";
import { LoginContext } from './App';



function Login() {

  const renderAtlogin = useNavigate();


  const {isLoggedIn, setIsLoggedIn, setLoggedInUser} = useContext(LoginContext);


  const [inpval,setInpval] = useState({
    username:"",
    password:""
  })

  const [data, setData] = useState([]);

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

      const userArr = localStorage.getItem("user")

      const {username,password} = inpval;

      if(username === ""){
        alert("username is required...")
      }else if (password == ""){
        alert("password is required...")
      }else if (password.length < 5 ){
        alert("Please make password length more then 5...")
      }else{

            if(userArr && userArr.length){
              const userData = JSON.parse(userArr);
              const userLogin = userData.filter((el,k)=>{
                return el.username === username && el.password === password
              })
                if(userLogin.length === 0){
                  setIsLoggedIn(false);
                }else{
                  setLoggedInUser(userLogin['0']);
                  setIsLoggedIn(true);
                  renderAtlogin("/");
                }

            }
      }
  }


  return (
    <div className="login" >
    <div className="login-box">
        <h2>Login</h2>
        <input className='login-input username'  name='username'  type="text" onChange={getData} placeholder='Enter UserName' required/>
        <input className='login-input password' name='password' type="password" onChange={getData} placeholder='Enter Password' required/>
        <button className='login-btn'  onClick={addData} >Login</button>
        <Link to="/userlogin">Forget username & password</Link>
        <Link to="/register">New User?</Link>
    </div>
</div> 

  )
}

export default Login
