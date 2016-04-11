import Collections from '/lib/collections/index';
import {Meteor} from 'meteor/meteor';
import {FlowRouter} from 'meteor/kadira:flow-router';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const finalCreateStore = compose(
  applyMiddleware(thunk)
)(createStore);

export function initContext({reducer}) {
  return {
    Meteor,
    FlowRouter,
    Collections,
    Store: finalCreateStore(reducer)
  };
}
