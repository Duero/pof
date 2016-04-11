export const SHOW_ALL = 'ip/todo/SHOW_ALL';
export const SHOW_TODO = 'ip/todo/SHOW_TODO';

const defaultState = {
  view: 'todo'
};

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case SHOW_ALL:
      return {
        ...state,
        view: 'all'
      };
    case SHOW_TODO:
      return {
        ...state,
        view: 'todo'
      };
    default:
      return state;
  }
}


export const actions = {
  showAll(context) {
    context.Store.dispatch({type: SHOW_ALL});
  },
  showTodo(context) {
    context.Store.dispatch({type: SHOW_TODO});
  }
};
