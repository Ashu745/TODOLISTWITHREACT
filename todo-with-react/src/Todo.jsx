import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function Todo(event) {

    let [todos, setTodos] = useState([{ task: "sample", id: uuidv4(), isdone: false }]);
    let [newTodo, setNewTodo] = useState([""]);

    let addTodo = () => {
        setTodos((prevtTodos) => {
            return [...prevtTodos, { task: newTodo, id: uuidv4(), isdone: false }]

        })
        setNewTodo("");
    }

    let updatenewTodo = (event) => {
        setNewTodo(event.target.value);
    }

    let markAlldone = () => {
        setTodos((prevTodo) => prevTodo.map((todo) => {
            return {
                ...todo,
                isdone:true,
            }
        }));

    }

    let markAsDone = (id) => {
        setTodos((prevTodo) => prevTodo.map((todo) => {
            if (todo.id == id) {
                return {
                    ...todo,
                    isdone: true,
                }
            }
            else {
                return todo;
            }

        }));
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));

    }
    return (
        <div>


            <input type="text" name="task" placeholder="Enter your task" value={newTodo} onChange={updatenewTodo} />
            <br />
            <button onClick={addTodo}>Add</button>
            <br /><br /><br /><hr />
            <h2>Your To-Do List</h2>
            <ul>
                {todos.map((todo) => {
                        return( <li key={todo.id}>
                            <span style={todo.isdone? {textDecoration :"Line-through"} : {}}>{todo.task}</span>
                            &nbsp;&nbsp;

                            <button onClick={() => { deleteTodo(todo.id) }}>Delete</button>
                            {/* <button onClick={() => { upperCase(todo.id) }}>upperCase</button> */}
                            <button onClick={() => { markAsDone(todo.id) }}>markAsDone</button>

                        </li>
                        )   
                }

                )}
            </ul>
            <button onClick={markAlldone}>MarkAllDone</button>
        </div>
    );
}