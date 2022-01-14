import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoContext } from '../TodoContext';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodoForm } from '../TodoForm';
import { CreateTodoButton } from '../CreateTodoButton';
import { Modal } from '../Modal';
import { Animacion } from '../Animacion';

function AppUI() {

  const {
    error,
    loading,
    searchedTodos,
    completeTodos,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      
      <TodoList>
        {error && <p>Desesperate</p>}
        {loading && <Animacion/>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

        {searchedTodos.map(todo => (
          <TodoItem 
            key = { todo.text }
            text = { todo.text }
            completed = {todo.completed}
            onComplete={() => completeTodos(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      {openModal && (
        <Modal>
          <TodoForm/>
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </React.Fragment>
  );
    
}

export { AppUI }