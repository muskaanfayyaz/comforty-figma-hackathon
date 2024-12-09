import Image from 'next/image';

const products = [
  {
    image: "/Large.png", // Replace with actual image path
    name: "The Poplar suede sofa",
    price: "$99.00",
    width: 630,
    height: 375,
  },
  {
    image: "/black-chair.png", // Replace with actual image path
    name: "The Dandy chair",
    price: "$99.00",
    width: 305,
    height: 375,
  },
  {
    image: "/trend-chair.png", // Replace with actual image path
    name: "The Dandy chair",
    price: "$99.00",
    width: 305,
    height: 375,
  },
];

export default function PopularProducts() {
  return (
    <section className="w-full px-4 py-8">
      {/* Heading */}
      <h2 className="text-2xl lg:text-3xl text-gray-900 mb-8 font-semibold text-center">
        Our Popular Products
      </h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm flex flex-col">
            {/* Image */}
            <div className="w-full h-96 flex-grow">
              <Image
                src={product.image}
                alt={product.name}
                width={product.width}
                height={product.height}
                className="object-cover w-full h-full" // Ensure full coverage and same height for all images
              />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <h3 className="text-base text-gray-800">{product.name}</h3>
              <p className="text-[#007580] font-medium mt-2">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
