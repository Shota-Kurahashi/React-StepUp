import React from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { SearchInput } from "../molecules/SearchInput";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Top = () => (
  <DefaultLayout>
    <PrimaryButton type="button">Button</PrimaryButton>
    <SecondaryButton type="button">Button</SecondaryButton>
    <SearchInput />
  </DefaultLayout>
);
