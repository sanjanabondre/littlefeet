import ProductCard from "../ui/ProductCard";

import shoe1 from "../../assets/images/shoe1.png";
import shoe2 from "../../assets/images/shoe2.png";
import shoe3 from "../../assets/images/shoe3.png";
import shoe4 from "../../assets/images/shoe4.png";

const products = [
  {
    image: shoe1,
    title: "Cute Pink Sneakers",
    price: 1299,
    oldPrice: 1599,
    discount: "-20%",
  },
  {
    image: shoe2,
    title: "Little Runner",
    price: 1499,
    oldPrice: 1799,
    discount: "-15%",
  },
  {
    image: shoe3,
    title: "Rainbow Shoes",
    price: 1399,
    oldPrice: 1699,
    discount: "-18%",
  },
  {
    image: shoe4,
    title: "Comfy Sandals",
    price: 999,
    oldPrice: 1299,
    discount: "-25%",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-[#FFF8FC]">

      <div className="max-w-[1280px] mx-auto px-6">

        <div className="text-center mb-12">

          <p className="text-pink-500 font-semibold">
            ⭐ Best Sellers ⭐
          </p>

          <h2 className="text-5xl font-bold text-gray-800 mt-2">
            Featured Products
          </h2>

          <div className="w-20 h-1 bg-pink-300 rounded-full mx-auto mt-4"></div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {products.map((item) => (
            <ProductCard key={item.title} {...item} />
          ))}

        </div>

      </div>

    </section>
  );
}