import {CircleUser} from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-orange-200 text-orange-600">
      <div className="flex gap-4">
        <p>About</p>
        <p>Store</p>
      </div>
      <div className="flex gap-4">
        <p>Prefrences</p>
        <p>Account</p>
        <CircleUser />
      </div>
    </header>
  );
};

export default Header;
