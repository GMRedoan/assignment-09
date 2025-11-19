import React from 'react';
import { useLoaderData } from 'react-router';
import Toys from './Toys';

const Shop = () => {
    const toys = useLoaderData()
    return (
        <div className="bg-linear-to-b from-white to-blue-200 min-h-screen">

   <div className='py-15'>
    <p className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent font-logo text-center text-4xl md:text-5xl leading-tight md:leading-[85px] px-6">Discover the Magic of Play</p>
    <p className='text-center text-gray-500'>Explore our complete toy collection crafted to inspire wonder in every child.</p>
</div>


                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 mx-4 md:mx-16 pb-15">
        {
            toys.map(toy => <Toys key={toy.toyId} toy={toy}></Toys>)
        }
      </div> 
   </div>
    );
};

export default Shop;