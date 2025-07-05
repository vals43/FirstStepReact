function Card({ imageSrc, imageAlt, title, description }) {
    return (
      <div className="max-w-80 rounded-lg overflow-hidden bg-white transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">

        <img
          className=" rounded-full ml-24 mb-5 mt-5 h-28 object-cover" 
          src={imageSrc}
          alt={imageAlt}
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-yellow-600">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </div>
    );
  }
  export default Card