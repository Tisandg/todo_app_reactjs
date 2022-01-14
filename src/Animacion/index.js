import React from 'react';
import './Animacion.css';
import '../TodoItem/TodoItem.css'

function Animacion() {
    return(
        <article className='container'>
            <div className='background'>
                <li className='TodoItem'>
                    <span className=''></span>
                    <p className=''></p>
                    <span className=''>
                    </span>
                </li>
            </div>
        </article>
    );
}

export { Animacion }