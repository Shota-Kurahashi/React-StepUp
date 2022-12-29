import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Page1: FC = () => (
  <div className="text-center">
    <h1 className="text-xl font-bold">Page1</h1>
    <Link to="/page1/detailA" className="text-red-400">
      DetailA
    </Link>
    <br />
    <Link to="/page1/detailB" className="text-red-400">
      DetailB
    </Link>
  </div>
);
