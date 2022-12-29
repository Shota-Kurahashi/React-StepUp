import React, { FC } from "react";
import { UserProfile } from "../types/userProfile";

type Props = {
  user: UserProfile;
};

export const UserCard: FC<Props> = ({ user }) => (
  <div className="cursor-pointer rounded-md border border-blue-300 p-6 shadow-md transition-shadow hover:shadow-xl">
    <p>
      <span>名前</span>
      <span>{user.name}</span>
    </p>
    <p>
      <span>メール</span>
      <span>{user.email}</span>
    </p>
    <p>
      <span>住所</span>
      <span>{user.address}</span>
    </p>
  </div>
);
