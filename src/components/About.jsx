import { GraduationCap, Medal, Users2 } from "lucide-react";
import React from "react";
import image from '../assets/img/A-propos-left-1.png'

function About() {
  return (
    <div className="flex gap-36 p-36 bg-white text-blue-900">
      <div className="">
        <div className="relative w-96 h-64 mx-auto my-8">
          <img
            src={image}
            alt="Image A"
            className="absolute top-0 left-0 h-auto rounded-lg z-10"
          />
        </div>
      </div>
      <div>
        <h1 className="text-4xl">À propos de nous</h1>
        <p className="flex items-center text-2xl mt-6">
          <GraduationCap className="text-yellow-600 size-14" /> +3Ans
        </p>
        <p>
          Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de
          l’informatique. Nous sommes un groupe d’experts, de professionnels et
          des passionnés de l’informatique de Madagascar et du monde entier.
        </p>
        <p className="flex items-center text-2xl mt-6">
          {" "}
          <Users2 className="text-yellow-600 size-14" /> +250 étudiants
        </p>
        <p>
          Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà
          fait confiance à notre formation habilitée par l’État malgache. Avec
          eux tous, nous sommes fiers de pouvoir parler de la “grande famille
          HEI”.
        </p>
        <p className="flex items-center text-2xl mt-6">
          {" "}
          <Medal className="text-yellow-600 size-14" /> Notre missions
        </p>
        <p>
          Notre mission est d’amener des jeunes malgaches sur des domaines
          porteurs comme l’intelligence artificielle, la cybersécurité ou la
          programmation afin de favoriser leur employabilité et le
          développement de Madagascar.
        </p>
      </div>
    </div>
  );
}
export default About;