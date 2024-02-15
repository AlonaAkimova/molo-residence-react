"use client";
import React, { useState, FC } from "react";
import { useBreakfastOrderContext } from "@/store/BreakfastOrderProvider";
import { sendOrder } from "@/store";
import Button from "@/components/Button";
const Summary: FC = () => {
  const { breakfastOrder, setBreakfastOrder, loading } =
    useBreakfastOrderContext();
  const [orderSent, setOrderSent] = useState(false);

  function renderSummary() {
    const {
      selectedBreakfast,
      selectedHotDrink,
      selectedColdDrink,
      selectedNumberOfGuests,
      selectedExtras,
      selectedOptions,
      selectedDate,
      selectedTime,
      selectedRoom,
      additionalComments,
    } = breakfastOrder;

    const confirmOrder = async () => {
      const orderData = {
        breakfast: {
          name: selectedBreakfast?.name || "",
          description: selectedBreakfast?.description || "",
        },
        extras: {
          name: selectedExtras ? selectedExtras[0]?.name || "" : "",
          options: selectedOptions?.map((option) => option.name) || [],
        },
        hotDrink: selectedHotDrink,
        coldDrink: selectedColdDrink,
        guests: selectedNumberOfGuests,
        timestamp: new Date(),
        additionalComments: additionalComments,
      };

      try {
        const docRef = await sendOrder(orderData);

        console.log("Order successfully sent to Firebase: ", docRef.id);
        setOrderSent(true);
        setBreakfastOrder({
          selectedNumberOfGuests: 1,
          selectedBreakfast: null,
          selectedColdDrink: null,
          selectedHotDrink: null,
          selectedExtras: [],
          selectedOptions: [],
          selectedDate: null,
          selectedTime: null,
          selectedRoom: "",
          additionalComments: "",
        });
      } catch (error) {
        console.error("Error sending order to Firebase: ", error);
      }
    };
    return (
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-neutral-950 font-bold mb-6">Summary</h1>
          {loading ? (
            <div className="text-neutral-950 font-bold mb-6">Loading...</div>
          ) : (
            <>
              {selectedBreakfast && (
                <>
                  <p>
                    <span className="text-neutral-950 font-bold">
                      Breakfast name:
                    </span>{" "}
                    {selectedBreakfast.name}
                  </p>
                  <p>
                    <span className="text-neutral-950 font-bold">
                      Description:
                    </span>{" "}
                    {selectedBreakfast.description}
                  </p>
                  {selectedExtras && (
                    <p>
                      <span className="text-neutral-950 font-bold">
                        Selected Option:
                      </span>{" "}
                      {selectedExtras.map((extra) => (
                        <span key={extra.id}>
                          {extra.name}
                          {extra.options && extra.options.length > 0 && (
                            <>
                              {" "}
                              {selectedOptions
                                ? selectedOptions
                                    .map((option) => option.name)
                                    .join(", ")
                                : ""}
                            </>
                          )}
                        </span>
                      ))}
                    </p>
                  )}
                  {selectedHotDrink && (
                    <p>
                      <span className="text-neutral-950 font-bold">
                        Hot Drink:
                      </span>{" "}
                      {selectedHotDrink}
                    </p>
                  )}
                  {selectedColdDrink && (
                    <p>
                      <span className="text-neutral-950 font-bold">
                        Cold Drink:
                      </span>{" "}
                      {selectedColdDrink}
                    </p>
                  )}
                  <p>
                    <span className="text-neutral-950 font-bold">
                      Number of Guests:
                    </span>{" "}
                    {selectedNumberOfGuests}
                  </p>
                  <p>
                    <span className="text-neutral-950 font-bold">Room:</span>{" "}
                    {selectedRoom}
                  </p>
                  <p>
                    <span className="text-neutral-950 font-bold">
                      Comments:{" "}
                    </span>{" "}
                    {additionalComments}
                  </p>
                  <p>
                    <span className="text-neutral-950 font-bold">
                      Delivery Date:
                    </span>
                    {selectedDate}
                  </p>
                  <p>
                    <span className="text-neutral-950 font-bold">Time:</span>{" "}
                    {selectedTime}
                  </p>
                  <Button onClick={confirmOrder}>Confirm order</Button>
                </>
              )}
            </>
          )}

          {orderSent && <p>Your order was successfully sent!</p>}
          {!selectedBreakfast && !orderSent && (
            <p>No order details available.</p>
          )}
        </div>
      </div>
    );
  }

  return <>{renderSummary()}</>;
};
export default Summary;
