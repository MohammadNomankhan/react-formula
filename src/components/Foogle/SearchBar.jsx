import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="rounded-full bg-orange-200 border border-orange-300 p-4 w-96 flex items-center gap-2 hover:brightness-95">
      <Search />
      <input className="flex-1 bg-inherit outline-none" />
    </div>
  );
};

export default SearchBar;
