import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#051923] text-gray-300 py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">

     
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">About us</h2>
          <p className="border-b-2 border-orange-500 w-10 mb-4"></p>
          <p className="text-sm leading-6">
            Ut enim ad minim veniam perspiciatis <br /> unde omnis iste natus error sit <br />
            voluptatem accusantium doloremque <br /> laudantium, totam rem aperiam.
          </p>
        </div>

      
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">Get in Touch</h2>
          <p className="border-b-2 border-orange-500 w-10 mb-4"></p>
          <p className="text-sm">34/8, East Hukupara, Gifirtok, Sadan.</p>
          <p className="text-sm mt-2">support@fruitkha.com</p>
          <p className="text-sm mt-2">+00 111 222 3333</p>
        </div>

    
        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">Pages</h2>
          <p className="border-b-2 border-orange-500 w-10 mb-4"></p>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-orange-400 duration-200 cursor-pointer">Home</li>
            <li className="hover:text-orange-400 duration-200 cursor-pointer">About</li>
            <li className="hover:text-orange-400 duration-200 cursor-pointer">Shop</li>
            <li className="hover:text-orange-400 duration-200 cursor-pointer">News</li>
            <li className="hover:text-orange-400 duration-200 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3 text-white">Subscribe</h2>
          <p className="border-b-2 border-orange-500 w-10 mb-4"></p>
          <p className="text-sm mb-4">
            Subscribe to our mailing list to get the <br /> latest updates.
          </p>

     
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-3 sm:space-y-0">
            <input
              type="email"
              placeholder="Email"
              className="bg-[#072635] p-3 w-full text-sm outline-none rounded"
            />
            <button className="bg-orange-500 hover:bg-orange-600 duration-200 px-6 py-3 rounded text-white">
              Send
            </button>
          </div>
        </div>
      </div>

    
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-400 ">
        Copyright  2019 –
        <span className="text-[#F28123] font-bold"> Imran Hossain</span>. All Rights Reserved. <br />
          Distributed By - 
          <span className="text-[#F28123] font-bold"> Themewagon</span>
      </div>
    </footer>
  );
}