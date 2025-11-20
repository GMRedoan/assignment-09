import React from 'react';
import bg2 from '../assets/hero2.jpg';
import Marquee from 'react-fast-marquee';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
  const stats = [
    { value: "50K", label: "Sales" },
    { value: "4.6K", label: "Orders" },
    { value: "12K", label: "Reviews" },
   ];

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg2})` }}
      ></div>

      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative flex flex-col items-center justify-center pt-30">
             <h2 className="text-white text-center text-4xl md:text-6xl font-banner leading-tight md:leading-[85px] px-6">
          Explore our magical collection of <br /> toys crafted for endless childhood fun.
        </h2>

        <div className="w-full mt-16">
          <div className="md:flex justify-center gap-30">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="flex items-start justify-center">
                  <span className="text-5xl font-bold text-orange-500">{s.value}</span>
                  <FaPlus className="text-xl mt-1 ml-1 text-orange-500" />
                </div>
                <p className="mt-1 text-2xl font-black tracking-wider text-black">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:pt-15 absolute w-full ">
        <Marquee>
          <img className="w-[150px] mr-8" src="logo.png" alt="" />
          <img className="w-[150px] mr-8" src="112.png" alt="" />
          <img className="w-[150px] mr-8" src="113.png" alt="" />
          <img className="w-[150px] mr-8" src="114.png" alt="" />
          <img className="w-[150px] mr-8" src="115.png" alt="" />
          <img className="w-[150px] mr-8" src="116.png" alt="" />
          <img className="w-[150px] mr-8" src="123.png" alt="" />
          <img className="w-[150px] mr-8" src="113.png" alt="" />
        </Marquee>
      </div>
    </div>
  );
};

export default Banner;
