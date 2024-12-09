import Image from 'next/image';

const products = [
  {
    image: "/Large.png", // Replace with actual image path
    name: "The Poplar suede sofa",
    price: "$99.00",
  },
  {
    image: "/black-chair.png", // Replace with actual image path
    name: "The Dandy chair",
    price: "$99.00",
  },
  {
    image: "/trend-chair.png", // Replace with actual image path
    name: "The Dandy chair",
    price: "$99.00",
  },
];

export default function PopularProducts() {
  return (
    <section className="w-full">
      <h2 className="text-xl lg:text-2xl font-bold mb-8 text-center">Our Popular Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-[#007580] font-bold">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
