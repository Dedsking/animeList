import Link from "next/link";
import ActionButton from "./ActionButton";
import InputSearch from "./InputSearch";

const Navbar = () => {
  return (
    <header className="bg-color-accent ">
      <div className="flex flex-col md:flex-row justify-between md:items-center p-4 gap-2">
        <Link href={"/"} className="font-bold text-2xl">
          Dedsking Anime
        </Link>
        <InputSearch />
        {/* <ActionButton /> */}
      </div>
    </header>
  );
};

export default Navbar;
