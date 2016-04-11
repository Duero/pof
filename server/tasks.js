import {Meteor} from 'meteor/meteor';
import {check, Match} from 'meteor/check';

import Collections from '/lib/collections';

const Tasks = Collections.Tasks;

Meteor.methods({
  'tasks.new'(data) {
    check(data, {
      text: String,
      done: Boolean
    });

    Tasks.insert(data);
  }
});


Meteor.publish('tasks.all', () => {
  return Tasks.find();
});
