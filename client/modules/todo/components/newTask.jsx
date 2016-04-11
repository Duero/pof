import React from 'react';
import {compose, composeAll, useDeps} from 'mantra-core';

import { Form } from 'formsy-react';
import { Input, Checkbox, Row } from 'formsy-react-components';


export const composer = ({context}, onData) => {
  onData(null, {});
};

export const mapper = (context, actions) => {
  return {
    handleSubmit(values) {
      context.Meteor.call('tasks.new', values);
    },
    context: () => context
  }
};


// ------ C O M P O N E N T ----------------------------------------------------

const NewTask = ({handleSubmit}) => {
  return <div>
    <Form onSubmit={handleSubmit}>
      <Input name="text" label="Task" placeholder="some important task" required />
      <Checkbox
        name="done"
        value={false}
        label="done"
        rowLabel="Checkbox (single)"
      />
      <Row>
        <input className="btn btn-primary" type="submit" defaultValue="Submit" />
      </Row>
    </Form>
  </div>

};

export default NewTask;

export const NewTaskContainer = composeAll(
  compose(composer),
  useDeps(mapper)
)(NewTask);
