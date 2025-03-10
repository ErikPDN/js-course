import React from 'react';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/global';
import { Title } from './styled.js';
import * as exampleActions from '../../store/modules/examples/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.buttonClickedRequest());
  }

  return (
    <Container>
      <Title>
        Login
        <small>Hello</small>
      </Title>
      <p>Lorem ipsum dolor sit amet.</p>
      <button type="button" onClick={handleClick}>submit</button>
    </Container>
  )
} 
