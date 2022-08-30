import React from "react";
import { Routes, Route } from "react-router-dom";
 
import HomePage from "./Home";
import Login from "./Login";
import Project from "./Project";
import Sales from "./Sales";
import Signup from "./Signup";
 
import DayCalender from "../Components/calender/DayCalender";
import WeekCalender from "../Components/calender/WeekCalender";
import Calender from "../Components/calender/MonthCalender";
import RequiredAuth from "../HOC/RequiredAuth";
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/projects"
        element={
          <RequiredAuth>
            <Project />
          </RequiredAuth>
        }
      />

      <Route
        path="/day"
        element={
          <RequiredAuth>
            <DayCalender />
          </RequiredAuth>
        }
      />
      <Route
        path="/week"
        element={
          <RequiredAuth>
            <WeekCalender />
          </RequiredAuth>
        }
      />
      <Route
        path="/month"
        element={
          <RequiredAuth>
            <Calender />
          </RequiredAuth>
        }
      />
      <Route path="/sales" element={<Sales />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default MainRoutes;