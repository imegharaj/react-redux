import React, { useState } from 'react';
import './NewTodoForm.css';
import { connect } from 'react-redux';
import { createTodo } from './actions';

const NewTodoForm = ({ todos, onSubmit }) => {
  const [todo, setTodo] = useState('');

  return (
    <div className="new-todo-form">
      <input type="text" className="new-todo-input" value={todo}
             onChange={(e) => setTodo(e.target.value)}/>
      <button className="new-todo-button"
        onClick={() => {
          const isDuplicateText = todos.some((todo) => todo.text === todo);
          if (!isDuplicateText) {
            onSubmit(todo);
            setTodo('');
          }
        }}>Submit</button>
    </div>
  );
}

export const mapStateToProps = state => ({
  todos : state.todos
});
export const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(createTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);