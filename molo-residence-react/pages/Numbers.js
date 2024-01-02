"use client";

import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Numbers() {
  const router = useRouter();

  const handleGoToBreakfastMenuClick = () => {
    router.push("/breakfast-list");
  };
  return (
    <div>
      <h1>How many persons?</h1>
      <p>
        <Button></Button>
        <p>1</p>
        <Button></Button>
        <Button onClick={handleGoToBreakfastMenuClick}>
          Go to breakfast menu
        </Button>
      </p>
    </div>
  );
}
