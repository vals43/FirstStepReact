
import bpLogoFull from '../assets/img/bp-logo-full-1536x497.webp';
import logoEmit from '../assets/img/logo_emit.png';
import logoEtech from '../assets/img/logo-etech.png';
import logoKanteCompany1 from '../assets/img/logo-kante-company-1.png';
import logoNexta from '../assets/img/LOGO-NEXTA.webp';
import logoNumerVf from '../assets/img/Logo-Numer-vf.png';
import pnLogoBaselineColorEng from '../assets/img/PN_Logo_baseline_color_ENG.png';
import yifLogo512x512BlOnWh1 from '../assets/img/YIF_LOGO_512x512_BL_on_WH-1.webp';
import Yooz from '../assets/img/Yooz-2023-Logo-2.webp';

const allImageSources = [
    bpLogoFull,
    logoEmit,
    logoEtech,
    logoKanteCompany1,
    logoNexta,
    logoNumerVf,
    pnLogoBaselineColorEng,
    yifLogo512x512BlOnWh1,
    Yooz,
  ];
  const titre = "Nos partenaires"
  const texte = "L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires"

import Section from "./Section.jsx";

function Partenaire() {
    return Section(titre, texte , allImageSources)
}
export default Partenaire