import Button from "../elements/button/Button";
import Input from "../elements/input/Input";
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = () => {
  return (
    <form className="flex items-center justify-center">
      <Input placeholder="Search" name="search" type={"search"} classname="opacity-30 focus:opacity-90"></Input>
      <Button classname=" mr-2">
        {" "}
        <RiSearch2Line className="w-6 h-6 text-accent " />
      </Button>
    </form>
  );
};

export default SearchBar;
