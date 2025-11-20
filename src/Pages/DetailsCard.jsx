import { FaEnvelope, FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const DetailsCard = ({toy}) => {
   const handleSubmit = (e) => {
    e.preventDefault()
    Swal.fire({
  title: "Your form successfully submitted",
  icon: "success",
 });
   }

    return (
          <section className="py-16">
      <div className="container mx-auto px-4">

        <div className="card lg:card-side bg-base-100 p-6 shadow-2xl shadow-blue-500">
          
          <figure className="lg:w-1/2">
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="rounded-2xl w-120 h-96 object-cover border border-blue-200 p-2"
            />
          </figure>

          <div className="card-body lg:w-1/2 space-y-4">
            <h2 className="card-title text-3xl font-bold text-primary">
              {toy.toyName}
            </h2>

            <p className="text-base-content/70">{toy.description}</p>

            <div className="grid grid-cols-2 gap-2 text-base-content/80 text-sm">
              <p><span className="font-semibold">Category:</span> {toy.subCategory}</p>
              <p><span className="font-semibold">Price:</span> ${toy.price}</p>
              <p><span className="font-semibold">Rating:</span> {toy.rating} ⭐</p>
              <p className='text-red-500'><span className="font-semibold">Available:</span> {toy.availableQuantity}</p>
            </div>

            <div className="bg-base-300 p-4 rounded-lg space-y-2">
              <h3 className="font-bold text-lg">Seller Information</h3>

              <div className="flex items-center gap-3">
                <FaUser className="text-primary" />
                <span>{toy.sellerName}</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <span>{toy.sellerEmail}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-2xl shadow-blue-500 mt-12 p-6 max-w-lg mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-primary">
            Submit Your Feedback!
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="label">
                <span className="label-text font-semibold">Your Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text font-semibold">Your Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button type='submit'  className="btn btn-primary w-full text-lg">
              Try Now
            </button>
          </form>
        </div>

      </div>
    </section>
    );
};

export default DetailsCard;
