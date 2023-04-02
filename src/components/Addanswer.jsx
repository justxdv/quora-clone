import React,{useContext, useState, useEffect} from 'react'
import "../CSS/addanswer.css";
import { useParams, useNavigate } from 'react-router-dom';
import { LoginContext } from './App';


function Addanswer() {

  const renderAtAddQuestion = useNavigate();

  const {isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser} = useContext(LoginContext);  

  useEffect(()=>{
    if (isLoggedIn === false ){
      renderAtAddQuestion("/userlogin");
    }
  }, [isLoggedIn])

  const questionArr = JSON.parse(localStorage.getItem("questionAndAnswers"));

  const param = useParams();

  const [data, setData] = useState(()=>{
    if(questionArr === null){
      return []
    }else{
      return questionArr;
    }
  })
  const que = data.filter((data)=>{
    // console.log("id", data.id, "p", param.id);
        let id = (data.id * 1)
        let p = (param.id * 1)
        if(id === p){
          return data;
        }
  })

  const [answer, setAnswer] = useState(); 

  const getData = (e) => {
       setAnswer(e.target.value);
  }

   const setAns = () => {
    data.forEach((i)=>{
      console.log("dsa", i.id)
      let id = (data.id * 1)
      let p = (param.id * 1)
           if(i.id === p){
            i.answeredBy = loggedInUser.username;
            i.answer = answer;
          }
    })  
    setAnswer("");
    localStorage.removeItem("questionAndAnswers")
    localStorage.setItem("questionAndAnswers", JSON.stringify([...data]));
    renderAtAddQuestion("/")
  }

  return (
    <>  
    <div className='addanswer'>
      <div className='sub-addanswer'>
       <div className='question-sec'>
          <h1>Question :</h1>
          <div className='ans'>
              <p>{que[0].question}</p>
          </div>
       </div>
        <div className="answer">
            <div className="container">
                <h3>Answer:</h3>
                <input type="text" placeholder='Type your answer here...' value={answer} name='answer' onChange={getData} />
            </div>
        </div>
        <div className="answer-btn">
            <button onClick={()=>{}} >Cancel</button>
            <button onClick={setAns}>Add Answer</button>
        </div>
      </div>
    </div>   
    </>


  )
}

export default Addanswer