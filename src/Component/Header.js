import React from 'react';
// import Logo from '../39269341.jpg';
const Header = () => {
  return (
    <header style={headerStyle}>
      <div className="header">
      {/* <img src={logo} alt="Logo" /> */}
      {/* <img src={logo} alt="Logo" className="logo" /> */}
      <h1>My Website</h1>
      <nav>
        <ul style={navListStyle}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      </div>
    </header>
  );
};
const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
  };
  
  const navListStyle={
    listStyle: 'none',
    padding: '0',
  };
export default Header;
