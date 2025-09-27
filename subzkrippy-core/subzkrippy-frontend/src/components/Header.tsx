import { Link } from "react-router-dom";
import Connect from "./Connect";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">SubZKrippy</h1>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/subscription">Subscribe</Link>
        <Link to="/merchant">Merchant</Link>
        <Connect />
      </nav>
    </header>
  );
};

export default Header