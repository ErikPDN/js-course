import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { Container } from '../../styles/global';
import { Form } from './styled.js';

import Loading from '../../components/loading';
import * as actions from '../../store/modules/auth/actions';

export default function Register() {
  const id = useSelector(state => state.auth.user.id);
  const nameStorage = useSelector(state => state.auth.user.name);
  const emailStorage = useSelector(state => state.auth.user.email);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const isLoading = useSelector(state => state.auth.isLoading);

  React.useEffect(() => {
    if (id) {
      setName(nameStorage);
      setEmail(emailStorage);
    }
  }, [id, nameStorage, emailStorage]);

  async function handleSubmit(e) {
    e.preventDefault();
    dispatch(actions.registerRequest({ name, email, password, id }));
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Edit' : 'Register'}</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name:
          <input type="text" value={name} onChange={e => setName(e.target.value)} id="name" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} id="password" />
        </label>
        <button type="submit">{id ? 'Save' : 'Register'}</button>
      </Form>
    </Container>
  )
} 
