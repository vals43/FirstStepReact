import React from 'react';

const ProfileCard = ({ image, nom, texte }) => {
  return (
    <div className="bg-white rounded-xl w-64 overflow-hidden text-blue-950 p-8">
      <div className="items-center">
        <div className="flex  justify-center">
          <img
            className="h-24 w-24r rounded-full object-cover"
            src={image}
            alt="Profile"
          />
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold text-blue-950 flex justify-center">{nom}</h2>
          <p className="text-blue-950">
            {texte}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;