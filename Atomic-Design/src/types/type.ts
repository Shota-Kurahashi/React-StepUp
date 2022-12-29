import { ButtonHTMLAttributes, HTMLInputTypeAttribute, ReactNode } from "react";

export type Button = {
  children: ReactNode;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

export type InputType = {
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
};

export type User = {
  id: number;
  avatarUrl: string;
  username: string;
  email: string;
  tel: string;
  company: string;
  url: string;
};

export type UserType = {
  user: User;
};

export type UserIconType = {
  avatarUrl: string;
  username: string;
};
