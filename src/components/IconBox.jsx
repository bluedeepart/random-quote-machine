const IconBox = ({ link,target,id, randomColor, children }) => {
  return (
    <a
      href={link}
      target={target}
      id={id}
      className="p-4 rounded-md text-color-white ml-2 first:ml-0 inline-block"
      style={{ backgroundColor: randomColor }}>
      {children}
    </a>
  );
};

export default IconBox;
