import "./App.css";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import { Routes, Route } from "react-router-dom";
import HikingScreen from "./screens/HikingScreen";
import HospitalScreen from "./screens/HospitalScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import TransportationScreen from "./screens/TransportationScreen";
import ShoppingScreen from "./screens/ShoppingScreen";
import GymScreen from "./screens/GymScreen";

const data = [
  {
    name: "Popular Restaurants",
    id: "Restaurants",
    link: "/Restaurants",
  },
  {
    name: "Popular Hiking Trails",
    id: "Hikes",
    link: "/Hikes",
  },
  {
    name: "Hospitals/Clinics",
    id: "Clinics",
    link: "/Clinics",
  },
  {
    name: "Transportation",
    id: "Transportation",
    link: "/Transportation",
  },
  {
    name: "Shopping",
    id: "Shopping",
    link: "/Shopping",
  },
  {
    name: "Gyms",
    id: "Gyms",
    link: "/Gyms",
  },
];

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen data={data} />} />
      <Route path="/Restaurants" element={<RestaurantScreen />} />
      <Route path="/Hikes" element={<HikingScreen />} />
      <Route path="/Clinics" element={<HospitalScreen />} />
      <Route path="/Transportation" element={<TransportationScreen />} />
      <Route path="/Shopping" element={<ShoppingScreen />} />
      <Route path="/Gyms" element={<GymScreen />} />
    </Routes>
  );
};

export default App;
