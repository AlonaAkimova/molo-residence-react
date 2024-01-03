"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { fetchMenuData } from "@/components/MenuData";

export default function BreakfastList() {
  const [menuData, setMenuData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMenuData()
      .then((menu) => {
        setMenuData(menu);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching menu data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center min-h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg">
          <h1 className="text-4xl font-bold mb-8">
            Which breakfast do you prefer?
          </h1>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {menuData.map((item) => (
                <li key={item.id} className="mb-6">
                  <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
