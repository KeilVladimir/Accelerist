import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { AuthRoutes } from './AuthRoutes';

const IndexRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/'}>
          <AuthRoutes />
        </Route>
        <Route path={'*'}>
          <Redirect to={'/'} />
        </Route>
      </Switch>
    </Router>
  );
};

export default IndexRoutes;
