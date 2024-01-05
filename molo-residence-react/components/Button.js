import React from "react";

export default function Button({
  onClick,
  children,
  className = "mt-2 bg-custom-orange text-black shadow-md font-bold text-sm py-2 px-2 rounded cursor-pointer",
}) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
