import React from 'react';

const ProfileCard = ({ image, nom, texte }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden text-blue-950 p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="h-24 w-24 rounded-full object-cover"
            src={image}
            alt="Profile"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold text-blue-950">{nom}</h2>
          <p className="text-blue-950">
            {texte}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;