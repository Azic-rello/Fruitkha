import React from "react";

const Info = () => {
  return (
    <div className="bg-[url('https://themewagon.github.io/fruitkha/assets/img/1.jpg')] w-full h-[450px] bg-cover bg-center flex items-center">
      <div className="ml-20 text-black p-8 max-w-md">
        <h1 className="text-4xl font-black mb-6 leading-tight">
          December sale is on! <br /> with big
          <span className="text-[#F28123]"> Discount...</span>
        </h1>

        <button className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-amber-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
          Shop Now
        </button>

        <div className="mt-8 flex">
          <div className="font-semibold text-xl mb-1">Sale! <br /> Upto</div>
          <div className="flex items-end">
            <span className="font-bold text-[#F28123] text-6xl leading-none">
              50%
            </span>
            <span className="ml-2 text-lg font-medium">off</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
