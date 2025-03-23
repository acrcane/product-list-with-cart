import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSlice.selectors';

export const RestrictedRoute = ({children}) => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  console.log(isLoggedIn);
  
  return isLoggedIn ? <Navigate to='/products' replace /> : children;
};
