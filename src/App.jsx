
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'
import { ThemeProvider } from '@emotion/react';
import { PersistGate } from 'redux-persist/integration/react';
import AppRouter from './routers/AppRouter';
import { ToastContainer } from 'react-toastify';
import { createTheme } from '@mui/material';
import { Provider } from 'react-redux';
import store, { persistor } from './app/store';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#232946",
        second: "#F4F6FF",
        contrastText:"#F2C94C"
      },
      secondary: {
        main: "#BBEBEE",
        second: "#D4D8F0",
        contrastText: "#EEBBC3"
      },
      },
      
     
  });

  return (
    <ErrorBoundary>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppRouter/>
        </PersistGate>

      </Provider>
      <ToastContainer/>
    </ThemeProvider>
      
    </ErrorBoundary>
  )
}

export default App
