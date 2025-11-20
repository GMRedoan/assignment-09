import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailsCard from './DetailsCard';

const Details = () => {
    const {id} = useParams()
    const toys = useLoaderData()

     const toy = toys.find((toy) => toy.toyId === parseInt(id))
     return (
        <div className='bg-linear-to-b from-white to-blue-200 min-h-screen'>
            <DetailsCard toy={toy}></DetailsCard>
        </div>
    );
};

export default Details;