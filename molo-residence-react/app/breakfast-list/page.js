"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { BREAKFAST_MENU } from "@/public/breakfasts";
import Modal from "@/components/Modal";
export default function BreakfastList() {
  const [menuData, setMenuData] = useState(BREAKFAST_MENU);
  const [loading, setLoading] = useState(false);
  const [selectedBreakfast, setSelectedBreakfast] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {}, []);

  function handleBreakfastClick(item) {
    setSelectedBreakfast(item);
    if (
      item.name === "Breakfast as you like it" ||
      item.name === "Energy Breakfast"
    ) {
      setShowModal(true);
    }
  }
  const closeModal = () => {
    setShowModal(false);
    setSelectedBreakfast(null);
  };
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
                    <button
                      onClick={() => handleBreakfastClick(item)}
                      className="mt-4 bg-custom-orange text-black shadow-md font-bold text-sm py-2 px-3 rounded cursor-pointer"
                    >
                      Select
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          {showModal && (
            <Modal
              selectedBreakfast={selectedBreakfast}
              closeModal={closeModal}
            />
          )}
        </div>
      </div>
    </>
  );
}
