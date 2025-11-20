import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
 <section className="py-16 bg-linear-to-b from-white to-blue-200 min-h-screen">
              <title>Contact</title>
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Contact Us</h2>
          <p className="text-base-content/70 mt-2">
            Have questions? We’d love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          <div className="card bg-base-200 shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full"
              />

              <textarea
                placeholder="Your Message"
                className="textarea textarea-bordered w-full h-32"
              ></textarea>

              <button className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>

          <div className="space-y-8">

            <div className="flex items-start gap-4">
              <div className="text-primary text-3xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Phone</h4>
                <p className="text-base-content/70">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary text-3xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Email</h4>
                <p className="text-base-content/70">support@toystore.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-primary text-3xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-xl font-semibold">Address</h4>
                <p className="text-base-content/70">
                  123 Toy Street, Fun City, USA
                </p>
              </div>
            </div>

            <img
              src="https://i.ibb.co.com/mV3TT9Lq/20190318191238.jpg"
              alt="Toy Store"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>    );
};

export default Contact;