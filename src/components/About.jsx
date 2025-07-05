import { GraduationCap, Medal, Users2 } from "lucide-react";
import React from "react";
import image from '../assets/img/A-propos-left-1.png';

function About() {
    const sections = [
        {
            icon: <GraduationCap className="text-yellow-600 size-10 md:size-14" />,
            title: "+3 Ans",
            description:
                "Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.",
        },
        {
            icon: <Users2 className="text-yellow-600 size-10 md:size-14" />,
            title: "+250 étudiants",
            description:
                "Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.",
        },
        {
            icon: <Medal className="text-yellow-600 size-10 md:size-14" />,
            title: "Notre mission",
            description:
                "Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-36 py-8 px-4 sm:px-8 md:px-16 lg:px-36 bg-white text-blue-900">
            <div className="flex justify-center">
                <div className="relative w-full max-w-[300px] sm:max-w-[360px] h-48 sm:h-64 my-6 md:my-8">
                    <img
                        src={image}
                        alt="Image A"
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg z-10"
                    />
                </div>
            </div>
            <div className="flex-1">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6">
                    À propos de nous
                </h1>
                {sections.map((section, index) => (
                    <div key={index} className="mb-6 md:mb-8">
                        <p className="flex items-center text-lg sm:text-xl md:text-2xl mb-2">
                            {section.icon}
                            <span className="ml-3">{section.title}</span>
                        </p>
                        <p className="text-sm sm:text-base">{section.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;