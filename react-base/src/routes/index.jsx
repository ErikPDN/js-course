import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../pages/login';
import Page404 from '../pages/page404';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="*" component={Page404} />
    </Switch>
  )
}
