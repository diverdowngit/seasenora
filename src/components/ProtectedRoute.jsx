import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import useGlobalStore from '../store/global.store';

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const [user] = useGlobalStore((state) => [state.user]);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
}

export default ProtectedRoute;
