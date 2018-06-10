import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import LoginPage from './LoginPage';
import Register from './RegisterPage';

import App from './App';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route path="/main/:mainId" component={App} />
      <Route component={NotFound} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Router;
