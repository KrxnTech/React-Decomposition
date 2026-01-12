export default function TodoItem ({todo , deleteTodo , toggleTodo , uppercaseOne , uppercaseAll})
{
    return (
        <li>
            <span>{todo.task}</span>
            <div className="todo-actions">
                <button className="todo-btn delete-btn" onClick={()=>deleteTodo(todo.id)}>
                    Delete Todo
                </button>

                <button className="todo-btn upper-btn-one" onClick={() => uppercaseOne(todo.id)}>Upper Case one</button>
                <button className="todo-btn upper-btn-all" onClick={() => uppercaseAll()}>Upper Case all</button>
                <button type="checkbox" checked={todo.completed} onChange={()=>{toggleTodo(todo.id)}}>✅</button>
            </div>
        </li>
    )
}