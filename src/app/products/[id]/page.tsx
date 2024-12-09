"use client";

import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { productsData } from "../../../../data/product"; // Import productsData

const ProductPage = ({ params }: { params: Promise<{ id: string }> }) => {
  // Unwrap the params Promise
  const { id } = React.use(params);

  // Find the product by ID
  const product = productsData.find((product) => product.id === id);

  // Show a 404 page if the product is not found
  if (!product) {
    notFound();
  }

  // Select featured products (for example, first 5 products)
  const featuredProducts = productsData.slice(0, 5); // Adjust the number based on your needs

  return (
    <div className="max-w-[1200px] mx-auto px-4 py-8">
      {/* Main Product Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
        {/* Product Image */}
        <div className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          {/* Styled Price */}
          <p className="text-2xl font-bold text-teal-600">{product.price} USD</p>
          {/* Horizontal Line */}
          <hr className="border-gray-300 my-4" />
          <p className="text-gray-600 leading-relaxed">
            {product.description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing."}
          </p>
          <button className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-6 rounded-md transition">
            <Image src="/cart.png" alt="Cart Icon" width={20} height={20} />
            Add To Cart
          </button>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mt-16">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">FEATURED PRODUCTS</h2>
          <Link
            href="/products"
            className="text-teal-500 font-medium hover:underline"
          >
            View all
          </Link>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {featuredProducts.map((item) => (
            <Link key={item.id} href={`/products/${item.id}`} passHref>
              <div className="relative group rounded-lg overflow-hidden border border-gray-200 shadow-md hover:shadow-lg transition">
                {/* Label for New or Sale */}
                {(item.isNew || item.isOnSale) && (
                  <div
                    className={`absolute top-2 left-2 text-white text-xs px-2 py-1 rounded-md font-medium ${
                      item.isNew ? "bg-[#1DBF73]" : "bg-[#F97316]"
                    }`}
                  >
                    {item.isNew ? "New" : "Sale"}
                  </div>
                )}

                {/* Image Section */}
                <div className="relative w-full h-[250px] sm:h-[300px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>

                {/* Product Info Section */}
                <div className="flex justify-between items-center px-4 py-3 bg-white">
                  <div>
                    <p className="text-sm text-gray-700 group-hover:text-[#029FAE] transition cursor-pointer">
                      {item.title}
                    </p>
                    <p className="text-lg font-bold mt-1 group-hover:text-[#029FAE] transition cursor-pointer">
                      {item.price}
                      {item.oldPrice && (
                        <span className="line-through text-gray-400 ml-2 text-sm">
                          {item.oldPrice}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
