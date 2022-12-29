import React from "react";
import { Link } from "react-router-dom";

export const Page404 = () => (
  <div>
    <h1>ページが見つかりません</h1>
    <Link to="/">TOPに戻る</Link>
  </div>
);
