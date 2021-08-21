import react from 'react';
import { GoogleLogin } from 'react-google-login';

export default function LoginButton() {
  const onSuccess = (response) => {
    console.log('Logged in successfully!');
  }

  const onFailure = (response) => {
    console.log('Could not login.');
  }

  return (
    <GoogleLogin
      clientId={'129260498944-4mlbt88pvv7fc9rg8f8bkecem69ul1ic.apps.googleusercontent.com'}
      onSuccess={onSuccess}
      onFailure={onFailure}
      buttonText="Login with Google"
      cookiePolicy={'single_host_origin'}
      isSignedIn={true}
    />
  );
}