import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-gradient-to-r from-[#0f2027] via-[#2c5364] to-[#0b3d2e] fixed top-0 left-0 w-full z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-2xl md:text-3xl font-extrabold text-emerald-400 tracking-wide">
                    Veysel Emir.dev
                </h1>

                {/* Hamburger (mobilde) */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>

                {/* Masaüstü menü */}
                <nav className="hidden md:flex gap-8 text-lg font-medium text-white">
                    <Link to="/" className="hover:text-emerald-400 transition">Home</Link>
                    <Link to="/about_me" className="hover:text-emerald-400 transition">About Me</Link>
                    <Link to="/experience" className="hover:text-emerald-400 transition">Experience</Link>
                    <Link to="/contact" className="hover:text-emerald-400 transition">Contact</Link>
                </nav>
            </div>

            {/* Mobil sağdan açılan mini menü */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-[#0f2027] text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="p-6 flex flex-col gap-6 text-lg font-semibold">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="self-end text-gray-300 hover:text-emerald-400"
                    >
                        <X size={28} />
                    </button>

                    <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-emerald-400">Home</Link>
                    <Link to="/about_me" onClick={() => setIsOpen(false)} className="hover:text-emerald-400">About Me</Link>
                    <Link to="/experience" onClick={() => setIsOpen(false)} className="hover:text-emerald-400">Experience</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-emerald-400">Contact</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
