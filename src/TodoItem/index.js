import React from 'react';
import './TodoItem.css';
import { CompleteIcon } from '../TodoIcon/CompleteIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';

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
            <CompleteIcon
                completed={props.completed}
                onComplete={props.onComplete}
            />
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                { props.text }
            </p>
            <DeleteIcon onDelete={props.onDelete}/>
        </li>
    );
}

export { TodoItem };