// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import './components/TodoComponents/Todo.css';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  },
  {
    task: 'Finish LS Project',
    id: 1528817077287,
    completed: false
  },
  {
    task: 'Go to Work',
    id: 1528817084359,
    completed: false
  }
];

class App extends React.Component {
  // Constructor with state
  constructor() {
    super();
    this.state = {
      todoList: todos,
    };
  }
  
  // I can add new objects even though it's not on the array
  addNewTodo = newTodoTask => {
    const newState = { ...this.state, todoList: 
    [...this.state.todoList, {task: newTodoTask, completed: false, id: Date.now() }
    ]
  };
  this.setState(newState);
};

  // Class methods to update state
  toggleCompleted = id => {
    // this.toggleDone
    console.log('App.js: App: toggleCompleted: id: ', id);
    // const newState = {...this.state}
    const newState = {
      ...this.state,
      todoList: this.state.todoList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    };
    this.setState(newState);
  };

  clearCompleted = () => {
    const newState = {
      ...this.state,
      todoList: this.state.todoList.filter(todo => {
        return !todo.completed; // if(todo.completed === false) return true
      })
    };
    this.setState(newState);
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h2>Todo List: MVP</h2>
          <TodoForm addNewTodo={this.addNewTodo} clearCompleted={this.clearCompleted}/>
        </div>
          <TodoList 
            todos={this.state.todoList} 
            toggleCompleted={this.toggleCompleted}
          />
      </div>
    );
  }
}

export default App;
