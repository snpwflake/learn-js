/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PageProfile from './components/PageProfile.jsx';
import PageFeed from './components/PageFeed.jsx';
import PageSettingsProfile from './components/PageSettingsProfile.jsx';
import PageSettingsPassword from './components/PageSettingsPassword.jsx';
import PageSettingsEmail from './components/PageSettingsEmail.jsx';
import PageSubscribe from './components/PageSubscribe.jsx';

function App() {
  return (
    <Routes>
      <Route path="/feed" element={<PageFeed />} />
      <Route path="/profile" element={<PageProfile />} />
      <Route path="/settings" element={<PageSettingsProfile />} />
      <Route path="/settings/password" element={<PageSettingsPassword />} />
      <Route path="/settings/email" element={<PageSettingsEmail />} />
      <Route path="/subscribers" element={<PageSubscribe />} />
    </Routes>
  );
}

export default App;
