import CategoryCard from "../ui/CategoryCard";

import babyBoy from "../../assets/images/baby-boy.png";
import babyGirl from "../../assets/images/baby-girl.png";
import newborn from "../../assets/images/newborn.png";
import accessories from "../../assets/images/accessories.png";


const data = [
  {
    title: "Baby Boy",
    description: "Stylish & comfy looks for your little champ",
    image: babyBoy,
    bgColor: "bg-sky-100",
    titleColor: "text-sky-800",
    buttonColor: "text-sky-600",
  },

  {
    title: "Baby Girl",
    description: "Adorable outfits for every little princess",
    image: babyGirl,
    bgColor: "bg-pink-100",
    titleColor: "text-pink-600",
    buttonColor: "text-pink-600",
  },

  {
    title: "Newborn",
    description: "Soft, gentle & safe essentials for your newborn",
    image: newborn,
    bgColor: "bg-amber-50",
    titleColor: "text-yellow-700",
    buttonColor: "text-yellow-700",
  },

  {
    title: "Accessories",
    description: "Cute & useful accessories for every need",
    image: accessories,
    bgColor: "bg-purple-100",
    titleColor: "text-purple-700",
    buttonColor: "text-purple-700",
  },
];



export default function Categories() {

  return (

    <section className="
    py-16
    bg-white
    ">


      <div className="
      max-w-[1280px]
      mx-auto
      px-6
      ">




        {/* HEADING */}

        <div className="
        text-center
        mb-12
        ">


          <p className="
          text-pink-500
          font-semibold
          ">

            💕 Our Collection 💕

          </p>



          <h2 className="
          text-5xl
          font-bold
          text-gray-800
          mt-2
          ">

            Shop By Categories

          </h2>



          <div className="
          w-20
          h-1
          bg-pink-300
          rounded-full
          mx-auto
          mt-4
          ">

          </div>



        </div>







        {/* 2 X 2 CATEGORY GRID */}

        <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-8
        max-w-5xl
        mx-auto
        ">


          {data.map((item) => (

            <CategoryCard
              key={item.title}
              {...item}
            />

          ))}


        </div>



      </div>


    </section>

  );
}