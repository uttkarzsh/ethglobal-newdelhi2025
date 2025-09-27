import { Link } from "react-router-dom";
import Connect from "./Connect";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-500 text-white p-4 shadow-lg flex justify-between items-center">
      <h1 className="text-3xl font-extrabold tracking-tight animate-pulse">SubZKrippy</h1>
      <nav className="space-x-6 font-semibold">
        <Link className="hover:text-yellow-400 transition-colors" to="/">Home</Link>
        <Link className="hover:text-yellow-400 transition-colors" to="/subscription">Subscribe</Link>
        <Link className="hover:text-yellow-400 transition-colors" to="/merchant">Merchant</Link>
        <Connect />
      </nav>
    </header>
  );
};

export default Header;