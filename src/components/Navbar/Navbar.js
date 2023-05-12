import React from "react";
import styles from "./Navbar.module.css";
import FactCheckRoundedIcon from "@mui/icons-material/FactCheckRounded";

function NavBar() {
  return (
    <nav>
      <ul className={styles.NavBarContainer}>
        <li className={styles.NavListTaskopolis}>
          <FactCheckRoundedIcon
            className={styles.LogoTaskopolis}
            fontSize="large"
          />
          Task Tracker
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
