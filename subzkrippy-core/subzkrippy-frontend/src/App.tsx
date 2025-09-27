import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WagmiConfig } from "wagmi";
import { config } from "./utils/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import MerchantDashboard from "./pages/MerchantDashboard";
import Subscription from "./pages/Subscription";
import PaymentPage from "./pages/PaymentPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="flex flex-col min-h-screen bg-gradient-to-b from-purple-900 via-indigo-800 to-gray-900 text-white">
            <Header />
            <main className="flex-grow container mx-auto px-6 py-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/merchant" element={<MerchantDashboard />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/payment" element={<PaymentPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </QueryClientProvider>
    </WagmiConfig>
  );
};

export default App;