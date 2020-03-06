import React from 'react';
import Navbar from './Navbar';
import Page from './Page';
import Home from './Home';

const Header = () => {
  let path = window.location.pathname;
  path = path[0] === '/' ? path.substr(1) : path;

  if (path === '') {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  } else if (path.includes("/blog")) {
    console.log("blog post");
  } else {
    return (  
      <div>
        <Navbar />
        <Page path={path} />
      </div>
    );
  }

}

export default Header;