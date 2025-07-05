import image from "../assets/img/IMG-02-e1720543344824-987x1024-1.png";

function Debouché() {

    return (
        <div className="flex flex-col lg:flex-row bg-white text-blue-950">
            <div className="py-8 px-4 sm:px-8 md:px-16 lg:px-36 lg:w-3/5">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
                    Quelques débouchés
                </h1>
                <p className="text-sm sm:text-base md:text-lg mb-4">

                    "Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…",
                    "Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…",

                </p>
            </div>
            <div className="lg:w-2/5 flex justify-center lg:justify-end">
                <img
                    src={image}
                    alt="Débouché Illustration"
                    className="w-full max-w-[400px] h-auto object-cover lg:max-w-full"
                />
            </div>
        </div>
    );
}

export default Debouché;