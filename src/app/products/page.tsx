"use client";

import React from "react";
import ProductCard from "../../../components/productcard";
import NewsletterSubscription from "../../../components/newslettersubscription";
import { productsData } from "../../../data/product";

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            oldPrice={product.oldPrice} // Pass oldPrice
            isNew={product.isNew}
            isOnSale={product.isOnSale}
          />
        ))}
      </div>
      {/* Add Newsletter Subscription Section */}
      <NewsletterSubscription />
      
    </div>
  );
};

export default ProductsPage;
