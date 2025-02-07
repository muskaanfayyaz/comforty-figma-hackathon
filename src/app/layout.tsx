import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { CartProvider } from "../context/CartContext";
import { WishlistProvider } from "../context/WishlistContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="antialiased">
          <CartProvider>
            <WishlistProvider>
              <Header />
              {children}
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
