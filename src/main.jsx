import { createRoot } from 'react-dom/client'
import './css/index.css'
import Navbar from './components/navbar.jsx'
import  About  from "./components/About.jsx";
import  Debouché  from "./components/Débouché.jsx";
import { StrictMode } from 'react'
import Domaine from './components/Domaine.jsx';
import Programme from './components/Programme.jsx';
import Block from './components/block.jsx';
import SectionText from './components/Language.jsx';
import Partenaire from './components/Partenaire.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="bg-white">
            <Navbar />
            <About />
            <Debouché/>
            <Domaine/>
            <Programme/>
            <Block/>
            <SectionText/>
            <Partenaire/>
        </div>
    </StrictMode>
)