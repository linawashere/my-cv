import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page not found</h2>
      <p>The requested page does not exist or has been moved.</p>
      <Link to="/" className="btn">Home</Link>
    </div>
  );
};

export default NotFoundPage;