import React from 'react';
import Button from './Button';
import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <nav>
      <h1 className={classes.appTitle}>SCHMAAP-MAP</h1>
      <ul>
        <Button className={classes.navbarBtn}>
          <Link to="/login">Login</Link>
        </Button>
        <Button className={classes.navbarBtn}>
          <Link to="/signup">Signup</Link>
        </Button>
        <Button className={classes.navbarBtn}>
          <Link to="/main">Main</Link>
        </Button>
      </ul>
    </nav>
  );
};

export default Navbar;
