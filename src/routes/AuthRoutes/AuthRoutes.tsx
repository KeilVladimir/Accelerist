import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { AuthRoute } from 'types';
import { Reset } from 'pages/Auth/Reset';
import { Auth } from 'pages/Auth/Authentication';
import { NewPassword } from 'pages/Auth/NewPassword';
import { AuthLayout } from 'layouts/AuthLayout';

const AuthRoutes = () => {
  const match = useRouteMatch();
  return (
    <AuthLayout>
      <Switch>
        <Route path={`${match.path + AuthRoute.reset}`}>
          <Reset />
        </Route>
        <Route path={`${match.path + AuthRoute.reg}`}>
          <Auth isRegister={false} />
        </Route>
        <Route path={`${match.path + AuthRoute.change_password}`}>
          <NewPassword />
        </Route>

        <Route path={match.path}>
          <Auth isRegister={true} />
        </Route>
      </Switch>
    </AuthLayout>
  );
};

export default AuthRoutes;
