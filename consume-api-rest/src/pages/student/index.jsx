import React, { useState, useEffect } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { isEmail, isInt, isFloat } from 'validator';
import { useDispatch } from 'react-redux';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { Container } from '../../styles/global';
import { Form, ProfilePicture, Title } from './styled';
import Loading from '../../components/loading';
import axios from '../../services/axios';
import history from '../../services/history';
import * as actions from '../../store/modules/auth/actions';

export default function Student({ match }) {
  const id = get(match, 'params.id', ''); const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [photo, setPhoto] = useState('');
  const [years_old, setYearsOld] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;
    async function getStudent() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/students/${id}`);
        const Photo = get(data, 'Photos[0].url', '');
        setPhoto(Photo);
        setName(data.name);
        setEmail(data.email);
        setWeight(data.weight);
        setHeight(data.height);
        setYearsOld(data.years_old);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) {
          if (Array.isArray(errors)) {
            errors.map(error => toast.error(error));
          } else {
            toast.error(errors);
          }
        }

        history.push('/')
      }
    }

    getStudent();
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (name.length < 3 || name.length > 255) {
      toast.error('Invalid name');
      formErrors = true;
    }

    if (!isEmail(email)) {
      toast.error('Invalid email');
      formErrors = true;
    }

    if (!isInt(String(years_old))) {
      toast.error('Invalid age');
      formErrors = true;
    }

    if (!isFloat(String(weight))) {
      toast.error('Invalid weight');
      formErrors = true;
    }

    if (!isFloat(String(height))) {
      toast.error('Invalid height');
      formErrors = true;
    }

    if (formErrors) return;


    try {
      setIsLoading(true);

      const studentData = {
        name,
        email,
        weight: parseFloat(weight),
        height: parseFloat(height),
        years_old: parseInt(years_old, 10)
      };

      if (id) {
        await axios.put(`/students/${id}`, studentData);
        toast.success('Student updated');
      } else {
        await axios.post('/students', studentData);
        toast.success('Student created');
      }

      setIsLoading(false);
      history.push('/');
    } catch (err) {
      setIsLoading(false);
      const status = get(err, 'response.status', 0);
      const errors = get(err, 'response.data.errors', []);

      if (errors.length > 0) {
        errors.map(error => toast.error(error));
      } else {
        toast.error('An error occurred');
      }

      if (status === 401) {
        dispatch(actions.loginFailure());
        toast.error('You need to log in again');
      }
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <Title>{id ? 'Edit Student' : 'New Student'}</Title>

      {id && (
        <ProfilePicture>
          {photo ? (
            <img src={photo} alt="Profile" crossOrigin="anonymous" />
          ) : (
            <FaUserCircle size={132} />
          )}
          <Link to={`/photos/${id}`}>
            <FaEdit size={16} />
          </Link>
        </ProfilePicture>
      )}

      <Form>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Student name" />
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Student email" />
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} placeholder="Student weight" />
        <input type="number" value={height} onChange={e => setHeight(e.target.value)} placeholder="Student height" />
        <input type="number" value={years_old} onChange={e => setYearsOld(e.target.value)} placeholder="Student age" />
        <button type="submit" onClick={handleSubmit}>{id ? 'Save' : 'Create'}</button>
      </Form>
    </Container >
  )
}

Student.propTypes = {
  match: PropTypes.shape({}).isRequired,
}

