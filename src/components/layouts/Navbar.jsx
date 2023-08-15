import { Link } from "react-router-dom";
import SearchBar from "../fragments/SearchBar";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";

const Navbar = () => {
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Movies", href: "/movie" },
    { name: "TV Show", href: "/tv-series" },
  ];
  return (
    <>
      <div className="w-full ">
        <img
          src="banner.jpg"
          alt=""
          className="object-cover w-full h-80 bg-blend-darken"
        />
      </div>
      <div className="fixed top-0 w-full right-0 bg-opacity-100 z-50">
        <Popover as="header">
          <div className="pt-2">
            <nav className="relative mx-auto flex max-w-[1244px] items-center justify-between px-8 md:px-12 xl:px-4">
              <div className="flex flex-1 items-center ">
                <div className="flex w-full items-center justify-end md:w-auto">
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="focus-ring-inset inline-flex items-center justify-center rounded-md bg-[#171717] bg-opacity-50 p-2 text-accent hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-accent">
                      <span className="sr-only">Open main menu</span>
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                {/*Desktop Navbar */}
                <div
                  id="nav"
                  className="mx-auto space-x-2.5 rounded-full px-2 py-1 hidden md:flex  bg-[#171717] bg-opacity-50">
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
                {/*End of Desktop Navbar */}
              </div>
            </nav>
          </div>
          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95">
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-20 origin-top transform p-2 transition md:hidden">
              <div className="overflow-hidden rounded-lg bg-primary shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="h-14 w-auto rounded-full"
                      src="logo.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-[#171717] bg-opacity-50 p-2 text-accent hover:bg-opacity-70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent" >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="relative z-20 pt-5 pb-6">
                  <div className="space-y-1 px-2">
                    <SearchBar classname="" />
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-secondary hover:bg-accent hover:text-primary ">
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
    </>
  );
};

export default Navbar;
