import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

export default function LoginButton({ setUser }) {
  const onSuccess = (response) => {
    console.log('Logged in successfully!');

    const profile = response.profileObj;
    setUser(profile);

    const user = {
      firstName: profile.givenName,
      lastName: profile.familyName,
      email: profile.email,
      googleId: profile.googleId,
      imageUrl: profile.imageUrl
    }

    axios.get(`http://localhost:5000/api/v1/users/google/${response.profileObj.googleId}`)
      .then(res => {
        if (res.data.length === 0) {
          axios.post('http://localhost:5000/api/v1/users/', user)
            .then(finalRes => console.log(finalRes));
        }
      });
    //Session.setProfile(response.profileObj);
    //setIsLoggedIn(true);
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