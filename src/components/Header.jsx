import React, { useContext, useState } from 'react'
import logo  from "../assets/Quora-Logo.wine.png"
import "../CSS/header.css";
import {AiOutlineSearch} from "react-icons/ai"
import {Link } from "react-router-dom";
import { LoginContext } from './App';
import { Avatar } from '@material-ui/core';


function Header() {

  const {isLoggedIn , setIsLoggedIn, loggedInUser, setLoggedInUse} = useContext(LoginContext);


  // const login = localStorage.getItem("isloggedin");
  // const [isLogin, setIsLogin ] = useState(localStorage.getItem("isloggedin"));

  console.log(loggedInUser);

  const [show, setShow] = useState("none");
    console.log(show);
  const handleClick = () => {
    if(show === "none"){
      setShow("block");
    }else{
      setShow("none");
    }
    
  }

  const handlelogout = () => {
    setIsLoggedIn(false);

  }



  return (
    <div className='header'>
      <div className='sub-header'>
      <Link to="/"> <img className='logo' src={logo} alt="logo" /></Link> 
      <div className="search">
      <AiOutlineSearch />
      <input className='searchbox' type="text"  placeholder='Search for question...' />
      </div>
      <button><Link to="/addquestion"style={{color: "white"}} > Add Questions </Link> </button>

      {/* <Link to="/addanswer"><button>Answer Questions</button></Link> */}
      {/* <button onClick={handlelogout} >logout</button> */}
      <div style={{ cursor: "pointer", }} onClick={handleClick}>
      <Avatar />
      </div>
      </div>
      <div className='login-span' style={{ display: `${show}`  }}  onMouseLeave={handleClick} >
    {
      isLoggedIn ? <h4 className='login-username'><Avatar /> {loggedInUser.username}</h4> : <h4 className='login-username' >Hello User</h4>
    } 
    <hr />
    {
      isLoggedIn ?  <button className='span-btn' onClick={handlelogout} >logout</button> : <Link to="/userlogin" className='span-btn'><button className='span-btn'>Login</button></Link>
    }
  </div>
    </div>
    
  )
}

export default Header
