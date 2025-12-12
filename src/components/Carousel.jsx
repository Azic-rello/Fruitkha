import { useEffect, useState, useRef } from "react";
import img from "../assets/Carusel.png";
import { FormatQuote } from "@mui/icons-material";

export default function TestimonialCarousel() {
  const testimonials = [
    {
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&q=80",
      name: "Saira Hakim",
      role: "Local shop owner",
      text: "Sed ut perspiciatis unde omnis iste natus error veritatis et quasi architecto beatae vitae dicta eaque ipsa quae ab illo inventore.",
    },
    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80",
      name: "Anna Lopez",
      role: "Marketing Manager",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni recusandae, quisquam doloremque ipsa!",
    },
    {
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80",
      name: "John Carter",
      role: "Store Supervisor",
      text: "Ducimus suscipit nemo molestiae recusandae corrupti amet laborum molestias nulla excepturi deserunt doloribus!",
    },
    {
      img: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&q=80",
      name: "Emily Rose",
      role: "Designer",
      text: "Accusamus natus impedit quia neque aliquam delectus cumque dolores incidunt iste rerum!",
    },
  ];

  const count = testimonials.length;
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % count);
        setAnimate(true);
      }, 300);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [count]);

  const t = testimonials[index];

  return (
    <div>
      <div className="w-full max-w-2xl mx-auto py-16 sm:py-20 text-center overflow-hidden relative px-4">
        <div
          className={`w-full flex justify-center mb-4 transition-all duration-300 transform ${
            animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          <img
            src={t.img}
            alt={t.name}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover shadow"
          />
        </div>
        <h2
          className={`text-lg sm:text-xl font-bold transition-all duration-300 transform ${
            animate ? "translate-x-0" : "-translate-x-10 opacity-0"
          }`}
        >
          {t.name}
        </h2>
        <p
          className={`text-gray-500 text-sm mb-4 transition-all duration-300 transform ${
            animate ? "translate-x-0" : "-translate-x-10 opacity-0"
          }`}
        >
          {t.role}
        </p>
        <p
          className={`text-gray-600 italic px-4 sm:px-6 transition-all duration-300 transform ${
            animate ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}
        >
          " {t.text} "
        </p>
        <div className="text-4xl sm:text-5xl text-gray-400 mt-4">
          <FormatQuote />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-7xl m-auto p-10 sm:p-14 lg:p-20 gap-10 lg:gap-15">
        <img className="w-full lg:w-1/2" src={img} alt="" />
        <div className="w-full lg:w-1/2 my-auto px-2 sm:px-0">
          <h6 className="opacity-60">Since Year 2009</h6>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl py-4 font-bold leading-tight">
            Biz are <span className="text-[#f28123]">Fruitkha</span>
          </h1>
          <p className="text-[15px] sm:text-[16px] opacity-80 w-full lg:w-[75%]">
            Etiam vulputate ut augue vel sodales. In sollicitudin neque et massa
            porttitor vestibulum ac vel nisi. Vestibulum placerat eget dolor sit
            amet posuere. In ut dolor aliquet, aliquet sapien sed, interdum
            velit. Nam eu molestie lorem. <br /> <br /> Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Sapiente facilis illo repellat
            veritatis minus, et labore minima mollitia qui ducimus.
          </p>
          <button className="carusel-btn">know more</button>
        </div>
      </div>
    </div>
  );
}
