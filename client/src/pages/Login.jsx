import LoginButton from '../components/LoginButton';
import { useContext, useState } from 'react';
import { Redirect } from 'react-router';

// Util
import { UserContext } from '../util/userContext.js';

export default function Login() {
  const { user, setUser } = useContext(UserContext);

  return user ? (
    <>
      <Redirect to='/dashboard' />
    </>
  ) : (
    <>
      <h1>Login</h1>
      <LoginButton setUser={setUser} />
    </>
  );
}