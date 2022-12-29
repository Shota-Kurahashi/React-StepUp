import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Page1: FC = () => {
  const arr = [...Array(100).keys()];

  return (
    <div className="text-center">
      <h1 className="text-xl font-bold">Page1</h1>
      <Link
        to={{ pathname: "/page1/detailA" }}
        state={arr}
        className="text-red-400"
      >
        DetailA
      </Link>
      <br />
      <Link to="/page1/detailB" className="text-red-400">
        DetailB
      </Link>
    </div>
  );
};
