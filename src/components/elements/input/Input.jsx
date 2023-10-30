/* eslint-disable react/prop-types */

const Input = ({ type, placeholder, name, classname, value, onChange }) => {
  return (
    <input
      type={type}
      className={`text-sm rounded-l-lg w-full py-1 px-3 mr-2 text-primary placeholder:opacity-80 ${classname}`}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

Input.displayName = "Input";

export default Input;
