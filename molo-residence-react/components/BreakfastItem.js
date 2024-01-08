"use client";
import React from "react";
import Button from "./Button";
export default function BreakfastItem({ item, onClick }) {
  return (
    <li key={item.id} className="mb-6">
      <div className="flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
        <p className="text-gray-700">{item.description}</p>
        <Button onClick={() => onClick(item)}>Select</Button>
      </div>
    </li>
  );
}
