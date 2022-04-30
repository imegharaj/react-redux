import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import { connect } from 'react-redux';
import { removeTodo, completeTodo } from './actions';
import NewTodoForm from './NewTodoForm';

const TodoList = ({ todos = [], onRemove, onComplete}) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {
        todos.map((todo) => <TodoListItem key={todo.text} todo={todo} onRemove={onRemove} onComplete={onComplete}/>)
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onRemove: text => dispatch(removeTodo(text)),
  onComplete: text => dispatch(completeTodo(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);