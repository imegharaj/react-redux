import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO } from './actions';

export const todos = (state = [], actions) => {
  const { type, payload } = actions;
  switch (type) {
    case CREATE_TODO : {
      const newTodo = {
        text: payload,
        isCompleted: false
      }
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      return state.filter(todo => todo.text !== payload);
    }
    case COMPLETE_TODO: {
      return state.map(todo => todo.text === payload ? {...todo, isCompleted: true} : todo)
    }
    default: return state;
  }
}