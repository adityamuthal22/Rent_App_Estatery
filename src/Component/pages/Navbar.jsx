import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Box className={styles.Navbar}>
      <Box className={styles.ImgLink}>
        <Image
          onClick={handleClick}
          src="https://www.brandbucket.com/sites/default/files/logo_uploads/239930/estatery_0.png"
          alt="estatery_logo"
        />
      </Box>
      <Box className={styles.AllButton}>
        <NavLink to="/">
          <Button>Rent</Button>
        </NavLink>
        <NavLink to="/favourite">
          <Button>Favourite_Page</Button>
        </NavLink>
        <NavLink to="/add_rent">
          <Button>Add_Rent_Property</Button>
        </NavLink>
      </Box>
      <Box className={styles.AllButton2}>
        <Button className={styles.LoginButton}>Login</Button>
        <Button bg={"#7064f2"} _hover="#7064f2">
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
