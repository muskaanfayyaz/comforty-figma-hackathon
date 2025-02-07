// ✅ Define the Product type
export type Product = {
    _id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
  
  // ✅ Utility function to safely get cart data
  const getCartData = (): Product[] => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("cart") || "[]");
    }
    return [];
  };
  
  // ✅ Add to Cart
  export const addToCart = (product: Product): void => {
    if (typeof window === "undefined") return; // Prevent SSR errors
  
    const cart: Product[] = getCartData();
  
    const existingItem = cart.find((item) => item._id === product._id);
    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // 🔥 Trigger a "storage" event to update UI
    window.dispatchEvent(new Event("storage"));
  };
  
  // ✅ Remove from Cart
  export const removeFromCart = (productId: string): void => {
    if (typeof window === "undefined") return;
  
    const cart: Product[] = getCartData().filter((item) => item._id !== productId); // ✅ Using const
  
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // 🔥 Trigger a "storage" event to update UI
    window.dispatchEvent(new Event("storage"));
  };
  
  // ✅ Get Cart Items
  export const getCartItems = (): Product[] => {
    return getCartData();
  };
  
  // ✅ Update Item Quantity in Cart
  export const updateCartItemQuantity = (productId: string, quantity: number): void => {
    if (typeof window === "undefined") return;
  
    const cart: Product[] = getCartData();
  
    const itemIndex = cart.findIndex((item) => item._id === productId);
    if (itemIndex !== -1) {
      cart[itemIndex].quantity = quantity > 0 ? quantity : 1;
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // 🔥 Trigger a "storage" event to update UI
    window.dispatchEvent(new Event("storage"));
  };
  
  // ✅ Clear Cart
  export const clearCart = (): void => {
    if (typeof window === "undefined") return;
  
    localStorage.removeItem("cart");
  
    // 🔥 Trigger a "storage" event to refresh UI
    window.dispatchEvent(new Event("storage"));
  };
  