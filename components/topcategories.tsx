"use client";

import Image from "next/image";
import Link from "next/link";

const TopCategories = () => {
  const categories = [
    { name: "wing-chair", products: 3584 },
    { name: "wooden-chair", products: 157 },
    { name: "desk-chair", products: 154 },
  ];

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 py-8 sm:py-16">
      <h2 className="text-2xl font-bold mb-4 sm:mb-6 text-[#272343]">Top Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories.map((category, index) => (
          <Link
            key={index}
            href={`/categories/${category.name}`} // Dynamic routing to `/categories/[category]`
          >
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <Image
                src={`/${category.name}.png`}
                alt={category.name.replace("-", " ")}
                width={400}
                height={300}
                className="object-cover w-full h-[250px] sm:h-[300px] group-hover:scale-105 transition-transform"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white">
                <p className="text-lg font-medium capitalize">
                  {category.name.replace("-", " ")}
                </p>
                <p className="text-sm">
                  {category.products.toLocaleString()} Products
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TopCategories;
