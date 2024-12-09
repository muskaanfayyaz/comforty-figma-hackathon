import Image from 'next/image';

const features = [
  {
    image: "/Delivery.png", // Replace with the actual path to your image
    title: "Next day as standard",
    description: "Order before 3pm and get your order the next day as standard.",
  },
  {
    image: "/Checkmark--outline.png", // Replace with the actual path to your image
    title: "Made by true artisans",
    description: "Handmade crafted goods made with real passion and craftsmanship.",
  },
  {
    image: "/Purchase.png", // Replace with the actual path to your image
    title: "Unbeatable prices",
    description: "For our materials and quality, you won’t find better prices anywhere.",
  },
  {
    image: "/Sprout.png", // Replace with the actual path to your image
    title: "Recycled packaging",
    description: "We use 100% recycled to ensure our footprint is more manageable.",
  },
];

export default function BrandFeatures() {
  return (
    <section className="text-center w-full px-4 py-12">
      {/* Heading */}
      <h2 className="text-2xl lg:text-3xl text-gray-800 mb-10">
        What Makes Our Brand Different
      </h2>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 rounded-lg shadow-sm flex flex-col items-start"
          >
            {/* Icon */}
            <div className="mb-4">
              <Image
                src={feature.image}
                alt={feature.title}
                width={24} // Icon width
                height={24} // Icon height
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-lg text-[#007580] mb-2">
              {feature.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-[#007580] leading-relaxed text-left">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
