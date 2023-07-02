import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Machine" className="rounded-xl h-48 " />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between">
          <div>
            <p className="text-orange-600 font-bold">Price: ${price}</p>
          </div>
          <div className="text-red-500">
            <FaArrowRight />
          </div>
        </div>
        <div className="card-actions">
          <Link to={`/book/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;


