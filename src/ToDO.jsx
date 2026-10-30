import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToDO()
{
    let [todos, setTodos] = useState([{task:"sampletask",id:uuidv4(), isDone:false}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos)=>{
            return [...prevTodos,{ task: newTodo, id:uuidv4(), isDone:false}]
        });
        setNewTodo("");
    };

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) =>{
        setTodos(todos.filter((todo)=>todo.id != id));
    };

    let upperCaseAll = () => {
        setTodos(   
            todos.map((todo)=>{
                return{
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    };

    let markDoneAll = () => {
        setTodos(   
            todos.map((todo)=>{
                return{
                    ...todo,
                    isDone:true,
                };
            })
        );
    };

    let upperCaseOne = (id) => {
        setTodos(   
            todos.map((todo)=>{
                if(todo.id == id){
                    return{
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
                }else{
                    return todo;
                }
            })
        );
    };

    let markAsDone = (id) => {
        setTodos(   
            todos.map((todo)=>{
                if(todo.id == id){
                    return{
                    ...todo,
                    isDone:true,
                };
                }else{
                    return todo;
                }
            })
        );
    };

    return(
        <div>
            <input placeholder="Add Task" value={newTodo} onChange={updateTodoValue}></input>
            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br>
            <hr></hr>
            <br></br>
            <h4>ToDO list:</h4>

            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <span style={todo.isDone ? { textDecorationLine: "line-through"}:{}}>{todo.task}</span> &nbsp;&nbsp;
                        <button onClick={()=>deleteTodo(todo.id)}>Delete</button>&nbsp;&nbsp;
                        <button onClick={()=>upperCaseOne(todo.id)}>UpperCase one</button>&nbsp;&nbsp;
                        <button onClick={()=>markAsDone(todo.id)}>Mark as Done</button>
                    </li>
                ))}

                <br></br><br></br>
                <button onClick={upperCaseAll}>UpperCase ALL</button>
                <button onClick={markDoneAll}>Mark as Done ALL</button>
            </ul>
        </div>
    );
}