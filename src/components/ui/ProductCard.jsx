import { Heart, ShoppingCart, Star } from "lucide-react";

export default function ProductCard({
  image,
  title,
  price,
  oldPrice,
  discount,
}) {
  return (
    <div className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">

      <div className="relative bg-[#FFF8F4] h-[230px] flex items-center justify-center">

        <span className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {discount}
        </span>

        <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
          <Heart size={18} />
        </button>

        <img
          src={image}
          alt={title}
          className="h-[180px] object-contain group-hover:scale-105 transition"
        />

      </div>

      <div className="p-5">

        <div className="flex items-center gap-1 text-yellow-400 mb-2">
          <Star size={15} fill="currentColor" />
          <Star size={15} fill="currentColor" />
          <Star size={15} fill="currentColor" />
          <Star size={15} fill="currentColor" />
          <Star size={15} fill="currentColor" />
        </div>

        <h3 className="font-semibold text-gray-800 text-lg">
          {title}
        </h3>

        <div className="flex items-center gap-3 mt-3">

          <span className="text-pink-500 font-bold text-xl">
            ₹{price}
          </span>

          <span className="line-through text-gray-400">
            ₹{oldPrice}
          </span>

        </div>

        <button className="mt-5 w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-full flex justify-center items-center gap-2 transition">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

      </div>

    </div>
  );
}