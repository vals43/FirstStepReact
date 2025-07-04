import React from "react";
import ProfileCard from "./ProfilCard.jsx";

const teamData = [
  {
    name: "Mirado RAFENOMAHENINTSOA",
    role: "Data and Business Intelligence Specialist 5+",
    image: "https://www.hei.school/wp-content/uploads/2025/05/Mirado-150x150.webp",
  },
  {
    name: "Julien RAJERISON",
    role: "Lead Développeur | Fondateur de l’association Techzara Madagascar",
    image: "https://www.hei.school/wp-content/uploads/2025/05/Julien-150x150.webp",
  },
  {
    name: "Ryan ANDRIAMAHERY",
    role: "Développeur back end | Cofondateur et Directeur des opérations de HEI",
    image: "https://www.hei.school/wp-content/uploads/2025/03/ryan-min-150x150.webp",
  },
  {
    name: "Jean Aimé Maxa",
    role: "Responsable technique cybersécurité chez CES France Continental (Toulouse – France)",
    image: "https://www.hei.school/wp-content/uploads/2022/01/Jean-Aime-Maxa-modified-150x150.jpg",
  },
  {
    name: "Parison Ravalomanda",
    role: "Ingénieur en informatique | Ingénieur logiciel chez Google (Londres – UK)",
    image: "https://www.hei.school/wp-content/uploads/2022/01/Parison-e1716502987165-150x150.png",
  },
  {
    name: "Yannick Raharijaona",
    role: "Responsable technique ML chez Rocket Science (Ottawa – Canada)",
    image: "https://www.hei.school/wp-content/uploads/2022/01/5746AC1E761A42D1B7D89496C9A6BE9B_edited-e1716502720974-150x150.jpg",
  },
  {
    name: "Dre Tahina Ralitera",
    role: "Docteure-Ingénieure, CNRS France | Prix L’Oréal-UNESCO pour les Femmes en Science (2017)",
    image: "https://www.hei.school/wp-content/uploads/2022/01/Tahina-OK-e1716502943928-150x150.png",
  },
  {
    name: "Dr Lou Maurica",
    role: "Docteur-Ingénieur en informatique | Fondateur et Directeur pédagogique de HEI",
    image: "https://www.hei.school/wp-content/uploads/2022/01/97-portraits-97_edited-e1716502895676-150x150.jpg",
  },
];

function Profil() {
  return (
    <div className="bg-blue-950 mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        L'équipe pédagogique
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teamData.map((member, index) => (
          <ProfileCard
            key={index}
            image={member.image}
            nom={member.name}
            texte={member.role}
          />
        ))}
      </div>
    </div>
  );
}

export default Profil;
