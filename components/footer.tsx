"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 text-gray-700 py-12 border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <div className="flex items-center mb-4">
            {/* Replace with your logo image */}
            <Image
              src="/Logo.png"
              alt="Comforty Logo"
              width={32}
              height={32}
              className="mr-2"
            />
            <h2 className="text-xl font-bold text-gray-900">Comforty</h2>
          </div>
          <p className="text-sm leading-relaxed">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <Link href="#">
              <Image src="/facebook.png" alt="Facebook" width={20} height={20} />
            </Link>
            <Link href="#">
              <Image src="/twitter.png" alt="Twitter" width={20} height={20} />
            </Link>
            <Link href="#">
              <Image src="/instagram.png" alt="Instagram" width={20} height={20} />
            </Link>
            <Link href="#">
              <Image src="/youtube.png" alt="YouTube" width={20} height={20} />
            </Link>
          </div>
        </div>

        {/* Category Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Category</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Sofa
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Armchair
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Wing Chair
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Desk Chair
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Wooden Chair
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Park Bench
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Help & Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Help
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l border border-gray-300 focus:outline-none"
            />
            <button className="bg-[#007580] text-white px-4 py-2 rounded-r hover:bg-teal-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-8 border-t border-gray-200 pt-6 flex justify-between items-center">
        {/* Footer Text Left-Aligned */}
        <div className="text-left text-sm text-gray-600">
          <p>
            &copy; 2021 - Blogy. Designed & Developed by{" "}
            <span className="font-semibold text-gray-900">Zakirsoft</span>
          </p>
        </div>

        {/* Payment Icons Right-Aligned */}
        <div className="flex space-x-4">
          <Image src="/paypal.png" alt="PayPal" width={40} height={20} />
          <Image src="/master.png" alt="MasterCard" width={40} height={20} />
          <Image src="/visa.png" alt="Visa" width={40} height={20} />
          <Image src="/american-express.png" alt="American Express" width={40} height={20} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
