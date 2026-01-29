import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../../../App.css';

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;