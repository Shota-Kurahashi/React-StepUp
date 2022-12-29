import { FC } from "react";
import { Link } from "react-router-dom";

export const Page2: FC = () => (
  <div className="text-xl font-bold">
    <h1>Page2</h1>
    <Link to="/page2/100" className="text-blue-500 underline">
      URL Parameter
    </Link>
  </div>
);
