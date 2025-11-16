import React from 'react';
import bg2 from '../assets/hero2.jpg';
import Marquee from 'react-fast-marquee';

const Banner = () => {
    return (
        <div className="relative w-full h-screen">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bg2})` }}>
            </div>

            <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>

            <div className="relative flex justify-center pt-17">
                <h2 className="text-white text-center text-6xl font-banner leading-[85px]">
                   Explore our magical collection of <br/> toys crafted for endless childhood fun.
                </h2>
            </div>
            <div className='py-10'>
                <Marquee>
                    <img className='w-[150px] mr-8' src="logo.png" alt="" />
                    <img className='w-[150px] mr-8' src="112.png" alt="" />
                    <img className='w-[150px] mr-8' src="113.png" alt="" />
                    <img className='w-[150px] mr-8' src="114.png" alt="" />
                    <img className='w-[150px] mr-8' src="115.png" alt="" />
                    <img className='w-[150px] mr-8' src="116.png" alt="" />
                    <img className='w-[150px] mr-8' src="123.png" alt="" />
                    <img className='w-[150px] mr-8' src="113.png" alt="" />
                    <img className='w-[150px] mr-8' src="logo.png" alt="" />
                    <img className='w-[150px] mr-8' src="112.png" alt="" />
                    <img className='w-[150px] mr-8' src="116.png" alt="" />
                </Marquee>
            </div>
        </div>
    );
};

export default Banner;
