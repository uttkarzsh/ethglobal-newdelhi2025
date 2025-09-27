import { useState } from "react";
import SubscriptionButton from "../components/SubscriptionButton";

const Subscription = () => {

  const plans = [
    { id: "1", name: "Foxo", price: "1 FLOW", duration: 30 }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      {plans.map((plan) => (
        <div key={plan.id} className="bg-gray-900 bg-opacity-60 rounded-2xl p-6 shadow-2xl hover:scale-105 transition-transform">
          <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
          <p className="mb-2">Price: {plan.price}</p>
          <p className="mb-4">Duration: {plan.duration} days</p>
          <SubscriptionButton planId={plan.id} amount={plan.price.split(" ")[0]} />
        </div>
      ))}
    </div>
  );
};

export default Subscription;