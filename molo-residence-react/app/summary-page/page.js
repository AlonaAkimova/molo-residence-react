import React from "react";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
export default function Summary() {
  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <h1>Summary</h1>
      </div>
    </>
  );
}
