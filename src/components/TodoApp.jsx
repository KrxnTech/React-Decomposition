// PARENT COMPONENT !!!
// THE BRAIN 
// STATES LIVES HERE 



import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./ToDoList.css";

export default function TodoApp() {
    const [todos, setTodos] = useState([
        { task: "Sleep", id: uuid(), completed: false }
    ])

    // ADDING TODO 
    const addTodo = (task) => {
        setTodos((prev) => [
            ...prev,
            { task, id: uuid(), completed: fasle }
        ])
    }

    // DELETING TODO 
    const deleteTodo = (id) => {
        setTodos(prev =>
            prev.filter((todo) => todo.id !== id)
        )
    }

    // CHECK BOX 
    const toggleTodo = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    // UPPER CASE ONE 
    const uppercaseOne = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
            )
        )
    }

    // UPPER CASE ALL 
    const uppercaseAll = () => {
        setTodos(prev =>
            prev.map(todo => ({
                ...todo, task: todo.task.toUpperCase()
            })

            )
        )
    }

    // RETURN 
    return (
        <div>
            <p></p>
            <p></p>
            <hr />
            <button></button>
        </div>
    )
}
