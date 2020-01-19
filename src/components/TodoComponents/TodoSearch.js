// Add "Search by Todo Item" feature
// Add the <TodoSearch /> component 
// Create a search form that will filter through the todo items displayed in the todo list
import React from 'react';

function TodoSearch({ handleChange, searchTerm }) {

  return (
    <div className="todo-search">
      <form>
        <input 
          id="todo" 
          type="text" 
          name="task" 
          onChange={handleChange}
          value={searchTerm}
          placeholder='Search Tasks'
          className='searchInput'
        />
      </form>
    </div>
  )
};

export default TodoSearch;