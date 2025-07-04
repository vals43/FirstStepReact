import React from "react";
import logoHei from '../assets/img/Logo HEI.png';

import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const navigationLinks = ["Accueil", "Actualités", "Bourse d’études", "Inscription"];

const socialIcons = [
    { icon: FaFacebookF, link: "https://facebook.com" },
    { icon: FaLinkedinIn, link: "https://linkedin.com" },
    { icon: FaInstagram, link: "https://instagram.com" },
  ];
  

function Footer() {

  return (
    <footer className="bg-[#001f4d] text-white">
    <h1 className="text-yellow-500 text-2xl size-20 font-bold pt-4 ml-10">  
      <img src={logoHei} />
    </h1>
      <div className="max-w-7xl  px-20  mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <p className="text-sm">
            Formation habilitée par l’État suivant le système LMD
          </p>
          <p className="text-sm mt-4">
            Habilitation MESupRes<br />
            n°31309/2023
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Adresse</h2>
          <p className="text-sm">II J 161 R Ambodivoanjo</p>
          <p className="text-sm">Ivandry Antananarivo</p>
          <p className="text-sm">101, Madagascar</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Navigation</h2>
          <ul className="space-y-1">
            {navigationLinks.map((link, index) => (
              <li
                key={index}
                className={`text-sm ${
                  link === "Accueil" ? "text-yellow-500 font-semibold" : "text-gray-300 hover:text-yellow-600 cursor-pointer"
                }`}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-4">Médias sociaux</h2>
          <div className="flex gap-4">
          {socialIcons.map((item, index) => {
            const Icon = item.icon;
            return (
                <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-[#001f4d] rounded-full p-3 hover:bg-yellow-400"
                >
                <Icon size={20} />
                </a>
            );
            })}

          </div>
        </div>
      </div>

      <div className="text-center bg-white text-gray-700 py-3 text-sm">
        © HEI Madagascar 2025
      </div>
    </footer>
  );
};

export default Footer;
