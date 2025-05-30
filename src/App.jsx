import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import MainLayout from './assets/layouts/MainLayout';
import Projects from './assets/pages/Projects';
import Contact from './assets/pages/Contact';
import About from './assets/pages/About';
import PrivacyPolicy from './assets/pages/PrivacyPolicy';
import CenterLayout from './assets/layouts/CenterLayout';
import Login from './assets/auth/Login';
import Register from './assets/auth/Register';
import NotFound from './assets/pages/NotFound';
import GDPRBanner from './assets/components/GDPR';

function App() {
  return (
    <>
      <GDPRBanner
        onAccept={() => {
          console.log('Accepted');
          // Add logic to enable cookies/analytics here
        }}
        onDecline={() => {
          console.log('Declined');
          // Add logic to disable cookies/analytics here
        }}
      />

      <Routes>
        {/* MainLayout for primary pages */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="privacy" element={<PrivacyPolicy />} /> {/* Added for GDPR */}
          <Route path="*" element={<NotFound />} /> {/* Improved 404 */}
        </Route>

        {/* CenterLayout for auth pages */}
        <Route path="/auth" element={<CenterLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} /> {/* Improved 404 */}
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} /> {/* Improved 404 */}
      </Routes>
    </>
  );
}

export default App;