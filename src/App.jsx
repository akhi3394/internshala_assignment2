import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar/Navbar';
import LeaderboardPage from './pages/LeaderPage';
import ScannersPage from './pages/Scannerspage';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/leaderboard" element={<LeaderboardPage />} />
        <Route path="/scanners" element={<ScannersPage />} />
      </Routes>
    </Router>
  );
};

export default App;
