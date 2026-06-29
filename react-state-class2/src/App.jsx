import './App.css'
import LudoBoard from "./LudoBoard.jsx"
import TodoList from "./TodoList.jsx"
import Lottery from "./Lottery.jsx"
import {sum} from "./helper.js"
import Form from "./Form"
import CommentsForm from "./CommentsForm.jsx"
import Comment from "./Comment.jsx"
import Counter from "./Counter.jsx"
import Joker from "./Joker.jsx"

function App() {

  let winCondition = (ticket)=>{
    return sum (ticket) === 15;
  }

  return(
    <>
    {/* <CommentsForm /> */}
    <Joker />
    </>
  ) ;
  
}

export default App
