import React, { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "mt-2 bg-custom-orange text-black shadow-md font-bold text-sm py-2 px-2 rounded cursor-pointer",
}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
