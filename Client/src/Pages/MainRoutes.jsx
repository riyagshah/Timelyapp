import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import HomePage from "./Home";
import Login from "./Login";
import Project from "./Project";
import Sales from "./Sales";
import Signup from "./Signup";
import AllCalender from "./AllCalender";
import DayCalender from "../Components/calender/DayCalender";
import WeekCalender from "../Components/calender/WeekCalender";
import Calender from "../Components/calender/MonthCalender";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<Project />} />
      {/* <Route path="/calenders" element={<AllCalender />} /> */}
      <Route path='/day' element={<DayCalender/>}/>
       <Route path='/week' element={<WeekCalender/>}/>
       <Route path='/month' element={<Calender/>}/>
      <Route path="/sales" element={<Sales />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRoutes;
