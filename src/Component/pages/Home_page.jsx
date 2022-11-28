import {
  Box,
  Button,
  Divider,
  Image,
  Input,
  MenuItemOption,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import styles from "../styles/HomePage.module.css";
import axios from "axios";

const Home_page = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const toast = useToast();

  const [date, setDate] = useState("");
  const [minPrice, setminPrice] = useState();
  const [maxPrice, setmaxPrice] = useState();
  const [data11, setData11] = useState([]);
  const [data22, setData22] = useState([]);
  let AllData;
  //  console.log(search);

  const getData = () => {
    axios
      .get(`https://aditya97.onrender.com/api/rent_data?q=${search}`)
      .then((res) => setData(res.data));
    //  .then((res)=>console.log(res.data))
  };

  useEffect(() => {
    getData(search);
  }, [search]);

  const handleLocation = (e) => {
    let val = e.target.value;
    console.log(data);
    AllData = data.filter((el) => el.city == val);
  };

  // Date Filter Function
  const handleDate = (e) => {
    let val = e.target.value;
    setDate(e.target.value);
    let arr = [];
    console.log(AllData);
    if (AllData) {
      AllData.map((el) => {
        let date1 = new Date(val) - new Date(el.date);
        // console.log(date1)
        if (date1 >= 0) {
          // console.log(el)
          arr.push(el);
        }
      });
    } else {
      data.map((el) => {
        let date1 = new Date(val) - new Date(el.date);
        // console.log(date1)
        if (date1 >= 0) {
          // console.log(el)
          arr.push(el);
        }
      });
    }
    console.log("arr", arr);
    setData11(arr);
  };
  console.log("Data11", data11);

  // Property Type Filter Function
  const handlePropertyType = (e) => {
    let val = e.target.value;
    console.log("11", data11);
    let pro = data11.filter((el) => el.propertyType == val);
    // console.log(pro)
    setData22(pro);
  };
  console.log("Data22", data22);

  // Min and Max Price Filter Function
  const handleFilter = () => {
    // console.log(maxPrice)
    let price = [];
    data22.map((el) => {
      if (el.rent > minPrice && el.rent < maxPrice) {
        // console.log(el)
        price.push(el);
      }
    });
    setData(price);
  };

  const handleWish = (el) => {
    axios.post(`https://aditya97.onrender.com/api/WishList`, el).then(() =>
      toast({
        title: "Adate1ed in WishList Page",
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

      <Box className={styles.Navbar1}>
        <Text fontSize={"4xl"} as="b">
          Search properties to rent
        </Text>
        <Input
          placeholder="Search with Search Bar"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Box className={styles.Navbar2}>
        <Select className={styles.Filter1} onChange={handleLocation}>
          <option value={null}>Location</option>
          <option value="Pune">Pune</option>
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
        </Select>
        <Divider height="50px" orientation="vertical" />
        <Input
          placeholder="Select Move-in-Date"
          className={styles.Date}
          type={"date"}
          data-date=""
          data-date-format="date1 MMMM YYYY"
          onChange={handleDate}
          min={Date.now()}
          max="2023-01-28"
        />
        <Divider height="50px" orientation="vertical" />

        <Box className={styles.priceDiv}>
          <Text>Price</Text>
          <Input
            type="number"
            placeholder="Min"
            required
            onChange={(e) => setminPrice(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Max"
            required
            onChange={(e) => setmaxPrice(e.target.value)}
          />
        </Box>
        <Divider height="50px" orientation="vertical" />
        <Select className={styles.Filter2} onChange={handlePropertyType}>
          <option value={null}>Property Type</option>
          <option value="Houses">Houses</option>
          <option value="Apartment">Apartment</option>
          <option value="Builder Floor">Builder Floor</option>
        </Select>
        <Divider height="50px" orientation="vertical" />
        <Button
          className={styles.Button2}
          bg="#3470e4"
          _hover={"#3470e4"}
          onClick={handleFilter}
        >
          Search
        </Button>
      </Box>
      <Box>
        {data.length > 0 ? (
          <Box className={styles.MainDiv}>
            {data.map((el) => (
              <Box key={el.id} className={styles.AllDiv}>
                <Box>
                  <Image
                    className={styles.Image1}
                    src={el.image}
                    alt={el.image}
                  />
                </Box>
                <Box className={styles.FirstBox1}>
                  <Text display={"flex"} alignItems="center">
                    <Text className={styles.Price1}>${el.rent}</Text>
                    <Text className={styles.Month1}>/month</Text>
                  </Text>
                  <Box className={styles.heartBox}>
                    <Image
                      className={styles.HeartLogo}
                      src="https://i.pinimg.com/originals/b6/a6/98/b6a6987d9b35c0632725e90e2e9b5d0d.png"
                      alt="HeratLogo"
                      onClick={() => handleWish(el)}
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
                  <Text className={styles.Adate1ress}>{el.adate1ress}</Text>
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
        ) : (
          <Box className={styles.PageNotFound}>
            <Image
              className={styles.PageNotFoundImage}
              src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif"
              alt="dataNotFoundImg"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home_page;
