import './App.css';
import IndexRoutes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { StrictMode } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store';
import { ThemeProvider } from 'styled-components';
import primary from './ constants/themes';

function App() {
  return (
    <StrictMode>
      <ThemeProvider theme={primary}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <IndexRoutes />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </StrictMode>
  );
}

export default App;
