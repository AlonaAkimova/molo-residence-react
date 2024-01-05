"use client";

import React, { useState, useEffect } from "react";
import Header from "@/components/Header";
import { BREAKFAST_MENU } from "@/public/breakfasts";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";
import Button from "@/components/Button";
export default function BreakfastList() {
  const [menuData, setMenuData] = useState(BREAKFAST_MENU);
  const [loading, setLoading] = useState(false);
  const [selectedBreakfast, setSelectedBreakfast] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  useEffect(() => {}, []);

  function handleBreakfastClick(item) {
    setSelectedBreakfast(item);
    const openModal =
      item.name === "Breakfast as you like it" ||
      item.name === "Energy Breakfast";

    if (!openModal) {
      router.push("/drinks-menu");
    } else {
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
          <h1 className="text-2xl font-bold mb-6">
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
                    <Button onClick={() => handleBreakfastClick(item)}>
                      Select
                    </Button>
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
