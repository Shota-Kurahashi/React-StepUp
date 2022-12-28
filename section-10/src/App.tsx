import axios from "axios";
import React, { useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { Todo } from "./types/type";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onClickFetchData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");

    setTodos((prevTodo) => [...prevTodo, ...res.data]);
  };

  return (
    <div className="mx-auto my-0 w-full p-10 ">
      <button
        type="button"
        onClick={onClickFetchData}
        className="w-72 max-w-full rounded-md border-white bg-sky-300 px-4 py-2 font-bold text-white transition-colors hover:bg-sky-400"
      >
        データ取得
      </button>
      <ul className="space-y-4 divide-y-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
