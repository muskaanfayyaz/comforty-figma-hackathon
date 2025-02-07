import { defineType } from "sanity";

export const orderSchema = defineType({
  name: "orders",
  title: "Orders",
  type: "document",
  fields: [
    { name: "products", title: "Products", type: "array", of: [{ type: "reference", to: [{ type: "products" }] }] },
    { name: "totalAmount", title: "Total Amount", type: "number" },
    { name: "name", title: "Name", type: "string" },
    { name: "email", title: "Email", type: "string" },
    { name: "phone", title: "Phone", type: "string" },
    { name: "company", title: "Company", type: "string" },
    { name: "address", title: "Address", type: "string" },
    { name: "city", title: "City", type: "string" },
    { name: "state", title: "State", type: "string" },
    { name: "zip", title: "Zip", type: "string" },
    { name: "country", title: "Country", type: "string" },
    { name: "orderNotes", title: "Order Notes", type: "text" },
    { 
      name: "paymentMethod", 
      title: "Payment Method", 
      type: "string", 
      options: {
        list: [
          { title: "Cash on Delivery", value: "cash-on-delivery" },
          { title: "Credit Card", value: "credit-card" },
          { title: "PayPal", value: "paypal" }
        ]
      }
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"], 
        layout: "radio"
      },
      initialValue: "Pending"
    }
  ],
});
