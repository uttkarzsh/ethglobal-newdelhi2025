import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WagmiProvider } from "wagmi";
import { config } from "./utils/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import MerchantDashboard from "./pages/MerchantDashboard";
import Subscription from "./pages/Subscription";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PaymentPage from "./pages/PaymentPage";

const queryClient = new QueryClient();

const App = () => {
  return (
    <WagmiProvider config = {config} >
      <QueryClientProvider client={queryClient}>
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merchant" element={<MerchantDashboard />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/payment" element={<PaymentPage/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </QueryClientProvider>
    </WagmiProvider>
  );
};

export default App;