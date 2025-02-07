"use client";

import { useEffect, useState } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { useCart } from "../src/context/CartContext";

const CheckoutButton: React.FC = () => {
  const { cart, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [stripe, setStripe] = useState<Stripe | null>(null);

  useEffect(() => {
    const initStripe = async () => {
      const stripeInstance = await loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
      );
      setStripe(stripeInstance);
    };
    initStripe();
  }, []);

  const handleCheckout = async () => {
    if (!stripe) {
      console.error("❌ Stripe is not loaded yet.");
      return;
    }

    if (cart.length === 0) {
      alert("🛒 Your cart is empty!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const session = await response.json();
      if (session?.url) {
        console.log("🔄 Redirecting to Stripe checkout...");
        window.location.href = session.url;
        clearCart();
      } else {
        console.error("❌ Failed to create Stripe session", session);
      }
    } catch (error) {
      console.error("❌ Checkout failed:", error);
      alert("⚠️ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading || !stripe}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all disabled:opacity-50"
    >
      {loading ? "Processing..." : "Checkout"}
    </button>
  );
};

export default CheckoutButton;
