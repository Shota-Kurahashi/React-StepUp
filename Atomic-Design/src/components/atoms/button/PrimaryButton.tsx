import { FC } from "react";
import { Button } from "../../../types/type";

export const PrimaryButton: FC<Button> = ({ children, type }) => (
  <button type={type} className="btn btn-primary">
    {children}
  </button>
);
