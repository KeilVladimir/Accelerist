import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import { AuthRoute } from 'types';
import { Reset } from 'pages/Auth/Reset';
import { Auth } from 'pages/Auth';
import { NewPassword } from 'pages/Auth/NewPassword';
import { AuthLayout } from '../../layouts/AuthLayout';

const AuthRoutes = () => {
  const match = useRouteMatch();
  return (
    <AuthLayout>
      <Router>
        <Switch>
          <Route path={`${match.path + AuthRoute.reset}`}>
            <Reset />
          </Route>
          <Route exact path={`${match.path}`}>
            <Auth isRegister={true} />
          </Route>
          <Route exact path={`${match.path + AuthRoute.login}`}>
            <Auth isRegister={false} />
          </Route>
          <Route path={`${match.path + AuthRoute.newPassword}`}>
            <NewPassword />
          </Route>
        </Switch>
      </Router>
    </AuthLayout>
  );
};

export default AuthRoutes;
