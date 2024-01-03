"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Header from "@/pages/Header";
import { GuestListContext } from "./GuestListProvider";
export default function GuestNumber() {
  const { numberOfGuests, handleDecrease, handleIncrease } =
    useContext(GuestListContext);

  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">How many persons?</h1>
          <div className="flex items-center justify-center">
            <button
              onClick={handleDecrease}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 mr-2 font-bold text-xl"
            >
              -
            </button>
            <p className="text-lg">{numberOfGuests}</p>
            <button
              onClick={handleIncrease}
              className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 ml-2 font-bold text-xl"
            >
              +
            </button>
          </div>
          <Link href="/breakfast-list">
            <div className="mt-4 bg-custom-orange text-black shadow-md font-bold text-sm py-2 px-4 rounded cursor-pointer">
              Go to breakfast menu
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
