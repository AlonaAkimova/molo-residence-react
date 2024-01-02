import React from "react";
import { useNavigation } from "next/navigation";
export default function Button({ children, href, className }) {
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate(href);
  };
  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
