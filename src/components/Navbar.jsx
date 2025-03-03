import logo from "../assets/icons8-home.svg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-[100] bg-[#1a0b2e] px-[5%] py-6 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          <img src={logo} alt="Logo" className="w-10 h-10 text-teal-50" />
        </div>

        {/* Nav Items */}
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Products</li>
          <li className="hover:text-gray-300 cursor-pointer">Support</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
