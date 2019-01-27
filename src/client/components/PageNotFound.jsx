import React from 'react';
import Logo from './Logo.jsx';
import Footer from './Footer.jsx';

const PageNotFound = () => {
  return (
    <div id="page-not-found">
      <Logo />
      <main id="page-not-found-body">
        <h1>404</h1>
        <h2>Page not found</h2>
      </main>
      <Footer />
    </div>
  );
};

export default PageNotFound;