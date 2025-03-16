import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose, FaExclamation } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Container } from '../../styles/global';
import axios from '../../services/axios';
import { ProfilePicture, StudentContainer } from './styled.js';

import Loading from '../../components/loading';
import { primaryColor } from '../../config/color';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  useEffect(() => {
    async function getStudents() {
      const response = await axios.get('/students');
      setStudents(response.data);
      setIsLoading(false);
    }

    getStudents();
  }, [])

  const handleClick = (e) => {
    e.preventDefault();
    const exclamation = e.currentTarget.nextSibling;
    if (exclamation.style.display === 'block') {
      exclamation.style.display = 'none';
      return;
    }

    exclamation.style.display = 'block';
  }

  const handleDelete = async (e, id, index) => {
    e.persist();
    try {
      setIsLoading(true);
      await axios.delete(`/students/${id}`);
      const studentsCopy = [...students];
      const newStudents = studentsCopy.filter((_, i) => i !== index);
      setStudents(newStudents);
      setIsLoading(false);
    } catch (err) {
      const status = get(err, 'response.status', 0);

      if (status === 401) {
        toast.error('You need to log in again');
      }

      toast.error('An error occurred');
      setIsLoading(false);
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Students</h1>

      <StudentContainer>
        {students.map((student, index) => (
          <div key={student.id}>
            <ProfilePicture>
              {get(student, 'Photos[0].url', false) ? (
                <img src={student.Photos[0].url} alt="Profile" crossOrigin="anonymous" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{student.name}</span>
            <span>{student.email}</span>

            {isLoggedIn ? (
              <>
                <Link to={`/student/${student.id}/edit`}><FaEdit size={16} /></Link>
                <Link onClick={handleClick} to={`/student/${student.id}/delete`}><FaWindowClose size={16} /></Link>
                <FaExclamation onClick={e => handleDelete(e, student.id, index)} color={primaryColor} display="none" cursor="pointer" />
              </>
            ) : ''}
          </div>
        ))}
      </StudentContainer>

    </Container>
  )
} 
