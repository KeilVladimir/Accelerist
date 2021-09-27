import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { Dashboard } from '../pages/Dashboard';
import { MainLayout } from '../layouts/MainLayout';
import { Favorites } from '../pages/Favorites';
import { Prospects } from '../pages/Prospects';
import { CorporateProfile } from '../pages/CorporateProfile';
import { Search } from '../pages/Search';
import { PrivateRoute } from './PrivateRoute';

enum Routes {
  dashboard = '/Dashboard',
  auth = '/auth',
  favorite = '/Favorite',
  prospects = '/Prospects',
  profile = '/Profile',
  search = '/Search',
}

const IndexRoutes = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from={'/'} to={Routes.auth} />
        <Route path={Routes.auth} component={AuthRoutes} />
        <MainLayout>
          <PrivateRoute>
            <Route path={Routes.dashboard} component={Dashboard} />
          </PrivateRoute>
          <PrivateRoute>
            <Route path={Routes.favorite} component={Favorites} />
          </PrivateRoute>
          <PrivateRoute>
            <Route path={Routes.prospects} component={Prospects} />
          </PrivateRoute>
          <PrivateRoute>
            <Route path={Routes.profile} component={CorporateProfile} />
          </PrivateRoute>
          <PrivateRoute>
            <Route path={Routes.search} component={Search} />
          </PrivateRoute>
        </MainLayout>
      </Switch>
    </Router>
  );
};
export default IndexRoutes;
