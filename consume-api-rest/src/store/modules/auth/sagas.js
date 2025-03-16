import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import { isEmail } from 'validator';

import axios from '../../../services/axios';
import history from '../../../services/history';
import * as actions from './actions';
import * as types from '../types';


function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Successfully logged in');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Invalid email/password');
    yield put(actions.loginFailure());
  }
}

function* registerRequest({ payload }) {
  if (!payload) return;

  let formErrors = false;

  if (payload.name.lenght < 3 || payload.name.lenght > 255) {
    toast.error('Name must be between 3 and 255 characters');
    formErrors = true;
  }

  if (!isEmail(payload.email)) {
    toast.error('Invalid email');
    formErrors = true;
  }

  if (!payload.id && (payload.password.lenght < 6 || payload.password.lenght > 50)) {
    formErrors = true;
    toast.error('Password must be between 6 and 50 characters');
  }

  if (formErrors) return;

  try {
    if (payload.id) {
      yield call(axios.put, '/users', {
        email: payload.email,
        password: payload.password,
        name: payload.name,
      });
      toast.success('Account updated successfully');
      yield put(actions.registerUpdatedSuccess({ email: payload.email, name: payload.name, password: payload.password }));
    } else {
      yield call(axios.post, '/users', {
        email: payload.email,
        password: payload.password,
        name: payload.name,
      });

      toast.success('Account created successfully');
      yield put(actions.registerCreatedSuccess({ email: payload.email, name: payload.name, password: payload.password }));
      history.push('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.error', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('You need to log in again');
      yield put(actions.loginFailure());
      return history.push('/login');
    }

    if (errors.lenght > 0) {
      errors.map(error => toast.error(error));
    } else {
      toast.error('An error occurred. Please try again later');
    }
    yield put(actions.registerFailure());

  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, ({ payload }) => {
    const token = get(payload, 'auth.token', '');
    if (!token) return;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  }),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]); 
