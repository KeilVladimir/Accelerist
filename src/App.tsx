import './App.css';
import { Authorization } from './screens/Authorization';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'}>
          <Authorization />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
