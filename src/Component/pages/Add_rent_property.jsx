import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Image,
  Input,
  Select,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Navbar from "./Navbar";
import styles from "../styles/Add_rent.module.css";
import axios from "axios";

const Add_rent_property = () => {

  const [proptype, setProType] = useState('')
  const [name, setName] = useState('')
  const [image,setImage] = useState('')
  const [bedroom, setBedroom] = useState('')
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [area, setArea] = useState('')
  const [rent, setRent] = useState('')
  const [address, setAddress] = useState('')
  const toast = useToast();

  const handelAdd =(e)=>{
    e.preventDefault()
    console.log(proptype,name,bedroom,city,date,area,address)
    // console.log("I am Bhagesh")
    let payload={
      "propertyType":proptype,
      "houseName": name,
      "image":image,
      "noBedroom":bedroom,
      "city":city,
      "date":date,
      "areaOfHouse":area,
      "rent":Number(rent),
      "address":address
    }
    axios.post(`https://aditya97.onrender.com/api/rent_data`,payload)
    .then(() =>
    toast({
      title: "Added in Rent Property",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    })
  );
  }

  return (
    <Box>
      <Navbar />
      <Box className={styles.MainBox}
      >
        <Box>
          <Text className={styles.AddHead}>Add Rent Property On Estatery</Text>
          <Image
          h="450px"
            src="https://groups.commonfloor.com/blog/wp-content/uploads/2019/09/House-on-rent.jpg"
            alt="RentImage"
          />
        </Box>
        <Box className={styles.MainBox2}
        >
          <Text className={styles.Text1}>Add Property on Estatery....</Text>
          <Box>
            <form onSubmit={handelAdd}>
              <Box className={styles.Box1}>
                <Input
                  type="text"
                  placeholder="Enter your House Name"
                  onChange={(e)=>setName(e.target.value)}
                  required
                />
                <Select onChange={(e)=>setProType(e.target.value)}  required>
                  <option value={null}>Property Type</option>
                  <option value="Houses">Houses</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Builder Floor">Builder Floor</option>
                </Select>
              </Box>
              <Box className={styles.Box2}>
                <Input
                  type={"text"}
                  placeholder="Add Property Image URL"
                  onChange={(e)=>setImage(e.target.value)}
                  required
                />
              </Box>
              <Box className={styles.Box3}>
                <Select  onChange={(e)=> setBedroom(e.target.value)} required>
                  <option value={null}>Number Of Beds</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </Select>
                <Select onChange={(e)=> setCity(e.target.value)} required>
                  <option value={null}>Select Location</option>
                  <option value="Pune">Pune</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                </Select>
              </Box>
              <Box className={styles.Box4}>
                <Input onChange={(e)=> setDate(e.target.value)}  type={"date"} required />
                <Input type="number" onChange={(e)=> setArea(e.target.value)} placeholder="Type here Area " required />
                <Input onChange={(e)=> setRent(e.target.value)} type={"number"} placeholder="Type here Rent" required />
              </Box>
              <Box className={styles.Box4}>
                <Input
                  type={"text"}
                  placeholder="Enter Here Address"
                  onChange={(e)=> setAddress(e.target.value)}
                  required
                />
              </Box>
              <Box className={styles.Box5}>
                <Button type='submit'>Add Property</Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Add_rent_property;
