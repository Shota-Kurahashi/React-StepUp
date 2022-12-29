import React, { FC } from "react";
import { UserIconType } from "../../../types/type";

export const UserIcon: FC<UserIconType> = ({ avatarUrl, username }) => (
  <div className="space-y-4">
    <figure className="relative overflow-hidden pt-[56.25%]">
      <img
        src={avatarUrl}
        alt=""
        className="absolute top-1/2 left-1/2 aspect-video h-32 max-h-full w-32 max-w-full -translate-y-1/2 -translate-x-1/2 rounded-full border object-cover "
      />
    </figure>
    <h2 className="text-center text-base font-bold">{username}</h2>
  </div>
);
