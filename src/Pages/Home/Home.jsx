import React from 'react';
import Carousel from '../Carousel/Carousel';

const Home = () => {
    return (
        <>
            <Carousel></Carousel>
            <main>
                <h1 className='text-center font-extrabold text-3xl mt-5'>All Products</h1>
                <div className='flex items-center justify-center'>
                    <div className='grid grid-cols-3 gap-20'>
                        {/* Product Cards */}
                        {[...Array(8)].map((_, index) => (
                            <div className="card bg-base-100 w-96 shadow-xl" key={index}>
                                <figure className="px-10 pt-10">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                        alt="Shoes"
                                        className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">Shoes!</h2>
                                    <p>If a dog chews shoes whose shoes does he choose?</p>
                                    <div className="card-actions">
                                        <button className="btn btn-primary">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;