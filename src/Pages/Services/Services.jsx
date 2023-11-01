import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



const Services = ({ service }) => {
  const { id, headline, image, subheading } = service;

  return (
    <div className="">
      <div className="relative  overflow-hidden 
          rounded-2xl shadow-xl image-full transition-transform duration-700 hover:scale-105 h-[360px]">

        <img src={image} alt="Shoes" className="h-[360px]" />

        <div className="absolute inset-0 flex bg-gradient-to-t  from-slate-900 to-lime-600 opacity-40 z-10 "
        ></div>

        <div className="absolute inset-0  flex flex-col items-start justify-end z-30 px-5 space-y-2 mb-6">
          <h2 className="text-white  font-bold text-2xl">{headline}</h2>

          <p className="text-white font-bold text-base ">{subheading}</p>

          <Link to={`/serviceDetail/${id}`}>
            <button className="rounded-xl text-left py-1 pl-4 bg-gradient-to-r from-sky-800 to-slate-800/10 w-full text-white font-bold ">Read More ....</button>
          </Link>


        </div>

      </div>
     
    </div>
  );
};
Services.propTypes = {
  service: PropTypes.object
}
export default Services;