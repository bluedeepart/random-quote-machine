const Button = ({
  type,
  role = "button",
  children,
  click,
  randomColor,
}) => {
  return (
    <button
      type={type}
      role={role}
      onClick={click}
      className="px-6 py-3 rounded-md text-color-white cursor-pointer ml-2 first:ml-0"
      id="new-quote"
      style={{ backgroundColor: randomColor }}>
      {children}
    </button>
  );
};

export default Button;
