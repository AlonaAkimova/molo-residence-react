import React, { ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
  role?: string;
  label?: string;
}

const Button: React.FC<ButtonProps> = ({
  role,
  label,
  onClick,
  children,
  className = "mt-2 bg-custom-orange text-black shadow-md font-bold text-sm py-2 px-2 rounded cursor-pointer",
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      role={role}
      aria-label={label}
    >
      {children}
    </button>
  );
};

export default Button;
