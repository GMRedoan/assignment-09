import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import Toys from "./Toys";

const Home = () => {
    const toys = useLoaderData()
    console.log(toys)
 
  return (
    <div className="bg-linear-to-b from-white to-blue-200 min-h-screen">
      <Banner></Banner>

<div>
    <p className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-logo text-center text-4xl md:text-5xl leading-tight md:leading-[85px] px-6 pt-13">The Ultimate Toy Destination</p>
</div>

      <div className="flex flex-col px-6 py-8 sm:px-10 md:px-20 md:py-15 md:flex-row md:justify-between">

    <div className="mb-4 ml-12 md:mb-0 md:ml-0 carousel carousel-vertical rounded-box h-86 w-70 shadow-2xl shadow-blue-500 border border-blue-200 hover:scale-105 transition-transform duration-300">
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co.com/F4JxDVG2/download-1.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co.com/Wvj48kh7/images.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co.com/Wvj48kh7/images.jpg" />
  </div>
 </div>

<div className="carousel rounded-box shadow-2xl shadow-blue-500 border border-blue-200 hover:scale-105 transition-transform duration-300 w-full max-w-120 mx-auto">

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/6JZcLXN5/download-1.jpg" className="w-full h-auto object-cover" />
  </div>

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/mVKMgz2t/download-2.jpg" className="w-full h-auto object-cover" />
  </div>

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/Wvk93S6D/download-3.jpg" className="w-full h-auto object-cover" />
  </div>

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/fV8bGGDc/download-2.jpg" className="w-full h-auto object-cover" />
  </div>

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/Wvj48kh7/images.jpg" className="w-full h-auto object-cover" />
  </div>

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/v47QDS56/download.jpg" className="w-full h-auto object-cover" />
  </div>

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/yctNTB3p/download-3.jpg" className="w-full h-auto object-cover" />
  </div>

</div>

<div className="mt-4 ml-12 md:mt-0 md:ml-0 carousel carousel-vertical rounded-box h-86 w-70 shadow-2xl shadow-blue-500 border border-blue-200 hover:scale-105 transition-transform duration-300">
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co.com/fV8bGGDc/download-2.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co.com/Wvk93S6D/download-3.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co.com/F4JxDVG2/download-1.jpg" />
  </div>
 </div>
      </div>

<div>
    <p className="bg-linear-to-r from-red-500 to-yellow-600 bg-clip-text text-transparent font-logo text-center text-4xl md:text-5xl leading-tight md:leading-[85px] px-6 pb-13">Our Popular Toy Collections</p>
</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mx-4 md:mx-16 pb-15">
        {
            toys.map(toy => <Toys key={toy.toyId} toy={toy}></Toys>)
        }
      </div>

     </div>
  );
};

export default Home;
