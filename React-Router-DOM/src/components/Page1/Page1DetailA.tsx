import React from "react";
import { useNavigate } from "react-router-dom";

export const Page1DetailA = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Page1DetailA</h1>
      <button type="button" onClick={() => navigate("/page1")}>
        戻る
      </button>
    </div>
  );
};
