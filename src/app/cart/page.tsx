import Image from "next/image";

const BagPage = () => {
  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      variant: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/Image (1).png", // Ensure correct image path
    },
    {
      id: 2,
      name: "Library Stool Chair",
      variant: "Ashen Slate/Cobalt Bliss",
      size: "L",
      quantity: 1,
      price: 99,
      image: "/brown-chair.png", // Ensure correct image path
    },
  ];

  const subtotal = products.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col lg:flex-row p-6 gap-8">
      {/* Bag Section */}
      <div className="w-full lg:w-2/3">
        <h1 className="text-2xl font-semibold mb-4">Bag</h1>
        {products.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center border-b py-6 gap-6"
          >
            {/* Product Image */}
            <div className="w-28 h-28 relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-md"
              />
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <h2 className="text-lg font-medium">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.variant}</p>
              <p className="text-sm text-gray-600 mt-2">
                Size: <span className="font-semibold">{item.size}</span> | Quantity:{" "}
                <span className="font-semibold">{item.quantity}</span>
              </p>

              {/* Favorite and Bin Icons */}
              <div className="flex gap-6 mt-4">
                {/* Favorite Icon */}
                <Image
                  src="/Frame.png" // Heart icon
                  alt="Favorite"
                  width={20}
                  height={20}
                  className="cursor-pointer hover:opacity-80"
                />

                {/* Bin Icon */}
                <Image
                  src="/bin.png" // Trash icon with updated path
                  alt="Delete"
                  width={20}
                  height={20}
                  className="cursor-pointer hover:opacity-80"
                />
              </div>
            </div>

            {/* Price */}
            <div className="text-lg font-semibold text-gray-900">
              MRP: ${item.price}
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="w-full lg:w-1/3 border p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Summary</h2>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600 mb-2">
          <span>Estimated Delivery & Handling</span>
          <span>Free</span>
        </div>
        <hr className="my-4" />
        <div className="flex justify-between font-semibold text-lg">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <button className="w-full mt-4 bg-[#007580] text-white py-2 rounded-full hover:bg-opacity-90">
          Member Checkout
        </button>
      </div>
    </div>
  );
};

export default BagPage;
