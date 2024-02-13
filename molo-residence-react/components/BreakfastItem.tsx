"use client";
import React, { FC } from "react";
import Button from "./Button";

interface BreakfastItemProps {
  breakfast: {
    id: number;
    name: string;
    description: string;
  };
  onClick: (breakfast: {
    id: number;
    name: string;
    description: string;
  }) => void;
}

const BreakfastItem: FC<BreakfastItemProps> = ({ breakfast, onClick }) => {
  return (
    <li key={breakfast.id} className="mb-6">
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">{breakfast.name}</h3>
        <p className="text-gray-700">{breakfast.description}</p>
        <Button
          role="button"
          aria-label="Select"
          onClick={() => onClick(breakfast)}
        >
          Select
        </Button>
      </div>
    </li>
  );
};
BreakfastItem.displayName = "BreakfastItem";
export default BreakfastItem;
