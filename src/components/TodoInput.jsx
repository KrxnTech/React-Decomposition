import { useState } from "react";
export default function TodoInput({addTodo}) {
    const [input , setInput] = useState("")
    const handleAdd = () => {
        if(input.trim() == "") return 
        addTodo(input) 
        setInput("") // RESET THE INPUT PLACEHOLDER 
    }

    // THIS FUNCTION TAKES THE VALUE FROM INPUT 
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    // INPUT BOX STYLING 
    let style = {
        border : "none",
        outline : "none",
        fontSize : "1rem",
        padding : "1rem",
        borderRadius : "5px",
        fontFamily : "Joti One, sans-serif",
        color : "black"
    }

    return (
        <div id="todo-input-section">
            <input style={style} id="todo-input" placeholder="add a task" value = {input} onChange={handleChange} />
            <br /><br />
            <button id="todo-add-btn" onClick={handleAdd}>Add</button>
        </div>
    )
}