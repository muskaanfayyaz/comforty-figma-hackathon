import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center w-full">
      <div className="bg-[#007580] text-white p-8 rounded-lg flex flex-col justify-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4">About Us - Comforty</h2>
        <p className="text-sm lg:text-base">
          At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
        </p>
        <button className="mt-6 px-6 py-2 bg-white text-[#007580] font-semibold rounded-lg shadow-md hover:bg-gray-100">
          View collection
        </button>
      </div>
      <div className="rounded-lg overflow-hidden">
        <Image
          src="/images/chair.png" // Replace with actual image path
          alt="Chair"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
