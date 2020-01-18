// Uncontrolled component - Input Field

import React from 'react';

class TodoForm extends React.Component {
  // 1. Implement a state variable for the input component
  // 2. Update the input component with the state variable
  // 3. Implement handleChanges to recognize typing in the input component
  state = {
    newTodo: ''
    };

  handleChanges = event => {
    // updated state with each keystroke
    this.setState({ ...this.state, newTodo: event.target.value });
  };

  // class property to submit form
  handleSubmit = event => {
    event.preventDefault();
    this.props.addNewTodo(this.state.newTodo);
    this.setState({ newTodo: '' });
  }

  render() {
    console.log('rendering form');
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          {/* This is an uncontrolled component. We want it to be controlled*/}
          <input 
            onChange={this.handleChanges}
            type='text'
            name='task'
            task='todo' 
            value={this.state.newTodo}
          />
          <button>Add Button </button> <br/>
          <button 
            className="clear-btn" 
            onClick={this.props.clearCompleted}
          >
            Clear Completed
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;