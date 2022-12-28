import React, { FC } from "react";
import { Todo } from "../types/type";

type TodoProps = {
  todo: Todo;
};

export const TodoItem: FC<TodoProps> = ({ todo }) => (
  <li className="">
    <h3 className="inline-block  border-gray-200  px-4 text-xl font-bold">
      Title:{todo.title} ID:{todo.userId}
    </h3>
  </li>
);
