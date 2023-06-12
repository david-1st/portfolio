import Image from "next/image";
import Cube from "./Cube";

const Navbar = () => {
  return (
    <nav className="flex bg-gradient-to-r from-neutral-400 via-purple-200 to-red-200 w-full h-24 pl-3">
      <Cube />
    </nav>
  );
};

export default Navbar;
