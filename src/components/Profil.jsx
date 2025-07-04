import React from "react";
import ProfileCard from "./ProfilCard.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    <div className="bg-blue-950 mx-auto p-8 md:p-32">
      <h2 className="text-2xl font-bold mb-6 text-center text-white">
        L'équipe pédagogique
      </h2>
      <p className="text-center pb-10 md:pb-20 text-white">
        Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, elle a été soigneusement sélectionnée.
      </p>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {teamData.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="p-4">
            <ProfileCard
              image={member.image}
              nom={member.name}
              texte={member.role}
            />

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Profil;