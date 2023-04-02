import React ,{createContext, useEffect, useState} from 'react'
import '../styles/App.css';
import Header from './Header';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './Home';
import Addquestion from './Addquestion';
import Addanswer from './Addanswer';
import Login from './Login';
import Register from './Register';

export const LoginContext = createContext();



const App = () => {

const [isLoggedIn , setIsLoggedIn] = useState(false);
const [loggedInUser, setLoggedInUser] = useState({});



  

  return (
    <div id="main">

      <BrowserRouter>
      <LoginContext.Provider value={{isLoggedIn , setIsLoggedIn,  loggedInUser, setLoggedInUser }}  >
      <Header />
      </LoginContext.Provider>
      <Routes>
        <Route path='/' element={ <LoginContext.Provider value={{isLoggedIn , setIsLoggedIn, loggedInUser, setLoggedInUser }}  ><Home /> </LoginContext.Provider>}/>
        <Route path="/addquestion" element={<LoginContext.Provider value={{isLoggedIn , setIsLoggedIn,  loggedInUser, setLoggedInUser }}  ><Addquestion /></LoginContext.Provider> } />
        <Route path='/addanswer/:id' element={<LoginContext.Provider value={{isLoggedIn , setIsLoggedIn,  loggedInUser, setLoggedInUser }}  > <Addanswer /> </LoginContext.Provider>  }/>
        <Route path='/userlogin' element={<LoginContext.Provider value={{isLoggedIn , setIsLoggedIn, loggedInUser, setLoggedInUser }} ><Login /> </LoginContext.Provider> } />
        <Route path="/register" element={<LoginContext.Provider value={{isLoggedIn , setIsLoggedIn,  loggedInUser, setLoggedInUser }}  > <Register /> </LoginContext.Provider>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App;
