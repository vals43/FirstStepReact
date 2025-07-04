import { createRoot } from 'react-dom/client'
import './css/index.css'
import Navbar from './components/navbar.jsx'
import  About  from "./components/About.jsx";
import  Debouché  from "./components/Débouché.jsx";
import { StrictMode } from 'react'
import Domaine from './components/Domaine.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
            <Navbar />
            <About />
            <Debouché/>
            <Domaine/>
    </StrictMode>
)