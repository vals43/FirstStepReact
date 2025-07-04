import { createRoot } from 'react-dom/client'
import './css/index.css'
import Navbar from './components/navbar.jsx'
import  About  from "./components/About.jsx";
import  Debouché  from "./components/Débouché.jsx";
import  AdmissionSection  from "./components/AdmissionSection.jsx";

import { StrictMode } from 'react'
import Domaine from './components/Domaine.jsx';
import Programme from './components/Programme.jsx';
import Block from './components/block.jsx';
import SectionText from './components/Language.jsx';
import Partenaire from './components/Partenaire.jsx';
import Footer from './components/Footer.jsx';
import Prof from './components/Prof.jsx';
import Profil from './components/Profil.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="bg-white">
            <Navbar />
            <Prof/>
            <About />
            <Profil/>
            <Debouché/>
            <Domaine/>
            <Programme/>
            <Block/>
            <AdmissionSection/>
            <SectionText/>
            <Partenaire/>
            <Footer/>
        </div>
    </StrictMode>
)