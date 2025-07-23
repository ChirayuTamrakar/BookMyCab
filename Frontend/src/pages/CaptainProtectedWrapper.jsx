import React, { useEffect, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainProtectedWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/captain-login');
      return;
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    }).then((response) => {
        if (response.status === 200 || response.status === 201) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
    }).catch((err) => {
        console.error('Auth error:', err);
        navigate('/captain-login');
    });
  }, [navigate, setCaptain]);

  if (isLoading) {
    return <h1>LOADING...</h1>;
  }

  return <>{children}</>;
};

export default CaptainProtectedWrapper;
