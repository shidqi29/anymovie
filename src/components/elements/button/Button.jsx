/* eslint-disable react/prop-types */

const Button = ({ children, classname, onClick = () => {}, type = "button",}) => {
    return (
      <button
        className={` rounded-md ${classname} `}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  