import React from 'react';
import { AppUI } from './AppUI'

// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true },
//   { text: 'Curso intro a ReactJS', completed: false },
//   { text: 'Llorar con la llorona', completed: true }
// ];


//custom hook
//Changes inside this hook notify to React to render again the component.
function useLocalStorage(itemName, initialValue){

  const[error, setError] = React.useState(false);
  const[loading, setLoading] = React.useState(true);
  const[item, setItem] = React.useState(initialValue);

  React.useEffect(() => {
    setTimeout(() => {
      try{
        //Get values of task from LocalStorage
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if(!localStorageItem){
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem)
        setLoading(false);
      } catch(error) {
        setError(true);
      }
    }, 1000);
  });


  const saveItem = (newItem) => {
    try{
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      setItem(newItem);
    } catch(error) {
      setError(true);
    }
  };

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

function App() {

  const {
    item: todos, 
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  //Create state
  const [searchValue, setSearchValue] = React.useState('');

  //!! To check if it is true
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1){
    searchedTodos = todos;
  }else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };


  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodos={completeTodos}
      deleteTodo={deleteTodo}
      loading={loading}
      error={error}
    />
  );
}

export default App;