import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  return (
    <div className="text-center text-xl font-bold">
      <h2>URL Parameter</h2>
      <p>パラメーターは{id}です</p>
      <p>クエリパラメーターは{query.get("name")}</p>
    </div>
  );
};
