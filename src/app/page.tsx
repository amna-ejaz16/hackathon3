import Image from "next/image";
import Furniture from "./components/Furniture";

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <header className="bg-white py-4 shadow-md border-b">
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#2c265c]">Avion</div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-6 text-sm font-medium text-gray-600">
              <li>Plant Pots</li>
              <li>Ceramics</li>
              <li>Tables</li>
              <li>Chairs</li>
              <li>Crockery</li>
              <li>Tableware</li>
              <li>Cutlery</li>
            </ul>
          </nav>

          {/* Icons */}
          <div className="space-x-2 text-gray-600 cursor-pointer flex items-center">
            <span>🛒</span>
            <span>⚙️</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#2c265c] text-white pt-16 pb-20">
        <div className="container mx-auto px-6 md:flex md:items-center md:justify-between">
          {/* Left Text Content */}
          <div className="md:w-1/2 space-y-4 leading-tight">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              The furniture brand for the future, with timeless designs
            </h1>
            <p className="text-sm md:text-base leading-6 mt-4">
              A new era in eco-friendly furniture with Avion, the French luxury retail brand with
              nice fonts, tasteful colors, and a beautiful way to display things digitally using
              modern web technologies.
            </p>
            <button className="mt-4 px-5 py-3 bg-white text-[#2c265c] font-medium rounded-lg hover:bg-gray-200 transition duration-300">
              View Collection
            </button>
          </div>

          {/* Right Side (Chair Section) */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
            <Image
              src="/images/chair.png"
              alt="Chair"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Additional Section: "What Makes Our Brand Different?" */}
      <section className="py-20 bg-gray-100 text-gray-700 text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-xl md:text-2xl font-bold">What makes our brand different?</h3>
          <p className="mt-2 text-sm md:text-base leading-6">
            Discover how we integrate design and functionality to bring timeless, durable, and elegant
            designs to your living spaces.
          </p>
        </div>
      </section>
        <Furniture/>
      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Avion. All rights reserved.
        </div>
      </footer>
      
    </div>
   
   
  );
}
