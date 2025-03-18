import React from 'react';
import { Switch } from 'react-router-dom';

import MyRoute from './MyRoute';
import Login from '../pages/login';
import Page404 from '../pages/page404';
import Student from '../pages/student';
import Students from '../pages/students';
import Register from '../pages/register';
import Photos from '../pages/photos';

export default function Routes() {
  return (
    <Switch>
      <MyRoute path="/" exact component={Students} isClosed={false} />
      <MyRoute path="/student/:id/edit" exact component={Student} isClosed />
      <MyRoute path="/student/" exact component={Student} isClosed />
      <MyRoute path="/photos/:id" exact component={Photos} isClosed />
      <MyRoute path="/login/" exact component={Login} isClosed={false} />
      <MyRoute path="/register/" exact component={Register} isClosed={false} />
      <MyRoute path="*" component={Page404} />
    </Switch>
  );
}
