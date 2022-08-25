import { TriangleUpIcon } from "@chakra-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footerlast = () => {
  return (
    <div className={styles.footerlast}>
      <div className={styles.footerlast1}>
        <Link to="/">Terms of Service</Link>
        <TriangleUpIcon/>
        <Link to="/">Privacy Policy</Link>
        <TriangleUpIcon/>
        <Link to="/">Login</Link>
        <TriangleUpIcon/>
        <Link to="/">Start 14 day trial</Link>
        <TriangleUpIcon/>
        <img
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995140e8af655_Twitter.svg"
          alt=""
        />
        <TriangleUpIcon/>
        <img
          src="https://assets-global.website-files.com/6257f2528a39952d4e8af286/6257f2528a3995580a8af657_Vector.svg"
          alt=""
        />
      </div>
      <div className={styles.footerlast2}>
        <p>Copyright 2022 Memory AS</p>
      </div>
    </div>
  );
};

export default Footerlast;
