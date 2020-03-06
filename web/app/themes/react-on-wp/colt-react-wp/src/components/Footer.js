import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-grid">
          {<p>&copy; {new Date().getFullYear()} Designed And Built By Me (Colten)</p>}
      </div>
    </div>
  )  
}

export default Footer;