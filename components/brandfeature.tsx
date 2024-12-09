import Image from 'next/image';

const features = [
  {
    image: "/images/delivery.png", // Replace with the actual path to your image
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard.",
  },
  {
    image: "/images/artisan.png", // Replace with the actual path to your image
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship.",
  },
  {
    image: "/images/price.png", // Replace with the actual path to your image
    title: "Unbeatable prices",
    description: "For our materials and quality, you won’t find better prices anywhere.",
  },
  {
    image: "/images/recycled.png", // Replace with the actual path to your image
    title: "Recycled packaging",
    description: "We use 100% recycled to ensure our footprint is more manageable.",
  },
];

export default function BrandFeatures() {
  return (
    <section className="text-center w-full">
      <h2 className="text-xl lg:text-2xl font-bold mb-8">What Makes Our Brand Different</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg flex flex-col items-center"
          >
            <div className="mb-4">
              <Image
                src={feature.image}
                alt={feature.title}
                width={64}
                height={64}
                className="rounded-full"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
