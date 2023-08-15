/* eslint-disable react/prop-types */

const Button = ({ children, classname, onClick = () => {}, type = "button",}) => {
    return (
      <button
        className={`font-semibold rounded-md ${classname} text-white`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  