import image from "../assets/img/IMG-02-e1720543344824-987x1024-1.png";
function Debouché() {
    return (
        <div className="flex bg-white">
            <div className=" p-36 text-blue-950">
                <h1 className="text-5xl">Quelques débouchés</h1>
                <br />
                <p>Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…                
                </p>

                <br />
                <p>Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…</p>
            </div>
            <img
                        src={image}
                        alt="Image A"
                        className="  w-2/5 h-1/2 "
                      />

        </div>
    )
}
export default Debouché