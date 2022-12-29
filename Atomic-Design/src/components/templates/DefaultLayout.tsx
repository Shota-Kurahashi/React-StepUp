import React, { FC, ReactNode } from "react";
import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/Header";

export const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => (
  <div className="min-h-screen">
    <Header />
    <main className="py-12">{children}</main>
    <Footer />
  </div>
);
