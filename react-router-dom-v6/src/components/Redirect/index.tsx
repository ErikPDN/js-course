import './style.css';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirect = () => {
  const [time, setTime] = useState(5);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = window.setTimeout(() => {
      setTime((time) => time - 1);
    }, 1000);

    if (time <= 0) {
      navigate('/', {
        state: `This is the state: ${Math.random()}`,
      });
    }

  }, [time, navigate]);

  return (
    <div>
      <h1>Get out of here in: {time}</h1>
    </div>
  )
}
