"use client";
import Button from "@/pages/Button";
import Header from "@/pages/Header";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleOrderClick = () => {
    router.push("/numbers");
  };
  return (
    <>
      <Header />
      <div className="bg-breakfast-background bg-cover bg-center h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4">Breakfast in bed</h1>
          <p className="text-lg">
            Try our delicious breakfast served straight to your room
          </p>
          <Button
            href="/numbers"
            className="mt-4 bg-custom-orange text-black shadow-md font-bold text-sm py-2 px-4 rounded"
          >
            Order breakfast
          </Button>
        </div>
      </div>
    </>
  );
}
