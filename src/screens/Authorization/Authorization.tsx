import React from 'react';
import { HeaderAuth } from '../../views/ui/HeaderAuth';
import styled from 'styled-components';
import background from '../../assets/img/homedark.png';
import { Auth } from '../../views/components/Auth';
import { Reset } from '../../views/components/Reset';
import { NewPassword } from '../../views/components/NewPassword';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom';
import { AuthRoute } from '../../types';

const Authorization: React.FC = () => {
  const match = useRouteMatch();

  return (
    <>
      <HeaderAuth />
      <Contents>
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
      </Contents>
    </>
  );
};

const Contents = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px);
  border: 1px black;
  background-image: url(${background});
  background-size: cover;
  display: flex;
  justify-content: center;
`;

export default Authorization;
