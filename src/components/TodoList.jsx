import TodoItem from "./TodoItem.jsx"

export default function TodoList({todos , deleteTodo , toggleTodo , uppercaseOne , uppercaseAll}) {
    return (
        <ul id="todo-list">
            {todos.map(todo => (
                <TodoItem 
                    todo = {todo}
                />
            ))}       
        </ul>
    )
}
