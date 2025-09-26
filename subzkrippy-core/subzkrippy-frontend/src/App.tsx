import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MerchantDashboard from "./pages/MerchantDashboard";
import Subscription from "./pages/Subscription";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merchant" element={<MerchantDashboard />} />
            <Route path="/subscription" element={<Subscription />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;