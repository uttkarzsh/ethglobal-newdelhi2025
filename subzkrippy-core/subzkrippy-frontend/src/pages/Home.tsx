const Home = () => {
  return (
    <section className="text-center py-20">
      <h2 className="text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 animate-text">Welcome to SubZKrippy</h2>
      <p className="text-xl max-w-xl mx-auto mb-8">
        Manage subscriptions seamlessly on the blockchain. Connect your wallet, create plans, and let your customers subscribe effortlessly.
      </p>
      <div className="flex justify-center gap-4">
        <a href="/subscription" className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform">
          Subscribe Now
        </a>
        <a href="/merchant" className="px-6 py-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg font-bold shadow-lg hover:scale-105 transition-transform">
          Merchant Dashboard
        </a>
      </div>
    </section>
  );
};

export default Home;