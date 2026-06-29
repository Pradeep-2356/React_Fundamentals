import { useState } from "react";
import './Comment.css'
import CommentsForm from "./CommentsForm.jsx"

export default function Comment(){
    let [comments, setComments] = useState([{
        username: "@pradeep",
        remarks: "Good!",
        rating: 4
    }]);

    let addNewComment = (comment)=>{
        setComments((currComments) => [...currComments, comment]);
    }

    return (
        <>
        <div>
            <h3>All Comments</h3>
            {comments.map((comment, idx) => (
            <div className="comment" key={idx}>
                <span>{comment.remarks}</span> &nbsp;
                <span>(rating = {comment.rating})</span> &nbsp;
                <p>- {comment.username}</p>
            </div>
            ))}
        </div>
        <hr></hr>
        <CommentsForm addNewComment = {addNewComment}  />
        </>
    )
}
