import React from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/layout.jsx';
import {TodoPageContainer} from './components/todoPage.jsx';


export default function (injectDeps) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/todo', {
    name: 'todo',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<TodoPageContainer />)
      });
    }
  });

}
