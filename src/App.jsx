import { Navigate, Route, Routes } from 'react-router-dom';

import './App.css';
import MainLayout from './assets/layouts/MainLayout';
import Hero from './assets/pages/Hero';
import About from './assets/pages/About';
import Projects from './assets/pages/Projects';
import Contact from './assets/pages/Contact';
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
          <Route index element={<Hero />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<PrivacyPolicy />} /> {/* Added for GDPR */}
        </Route>

        {/* CenterLayout for auth pages */}
        <Route path="/auth" element={<CenterLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;