import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logoHei from '../assets/img/Logo HEI.png'; // Fixed space in file name

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "ACCUEIL", href: "/", isActive: true },
        { name: "ACTUALITE", href: "/actualite", isActive: false },
        { name: "BOURSE D'ETUDES", href: "/bourse", isActive: false },
        { name: "INSCRIPTION", href: "/inscription", isActive: false },
        { name: "INTRANET", href: "/intranet", isButton: true },
    ];

    return (
        <nav className="h-20 md:h-24 bg-blue-950 w-full fixed top-0 z-50">
            <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex-shrink-0">
                    <img src={logoHei} alt="HEI Logo" className="h-16 md:h-20 w-auto" />
                </div>
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                        aria-label="Toggle menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                <div
                    className={`${
                        isOpen ? "flex" : "hidden"
                    } md:flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-base md:text-lg absolute md:static top-20 left-0 w-full md:w-auto bg-blue-950 md:bg-transparent p-4 md:p-0 z-50 transition-all duration-300 ease-in-out`}
                >
                    {navLinks.map((link) =>
                        link.isButton ? (
                            <a
                                key={link.name}
                                href={link.href}
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`${
                                    link.isActive ? "text-yellow-600" : "text-white hover:text-yellow-600"
                                } transition-colors`}
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