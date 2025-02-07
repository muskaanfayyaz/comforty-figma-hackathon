"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import Confetti from "react-confetti";

const SuccessPage = () => {
  const { clearCart } = useCart();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const hasClearedCart = useRef(false);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    if (sessionId && !hasClearedCart.current) {
      clearCart();
      hasClearedCart.current = true;
    }

    // Stop confetti after 5 seconds
    setTimeout(() => setShowConfetti(false), 5000);
  }, [sessionId, clearCart]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 to-blue-200">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl text-center max-w-lg w-full transform transition-all scale-100 hover:scale-105">
        <h1 className="text-3xl font-bold text-green-600 mb-4 animate-fadeIn">
          🎉 Thank You for Your Purchase! 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Your order has been successfully processed. A confirmation email will be sent shortly.
        </p>

        <div className="flex justify-center space-x-4">
          <Link
            href="/"
            className="bg-blue-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-600 transition-all"
          >
            🏡 Go Home
          </Link>
          <Link
            href="/cart"
            className="bg-gray-200 text-gray-700 px-6 py-3 rounded-full shadow-md hover:bg-gray-300 transition-all"
          >
            📦 View Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
