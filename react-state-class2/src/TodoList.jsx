import {useState} from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
    let [toDos, setToDos] = useState([{task: "sample task", id: uuidv4(), isDone: false}]); 
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () =>{
        setToDos((prevTodos) =>{
            return [...prevTodos, {task: newTodo, id: uuidv4(), isDone: false}]
        });
        setNewTodo("");
    }

    let updateTaskValue = (event) =>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id)=>{
        setToDos((prevTodos) => toDos.filter((prevTodos) => prevTodos.id != id));
    }

    let markasDoneAll = ()=>{
        setToDos((prevTodos) => 
            prevTodos.map((todo) =>{
            return {
                ...todo,
                task: todo.task.toUpperCase(),
                isDone: true,
            };  
        }));
    };
    let markasDoneOne = (id)=>{
        setToDos((prevTodos) => 
            prevTodos.map((todo) =>{
                if(todo.id === id){
                     return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                    isDone: true,
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
                            <span style={{textDecoration: todo.isDone ? "line-through" : "none"}}>{todo.task}</span>
                            &nbsp; &nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                             &nbsp; &nbsp;
                            <button onClick={()=>markasDoneOne(todo.id)}>Mark as done</button>
                        </li>
                    ))
                }
            </ul>
            <br></br>
            <button onClick ={markasDoneAll}>Mark as done all</button>
        </div>
    )
}