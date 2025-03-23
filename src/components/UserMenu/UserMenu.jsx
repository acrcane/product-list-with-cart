import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, UserName, LogOutBtn } from './UserMenu.styled';
import { apiLogOutUser } from '../../redux/auth/authSlice';
import { selectAuthUserData } from '../../redux/auth/authSlice.selectors';

export const UserMenu = () => {
  const userData = useSelector(selectAuthUserData);

  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(apiLogOutUser());
  };
  return (
    <Container>
      <UserName>{userData.name}</UserName>
      <LogOutBtn onClick={handleLogOut}>Log Out</LogOutBtn>
    </Container>
  );
};
