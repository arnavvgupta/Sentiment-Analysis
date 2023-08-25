import React from "react";
import styles from "./Navbar.module.css";
import Button from "./utils/Button";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div>
        <h1>SentiMedia</h1>
      </div>
      <div className={styles.right}>
        <Button>Login</Button>
        <Button>Signup</Button>
      </div>
    </div>
  );
};

export default Navbar;
