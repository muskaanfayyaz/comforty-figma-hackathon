"use client";

import Image from "next/image";
import Link from "next/link";

const FeaturedProducts = () => {
  const products = [
    { id: 1, image: "/Image (3).png", label: "New", price: "$20" },
    { id: 2, image: "/Image (2).png", label: "Sales", price: "$20", oldPrice: "$30" },
    { id: 3, image: "/Image (1).png", price: "$20" },
    { id: 4, image: "/Image.png", price: "$20" },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-16">
      <h2 className="text-2xl font-bold mb-4 sm:mb-6 text-[#272343]">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative group rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition"
          >
            {product.label && (
              <div
                className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded-md font-medium ${
                  product.label === "New" ? "bg-[#1DBF73]" : "bg-[#F97316]"
                }`}
              >
                {product.label}
              </div>
            )}
            <Link href="/cart">
              <Image
                src={product.image}
                alt="Product Image"
                width={300}
                height={300}
                className="object-cover w-full h-[250px] sm:h-[300px] transition-transform group-hover:scale-105"
              />
            </Link>
            <div className="flex justify-between items-center px-4 py-3 bg-white">
              <div>
                <p className="text-sm text-gray-700 group-hover:text-[#029FAE] transition cursor-pointer">
                  Library Stool Chair
                </p>
                <p className="text-lg font-bold mt-1 group-hover:text-[#029FAE] transition cursor-pointer">
                  {product.price}
                  {product.oldPrice && (
                    <span className="line-through text-gray-400 ml-2 text-sm">
                      {product.oldPrice}
                    </span>
                  )}
                </p>
              </div>
              <Link href="/cart">
                <div className="hover:bg-[#029FAE] bg-gray-200 p-2 rounded-full transition">
                  <Image
                    src="/cart.png"
                    alt="Cart Icon"
                    width={20}
                    height={20}
                    className="text-white"
                  />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
