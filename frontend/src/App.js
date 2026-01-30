import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import LandingPage from './pages/landing';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/videoMeet';
import HomeComponent from './pages/home';
import History from './pages/history';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>

          <AuthProvider>


            <Routes>

              <Route path='/' element={<LandingPage />} />

              <Route path='/auth' element={<Authentication />} />

              <Route path='/home' s element={<HomeComponent />} />
              <Route path='/history' element={<History />} />
              <Route path='/:url' element={<VideoMeetComponent />} />
            </Routes>
          </AuthProvider>

        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;