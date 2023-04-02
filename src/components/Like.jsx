import React, { useState } from 'react'
import "../CSS/like.css";
import { ThumbDownOutlined, ThumbUpOutlined } from '@material-ui/icons'
import { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from './App';



const Like = (props) => {

    const renderAtAddQuestion = useNavigate();
    const { isLoggedIn, setIsLoggedIn, loggedInUser, setLoggedInUser } = useContext(LoginContext);



    const [likeColor, setLikeColor] = useState("gray")
    const [disLikeColor, setDisLikeColor] = useState("gray")

    const questionArr = JSON.parse(localStorage.getItem("questionAndAnswers"));



    const [data, setData] = useState(() => {
        if (questionArr === null) {
            return []
        } else {
            return questionArr;
        }
    })

        const que = data.filter((data) => {
            // console.log("id", data.id, "p", param.id);
            // let id = (data.id * 1)
            // let p = (props.id * 1 )
            // if(props.id == data.id){
            //   return data;
            // }
            return data.id == props.id;
        })
    

    

    console.log(" like", que[0].like)
    console.log("questionob", que)

    const [likeCount, setLikeCount] = useState(1);

    const handleLike = () => {
        if (isLoggedIn === true) {
            if (likeColor === "gray") {
                setLikeCount(-1);
                setLikeColor("blue");
                setDisLikeColor("gray")
                
            } else {
                setLikeCount(1)
                setLikeColor("gray")
            }
            
        }
    }

    const handleDislike = () => {
        if (isLoggedIn === true) {

            if (disLikeColor === "gray") {
                setDisLikeColor("black");
                setLikeColor("gray")
                setLikeCount(-1)
            } else {
                setDisLikeColor("gray")
            }
        }
    }


    useEffect(() => {
        console.log("use", loggedInUser.email);
        
        data.forEach((i) => {
            console.log("dsa", i.id)
            let id = (data.id * 1) 
            let p = (props.id * 1)
            if (i.id === p) {
                i.like = Number(i.like) + likeCount;
            }
        })
        // setAnswer("");
        localStorage.removeItem("questionAndAnswers")
        localStorage.setItem("questionAndAnswers", JSON.stringify([...data]));
    }, [likeCount, loggedInUser.email])

        console.log("sdsghhj", loggedInUser.email);


    return (
        <div>
            <button className='likebtn' onClick={handleLike}  > <span className='like-count'>{que[0].like}</span> <ThumbUpOutlined style={{ color: `${likeColor}`, cursor: "pointer", }} /></button>

            <button className='likebtn' onClick={handleDislike}> <ThumbDownOutlined style={{ color: `${disLikeColor}`, cursor: "pointer", }} /></button>
        </div>
    )
}

export default Like
