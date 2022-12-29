import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { Page404 } from "../components/Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route
      path="/page1/*"
      element={
        <Routes>
          {page1Routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      }
    />
    <Route
      path="/page2/*"
      element={
        <Routes>
          {page2Routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      }
    />
    <Route path="*" element={<Page404 />} />
  </Routes>
);
