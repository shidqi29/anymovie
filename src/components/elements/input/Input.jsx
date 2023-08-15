/* eslint-disable react/prop-types */

const Input = ({ type, placeholder, name, classname }) => {
  return (
    <input
      type={type}
      className={`text-sm rounded-l-lg w-full py-1 px-3 mr-2 text-primary placeholder:opacity-80 ${classname}`}
      placeholder={placeholder}
      name={name}
    />
  );
};

Input.displayName = "Input";

export default Input;
