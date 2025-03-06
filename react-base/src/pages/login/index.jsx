import React from 'react';

import { Container } from '../../styles/global';
import { Title } from './styled.js';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Hello</small>
      </Title>
      <p>Lorem ipsum dolor sit amet.</p>
      <button type="button">submit</button>
    </Container>
  )
} 
