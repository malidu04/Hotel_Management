import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (
    email,
    password,
    firstName,
    lastName,
    address,
    contactNumber
  ) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(
      process.env.REACT_APP_BACKEND_API + '/api/user/signup',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          address,
          contactNumber,
        }),
      }
    );
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      // save the user to local storage
      localStorage.setItem('user', JSON.stringify(json));

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });

      // update loading state
      setIsLoading(false);

      window.location.href = '/Profile';
    }
  };

  return { signup, isLoading, error };
};
