import { createRoot } from 'react-dom/client'
import './css/index.css'
import Navbar from './components/navbar.jsx'
import  About  from "./components/About.jsx";
import  Debouché  from "./components/Débouché.jsx";
<<<<<<< HEAD
import { StrictMode } from 'react'
import Domaine from './components/Domaine.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
            <Navbar />
            <About />
            <Debouché/>
            <Domaine/>
=======

import { StrictMode } from 'react'
import Domaine from './components/Domaine.jsx';
import Programme from './components/Programme.jsx';
import Block from './components/block.jsx';
import SectionText from './components/Language.jsx';
import Partenaire from './components/Partenaire.jsx';
import Footer from './components/Footer.jsx';
import Prof from './components/Prof.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="bg-white">
            <Navbar />
            <Prof/>
            <About />
            <Debouché/>
            <Domaine/>
            <Programme/>
            <Block/>
            <SectionText/>
            <Partenaire/>
            <Footer/>
        </div>
>>>>>>> 01cf9d50d04877d74ab2d62930968bd6677ae146
    </StrictMode>
)