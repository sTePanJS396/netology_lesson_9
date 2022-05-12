import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate()
    setTimeout(() => {
        console.log(111);
        navigate('/')
    }, 2000);
  return (
    <h1>Страница не найдена!</h1>
  )
}

export default NotFound