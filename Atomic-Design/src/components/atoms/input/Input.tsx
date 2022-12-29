import React, { FC } from "react";
import { InputType } from "../../../types/type";

export const Input: FC<InputType> = (props) => (
  <input {...props} className="rounded-full border border-blue-400 py-2 px-4" />
);
