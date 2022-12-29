import axios from "axios";
import { useState } from "react";
import { User } from "../types/api/user";
import { UserProfile } from "../types/userProfile";

export const useAllUsers = () => {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onClickHandler = async (): Promise<void> => {
    setIsLoading(true);
    const { data, status } = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (status !== 200) {
      setIsError(true);

      return;
    }

    setIsLoading(false);
    const usersData = data.map((userItem) => ({
      id: userItem.id,
      name: userItem.name,
      username: `${userItem.name}(${userItem.username})`,
      email: userItem.email,
      address: `${userItem.address.city}${userItem.address.suite}${userItem.address.street}`,
    }));

    setUsers(usersData);
  };

  return { users, isLoading, isError, onClickHandler };
};
