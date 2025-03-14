import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';

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

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, ({ payload }) => {
    const token = get(payload, 'auth.token', '');
    if (!token) return;
    axios.defaults.headers.Authorization = `Bearer ${token}`;
  })
]); 
