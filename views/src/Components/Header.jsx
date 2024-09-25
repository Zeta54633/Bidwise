import React from 'react';


const Header = () => {
  return (
    <header style={styles.headerContainer}>
      <div style={styles.logoContainer}>
        <h1 style={styles.logo}>BidWise</h1>
      </div>
      <nav style={styles.navContainer}>
        <ul style={styles.navList}>
          <li style={styles.navItem}><a href="/" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="/build" style={styles.navLink}>Build Team</a></li>
          <li style={styles.navItem}><a href="/scout" style={styles.navLink}>Talent Scout</a></li>
          <li style={styles.navItem}><a href="/about" style={styles.navLink}>About Us</a></li>
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
    height: '100px',
    width: '100%',
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
