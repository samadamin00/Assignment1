import { useState } from "react";
import { Link } from "react-router";

 const Navbar = () => {
  // State to manage the mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <svg
            className="w-8 h-8 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 22h20L12 2zm0 13c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
          <span className="text-2xl font-bold">TechFlow</span>
        </Link>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
        </div>
      </div>

      {/* Mobile menu, conditionally rendered */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} mt-4`}>
        <div className="flex flex-col space-y-2">
          <Link to="/" className="hover:text-blue-400 transition-colors py-2 px-4 rounded-md bg-gray-700" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors py-2 px-4 rounded-md bg-gray-700" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors py-2 px-4 rounded-md bg-gray-700" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar