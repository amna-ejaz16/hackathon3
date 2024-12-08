import Image from "next/image";

const Furniture = () => {
  return (
    <div className="py-16 bg-white">
      {/* Section Header */}
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          New Ceramics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1: The Dandy Chair */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48 bg-gray-100">
              <Image
                src="/images/dandy-chair.png"
                alt="The Dandy Chair"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-2">
                The Dandy Chair
              </h4>
              <p className="text-sm md:text-base text-gray-600">£250</p>
            </div>
          </div>

          {/* Product 2: Rustic Vase Set */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48 bg-gray-100">
              <Image
                src="/images/rustic-vase.png"
                alt="Rustic Vase Set"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-2">
                Rustic Vase Set
              </h4>
              <p className="text-sm md:text-base text-gray-600">£155</p>
            </div>
          </div>

          {/* Product 3: The Silky Vase */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48 bg-gray-100">
              <Image
                src="/images/silky-vase.png"
                alt="The Silky Vase"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-2">
                The Silky Vase
              </h4>
              <p className="text-sm md:text-base text-gray-600">£125</p>
            </div>
          </div>

          {/* Product 4: The Lucy Lamp */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="relative h-48 bg-gray-100">
              <Image
                src="/images/lucy-lamp.png"
                alt="The Lucy Lamp"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-2">
                The Lucy Lamp
              </h4>
              <p className="text-sm md:text-base text-gray-600">£399</p>
            </div>
          </div>
        </div>

        {/* View Collection Button */}
        <div className="mt-8 text-center">
          <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition duration-300">
            View Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Furniture;
