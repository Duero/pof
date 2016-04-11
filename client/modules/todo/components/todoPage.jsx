import React from 'react';
import {compose, composeAll, useDeps} from 'mantra-core';

import {NewTaskContainer} from './newTask.jsx';
import {TaskListContainer} from './taskList.jsx';

export const composer = ({context}, onData) => {
  const {Store} = context();

  const updateData = () => {
    const {todo: {view}} = Store.getState();
    onData(null, {listView: view});
  };

  updateData();
  return Store.subscribe(updateData);
};

export const mapper = (context, actions) => {
  return {
    onShowAll: actions.todo.showAll,
    onShowTodo: actions.todo.showTodo,
    context: () => context
  }
};


// ------ C O M P O N E N T ----------------------------------------------------

const TodoPage = ({listView, onShowAll, onShowTodo}) => (
  <div>
    <h1>Home page</h1>
    <NewTaskContainer />
    <hr/>
    <h3>List of tasks</h3>
    <div className="btn btn-default" onClick={onShowTodo} >Todo</div>
    <div className="btn btn-default" onClick={onShowAll} >All</div>
    <TaskListContainer view={listView} />
  </div>
);

export default TodoPage;

export const TodoPageContainer = composeAll(
  compose(composer),
  useDeps(mapper)
)(TodoPage);
