import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Nav } from './styled';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function Header() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(actions.loginFailure());
    history.push('/login');
  }

  return (
    <Nav>
      <Link to="/"><FaHome size={24} /></Link>
      <Link to="/register"><FaUserAlt size={24} /></Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout"><FaPowerOff size={24} /></Link>
      ) : (
        <Link to="/login"><FaSignInAlt size={24} /></Link>
      )}

      {isLoggedIn ? <FaCircle size={24} color="#4CAF50" /> : <FaCircle size={24} color="#FAA61A" />}
    </Nav>
  );
}
