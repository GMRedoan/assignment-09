import React from 'react';
import { FaRegClock, FaUserAlt } from 'react-icons/fa';

const Blog = () => {
    return (
          <section className="py-16 bg-linear-to-b from-white to-blue-200 min-h-screen">
                        <title>Blog</title>
      <div className="container mx-auto px-4">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-primary">Our Toy Blog</h2>
          <p className="text-base-content/70 mt-2">
            Discover tips, guides, and stories from the world of toys!
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">

          <div className="card bg-base-200 shadow-2xl shadow-blue-500  hover:scale-105 transition-transform duration-300">
            <figure>
              <img
                src="https://i.ibb.co.com/9kGwDq25/71-U06-Q9-P9-YL-AC-SL1500.jpg"
                alt="Educational Toys"
                className="w-full h-56 object-cover p-3 rounded-2xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg">
                Top 10 Educational Toys Your Kids Will Love
              </h3>
              <p>
                Boost creativity and learning with these parent-approved educational toys.
              </p>

              <div className="flex items-center justify-between text-sm text-base-content/60 mt-4">
                <div className="flex items-center gap-2">
                  <FaUserAlt /> Amy Parker
                </div>
                <div className="flex items-center gap-2">
                  <FaRegClock /> Nov 15, 2025
                </div>
              </div>

              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-2xl shadow-blue-500  hover:scale-105 transition-transform duration-300">
            <figure>
              <img
                src="https://i.ibb.co.com/39PMdz7V/media-31b549-f7a1972d57314320806c074bf2c8c353-mv2-jpg-v1-fit-w-650-h-481-al-c-q-20-enc-auto-file.jpg"
                alt="Age Appropriate Toys"
                className="w-full h-56 object-cover p-3 rounded-2xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg">
                How to Choose the Right Toy for Every Age
              </h3>
              <p>
                Picking the perfect toy doesn't have to be hard—here's a quick age guide.
              </p>

              <div className="flex items-center justify-between text-sm text-base-content/60 mt-4">
                <div className="flex items-center gap-2">
                  <FaUserAlt /> John Adams
                </div>
                <div className="flex items-center gap-2">
                  <FaRegClock /> Nov 10, 2025
                </div>
              </div>

              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-2xl shadow-blue-500  hover:scale-105 transition-transform duration-300">
            <figure>
              <img
                src="https://i.ibb.co.com/C3RHGRc9/Blog-Pretend-Play-E.webp"
                alt="Pretend Play"
                className="w-full h-56 object-cover p-3 rounded-2xl"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg">
                Why Pretend Play Is Important for Kids
              </h3>
              <p>
                Role-play toys help kids grow socially and emotionally—here’s how.
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-sm text-base-content/60 mt-4">
                <div className="flex items-center gap-2">
                  <FaUserAlt /> Clara Lee
                </div>
                <div className="flex items-center gap-2">
                  <FaRegClock /> Nov 2, 2025
                </div>
              </div>

              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm">Read More</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
    );
};

export default Blog;