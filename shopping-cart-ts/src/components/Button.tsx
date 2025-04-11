interface ButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
  className?: string;
}
function Button(props: ButtonProps) {
  return <button onClick={props.handleClick}>{props.children}</button>;
}

export default Button;
