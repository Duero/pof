import React from 'react';
import {composeWithTracker, composeAll, useDeps} from 'mantra-core';


export const composer = ({context, view}, onData) => {
  const {Meteor, Collections} = context();

  if(Meteor.subscribe('tasks.all').ready()) {
    const tasks = Collections.Tasks.find(view == 'todo' ? {done: false} : {}).fetch();
    onData(null, {tasks});
  }
};


// ------ C O M P O N E N T ----------------------------------------------------

const TaskList = ({tasks, view}) => (
  <div>
    <h4>Showing {view} tasks</h4>
    {tasks.map(
      task => <div key={task._id}>{task.done ? 'DONE' : '-'} {task.text}</div>
    )}
  </div>
);

export default TaskList;

export const TaskListContainer = composeAll(
  composeWithTracker(composer),
  useDeps()
)(TaskList);
