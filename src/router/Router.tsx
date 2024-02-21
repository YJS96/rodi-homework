// import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Day01 from "../Homeworks/Day01";
import Day03 from "../Homeworks/Day03";
import MainPage from "../MainPage/MainPage";
import Day04 from "../Homeworks/Day04";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/day01" element={<Day01 />}></Route>
        <Route path="/day03" element={<Day03 />}></Route>
        <Route path="/day04" element={<Day04 />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
