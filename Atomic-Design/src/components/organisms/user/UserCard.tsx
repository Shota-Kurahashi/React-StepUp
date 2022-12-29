import React, { FC } from "react";
import { UserType } from "../../../types/type";
import { Card } from "../../atoms/card/Card";
import { UserIcon } from "../../molecules/user/UserIcon";

export const UserCard: FC<UserType> = ({ user }) => (
  <Card>
    <UserIcon avatarUrl={user.avatarUrl} username={user.username} />
    <div className="space-y-4">
      <dl className="space-y-2">
        <dt className="float-left">メール</dt>
        <dd className="pl-16 text-center  tracking-wider">{user.email}</dd>
        <dt className="float-left">TEL</dt>
        <dd className="pl-16 text-center  tracking-wider">{user.tel}</dd>
        <dt className="float-left">会社名</dt>
        <dd className="pl-16 text-center  tracking-wider">{user.company}</dd>
        <dt className="float-left">WEB</dt>
        <dd className="pl-16 text-center  tracking-wider">
          <a href={user.url}>{user.url}</a>
        </dd>
      </dl>
    </div>
  </Card>
);
