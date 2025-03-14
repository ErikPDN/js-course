import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/global';
import { Form } from './styled.js';
import * as actions from '../../store/modules/auth/actions';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = false;

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid email');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Invalid password');
    }

    if (!formErrors) {
      dispatch(actions.loginRequest({ email, password }));
    }

  }

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <input type="email" name="" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" name="" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </Form>
    </Container >
  )
} 
