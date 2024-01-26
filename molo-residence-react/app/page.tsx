"use client";
import React from "react";
import Header from "@/components/Header";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Breakfast in bed</h1>
          <p className="text-lg">
            Try our delicious breakfast served straight to your room
          </p>
          <Link href="/guest-list">
            <div className="mt-4 bg-custom-orange text-black shadow-md font-bold text-sm py-2 px-3 rounded cursor-pointer">
              Order breakfast
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
