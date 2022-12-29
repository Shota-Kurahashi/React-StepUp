import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Header: FC = () => (
  <header className="fixed top-0 z-50 flex h-12 w-screen items-center justify-around bg-blue-200 text-white">
    <Link to="/">HOME</Link>
    <Link to="/users">USER</Link>
  </header>
);
