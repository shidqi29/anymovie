/* eslint-disable react/prop-types */
import Button from "../elements/button/Button";
import Input from "../elements/input/Input";
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = ({classname}) => {
  return (
    <form className={`flex items-center justify-center ${classname}`}>
      <Input placeholder="Search" name="search" type={"search"} classname="opacity-50 focus:opacity-70"></Input>
      <Button classname=" mr-2">
        {" "}
        <RiSearch2Line className="w-6 h-6 text-accent " />
      </Button>
    </form>
  );
};

export default SearchBar;
