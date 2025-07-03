import Card from "./card.jsx";
import logoHei from '../assets/img/Logo HEI.png';
function Domaine() {
    return(
        <div className="bg-slate-100  shadow-md p-16 pl-32">

        <h1 className="text-blue-950 text-5xl mb-3">Domaines :</h1>
        <h3 className="text-blue-950 text-xl m-5">Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</h3>
        <div className="flex gap-8">
        <Card
            imageSrc={logoHei}
            imageAlt=""
            title="Cloud et cybersécurité"
            description="Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité."
            />
            <Card
            imageSrc={logoHei}
            imageAlt=""
            title="Intelligence artificielle"
            description="Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI."
            />
            <Card
            imageSrc={logoHei}
            imageAlt="Ingénierie logicielle"
            title="Ingénierie logicielle "
            description="Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques."
            />
        </div>
        </div>
    )
}
export default Domaine