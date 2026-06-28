import './App.css'
import LudoBoard from "./LudoBoard.jsx"
import TodoList from "./TodoList.jsx"
import Lottery from "./Lottery.jsx"
import {sum} from "./helper.js"

function App() {

  let winCondition = (ticket)=>{
    return sum (ticket) === 15;
  }

  return(
    <div>
      <br></br>
    <Lottery n={3} winCondition={winCondition} />
    </div>
  ) ;
  
}

export default App
