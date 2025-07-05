import Card from "./card.jsx";
import logoHei from '../assets/img/Logo HEI.png';

function Domaine() {
    const domains = [
        {
            imageSrc: logoHei,
            imageAlt: "Cloud et cybersécurité",
            title: "Cloud et cybersécurité",
            description:
                "Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité.",
        },
        {
            imageSrc: logoHei,
            imageAlt: "Intelligence artificielle",
            title: "Intelligence artificielle",
            description:
                "Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI.",
        },
        {
            imageSrc: logoHei,
            imageAlt: "Ingénierie logicielle",
            title: "Ingénierie logicielle",
            description:
                "Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques.",
        },
    ];

    return (
        <div className="bg-slate-100 shadow-md py-6 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32">
            <h1 className="text-blue-950 text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 font-bold">
                Domaines :
            </h1>
            <h3 className="text-blue-950 text-sm sm:text-base md:text-lg lg:text-xl mb-6 mx-2 sm:mx-4 md:mx-5">
                Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :
            </h3>
            <div className="flex flex-col items-center md:flex-row gap-4 sm:gap-6 md:gap-8">
                {domains.map((domain, index) => (
                    <Card
                        key={index}
                        imageSrc={domain.imageSrc}
                        imageAlt={domain.imageAlt}
                        title={domain.title}
                        description={domain.description}
                        className="flex-1 min-w-0"
                    />
                ))}
            </div>
        </div>
    );
}

export default Domaine;