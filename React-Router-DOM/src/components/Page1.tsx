import React, { FC } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Page1: FC = () => {
  const arr = [...Array(100).keys()];
  const navigation = useNavigate();

  const onClickDetailA = () => navigation("/page1/detailA", { state: arr });

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
      <br />
      <button type="button" onClick={onClickDetailA}>
        DetailAへ
      </button>
    </div>
  );
};
