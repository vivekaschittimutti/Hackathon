// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>My Website</h1>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}>
          <Link to="/" style={styles.link}>Home</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/students" style={styles.link}>Students</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/courses" style={styles.link}>Courses</Link>
        </li>
        <li style={styles.navItem}>
          <Link to="/teachers" style={styles.link}>Teachers</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#007BFF',
    color: '#fff',
  },
  title: {
    margin: 0,
    fontSize: '1.5rem',
  },
  navLinks: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: '0 1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;
