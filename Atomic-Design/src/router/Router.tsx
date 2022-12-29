import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/Users" element={<Users />} />
    </Routes>
  </BrowserRouter>
);
