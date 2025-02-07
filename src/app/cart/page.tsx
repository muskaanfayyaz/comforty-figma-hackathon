"use client";

import React, { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import Image from "next/image";
import Link from "next/link";
import CheckoutButton from "../../../components/CheckoutButton";
import { getCartItems, removeFromCart as removeItemFromLocalStorage } from "../../../utils/cartUtils";
import { Product } from "../../../utils/cartUtils";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const { addToWishlist } = useWishlist();
  const [localCart, setLocalCart] = useState<Product[]>([]);

  useEffect(() => {
    setLocalCart(getCartItems()); // Load cart items from local storage

    const handleStorageChange = () => {
      setLocalCart(getCartItems());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleRemoveFromCart = (id: string) => {
    removeFromCart(id);
    removeItemFromLocalStorage(id);
    setLocalCart(getCartItems());
  };

  const combinedCart = cart.length > 0 ? cart : localCart;

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-6">Bag</h1>

        {combinedCart.length === 0 ? (
          <p className="text-gray-500">
            Your cart is empty.{" "}
            <Link href="/" className="text-blue-600">
              Continue Shopping
            </Link>
          </p>
        ) : (
          <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
            {combinedCart.map((item) => (
              <div key={item._id} className="flex flex-col md:flex-row items-center border-b pb-4 mb-4">
                <Image src={item.image} alt={item.title} width={80} height={80} className="rounded" />
                <div className="ml-4 flex-1 text-center md:text-left">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">Size: L</p>

                  <div className="flex items-center justify-center md:justify-start mt-2">
                    <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded" onClick={() => updateQuantity(item._id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                    <span className="mx-3">{item.quantity}</span>
                    <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded" onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
                  </div>
                </div>

                <p className="text-lg font-semibold">MRP: ${item.price * item.quantity}</p>

                <div className="ml-4 flex gap-3">
                  <button className="text-gray-500 hover:text-red-500" onClick={() => addToWishlist(item)}>❤️</button>
                  <button className="text-gray-500 hover:text-red-500" onClick={() => handleRemoveFromCart(item._id)}>🗑️</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {combinedCart.length > 0 && (
        <div className="w-full md:w-1/3 bg-white shadow-md rounded-lg p-6 mt-6 md:mt-0">
          <h2 className="text-2xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between text-gray-500 mb-2">
            <p>Subtotal</p>
            <p>${combinedCart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
          </div>
          <div className="flex justify-between text-gray-500 mb-4">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="flex justify-between text-lg font-bold mt-4">
            <p>Total</p>
            <p>${combinedCart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</p>
          </div>

          <div className="mt-6">
            <CheckoutButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
