import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import SignUpPage from './containers/SignUpPage';
import DraggablePage from './containers/DraggablePage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.DRAGGABLE} component={DraggablePage} />
      <Route path={routes.SIGNUP} component={SignUpPage} />
      <Route exact path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);