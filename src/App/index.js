import React from 'react';
import { AppUI } from './AppUI'
import { TodoProvider } from '../TodoContext';

function App() {

  //Use a provider to pass information to the tree below
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;