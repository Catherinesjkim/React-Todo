// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import TodoSearch from "./TodoSearch";

const TodoList = ({ todos, toggleCompleted }) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(todos);

  useEffect(() => {

    const results = todos.filter(character => {
      console.log('cat', searchResults);
      return character.task
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
    console.log(searchTerm);
    //eslint-disable-next-line
  }, [searchTerm]);
  console.log(searchResults);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  if (searchTerm.length === 0) {
    return (
      <>
        <section className="formGoLeft">
          <h3>Search</h3>
            <TodoSearch 
              handleChange={handleChange} 
              searchTerm={searchTerm} 
            />
        </section>
        <ol className="todoList">
          {todos.map(item => (
            <li>
              <Todo 
                key={item.id} 
                item={item} 
                toggleCompleted={toggleCompleted} 
                searchTerm={searchTerm}
              />
            </li>
          ))}
        </ol>
      </>
    );
} else {
    return (
      <>
        <section className="formGoLeft">
          <h3>Search</h3>
            <TodoSearch 
              handleChange={handleChange} 
              searchTerm={searchTerm} 
            />
        </section>
        <div className="todo-list">
          {searchResults.map(item => (
            <li>
              <Todo 
                key={item.id} 
                item={item} 
                toggleCompleted={toggleCompleted} 
                searchTerm={searchTerm}
              />
            </li>
          ))}
        </div>
      </>
    );
  } 
};

export default TodoList;