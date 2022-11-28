import { Box, Image, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "../styles/HomePage.module.css";
import axios from "axios";

const Favourite_page = () => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const getData = () => {
    axios
      .get(`https://aditya97.onrender.com/api/WishList`)
      .then((res) => setData(res.data));
    // .then((res)=>console.log(res.data))
  };

  useEffect(() => {
    getData();
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://aditya97.onrender.com/api/WishList/${id}`)
      .then(() => getData())
      .then(() =>
        toast({
          title: "Deleted Property Card",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        })
      );
  };

  return (
    <Box>
      <Navbar />
      <Box>
        <Box className={styles.HeadName}>
          <Text>Favourite Page</Text>
        </Box>
      </Box>
      <Box className={styles.MainDiv}>
        {data.map((el) => (
          <Box key={el.id} className={styles.AllDiv}>
            <Box>
              <Image className={styles.Image1} src={el.image} alt={el.image} />
            </Box>
            <Box className={styles.FirstBox1}>
              <Text display={"flex"} alignItems="center">
                <Text className={styles.Price1}>${el.rent}</Text>
                <Text className={styles.Month1}>/month</Text>
              </Text>
              <Box
                className={styles.DeleteIcon}
                onClick={() => handleDelete(el.id)}
              >
                <Image
                  className={styles.DeleteLogo}
                  src="https://www.shutterstock.com/image-vector/trash-can-delete-icon-on-600w-1725711202.jpg"
                  alt="HeratLogo"
                />
              </Box>
              <Box className={styles.heartBox}>
                <Image
                  className={styles.HeartLogo}
                  src="https://uxwing.com/wp-content/themes/uxwing/download/relationship-love/red-heart-icon.svg"
                  alt="HeratLogo"
                />
              </Box>
            </Box>
            <Box className={styles.HouseBox}>
              <Text className={styles.HouseName}>{el.houseName}</Text>
            </Box>
            <Box>
              <Text className={styles.PropertyType}>{el.propertyType}</Text>
            </Box>
            <Box>
              <Text className={styles.Address}>{el.address}</Text>
            </Box>
            <Box className={styles.LastBox}>
              <Box display={"flex"} alignItems="center">
                <Image
                  className={styles.BedLogo}
                  src="https://t4.ftcdn.net/jpg/02/77/19/21/360_F_277192157_0btAp9C8TbXPz7vHRBMbxhgoe7XiZtcQ.jpg"
                  alt="BedLogo"
                />
                <Text className={styles.Bedroom}>{el.noBedroom} Beds</Text>
              </Box>
              <Box display={"flex"} alignItems="center">
                <Image
                  className={styles.SquareLogo}
                  src="https://cdn-icons-png.flaticon.com/512/349/349686.png"
                  alt="BedLogo"
                />
                <Text className={styles.Bedroom}>
                  {" "}
                  {el.areaOfHouse} Sq.ft.Area
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Favourite_page;
