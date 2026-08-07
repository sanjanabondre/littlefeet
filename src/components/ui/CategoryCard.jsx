export default function CategoryCard({
  title,
  description,
  image,
  bgColor,
  titleColor,
  buttonColor,
}) {
  return (
    <div
      className={`
      ${bgColor}
      rounded-[28px]
      overflow-hidden
      shadow-sm
      hover:shadow-xl
      transition-all
      duration-300
      hover:-translate-y-1
      h-[250px]
      `}
    >

      <div className="flex h-full">


        {/* LEFT CONTENT */}

        <div
          className="
          w-[55%]
          p-6
          flex
          flex-col
          justify-center
          "
        >

          <h3
            className={`
            text-3xl
            font-bold
            ${titleColor}
            capitalize
            `}
          >
            {title}
          </h3>



          <p
            className="
            text-gray-600
            text-sm
            leading-6
            mt-3
            break-words
            "
          >
            {description}
          </p>



          <button
            className={`
            mt-4
            w-fit
            px-5
            py-2
            rounded-full
            bg-white
            ${buttonColor}
            font-semibold
            shadow
            text-sm
            `}
          >
            Shop Now →
          </button>


        </div>





        {/* RIGHT IMAGE */}


        <div
          className="
          w-[45%]
          flex
          items-center
          justify-center
          p-3
          "
        >

          <img
            src={image}
            alt={title}
            className="
            w-[130px]
            h-[130px]
            object-cover
            rounded-xl
            "
          />


        </div>



      </div>

    </div>
  );
}