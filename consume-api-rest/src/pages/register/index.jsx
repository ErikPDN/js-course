import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';

import { Container } from '../../styles/global';
import { Form } from './styled.js';

import axios from '../../services/axios';
import history from '../../services/history';
import Loading from '../../components/loading';

export default function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      formErrors = true;
      toast.error('Name must be between 3 and 255 characters');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Invalid email');
    }

    if (password.length < 6 || password.length > 50) {
      formErrors = true;
      toast.error('Password must be between 6 and 50 characters');
    }

    setIsLoading(true);

    if (!formErrors) {
      try {
        await axios.post('/users', {
          name,
          email,
          password,
        });
        toast.success('Successfully registered');
        history.push('/login');
        setIsLoading(false);
      } catch (err) {
        const errors = get(err, 'response.data.errors', []);
        errors.map(error => toast.error(error));
        setIsLoading(false);
      }
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Register</h1>
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
        <button type="submit">Register</button>
      </Form>
    </Container>
  )
} 
