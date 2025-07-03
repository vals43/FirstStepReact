
import aws from "../assets/img/aws.png";
import C from "../assets/img/C.png";
import docker from "../assets/img/docker.png";
import Java from "../assets/img/Java.png";
import JS from "../assets/img/JS.png";
import next from "../assets/img/next.png";
import openapi from "../assets/img/openapi.png";
import python from "../assets/img/python.png";
import reactImg from "../assets/img/react.png";
import serverless from "../assets/img/serverless.png";
import TS from "../assets/img/TS.png";

const images = [aws, C, docker, Java, JS, next, openapi, python, reactImg, serverless, TS,];
const titre = "Les technos et langages utilisées"
const texte =  "Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde."

import Section from "./Section.jsx";

function SectionText() {
    return Section(titre,texte,images)
}
export default SectionText