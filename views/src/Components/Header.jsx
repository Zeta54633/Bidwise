import React from 'react';


const Header = () => {
  return (
    <header style={styles.headerContainer}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>MyWebsite</h1>
      </div>
      <nav style={styles.navContainer}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
          <li style={styles.navItem}><a href="#services" style={styles.navLink}>Services</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: '#fff',
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    margin: 0,
  },
  navContainer: {
    flex: 2,
    textAlign: 'right',
  },
  navList: {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '20px',
  },
  navItem: {
    display: 'inline',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

export default Header;
