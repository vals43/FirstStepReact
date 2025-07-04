import React from "react"
import logoHei from '../assets/img/Logo HEI.png';

function Navbar() {
    return (
        <div className="navbar h-24 z-50 bg-blue-950">
          <div className="flex-1 px-2 lg:flex-none">
            <img src={logoHei} alt="" className="h-20" />
          </div>
          <div className="gap-10 text-xl align-super flex justify-end mr-8 flex-1 px-2">
        
          <a className="text-yellow-600 text-xl" href="/about"> ACCUEIL</a>
          <a className="hover:text-yellow-600" href="/about">ACTUALITE</a>
          <a className="hover:text-yellow-600" href="/about">BOURSE D'ETUDES</a>
          <a className="hover:text-yellow-600" href="/about">INSCRIPTION</a>
            <div className="flex items-stretch">
              <a className="btn btn-warning rounded-btn text-white text-xl">INTRANET</a>
            </div>
          </div>
        </div>
    )
}
export default Navbar