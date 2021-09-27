import './App.css';
import IndexRoutes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { StrictMode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';

function App() {
  return (
    <StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <IndexRoutes />
        </PersistGate>
      </Provider>
    </StrictMode>
  );
}

export default App;
