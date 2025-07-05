import { GraduationCap, Medal, Users2 } from "lucide-react";
import React from "react";
import image from '../assets/img/A-propos-left-1.png';

function About() {
    const sections = [
        {
            icon: <GraduationCap className="text-yellow-600 size-8 sm:size-10 md:size-12 lg:size-14" />,
            title: "+3 Ans",
            description:
                "Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l’informatique. Nous sommes un groupe d’experts, de professionnels et des passionnés de l’informatique de Madagascar et du monde entier.",
        },
        {
            icon: <Users2 className="text-yellow-600 size-8 sm:size-10 md:size-12 lg:size-14" />,
            title: "+250 étudiants",
            description:
                "Plus de 250 étudiants et plus d’une dizaine d’entreprises ont déjà fait confiance à notre formation habilitée par l’État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la “grande famille HEI”.",
        },
        {
            icon: <Medal className="text-yellow-600 size-8 sm:size-10 md:size-12 lg:size-14" />,
            title: "Notre mission",
            description:
                "Notre mission est d’amener des jeunes malgaches sur des domaines porteurs comme l’intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.",
        },
    ];

    return (
        <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-24 py-6 sm:py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 bg-white text-blue-900">
            <div className="flex justify-center w-full md:w-1/2 lg:w-2/5">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] md:max-w-[480px]">
                    <img
                        src={image}
                        alt="À propos de nous"
                        className="w-full object-cover rounded-lg"
                        style={{ objectPosition: 'center' }}
                        onError={(e) => console.error("Image failed to load:", e)}
                    />
                </div>
            </div>
            <div className="flex-1">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 md:mb-8">
                    À propos de nous
                </h1>
                {sections.map((section, index) => (
                    <div key={index} className="mb-4 sm:mb-6 md:mb-8">
                        <p className="flex items-center text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
                            {section.icon}
                            <span className="ml-2 sm:ml-3">{section.title}</span>
                        </p>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
                            {section.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;