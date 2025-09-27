

const SubscribeButton = () => {
  const handleSubscribe = () => { 
    window.location.href = `http://localhost:5174/payment`;
  };

  return <button onClick={handleSubscribe}>Subscribe</button>;
};

export default SubscribeButton;