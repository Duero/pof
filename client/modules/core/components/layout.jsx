import React from 'react';

const Layout = ({content = () => null }) => (
  <div className="container">
    {content()}
  </div>
);

export default Layout;
