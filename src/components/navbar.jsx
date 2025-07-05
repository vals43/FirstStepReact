import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoHei from '../assets/img/Logo HEI.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "ACCUEIL", isActive: true },
        { name: "ACTUALITE", isActive: false },
        { name: "BOURSE D'ETUDES", isActive: false },
        { name: "INSCRIPTION", isActive: false },
        { name: "INTRANET",  isButton: true },
    ];

    return (
        <nav className="h-20 md:h-24 z-50 bg-blue-950 w-full top-0">
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex-shrink-0">
                    <img src={logoHei} alt="HEI Logo" className="h-16 md:h-20 w-auto" />
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div
                    className={`${
                        isOpen ? "flex" : "hidden"
                    } md:flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-base md:text-lg absolute md:static top-20 left-0 w-full md:w-auto bg-blue-950 md:bg-transparent p-4 md:p-0`}
                >
                    {navLinks.map((link) =>
                        link.isButton ? (
                            <a
                                key={link.name}
                                className="btn btn-warning rounded-md text-white px-4 py-2 cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <a
                                key={link.name}
                                className={`${
                                    link.isActive ? "text-yellow-600" : "text-white hover:text-yellow-600 cursor-pointer"
                                } transition-colors`}
                                href={link.href}
                            >
                                {link.name}
                            </a>
                        )
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;