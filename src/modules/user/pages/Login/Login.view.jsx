import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Login.module.css';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import useGlobalStore from '../../../../store/global.store';
import { API_URL } from '../../../../utils/constants';
import ErrorWrapper from './components/ErrorWrapper';

const ERRORS_INITIAL_STATE = {
  email: '',
  password: '',
};

export default function LoginView() {
  const history = useHistory();
  const [setUser] = useGlobalStore((state) => [state.setUser]);

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState(ERRORS_INITIAL_STATE);
  const [status, setStatus] = React.useState('idle');

  function validateLoginDetails(email, password) {
    let isValid = true;

    if (!email) {
      setErrors((state) => ({
        ...state,
        email: 'Please enter your email.',
      }));

      isValid = false;
    }

    if (!password) {
      setErrors((state) => ({
        ...state,
        password: 'Please enter your password.',
      }));

      isValid = false;
    }

    return isValid;
  }

  async function loginHandler() {
    setErrors(ERRORS_INITIAL_STATE);
    setStatus('pending');

    const isValid = validateLoginDetails(email, password);

    if (!isValid) {
      setStatus('idle');
      return;
    }

    try {
      const data = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const user = await data.json();

      setUser(user);
      setStatus('fulfilled');
      history.push('/admin/home');
    } catch (error) {
      console.error(error);
      setStatus('failed');
    }
  }

  return (
    <AuthLayout>
      <div className={styles.loginContainer}>
        <h1>Welcome back</h1>
        {status === 'failed' ? <span>Invalid username or password</span> : null}
        <ErrorWrapper error={errors.email}>
          <input
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
            type='email'
            placeholder='Email'
          />
        </ErrorWrapper>
        <ErrorWrapper error={errors.password}>
          <input
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            type='password'
            placeholder='Password'
          />{' '}
        </ErrorWrapper>

        <button onClick={loginHandler}>
          {status === 'pending' ? 'Loading...' : 'Login'}
        </button>
      </div>
    </AuthLayout>
  );
}
