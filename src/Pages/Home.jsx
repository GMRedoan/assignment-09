import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import Toys from "./Toys";

const Home = () => {
    const toys = useLoaderData() 
  return (
    <div className="bg-linear-to-b from-white to-blue-200 min-h-screen">
      <Banner></Banner>

<div>
    <p className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-logo text-center text-4xl md:text-5xl leading-tight md:leading-[85px] px-6 pt-13">The Ultimate Toy Destination</p>
</div>

      <div className="flex flex-col px-6 py-8 sm:px-10 md:px-20 md:py-15 md:flex-row md:justify-between">

    <div className="mb-4 ml-12 md:mb-0 md:ml-0 carousel carousel-vertical rounded-box h-86 w-65 shadow-2xl shadow-blue-500 border border-blue-200 hover:scale-105 transition-transform duration-300">
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co.com/3mRGs4hm/mainbanner-toyfest.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co.com/9HnPzc7p/lulu-1.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co.com/KctKzTh7/1663273088-1.jpg" />
  </div>
 </div>

<div className="carousel rounded-box shadow-2xl shadow-blue-500 border border-blue-200 hover:scale-105 transition-transform duration-300 w-full max-w-120 mx-auto">

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/wrJwsm26/4506ff8020ec928a6b5b27d35c2b5481-jpg-720x720q80.jpg.jpg" className="w-full h-auto object-cover" />
  </div>

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/FLwf9d2k/b7a4a622-7cc9-483b-927b-d6769e1ccc9f-eb09b3e2c97c8f026726bbfd9f1e4852.webp" className="w-full h-auto object-cover" />
  </div>

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/wFWDKJ23/71-Ik-E24b-Mc-L-AC-SL1500.jpg" className="w-full h-auto object-cover" />
  </div>

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/4ZdDM1Qt/magnetic-drawing-board.jpg" className="w-full h-auto object-cover" />
  </div>

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/nqKK5gZc/product-1605704146.jpg" className="w-full h-auto object-cover" />
  </div>

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/xSVyQshY/bf3b865e24b64112f99c7d72eff99188-jpg-720x720q80.jpg" className="w-full h-auto object-cover" />
  </div>

  <div className="carousel-item w-1/2">
    <img src="https://i.ibb.co.com/67p56HV0/s-l1200.jpg" className="w-full h-auto object-cover" />
  </div>

</div>

<div className="mt-4 ml-12 md:mt-0 md:ml-0 carousel carousel-vertical rounded-box h-86 w-70 shadow-2xl shadow-blue-500 border border-blue-200 hover:scale-105 transition-transform duration-300">
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co.com/xQ4dYBN/1eb5da66-22e9-46a8-8820-72522e441f65.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co.com/Rkb16YL0/818bea33-0299-4f6f-becc-bf999a813ca6.jpg" />
  </div>
  <div className="carousel-item h-full">
    <img src="https://i.ibb.co.com/skLT8dG/0-Argos-Top-Toys-2018.webp" />
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
