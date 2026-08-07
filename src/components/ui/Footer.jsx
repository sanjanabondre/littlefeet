export default function Footer() {
  return (
    <footer className="bg-pink-600 text-white mt-20 py-12">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-3xl font-bold">
            LittleFeet 👣
          </h2>

          <p className="mt-4 text-pink-100">
            Tiny Steps, Big Adventures.
            Comfortable footwear for little explorers.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <p className="text-pink-100">Home</p>
          <p className="text-pink-100">Shop</p>
          <p className="text-pink-100">Categories</p>
          <p className="text-pink-100">Contact</p>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact
          </h3>

          <p className="text-pink-100">
            Email: hello@littlefeet.com
          </p>

          <p className="text-pink-100">
            Phone: +91 98765 43210
          </p>
        </div>

      </div>


      <div className="text-center mt-10 pt-5 border-t border-pink-400 text-sm">
        © 2026 LittleFeet. All Rights Reserved.
      </div>

    </footer>
  );
}