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
        <div className="bg-slate-100 shadow-md py-8 px-4 sm:px-8 md:px-16 lg:px-32">
            <h1 className="text-blue-950 text-3xl sm:text-4xl md:text-5xl mb-3 font-bold">
                Domaines :
            </h1>
            <h3 className="text-blue-950 text-base sm:text-lg md:text-xl m-4 md:m-5">
                Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :
            </h3>
            <div className="flex items-center md:flex-row gap-4 md:gap-8">
                {domains.map((domain, index) => (
                    <Card
                        key={index}
                        imageSrc={domain.imageSrc}
                        imageAlt={domain.imageAlt}
                        title={domain.title}
                        description={domain.description}
                    />
                ))}
            </div>
        </div>
    );
}

export default Domaine;