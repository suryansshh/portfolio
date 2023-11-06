import React from 'react';

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const navStyle = {
  listStyle: 'none',
  display: 'flex',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#fff',
  margin: '0 10px',
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Piyush Katyal</h1>
      <nav>
        <ul style={navStyle}>
          <li>
            <a style={linkStyle} href="/">Home</a>
          </li>
          <li>
            <a style={linkStyle} href="/about">About</a>
          </li>
          <li>
            <a style={linkStyle} href="/projects">Projects</a>
          </li>
          <li>
            <a style={linkStyle} href="/skills">Skills</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
