import React, { useEffect, useState } from 'react';
import { get } from 'lodash';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';

import { Container } from '../../styles/global';
import axios from '../../services/axios';
import { ProfilePicture, StudentContainer } from './styled.js';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getStudents() {
      const response = await axios.get('/students');
      setStudents(response.data);
    }

    getStudents();
  }, [])

  return (
    <Container>
      <h1>Students</h1>

      <StudentContainer>
        {students.map(student => (
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

            <Link to={`/student/${student.id}/edit`}><FaEdit size={16} /></Link>
            <Link to={`/student/${student.id}/delete`}><FaWindowClose size={16} /></Link>
          </div>
        ))}
      </StudentContainer>

    </Container>
  )
} 
