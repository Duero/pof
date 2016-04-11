import {createApp} from 'mantra-core';
import {initContext} from './context';
import {combineReducers} from 'redux';

// modules
import coreModule from './modules/core';
import todoModule from './modules/todo';

const reducer = combineReducers({
  todo: todoModule.reducer
});

// init context
const context = initContext({reducer});

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(todoModule);
app.init();
