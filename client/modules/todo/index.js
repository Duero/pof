import routes from './routes.jsx';
import {reducer, actions} from './duck';

export default {
  routes,
  reducer,
  actions: {
    todo: actions
  },
  load(context) {
    // empty
  }
};
