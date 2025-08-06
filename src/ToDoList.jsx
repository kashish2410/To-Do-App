import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./ToDoList.css";

export default function TodoList(){

    let [todos , setTodos] = useState([{ Task : "Sample Task" , id : uuidv4(), isDone : false}]);
    let [newTodo , setNewTodo]= useState("");

    let addNewTask = ()=>{
        setTodos((prevTodo)=>{
            return [...prevTodo, {Task : newTodo, id: uuidv4(), isDone : false}];
        });
        setNewTodo("");
    }

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id)=>{
        let copy = todos.filter((todo)=>
            todo.id!=id
        );
        setTodos([...copy]);
    }

    let taskDone = ()=>{
        let newArr = todos.map((todo)=>{
        
            return {...todo, isDone : true}

        })

        setTodos([...newArr]);

        <style>
            te
        </style>
    }

    let taskDoneOne = (id)=>{
        let newArr = todos.map((todo)=>{
            if (todo.id == id){
                return {...todo, isDone : true}
            }
            else return todo;
        })

        setTodos([...newArr]);
    }

    let taskNotDone = (id)=>{
        let newArr = todos.map((todo)=>{
            if (todo.id == id){
                return {...todo, isDone : false}
            }
            else return todo;
        })

        setTodos([...newArr]);
    }


    return(
        <div>
            <input type="text" placeholder="Add your Task" value={newTodo} onChange={updateTodoValue}/>
            <br></br><br />
            <button className="Add" onClick={addNewTask}>Add Task</button>
            <br /><br />
            <hr />
            <h4>Task Todo</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li key={todo.id}>
                            <div className="elements">
                                <span  className={todo.isDone ? "strike" : ""} >{todo.Task}</span>&nbsp;&nbsp;
                                <span className="buttons">
                                    <button className="Delete" onClick={()=>{
                                    deleteTodo(todo.id)
                                    }}>Delete</button>

                                    <button className="Done" onClick={()=>{
                                    taskDoneOne(todo.id)
                                    }}>Done</button>

                                    <button  className="NotDone"onClick={()=>{
                                    taskNotDone(todo.id)
                                    }}>Not Done</button>
                            </span>
                            </div>
                            
                        </li>

                    ))
                }
            </ul>
            <button className="Done All" onClick={taskDone}>All Done</button>
        </div>
    )
}