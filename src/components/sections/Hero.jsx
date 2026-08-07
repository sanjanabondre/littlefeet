import { useState } from "react";

import hero from "../../assets/images/hero.png";

import { connectWallet } from "../../blockchain/wallet";
import { createTransaction } from "../../blockchain/transaction";


export default function Hero() {

  const [wallet, setWallet] = useState("");

  // Transaction Popup State
  const [showPopup, setShowPopup] = useState(false);
  const [txData, setTxData] = useState(null);

  // Connect Wallet
  const handleWallet = async () => {

    const address = await connectWallet();

    if (address) {
      setWallet(address);
    }

  };

  // Handle Shop Now Transaction
  const handleTransaction = async () => {

    const result = await createTransaction();

    if (result.success) {

      setTxData(result);

      setShowPopup(true);

    } else {

      alert(result.message);

    }

  };

  return (

    <section className="bg-[#FFF8FC] overflow-hidden relative">

      {/* FULL WIDTH MOVING CLOUD BACKGROUND */}


      <div className="
      absolute
      bottom-0
      left-0
      w-full
      h-[260px]
      overflow-hidden
      pointer-events-none
      z-0
      ">



        {/* LEFT CLOUD */}


        <div className="
        absolute
        bottom-[-70px]
        left-[-100px]
        w-[500px]
        h-[180px]
        bg-pink-100
        rounded-full
        animate-cloud-slow
        ">


          <div className="
          absolute
          -top-20
          left-24
          w-44
          h-44
          bg-pink-100
          rounded-full
          "></div>



          <div className="
          absolute
          -top-28
          right-20
          w-60
          h-60
          bg-pink-100
          rounded-full
          "></div>


        </div>





        {/* CENTER CLOUD */}


        <div className="
        absolute
        bottom-[-50px]
        left-[35%]
        w-[500px]
        h-[170px]
        bg-pink-50
        rounded-full
        animate-cloud-medium
        ">


          <div className="
          absolute
          -top-16
          left-20
          w-40
          h-40
          bg-pink-50
          rounded-full
          "></div>



          <div className="
          absolute
          -top-24
          right-24
          w-52
          h-52
          bg-pink-50
          rounded-full
          "></div>


        </div>







        {/* RIGHT CLOUD */}



        <div className="
        absolute
        bottom-[-80px]
        right-[-120px]
        w-[560px]
        h-[200px]
        bg-pink-200
        rounded-full
        animate-cloud-fast
        ">



          <div className="
          absolute
          -top-24
          left-24
          w-52
          h-52
          bg-pink-200
          rounded-full
          "></div>



          <div className="
          absolute
          -top-32
          right-28
          w-64
          h-64
          bg-pink-200
          rounded-full
          "></div>



        </div>



      </div>






      {/* HERO CONTENT */}



      <div className="
      max-w-[1280px]
      mx-auto
      px-6
      py-12
      relative
      z-10
      ">


        <div className="
        grid
        lg:grid-cols-2
        items-center
        gap-10
        ">




          {/* LEFT CONTENT */}



          <div>


            <span className="
            inline-flex
            items-center
            gap-2
            bg-pink-100
            text-pink-600
            px-5
            py-2
            rounded-full
            font-medium
            text-sm
            ">

              👣 Tiny Steps, Big Adventures

            </span>




            <h1 className="
            mt-6
            text-[65px]
            leading-[72px]
            font-black
            text-gray-800
            ">


              Cute Shoes
              <br />

              For Happy


              <span className="text-pink-500">

                {" "}Little Feet

              </span>


            </h1>






            <p className="
            mt-6
            text-gray-600
            text-lg
            leading-9
            max-w-xl
            ">


              Discover colorful, comfortable and stylish shoes specially
              designed for your little ones. Every step deserves love,
              comfort and joy.


            </p>







            {/* BUTTONS */}



            <div className="flex gap-5 mt-10">



              <button

              onClick={handleTransaction}

              className="
              bg-pink-500
              text-white
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-pink-600
              transition
              ">


                Shop Now →


              </button>







              <button

              onClick={handleWallet}

              className="
              border-2
              border-pink-300
              text-pink-500
              px-8
              py-4
              rounded-full
              font-semibold
              hover:bg-pink-50
              transition
              ">


              {
                wallet

                ?

                wallet.slice(0,6)
                +
                "..."
                +
                wallet.slice(-4)

                :

                "Wallet"
              }



              </button>



            </div>



          </div>








          {/* RIGHT IMAGE */}



          <div className="
          relative
          flex
          justify-center
          items-center
          h-[600px]
          ">



            <div className="
            absolute
            w-[520px]
            h-[520px]
            rounded-full
            bg-pink-100
            ">
            </div>






            <div className="
            relative
            z-10
            w-[430px]
            h-[430px]
            rounded-full
            overflow-hidden
            bg-white
            shadow-2xl
            flex
            items-center
            justify-center
            ">


              <img

              src={hero}

              alt="LittleFeet Hero"

              className="
              w-full
              h-full
              object-contain
              scale-[1.6]
              "

              />


            </div>







            <div className="
            absolute
            w-[470px]
            h-[470px]
            rounded-full
            border-[20px]
            border-pink-200
            opacity-60
            ">
            </div>



          </div>




        </div>


      </div>








      {/* CLOUD ANIMATION */}



      <style>

      {`

      @keyframes cloudSlow {

        from {
          transform: translateX(-30px);
        }

        to {
          transform: translateX(40px);
        }

      }




      @keyframes cloudMedium {

        from {
          transform: translateX(30px);
        }

        to {
          transform: translateX(-40px);
        }

      }




      @keyframes cloudFast {

        from {
          transform: translateX(-50px);
        }

        to {
          transform: translateX(60px);
        }

      }




      .animate-cloud-slow {

        animation:
        cloudSlow
        18s
        ease-in-out
        infinite
        alternate;

      }




      .animate-cloud-medium {

        animation:
        cloudMedium
        22s
        ease-in-out
        infinite
        alternate;

      }




      .animate-cloud-fast {

        animation:
        cloudFast
        15s
        ease-in-out
        infinite
        alternate;

      }


      `}

      </style>
{showPopup && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-3xl shadow-2xl w-[450px] p-8 text-center">

      <div className="text-6xl mb-4">
        🎉
      </div>

      <h2 className="text-2xl font-bold text-gray-800">
        Transaction Submitted
      </h2>

      <p className="text-gray-500 mt-3">
        Your blockchain transaction has been submitted successfully.
      </p>

      <div className="mt-6 bg-gray-100 rounded-xl p-4 text-left">

        <p className="text-xs text-gray-500 mb-2">
          Transaction Hash
        </p>

        <p className="text-sm break-all text-gray-700">
          {txData?.hash}
        </p>

      </div>

      <a
        href={txData?.explorer}
        target="_blank"
        rel="noopener noreferrer"
        className="
        inline-block
        mt-6
        bg-pink-500
        hover:bg-pink-600
        text-white
        px-6
        py-3
        rounded-full
        font-semibold
        transition
        "
      >
        View on Blockchain Explorer
      </a>

      <button
        onClick={() => setShowPopup(false)}
        className="
        block
        w-full
        mt-4
        border
        border-pink-300
        text-pink-500
        rounded-full
        py-3
        hover:bg-pink-50
        transition
        "
      >
        Close
      </button>

    </div>

  </div>
)}


    </section>

  );

}