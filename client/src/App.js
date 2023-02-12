import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import { createTheme } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import HomePage from 'pages/homePage';

import { themeSettings } from './theme';
import LoginPage from './pages/loginPage';
import ProfilePage from './pages/profilePage';

// file structure with index.jsx
// https://stackoverflow.com/questions/44092341/how-do-index-js-files-work-in-react-component-directories
function App() {
  const mode = useSelector(state => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <div className='app'>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          {/* css reset for mui */}
          <CssBaseline />
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/profile/:userId' element={<ProfilePage />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
