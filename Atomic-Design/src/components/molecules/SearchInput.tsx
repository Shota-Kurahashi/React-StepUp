import React from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => (
  <div className="space-x-4  pl-4">
    <Input type="text" placeholder="検索条件を入力" />
    <PrimaryButton type="submit">検索</PrimaryButton>
  </div>
);
