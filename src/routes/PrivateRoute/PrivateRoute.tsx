import React from 'react';
import { useSelector } from 'react-redux';
import { getToken } from '../../store/ducks/session/selectors';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute: React.FC = ({ children, ...rest }) => {
  const token = useSelector(getToken);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        token !== '' ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
