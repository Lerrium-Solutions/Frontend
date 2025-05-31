import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../components/Nav';
import '/src/css/layouts/MainLayout.css';

const MainLayout = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="main-wrapper">
      <Header />
      <Nav />
      <main className="main-content">
        <nav aria-label="breadcrumb" className="breadcrumb">
          <ul>
            {pathnames.map((value, index) => {
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              const isLast = index === pathnames.length - 1;
              return (
                <li key={to}>
                  {isLast ? (
                    <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
                  ) : (
                    <a href={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;