import { Link } from "react-router-dom";
import SearchBar from "../fragments/SearchBar";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movie" },
    { name: "TV Show", href: "/tv-series" },
  ];
  return (
    <div className="w-full ">
      <img src="banner.jpg" alt="" className="object-cover w-full h-80" />
      <div className="fixed top-0 w-full right-0 bg-opacity-100 z-50">
        <div className="pt-2">
          <nav className="relative mx-auto flex max-w-[1244px] items-center justify-between px-8 md:px-12 xl:px-4">
            <div className="flex flex-1 items-center ">
              <div
                id="nav"
                className="mx-auto space-x-2.5 rounded-full px-2 py-1 md:flex bg-[#171717] bg-opacity-50">
                <div className="absolute z-0"></div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    className="py-2 px-3 text-base text-secondary font-semibold leading-140 underline-offset-2 hover:opacity-70 hover:text-accent transition focus:text-accent focus:border-b border-accent"
                    to={item.href}>
                    {item.name}
                  </Link>
                ))}
                <SearchBar />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
