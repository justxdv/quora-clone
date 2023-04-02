import React, {useContext} from 'react'
import "../CSS/quorabox.css";
import { Avatar} from "@material-ui/core";
import { LoginContext } from './App';



const Quorabox = () => {
  const {isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser } = useContext(LoginContext);
  console.log(loggedInUser);

  return (
    <div className='quorabox'>
        <div className='quorabox_info'>
            <Avatar  />
            {
              isLoggedIn ? <h5>{loggedInUser.username}</h5> :  <h5>Username</h5>
            }
            
        </div>
        <div className='quorabox_quora'>
            <p>What is your question ?</p>
        </div>
      
    </div>
  )
}

export default Quorabox
