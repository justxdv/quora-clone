import React, { useContext, useState } from 'react'
import "../CSS/home.css";
import Quorabox from './Quorabox';
import { Link } from "react-router-dom";
import Post from './Post';
import { LoginContext } from './App';
import { Avatar } from '@material-ui/core';




function Home() {
  const { isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUse } = useContext(LoginContext);

  const QuestionArr = JSON.parse(localStorage.getItem("questionAndAnswers"));

  console.log(QuestionArr);

  const [data, setData] = useState(() => {
    if (QuestionArr === null) {
      return [];
    } else {
      return QuestionArr;
    }
  })


  const [likeColor, setLikeColor] = useState("gray")
  const [disLikeColor, setDisLikeColor] = useState("gray")
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    if (likeColor === "gray") {
      setLikeColor("blue");
      setDisLikeColor("gray")
    } else {
      setLikeColor("gray")
    }
  }

  const handleDislike = () => {
    if (disLikeColor === "gray") {
      setDisLikeColor("black");
      setLikeColor("gray")
    } else {
      setDisLikeColor("gray")
    }
  }



  return (
    <div className='home'>
      <section className='left' >
        <Link to={"/addquestion"} ><Quorabox /> </Link>
        {
          data.map((i) => (
            <Post
              key={i.id}
              id={i.id}
              questionedBy={i.questionedBy}
              question={i.question}
              answer={i.answer}
              answeredBy={i.answeredBy}
              handleLike={handleLike}
              handleDislike={handleDislike}
              likeColor={likeColor}
              disLikeColor={disLikeColor}
              setLikeColor={setLikeColor}
              setDisLikeColor={setDisLikeColor}
            />


          ))

        }


      </section>
      <section className='right' >
        <div className='question_bar' >
          <h2>Questions List</h2>
          {
            data.map((i) => {
              return (
                <p>{i.question}</p>
              )
            })
          }

        </div>
      </section>

    </div>

  )
}

export default Home
