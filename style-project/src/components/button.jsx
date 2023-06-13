const Button = ({ clickAddButton, children }) => {
  return <button onClick={clickAddButton}>{children}</button>;
};

export default Button;
