import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";

const App = () => {
  const { users, isLoading, isError, onClickHandler } = useAllUsers();

  return (
    <div className="text-center">
      <button
        type="button"
        className="mt-6 inline-block w-40 rounded-md  bg-blue-300 py-2  px-4 text-center text-white transition-colors hover:bg-blue-500"
        onClick={onClickHandler}
      >
        {isLoading ? (
          <div className="flex">
            <svg
              className="mr-4 h-5 w-5 animate-spin rounded-full border-2 border-gray-200 border-b-transparent "
              viewBox="0 0 24 24"
            />
            <span>取得中...</span>
          </div>
        ) : (
          <span>データ取得</span>
        )}
      </button>
      <ul className="my-10 grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-10 p-10">
        {isError && <p>データの取得に失敗しました</p>}
        {users.map((userItem) => (
          <UserCard key={userItem.id} user={userItem} />
        ))}
      </ul>
    </div>
  );
};

export default App;
