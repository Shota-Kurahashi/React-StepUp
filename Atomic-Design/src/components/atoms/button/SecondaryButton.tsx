import { FC } from "react";
import { Button } from "../../../types/type";

export const SecondaryButton: FC<Button> = ({ children, type }) => (
  <button type={type} className="btn btn-secondary">
    {children}
  </button>
);
