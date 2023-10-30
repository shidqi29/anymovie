/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../elements/button/Button";
import Input from "../elements/input/Input";
import { RiSearch2Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ classname }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    query && navigate(`/search/${query}`);
    setQuery("");
  };

  return (
    <form
      className={`flex items-center justify-center ${classname}`}
      onSubmit={handleSubmit}>
      <Input
        placeholder="Search"
        name="search"
        type={"search"}
        classname="opacity-50 focus:opacity-70"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button classname=" mr-2" type="submit">
        {" "}
        <RiSearch2Line className="w-6 h-6 text-accent " />
      </Button>
    </form>
  );
};

export default SearchBar;
