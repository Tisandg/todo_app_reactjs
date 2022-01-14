import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoForm.css'

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {addTodo, setOpenModal } = React.useContext(TodoContext)

    const onCancel = () => {
        //TO DO
        setOpenModal(false);
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onSubmit = (event) => {
        //When the form is submitted, this function allows
        //to perform that action without reaload the site
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    return (
        <form onSubmit={onSubmit} >
            <label>Escribe tu nuevo To Do</label>
            <textarea
                value = {newTodoValue}
                onChange = {onChange}
                placeholder = "Escribe una nueva tarea"
            />
            <div className="TodoForm-buttonContainer">
            <button
                type="button"
                className="TodoForm-button TodoForm-button-cancel"
                onClick = {onCancel}
            >
                Cancelar
            </button>

            <button
                className="TodoForm-button TodoForm-button-add"
                type= "submit"
            >
                Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm }