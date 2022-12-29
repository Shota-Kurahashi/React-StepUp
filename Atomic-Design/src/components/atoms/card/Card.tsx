import React, { FC, ReactNode } from "react";

export const Card: FC<{ children: ReactNode }> = ({ children }) => (
  <div className=" w-full space-y-4 rounded-md border p-4 shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
    {children}
  </div>
);
