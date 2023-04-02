import { Avatar } from '@material-ui/core'
import { ChatBubbleOutline, MoreHorizOutlined, ShareOutlined, ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons'
import React, { useState, useContext } from 'react'
import "../CSS/post.css"
import { LoginContext } from './App';
import { Link } from 'react-router-dom';
import Like from './Like';





function Post({id, questionedBy, question , answer, answeredBy, handleLike, handleDislike, likeColor, disLikeColor, setLikeColor, setDisLikeColor}  ) {
  const {isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser } = useContext(LoginContext);


   

    const questionArr = JSON.parse(localStorage.getItem("questionAndAnswers"));

      console.log( questionArr)  



    
  return (

            <div className='post' >
            <div className="post-info">
              <Avatar />
              <h5> {questionedBy} </h5>
              
            </div>
            <div className="post-body">
              <div className="post-question">
                  <p >Question: {question}</p>
                  <Link className='post-btn' to={`/addanswer/${id}` }> <button className='post-btn'>Answer</button></Link>
              </div>
              <div className="post-answer">
                  <p>Answer: {answer}</p>
                  <span>answeredBy: {answeredBy}</span>
              </div>
              <img src="" alt="" />
            </div>
            <div className="post-footer">
              <div className="post-footerAction">
                <Like id={id} />
              </div>
              <div className="">
                   <ChatBubbleOutline className='mui-icon'  style={{ cursor: "pointer",
                   marginRight: "40px",
                   color: "gray",
                   }  } />
                  <ShareOutlined  style={{ cursor: "pointer",
                   marginRight: "40px",
                   color: "gray",
                   }} />
                  <MoreHorizOutlined  style={{ cursor: "pointer",
                   marginRight: "40px",
                   color: "gray",
                   }} />
              </div>
            </div>
          </div>  
  )
}

export default Post
