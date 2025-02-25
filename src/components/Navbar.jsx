const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50 shadow-md">
      <h1 className="text-2xl font-bold">Mohammed Zaheen</h1>
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-green-400 cursor-pointer">Home</li>
        <li className="hover:text-green-400 cursor-pointer">Projects</li>
        <li className="hover:text-green-400 cursor-pointer">About</li>
        <li className="hover:text-green-400 cursor-pointer">Contact</li>
      </ul>
      <button className="md:hidden text-xl">☰</button>
    </nav>
  );
};
  
  export default Navbar;