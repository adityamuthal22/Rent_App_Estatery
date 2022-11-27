import React from "react";
import { Route, Routes } from "react-router-dom";
import Add_rent_property from "./Add_rent_property";
import Favourite_page from "./Favourite_page";
import Home_page from "./Home_page";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="/favourite" element={<Favourite_page />} />
        <Route path="/add_rent" element={<Add_rent_property />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
