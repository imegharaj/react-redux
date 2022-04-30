import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ todo, onRemove, onComplete }) => {
  return (
    <div className="todo-item-container">
      <input type="checkbox" checked={todo.isCompleted}/>
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {
          todo.isCompleted ? null : <button className="completed-button" onClick={() => onComplete(todo.text)}>Mark As Completed</button>
        }
        <button className="remove-button" onClick={ () => onRemove(todo.text)}>Remove</button>
      </div>
    </div>
  )
}

export default TodoListItem;