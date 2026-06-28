import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [toDos, setToDos] = useState([{task: "sample task", id: uuidv4()}]); 
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setToDos((prevTodos) =>{
            return [...prevTodos, {task: newTodo, id: uuidv4()}]
        });
        setNewTodo("");
    }

    let updateTaskValue = (event) =>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id)=>{
        setToDos((prevTodos) => toDos.filter((prevTodos) => prevTodos.id != id));
    }

    let upperCaseAll = ()=>{
        setToDos((prevTodos) => 
            prevTodos.map((todo) =>{
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };  
        }));
    };
    let upperCaseOne = (id)=>{
        setToDos((prevTodos) => 
            prevTodos.map((todo) =>{
                if(todo.id === id){
                     return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                    }; 
                } else{
                    return todo;
                }
        }));
    };

    return (
        <div>
            <input placeholder="add tasks" value= {newTodo} onChange={updateTaskValue}></input>
            <br></br>
            <button onClick={addNewTask}>Add Task</button>
            <br></br>
            <br></br>
            <br></br>
            <hr></hr>
            <p>Task to do</p>
            <ul>
                {
                    toDos.map((todo) =>(
                        <li key={todo.id}>
                            <span>{todo.task}</span>
                            &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                             &nbsp; &nbsp;
                            <button onClick={()=>upperCaseOne(todo.id)}>Upper Case</button>
                        </li>
                    ))
                }
            </ul>
            <br></br>
            <button onClick ={upperCaseAll}>Upper Case all</button>
        </div>
    )
}