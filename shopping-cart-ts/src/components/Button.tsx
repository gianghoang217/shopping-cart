import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button className={`bg-black text-white rounded px-3 py-2 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
