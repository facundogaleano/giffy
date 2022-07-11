import React from 'react';
import Routes from '../router/router';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import './Layout.css';

export default function Layout() {
  return (
    <div className="principal-container">
      <div className='header'>
        <Header />
      </div>
      <div className="content">
        <Routes />
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}