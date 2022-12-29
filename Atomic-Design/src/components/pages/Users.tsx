import React from "react";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { DefaultLayout } from "../templates/DefaultLayout";

export const Users = () => {
  const users = [...Array(10).keys()].map((val) => ({
    id: val,
    username: `じゃけぇ${val}`,
    avatarUrl: "https://source.unsplash.com/Qb7D1xw28Co",
    email: "12345@email.com",
    tel: "090-1234-5678",
    company: "テスト会社",
    url: "https://google.com",
  }));

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center py-10">
        <SearchInput />
        <ul className="grid w-full grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))] justify-around gap-10 p-10">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </DefaultLayout>
  );
};
