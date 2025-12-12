import React from "react";

const OurNews = () => {
  return(
    <>
    <div className="bg-gray-100 w-full py-10 relative">
  <div className="container mx-auto px-4">

    <div className="md:ml-[50%] ml-0 md:mt-[5%] mt-10 text-center md:text-left">
      <h1 className="font-bold text-3xl md:text-4xl">
        <span className="text-amber-700">Deal</span> of the month
      </h1>

      <h3 className="font-semibold text-sm md:text-lg mt-2">
        HIKAN STRAWBERRY
      </h3>

      <p className="text-xs md:text-base font-semibold mt-4 md:w-[70%]">
        Quisquam minus maiores repudiandae nobis, minima saepe id, fugit ullam
        similique! Beatae, minima quisquam molestias facere ea. Perspiciatis
        unde omnis iste natus error sit voluptatem accusant.
      </p>
    </div>

    <div className="flex flex-wrap justify-center md:justify-start gap-4 md:ml-[50%] mt-6">
        <div className="w-24 h-20 border-2 border-amber-600 rounded-lg">
          <h1 className="mt-2 text-3xl font-bold text-amber-600 text-center">00</h1>
          <p className="text-center">Days</p>
        </div>
         <div className="w-24 h-20 border-2 border-amber-600 rounded-lg">
          <h1 className="mt-2 text-3xl font-bold text-amber-600 text-center">00</h1>
          <p className="text-center">Hours</p>
        </div>
         <div className="w-24 h-20 border-2 border-amber-600 rounded-lg">
          <h1 className="mt-2 text-3xl font-bold text-amber-600 text-center">00</h1>
          <p className="text-center">Mins</p>
        </div>
         <div className="w-24 h-20 border-2 border-amber-600 rounded-lg">
          <h1 className="mt-2 text-3xl font-bold text-amber-600 text-center">00</h1>
          <p className="text-center">Secs</p>
        </div>
    </div>

    <div className="md:ml-[50%] flex justify-center md:justify-start">
      <button className="bg-amber-700 w-40 h-12 rounded-full mt-6 text-white hover:bg-black hover:text-amber-700 text-lg">
        Add to Cart
      </button>
    </div>

    <img
      className="w-[70%] md:w-[35%] mx-auto md:mx-0 md:ml-[10%] mt-10 md:mt-[-25%]"
      src="https://themewagon.github.io/fruitkha/assets/img/a.jpg"
      alt=""
    />
  </div>
</div>

    </>
  ) 
};

export default OurNews;
