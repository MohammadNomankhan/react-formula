import SearchBar from "./SearchBar";

const Main = () => {
  return (
    <main className="flex flex-1 flex-col gap-4 justify-center items-center bg-orange-100 text-orange-500">
      <p className="text-6xl">Foogle</p>
      <SearchBar />
      <div className="flex gap-4">
        <button className="bg-violet-200 text-violet-400 py-2 px-3 rounded-md">
          Foogle Search
        </button>
        <button className="bg-violet-200 text-violet-400 py-2 px-3 rounded-md">
          Image Search
        </button>
      </div>
    </main>
  );
};

export default Main;
