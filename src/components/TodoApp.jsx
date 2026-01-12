// PARENT COMPONENT !!!
// THE BRAIN 
// STATES LIVES HERE 



import { useState } from "react"; // USESTATE HOOK 
import { v4 as uuid } from "uuid"; // UUID HOOK 
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {

    // CREATED TODOS ARRAY OBJECT FORM 
    const [todos, setTodos] = useState([
        { task: "Sleep", id: uuid(), completed: false }
    ])

    // ADDING TODO 
    const addTodo = (task) => {
        setTodos((prev) => [
            ...prev,
            { task, id: uuid(), completed: false }
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
        <div id="todo-container">
            <p className="todo-title">To Do List</p>
            <TodoInput addTodo={addTodo} />
            <p className="todo-subtitle">Add Tasks</p>
            <hr className="todo-divider" />
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} uppercaseOne={uppercaseOne} uppercaseAll={uppercaseAll} />
            <button id="update-all-btn">Update All</button>
        </div>
    )
}


// WHY THIS IS GOOD ✅
// -------------------
// STATE IN ONE PLACE
// LOGICAL CENTRALIZED
// UI DELEGATED
// CLEAN AND READABLE
// -------------------