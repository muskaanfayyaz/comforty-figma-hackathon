"use client";

import Image from "next/image";

const products = [
  { id: 1, name: "Library Stool Chair", price: "$20", image: "/Image (3).png", badge: "New" },
  { id: 2, name: "Library Stool Chair", price: "$20", image: "/Image (2).png", badge: "Sale" },
  { id: 3, name: "Library Stool Chair", price: "$20", image: "/Image (1).png" },
  { id: 4, name: "Library Stool Chair", price: "$20", image: "/white-chair.png" },
  { id: 5, name: "Library Stool Chair", price: "$20", image: "/wing-chair.png", badge: "New"  },
  { id: 6, name: "Library Stool Chair", price: "$20", image: "/brown-chair.png", badge: "Sale" },
  { id: 7, name: "Library Stool Chair", price: "$20", image: "/green-chair.png" },
  { id: 8, name: "Library Stool Chair", price: "$20", image: "/Image (3).png" },
];

const ProductGrid = () => {
  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-16">
      <h2 className="text-2xl font-bold mb-4 sm:mb-6 text-[#272343] text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition"
          >
            {/* Badge */}
            {product.badge && (
              <div
                className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded-md font-medium ${
                  product.badge === "New" ? "bg-[#1DBF73]" : "bg-[#F97316]"
                }`}
              >
                {product.badge}
              </div>
            )}

            {/* Product Image */}
            <Image
              src={product.image}
              alt={product.name}
              width={300}
              height={300}
              className="object-cover w-full h-[250px] sm:h-[300px] transition-transform group-hover:scale-105"
            />

            {/* Product Info */}
            <div className="flex justify-between items-center px-4 py-3 bg-white">
              <div>
                <p className="text-sm text-gray-700 group-hover:text-[#029FAE] transition cursor-pointer">
                  {product.name}
                </p>
                <p className="text-lg font-bold mt-1 group-hover:text-[#029FAE] transition cursor-pointer">
                  {product.price}
                </p>
              </div>
              <div className="hover:bg-[#029FAE] bg-gray-200 p-2 rounded-full transition">
                <Image
                  src="/cart.png"
                  alt="Cart Icon"
                  width={20}
                  height={20}
                  className="text-white"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
