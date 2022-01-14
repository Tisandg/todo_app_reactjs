import React from 'react';
import './CreateTodoButton.css'

function CreateTodoButton({openModal, setOpenModal}){
    const onClickButton = () => {
        if(openModal){
            openModal = false;
        }else{
            openModal = true;
        }
        setOpenModal(openModal);
    }
    
    return(
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };