import React from 'react';
import './TodoItem.css';

function TodoItem(props){

    const onComplete = () => {
        alert("Haz completado la tarea "+props.text);
        props.completed = true;
    };
    const onDelete = () => {
        alert("Haz eliminado la tarea "+props.text);
        props.completed = false;
    };

    return(
        <li className='TodoItem'>
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}
            >
               ✓
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                { props.text }
            </p>
            <span className='Icon Icon-delete'
                onClick={props.onDelete}>
                X
            </span>
        </li>
    );
}

export { TodoItem };