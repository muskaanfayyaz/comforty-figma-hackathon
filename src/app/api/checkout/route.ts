import { NextResponse } from "next/server";
import Stripe from "stripe";

interface CartItem {
  title: string;
  price: number;
  quantity: number;
  image: string;
}

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("❌ STRIPE_SECRET_KEY is missing in environment variables!");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-01-27.acacia", // Corrected API version format
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const items: CartItem[] = body.items;

    if (!items || items.length === 0) {
      return NextResponse.json({ error: "No items in the cart" }, { status: 400 });
    }

    const lineItems = items.map((item) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: item.image ? [item.image] : [], // Handle cases where image might be missing
        },
        unit_amount: Math.round(item.price * 100), // Convert price to cents safely
      },
      quantity: item.quantity > 0 ? item.quantity : 1, // Ensure quantity is at least 1
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error: unknown) {
    console.error("❌ Stripe checkout error:", error);
    
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unknown error occurred" },
      { status: 500 }
    );
  }
}
