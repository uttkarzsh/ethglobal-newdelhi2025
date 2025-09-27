const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-700 text-white p-6 text-center">
      <p className="animate-pulse">&copy; {new Date().getFullYear()} SubZKrippy</p>
    </footer>
  );
};

export default Footer;