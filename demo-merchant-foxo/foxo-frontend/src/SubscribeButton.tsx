

const SubscribeButton = () => {
  const handleSubscribe = () => {
    const merchantId = "foxo";
    const amount = 1; 
    window.location.href = `http://localhost:5174/payment`;
  };

  return <button onClick={handleSubscribe}>Subscribe</button>;
};

export default SubscribeButton;