import React from "react";

const textes = [
  "Apprentissage théoriques en présentiel",
  "Apprentissage sur supports numériques",
  "Travaux individuels de l’étudiant",
  "Apprentissage en entreprise",
];

const Block = () => {
  return (
    <div className="flex justify-center py-20 flex-wrap gap-4">
      {textes.map((texte, index) => (
        <div
          key={index}
          className="bg-[#fdf4e2] rounded-md p-6 w-64 text-center"
        >
          <div className="font-bold text-3xl text-[#d59a04] mb-2">
            25%
          </div>
          <div className="text-[#002147]  text-3xl font-semibold">
            {texte}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Block;
