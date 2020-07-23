import React from 'react';
import '../../App.css';
import classes from "./Navbar.module.css"

const Navbar = () => {
  return (
      <nav className={classes.nav}>
        <div className={classes.item}>
          <a href="/profile">Profile</a>
        </div>
        <div className={classes.item}>
          <a href="/dialogs">Messages</a>
        </div>
        <div className={classes.item}>
          <a>News</a>
        </div>
      </nav>
  );
}

export default Navbar;
