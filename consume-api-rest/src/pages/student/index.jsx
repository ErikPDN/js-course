import React, { useState } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import { Container } from '../../styles/global';
import { Form } from './styled';

export default function Student({ match }) {
  const id = get(match, 'params.id', 0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return (
    <Container>
      <h1>{id ? 'Edit Student' : 'New Student'}</h1>

      <Form>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Student name" />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Student email" />
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Student weight" />
        <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="Student height" />
        <input type="number" value={age} onChange={e => setAge(e.target.value)} placeholder="Student age" />
        <button type="submit" onClick={handleSubmit}>{id ? 'Save' : 'Create'}</button>
      </Form>
    </Container >
  )
}

Student.propTypes = {
  match: PropTypes.shape({}).isRequired,
}

