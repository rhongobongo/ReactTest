import React from 'react';

const year = () =>{
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <footer>
      <p>© {year} ShopSavvy. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
